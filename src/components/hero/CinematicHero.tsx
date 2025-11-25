import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Compass, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MagneticButton from '../ui/MagneticButton';

const CinematicHero: React.FC = () => {
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const yImage = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-primary pt-32 lg:pt-32">
            {/* Background Ambience */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            {/* Background Image - Added for Fading Effect */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000"
                    alt="Hero Background"
                    className="w-full h-full object-cover opacity-20 animate-hero-zoom"
                />
            </div>

            {/* CRITICAL: Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary z-0"></div>

            {/* Smoother Bottom Fade to Next Section */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-primary via-primary/80 to-transparent z-0" />

            <div className="container-custom relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                {/* Text Content - Spans 7 columns */}
                <motion.div
                    style={{ y: yText, opacity }}
                    className="lg:col-span-7 flex flex-col justify-center relative z-20 pt-10 lg:pt-0"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-flex items-center gap-3 mb-6"
                    >
                        <div className="w-12 h-[1px] bg-gold/50" />
                        <span className="text-gold font-serif tracking-[0.2em] uppercase text-sm">VastuCraft AI Studio</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] md:leading-[0.9] mb-8 text-stone-100"
                    >
                        Design <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold italic pr-4">
                            Beyond
                        </span>
                        <br />
                        Boundaries
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="text-lg text-stone-400 max-w-xl leading-relaxed mb-10 border-l-2 border-white/10 pl-6"
                    >
                        Where ancient wisdom meets algorithmic precision. We craft spaces that resonate with your soul and stand the test of time through AI-driven construction monitoring.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="flex flex-wrap gap-6"
                    >
                        <MagneticButton onClick={() => navigate('/contact')} className="btn-primary">
                            Start Project
                        </MagneticButton>
                        <MagneticButton onClick={() => navigate('/portfolio')} variant="ghost" className="group">
                            View Works <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </MagneticButton>
                    </motion.div>
                </motion.div>

                {/* Visual Content - Broken Grid Layout - Spans 5 columns */}
                <div className="lg:col-span-5 relative h-[500px] lg:h-[600px] hidden lg:block">
                    {/* Main Large Image */}
                    <motion.div
                        style={{ y: yImage }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="absolute top-0 right-0 w-[90%] h-[80%] overflow-hidden rounded-sm bg-surface-dark"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
                            alt="Modern Architecture"
                            className="w-full h-full object-cover filter brightness-75 hover:scale-105 transition-transform duration-[2s]"
                            loading="eager"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                    </motion.div>

                    {/* Floating Secondary Image (Overlapping) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="absolute bottom-20 left-0 w-[60%] h-[40%] overflow-hidden rounded-sm border-4 border-primary shadow-2xl z-20 bg-surface-dark"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600"
                            alt="Interior Detail"
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2s]"
                            loading="lazy"
                        />

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors cursor-pointer group">
                            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                                <Play size={20} className="text-white fill-white ml-1" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Decorative Elements */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute top-10 left-10 z-30"
                    >
                        <Compass size={48} className="text-gold/20" strokeWidth={1} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CinematicHero;
