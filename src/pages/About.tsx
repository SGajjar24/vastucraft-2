import React, { useRef, useEffect } from 'react';
import { FOUNDERS, IMAGES } from '../constants';
import { Linkedin, Mail } from 'lucide-react';
import Reveal from '../components/Reveal';

const About: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        if (scrolled < 1000) {
          heroRef.current.style.transform = `translate3d(0, ${scrolled * 0.4}px, 0)`;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full bg-primary min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
          <div
            ref={heroRef}
            className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform"
          >
            <img
              src={IMAGES.HERO_ARCH}
              alt="About Background"
              className="w-full h-full object-cover opacity-30 animate-hero-zoom"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/40 to-primary" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 pt-20">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-100 mb-6">The Minds Behind VastuCraft</h1>
            <p className="text-lg md:text-xl text-stone-300">
              We bridge the gap between ancient wisdom and futuristic technology.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Founders */}
      <div className="container-custom space-y-24 py-20">
        {FOUNDERS.map((founder, index) => (
          <Reveal key={founder.name}>
            <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              {/* Image */}
              <div className="lg:w-1/2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gold/20 translate-x-4 translate-y-4 rounded-2xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                  <img
                    src={founder.imageUrl}
                    alt={founder.name}
                    className="w-full h-[500px] object-cover rounded-2xl shadow-2xl border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (founder.name.includes('Vidhi')) target.src = IMAGES.FALLBACK_VIDHI;
                      if (founder.name.includes('Swetang')) target.src = IMAGES.FALLBACK_SWETANG;
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-serif font-bold text-stone-100 mb-2">{founder.name}</h2>
                <p className="text-gold font-medium tracking-wide mb-6">{founder.role}</p>
                <p className="text-stone-400 leading-relaxed mb-6 text-lg">
                  {founder.bio}
                </p>

                <div className="mb-8">
                  <h3 className="font-bold text-stone-200 mb-3">Core Strengths</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {founder.strengths.map((skill, i) => (
                      <li key={i} className="flex items-center gap-2 text-stone-400 text-sm">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  <button className="p-2 text-stone-400 hover:text-gold border border-white/10 rounded-full hover:bg-white/5 transition-colors">
                    <Linkedin size={20} />
                  </button>
                  <button className="p-2 text-stone-400 hover:text-gold border border-white/10 rounded-full hover:bg-white/5 transition-colors">
                    <Mail size={20} />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Philosophy */}
      <section className="mb-20 container-custom">
        <Reveal>
          <div className="bg-surface rounded-3xl p-10 md:p-16 text-stone-100 grid md:grid-cols-2 gap-12 relative overflow-hidden border border-white/5">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
              <img src={IMAGES.HERO_ARCH} className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-serif font-bold mb-4 text-gold">Design with Purpose</h3>
              <p className="text-stone-400 leading-relaxed">
                We believe a home isn't just a structure; it's an energy field. Our designs prioritize human comfort, natural light, proportion, and Vastu balance to ensure the space supports the well-being of its inhabitants.
              </p>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-serif font-bold mb-4 text-blue-400">Build with Intelligence</h3>
              <p className="text-stone-400 leading-relaxed">
                Construction shouldn't be a black box. We use data, sensors, and AI vision to bring transparency to the site. We detect errors before they become costs and ensure safety protocols are more than just a checklist.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default About;