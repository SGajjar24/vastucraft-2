import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, MapPin, Ruler, Sparkles, MessageSquare, CheckCircle, Loader2 } from 'lucide-react';
import { sendVastuQuery } from '../services/geminiService';

interface Message {
    id: string;
    type: 'bot' | 'user';
    content: string;
    isTyping?: boolean;
}

interface ProjectData {
    name: string;
    location: string;
    plotSize: string;
    requirements: string;
}

const ProjectConcierge: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', type: 'bot', content: "Namaste! I'm your VastuCraft Concierge. Let's start planning your dream project. What is your name?" }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [step, setStep] = useState<number>(0);
    const [projectData, setProjectData] = useState<ProjectData>({
        name: '',
        location: '',
        plotSize: '',
        requirements: ''
    });
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = { id: Date.now().toString(), type: 'user', content: inputValue };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Process input based on current step
        let nextStep = step + 1;
        let botResponse = '';
        let newData = { ...projectData };

        switch (step) {
            case 0: // Name
                newData.name = inputValue;
                botResponse = `Pleasure to meet you, ${inputValue}. Where is your project located? (City/Area)`;
                break;
            case 1: // Location
                newData.location = inputValue;
                botResponse = `Great location! Now, what is the approximate plot size or built-up area? (e.g., 1200 sq ft)`;
                break;
            case 2: // Plot Size
                newData.plotSize = inputValue;
                botResponse = `Got it. Finally, tell me a bit about your vision or requirements. Are you looking for a modern home, office, or specific Vastu compliance?`;
                break;
            case 3: // Requirements -> AI Analysis
                newData.requirements = inputValue;
                botResponse = "Thank you. I'm analyzing your requirements with our Vastu AI engine to generate some preliminary insights...";
                break;
            default:
                break;
        }

        setProjectData(newData);
        setStep(nextStep);

        // Simulate typing delay
        setTimeout(async () => {
            if (step === 3) {
                // AI Analysis Step
                setMessages(prev => [...prev, { id: 'analysis-start', type: 'bot', content: botResponse }]);

                try {
                    const prompt = `
            Analyze this architectural project inquiry based on Vastu Shastra principles:
            Client: ${newData.name}
            Location: ${newData.location}
            Size: ${newData.plotSize}
            Requirements: ${newData.requirements}
            
            Provide 3 brief, high-impact Vastu tips or architectural suggestions specific to this context. 
            Keep it professional, encouraging, and mention that a detailed audit requires a site visit.
            Format as a bulleted list.
          `;

                    const aiResult = await sendVastuQuery(prompt);

                    const finalResponse = `Here are some initial thoughts for your project:\n\n${aiResult.text}\n\nI've forwarded your details to Ar. Vidhi Gajjar. We'll be in touch shortly to schedule a detailed consultation!`;

                    setMessages(prev => [...prev, { id: 'final', type: 'bot', content: finalResponse }]);

                    // Here you would typically send the data to your backend/email service
                    // await submitToBackend(newData);

                } catch (error) {
                    setMessages(prev => [...prev, { id: 'error', type: 'bot', content: "I've noted your details, but my AI connection is a bit weak right now. Don't worry, our team will contact you directly!" }]);
                }
            } else {
                setMessages(prev => [...prev, { id: Date.now().toString() + 'bot', type: 'bot', content: botResponse }]);
            }
            setIsTyping(false);
        }, 1500);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="bg-surface border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[600px] w-full max-w-2xl mx-auto">
            {/* Header */}
            <div className="bg-primary/50 p-4 border-b border-white/5 flex items-center gap-3 backdrop-blur-md">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
                    <Sparkles size={20} className="text-gold animate-pulse" />
                </div>
                <div>
                    <h3 className="font-serif font-bold text-stone-100">Project Concierge</h3>
                    <p className="text-xs text-green-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                        AI Online
                    </p>
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6 custom-scrollbar bg-gradient-to-b from-primary/30 to-primary/10">
                <AnimatePresence>
                    {messages.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed shadow-md ${msg.type === 'user'
                                        ? 'bg-gold text-primary font-medium rounded-tr-none'
                                        : 'bg-white/5 text-stone-200 border border-white/10 rounded-tl-none'
                                    }`}
                            >
                                {msg.content.split('\n').map((line, i) => (
                                    <p key={i} className={i > 0 ? 'mt-2' : ''}>{line}</p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {isTyping && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-start"
                    >
                        <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/10 flex gap-1">
                            <span className="w-2 h-2 bg-stone-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                            <span className="w-2 h-2 bg-stone-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                            <span className="w-2 h-2 bg-stone-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                        </div>
                    </motion.div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-primary/50 border-t border-white/5 backdrop-blur-md">
                <div className="relative flex items-center gap-2">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyPress}
                        placeholder={step === 3 ? "Describe your requirements..." : "Type your answer..."}
                        className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-stone-200 placeholder-stone-500 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
                        disabled={isTyping || step > 3}
                    />
                    <button
                        onClick={handleSend}
                        disabled={!inputValue.trim() || isTyping || step > 3}
                        className="absolute right-2 p-2.5 bg-gold text-primary rounded-full hover:bg-gold-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        {step > 3 ? <CheckCircle size={20} /> : <Send size={20} />}
                    </button>
                </div>
                <p className="text-center text-[10px] text-stone-600 mt-2">
                    AI-generated insights are preliminary. Consult an expert for final decisions.
                </p>
            </div>
        </div>
    );
};

export default ProjectConcierge;
