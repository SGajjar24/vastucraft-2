import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Globe, Linkedin, Instagram, Download, Share2, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS, FOUNDERS } from '../constants';
import Logo from '../components/Logo';

const DigitalCard: React.FC = () => {

    // vCard & Share Logic
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:VastuCraft AI Studio
ORG:VastuCraft AI Studio
TEL;TYPE=WORK,VOICE:${CONTACT_INFO.PHONE}
EMAIL:${CONTACT_INFO.EMAIL}
URL:https://vastucraftai.com
ADR;TYPE=WORK:;;${CONTACT_INFO.ADDRESS_LINE_1};${CONTACT_INFO.ADDRESS_LINE_2};;;
END:VCARD`;

    const handleDownloadVCard = () => {
        const blob = new Blob([vCardData], { type: 'text/vcard' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'VastuCraft_Studio.vcf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'VastuCraft AI Studio',
                    text: 'Connect with VastuCraft AI Studio - Where ancient wisdom meets modern technology.',
                    url: window.location.href,
                });
            } catch (error) {
                console.log('Error sharing:', error);
            }
        } else {
            alert('Link copied to clipboard!');
            navigator.clipboard.writeText(window.location.href);
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] text-stone-200 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Simplified Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-gold/5 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-blue-900/10 rounded-full blur-[100px]"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 w-full max-w-md"
            >
                {/* Card Container */}
                <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden">

                    {/* Header */}
                    <div className="relative h-48 bg-gradient-to-b from-stone-900 to-black flex flex-col items-center justify-center border-b border-white/5">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative z-10 flex flex-col items-center"
                        >
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-stone-800 to-black border border-gold/30 flex items-center justify-center shadow-xl mb-3">
                                <Logo className="w-10 h-10 text-gold" />
                            </div>
                            <h1 className="font-serif text-2xl font-bold text-white tracking-wide">VASTUCRAFT</h1>
                            <p className="text-gold/80 text-[10px] font-medium tracking-[0.3em] uppercase mt-1">AI Studio</p>
                        </motion.div>
                    </div>

                    {/* Body */}
                    <div className="p-6 space-y-8">

                        {/* Founders */}
                        <div className="flex justify-center gap-8">
                            {FOUNDERS.map((founder, idx) => (
                                <div key={idx} className="text-center">
                                    <div className="w-14 h-14 mx-auto mb-2 rounded-full border border-white/10 p-0.5">
                                        <img src={founder.imageUrl} alt={founder.name} className="w-full h-full rounded-full object-cover object-top" />
                                    </div>
                                    <h3 className="text-xs font-bold text-stone-200">{founder.name.split(' ')[0]}</h3>
                                    <p className="text-[9px] text-stone-500 uppercase tracking-wider">{founder.role.split(' ')[0]}</p>
                                </div>
                            ))}
                        </div>

                        {/* Quick Actions */}
                        <div className="grid grid-cols-4 gap-3">
                            {[
                                { icon: Phone, label: 'Call', action: () => window.open(`tel:${CONTACT_INFO.PHONE}`) },
                                { icon: MessageCircle, label: 'Chat', action: () => window.open(CONTACT_INFO.WHATSAPP_LINK, '_blank') },
                                { icon: Mail, label: 'Email', action: () => window.open(`mailto:${CONTACT_INFO.EMAIL}`) },
                                { icon: MapPin, label: 'Visit', action: () => window.open('https://maps.google.com/?q=Science+City+Road,+Ahmedabad', '_blank') },
                            ].map((item, i) => (
                                <button
                                    key={i}
                                    onClick={item.action}
                                    className="flex flex-col items-center gap-2 group"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-gold/10 group-hover:border-gold/30 transition-all">
                                        <item.icon size={20} className="text-stone-400 group-hover:text-gold transition-colors" />
                                    </div>
                                    <span className="text-[10px] text-stone-500 group-hover:text-stone-300 transition-colors">{item.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="space-y-3">
                            {[
                                { icon: Instagram, label: 'Instagram', url: SOCIAL_LINKS.INSTAGRAM },
                                { icon: Linkedin, label: 'LinkedIn', url: SOCIAL_LINKS.LINKEDIN },
                                { icon: Globe, label: 'Website', url: 'https://vastucraftai.com' },
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all group"
                                >
                                    <div className="flex items-center gap-3">
                                        <social.icon size={18} className="text-stone-400 group-hover:text-white transition-colors" />
                                        <span className="text-sm text-stone-300 group-hover:text-white transition-colors">{social.label}</span>
                                    </div>
                                    <ExternalLink size={14} className="text-stone-600 group-hover:text-stone-400" />
                                </a>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="grid grid-cols-2 gap-3 pt-2">
                            <button
                                onClick={handleDownloadVCard}
                                className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gold text-primary font-bold text-sm hover:bg-gold-light transition-colors"
                            >
                                <Download size={16} />
                                Save Contact
                            </button>
                            <button
                                onClick={handleShare}
                                className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white/10 text-white font-bold text-sm hover:bg-white/20 transition-colors"
                            >
                                <Share2 size={16} />
                                Share
                            </button>
                        </div>

                    </div>

                    {/* Footer */}
                    <div className="p-4 bg-black/20 border-t border-white/5 text-center">
                        <a href="/" className="inline-flex items-center gap-1.5 text-[10px] text-stone-500 hover:text-gold transition-colors">
                            <Sparkles size={10} />
                            <span>VastuCraft Digital ID</span>
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default DigitalCard;
