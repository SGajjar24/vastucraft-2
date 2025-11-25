import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Phone, Mail, MapPin, Globe, Linkedin, Instagram, Download, Share2, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS, FOUNDERS } from '../constants';
import Logo from '../components/Logo';

const DigitalCard: React.FC = () => {
    const cardRef = useRef<HTMLDivElement>(null);

    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);
    const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
    const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXFromCenter = e.clientX - rect.left - width / 2;
        const mouseYFromCenter = e.clientY - rect.top - height / 2;
        x.set(mouseXFromCenter / width);
        y.set(mouseYFromCenter / height);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

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
        <div className="min-h-screen bg-[#050505] text-stone-200 flex items-center justify-center p-4 relative overflow-hidden perspective-1000">
            {/* Cinematic Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-gold/5 rounded-full blur-[150px] animate-pulse-slow"></div>
                <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-blue-900/10 rounded-full blur-[120px]"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-full max-w-[420px]"
                style={{ perspective: 1000 }}
            >
                {/* 3D Card Container */}
                <motion.div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d",
                    }}
                    className="relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl shadow-black/80 overflow-hidden group"
                >
                    {/* Holographic Glare Effect */}
                    <motion.div
                        style={{
                            background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.15) 0%, transparent 80%)`,
                        }}
                        className="absolute inset-0 z-50 pointer-events-none mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    {/* Noise Texture */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none z-0"></div>

                    {/* Card Header (Gold Gradient) */}
                    <div className="relative h-56 bg-gradient-to-br from-stone-900 via-black to-stone-950 flex flex-col items-center justify-center overflow-hidden border-b border-white/5">
                        {/* Animated Rings */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-20">
                            <div className="w-[300px] h-[300px] border border-gold/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                            <div className="absolute w-[250px] h-[250px] border border-gold/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                        </div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative z-10 flex flex-col items-center transform translate-z-20"
                        >
                            <div className="relative mb-4">
                                <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full"></div>
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-stone-800 to-black border border-gold/40 flex items-center justify-center shadow-2xl relative z-10">
                                    <Logo className="w-14 h-14 text-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
                                </div>
                                <div className="absolute -bottom-2 -right-2 bg-gold text-black text-[10px] font-bold px-2 py-0.5 rounded-full border border-white/20 shadow-lg">
                                    PRO
                                </div>
                            </div>

                            <h1 className="font-serif text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gold to-white tracking-wide mb-1">
                                VASTUCRAFT
                            </h1>
                            <p className="text-stone-400 text-xs font-medium tracking-[0.4em] uppercase">AI Studio</p>
                        </motion.div>
                    </div>

                    {/* Card Body */}
                    <div className="p-8 relative z-10 bg-gradient-to-b from-transparent to-black/40">

                        {/* Founders Section */}
                        <div className="flex items-center justify-center gap-6 mb-10">
                            {FOUNDERS.map((founder, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + (idx * 0.1) }}
                                    className="text-center group/founder"
                                >
                                    <div className="relative w-16 h-16 mx-auto mb-3">
                                        <div className="absolute inset-0 rounded-full border-2 border-gold/30 border-t-gold group-hover/founder:rotate-180 transition-transform duration-700"></div>
                                        <img src={founder.imageUrl} alt={founder.name} className="w-full h-full rounded-full object-cover p-1" />
                                    </div>
                                    <h3 className="text-sm font-bold text-white group-hover/founder:text-gold transition-colors">{founder.name.split(' ')[0]}</h3>
                                    <p className="text-[9px] text-stone-500 uppercase tracking-widest font-semibold">{founder.role.split(' ')[0]}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Quick Actions Grid */}
                        <div className="grid grid-cols-4 gap-3 mb-8">
                            {[
                                { icon: Phone, label: 'Call', action: () => window.open(`tel:${CONTACT_INFO.PHONE}`) },
                                { icon: MessageCircle, label: 'Chat', action: () => window.open(CONTACT_INFO.WHATSAPP_LINK, '_blank') },
                                { icon: Mail, label: 'Email', action: () => window.open(`mailto:${CONTACT_INFO.EMAIL}`) },
                                { icon: MapPin, label: 'Visit', action: () => window.open('https://maps.google.com/?q=Science+City+Road,+Ahmedabad', '_blank') },
                            ].map((item, i) => (
                                <motion.button
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + (i * 0.1) }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={item.action}
                                    className="flex flex-col items-center justify-center gap-2.5 p-3.5 rounded-2xl bg-white/5 border border-white/5 hover:border-gold/30 hover:bg-gold/10 transition-all duration-300 group/btn relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-tr from-gold/0 via-gold/0 to-gold/10 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                                    <item.icon size={20} className="text-stone-400 group-hover/btn:text-gold transition-colors relative z-10" />
                                    <span className="text-[10px] font-medium text-stone-500 group-hover/btn:text-stone-200 transition-colors relative z-10">{item.label}</span>
                                </motion.button>
                            ))}
                        </div>

                        {/* Social Links (Pill Style) */}
                        <div className="flex flex-col gap-3 mb-8">
                            {[
                                { icon: Instagram, label: 'Instagram', url: SOCIAL_LINKS.INSTAGRAM, color: 'from-purple-500 to-pink-500' },
                                { icon: Linkedin, label: 'LinkedIn', url: SOCIAL_LINKS.LINKEDIN, color: 'from-blue-600 to-blue-400' },
                                { icon: Globe, label: 'Website', url: 'https://vastucraftai.com', color: 'from-gold to-amber-300' },
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.8 + (i * 0.1) }}
                                    className="flex items-center justify-between p-1 pr-4 rounded-full bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all group/social"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`p-2.5 rounded-full bg-gradient-to-tr ${social.color} text-white shadow-lg`}>
                                            <social.icon size={16} />
                                        </div>
                                        <span className="text-sm font-medium text-stone-300 group-hover/social:text-white transition-colors">{social.label}</span>
                                    </div>
                                    <ExternalLink size={14} className="text-stone-600 group-hover/social:text-white transition-colors" />
                                </motion.a>
                            ))}
                        </div>

                        {/* Main CTA Buttons */}
                        <div className="grid grid-cols-2 gap-4">
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.1 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleDownloadVCard}
                                className="relative overflow-hidden flex items-center justify-center gap-2 py-4 rounded-xl bg-gold text-primary font-bold text-sm shadow-lg shadow-gold/20 group/cta"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/cta:translate-y-0 transition-transform duration-300"></div>
                                <Download size={18} />
                                <span>Save Contact</span>
                            </motion.button>

                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleShare}
                                className="flex items-center justify-center gap-2 py-4 rounded-xl bg-white/5 text-white font-bold text-sm border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <Share2 size={18} />
                                <span>Share</span>
                            </motion.button>
                        </div>

                    </div>

                    {/* Bottom Shine */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-50"></div>
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="text-center mt-8 space-y-4"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm">
                        <Sparkles size={12} className="text-gold" />
                        <p className="text-[10px] uppercase tracking-widest text-stone-400">VastuCraft Digital ID</p>
                    </div>

                    <div>
                        <a href="/" className="text-xs text-stone-500 hover:text-gold transition-colors border-b border-transparent hover:border-gold/50 pb-0.5">
                            Back to Website
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default DigitalCard;
