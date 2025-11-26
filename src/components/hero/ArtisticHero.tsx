import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ArtisticHero: React.FC = () => {
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-screen flex items-center overflow-hidden bg-primary">
            {/* Full Screen Architectural Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000"
                    alt="Modern Luxury Architecture"
                    className="w-full h-full object-cover"
                />
                {/* Sophisticated Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
            </div>

            {/* Main Content */}
            <div className="container-custom relative z-10 h-full flex flex-col justify-center">
                <motion.div
                    style={{ y: yText, opacity }}
                    className="max-w-4xl"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <div className="w-16 h-[1px] bg-gold/70"></div>
                        <span className="text-gold/90 font-serif tracking-[0.3em] uppercase text-sm font-medium">VastuCraft AI Studio</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-serif text-4xl md:text-6xl lg:text-8xl font-medium leading-[1.1] text-white mb-8"
                    >
                        Design <span className="italic text-gold">Beyond</span> <br />
                        Boundaries
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-stone-200 text-lg md:text-xl max-w-xl leading-relaxed mb-12 font-light border-l border-white/20 pl-6"
                    >
                        Where ancient wisdom meets algorithmic precision. We craft spaces that resonate with your soul and stand the test of time.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap gap-6"
                    >
                        <button
                            onClick={() => navigate('/contact')}
                            className="btn-outline-gold group bg-black/20 backdrop-blur-sm border-gold/60 hover:bg-gold/10 px-8 py-4 text-lg"
                        >
                            <span>Begin Journey</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-10 flex items-center gap-4"
            >
                <span className="text-[10px] uppercase tracking-widest text-white/60">Scroll</span>
                <div className="w-24 h-[1px] bg-white/20">
                    <motion.div
                        className="w-full h-full bg-gold origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default ArtisticHero;
