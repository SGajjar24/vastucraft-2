import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, MapPin, Ruler, Sparkles, MessageSquare, CheckCircle, Loader2 } from 'lucide-react';
// import { sendVastuQuery } from '../services/geminiService'; // Removed AI dependency

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
    contact: string;
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
        requirements: '',
        contact: ''
    });
    const [isTyping, setIsTyping] = useState(false);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const resetChat = () => {
        setMessages([
            { id: Date.now().toString(), type: 'bot', content: "Namaste! I'm your VastuCraft Concierge. Let's start planning your dream project. What is your name?" }
        ]);
        setInputValue('');
        setStep(0);
        setProjectData({
            name: '',
            location: '',
            plotSize: '',
            requirements: '',
            contact: ''
        });
        setIsTyping(false);
    };

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
            case 3: // Requirements
                newData.requirements = inputValue;
                botResponse = `Thank you. Lastly, how can we reach you? Please share your Email or Phone Number so we can send you the detailed report.`;
                break;
            case 4: // Contact -> Final Submission
                newData.contact = inputValue;
                botResponse = "Perfect. I'm finalizing your project details...";
                break;
            default:
                break;
        }

        setProjectData(newData);
        setStep(nextStep);

        // Simulate typing delay
        setTimeout(async () => {
            if (step === 4) {
                // Final Step - Submit to Web3Forms directly (No AI)

                const finalResponse = `Thank you, ${newData.name}! I've securely recorded your project details. Ar. Vidhi Gajjar and our team will review your requirements for ${newData.location} and contact you at ${newData.contact} shortly to discuss the next steps.`;

                setMessages(prev => [...prev, { id: 'final', type: 'bot', content: finalResponse }]);

                // Submit to Web3Forms
                try {
                    const submissionData = {
                        access_key: '83a05dbd-9847-45c4-8be5-a9c911ca5eaf',
                        subject: `New Project Concierge Lead: ${newData.name}`,
                        from_name: "VastuCraft Concierge",
                        // structured data for easy parsing/export
                        Name: newData.name,
                        Location: newData.location,
                        Plot_Size: newData.plotSize,
                        Requirements: newData.requirements,
                        Contact_Info: newData.contact,
                        Status: "Pending Review",
                        // Fallback message for email clients
                        message: `
New Lead Details:
--------------------------------
Name: ${newData.name}
Location: ${newData.location}
Plot Size: ${newData.plotSize}
Requirements: ${newData.requirements}
Contact Info: ${newData.contact}

Status: Pending Manual Review
                        `
                    };

                    await fetch("https://api.web3forms.com/submit", {
                        method: "POST",
                        headers: { "Content-Type": "application/json", "Accept": "application/json" },
                        body: JSON.stringify(submissionData)
                    });
                } catch (submissionError) {
                    console.error("Failed to submit lead to Web3Forms", submissionError);
                    setMessages(prev => [...prev, { id: 'error', type: 'bot', content: "I've noted your details, but there was a slight issue sending them to our server. Please feel free to call us directly!" }]);
                }

            } else {
                setMessages(prev => [...prev, { id: Date.now().toString() + 'bot', type: 'bot', content: botResponse }]);
            }
            setIsTyping(false);

            // Only auto-focus on desktop to prevent scroll jumping on mobile
            if (window.innerWidth >= 768) {
                const inputElement = document.querySelector('input[type="text"]') as HTMLInputElement;
                inputElement?.focus();
            }
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
            <div
                ref={chatContainerRef}
                className="flex-grow overflow-y-auto p-6 space-y-6 custom-scrollbar bg-gradient-to-b from-primary/30 to-primary/10"
            >
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
            </div>

            {/* Input Area */}
            <div className="p-4 bg-primary/50 border-t border-white/5 backdrop-blur-md">
                {step > 4 ? (
                    <button
                        onClick={resetChat}
                        className="w-full bg-gold text-primary font-bold rounded-full px-6 py-4 hover:bg-gold-light transition-all flex items-center justify-center gap-2"
                    >
                        <Sparkles size={20} />
                        Start New Consultation
                    </button>
                ) : (
                    <div className="relative flex items-center gap-2">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder={step === 3 ? "Describe your requirements..." : step === 4 ? "Enter your email or phone..." : "Type your answer..."}
                            className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-stone-200 placeholder-stone-500 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
                            disabled={isTyping}
                        />
                        <button
                            onClick={handleSend}
                            disabled={!inputValue.trim() || isTyping}
                            className="absolute right-2 p-2.5 bg-gold text-primary rounded-full hover:bg-gold-light disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            {step > 4 ? <CheckCircle size={20} /> : <Send size={20} />}
                        </button>
                    </div>
                )}
                <p className="text-center text-[10px] text-stone-600 mt-2">
                    AI-generated insights are preliminary. Consult an expert for final decisions.
                </p>
            </div>
        </div>
    );
};

export default ProjectConcierge;
