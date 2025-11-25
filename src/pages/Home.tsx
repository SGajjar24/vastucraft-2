import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight, Compass, Shield, Activity, Sparkles,
  BrainCircuit, LayoutTemplate, PenTool, MoveRight, Quote
} from 'lucide-react';
import Reveal from '../components/Reveal';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import { SERVICES_LIST, PROJECTS, TESTIMONIALS, IMAGES } from '../constants';

const Home: React.FC = () => {
  const navigate = useNavigate();
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
    <div className="flex flex-col w-full overflow-x-hidden bg-primary">

      {/* 1. HERO SECTION - 3D & Cinematic */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center animate-hero-zoom opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/80 to-primary"></div>

          {/* Floating 3D Elements (CSS) */}
          <div className="absolute top-1/4 left-10 w-32 h-32 border border-gold/20 rounded-full animate-float blur-sm"></div>
          <div className="absolute bottom-1/3 right-10 w-48 h-48 border border-gold/10 rounded-full animate-float animation-delay-2000 blur-md"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-custom text-center flex flex-col items-center">
          <Reveal variant="fade-up" delay={100}>
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-md mb-8">
              <Compass size={16} className="text-gold animate-spin-slow" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold">VastuCraft AI Studio</span>
            </div>
          </Reveal>

          <Reveal variant="zoom" delay={300}>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight leading-none">
              <span className="block text-stone-100">Design for</span>
              <span className="text-gradient-gold">The Soul</span>
            </h1>
          </Reveal>

          <Reveal variant="fade-up" delay={500}>
            <p className="text-lg md:text-xl text-stone-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Where ancient <span className="text-gold">Vastu Shastra</span> meets <span className="text-blue-400">AI Precision</span>.
              Crafting intelligent, harmonious spaces for the modern era.
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={700}>
            <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
              <button
                onClick={() => navigate('/contact')}
                className="btn-primary"
              >
                Start Your Project
              </button>
              <button
                onClick={() => navigate('/portfolio')}
                className="btn-outline group"
              >
                View Portfolio <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </Reveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-10"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-gold to-transparent"></div>
        </div>
      </section>

      {/* 2. ABOUT SECTION - Founders */}
      <section className="py-32 bg-surface relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/50 skew-x-12 translate-x-1/4"></div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <Reveal delay={200} className="translate-y-12">
                <div className="rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                  <img src={IMAGES.SWETANG} alt="Swetang Gajjar" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </Reveal>
              <Reveal delay={400}>
                <div className="rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                  <img src={IMAGES.VIDHI} alt="Ar. Vidhi Gajjar" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </Reveal>
            </div>

            {/* Content */}
            <div>
              <Reveal>
                <span className="text-gold font-bold tracking-widest text-xs uppercase mb-4 block">The Visionaries</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-100 mb-8 leading-tight">
                  Bridging Two Worlds
                </h2>
                <p className="text-stone-400 text-lg mb-8 leading-relaxed">
                  We are a unique husband-wife duo combining two distinct disciplines.
                  <span className="text-gold"> Ar. Vidhi Gajjar</span> brings the intuitive art of Vastu-compliant architecture, while
                  <span className="text-gold"> Swetang Gajjar</span> integrates cutting-edge AI to ensure construction precision.
                </p>

                <div className="grid sm:grid-cols-2 gap-8 mb-10">
                  <div className="glass-panel p-6">
                    <Compass className="text-gold mb-4" size={32} />
                    <h3 className="text-xl font-serif font-bold text-stone-100 mb-2">Vastu Shastra</h3>
                    <p className="text-stone-500 text-sm">Ancient wisdom for harmonious living and positive energy flow.</p>
                  </div>
                  <div className="glass-panel p-6">
                    <BrainCircuit className="text-blue-400 mb-4" size={32} />
                    <h3 className="text-xl font-serif font-bold text-stone-100 mb-2">AI Monitoring</h3>
                    <p className="text-stone-500 text-sm">Computer vision for defect detection and safety compliance.</p>
                  </div>
                </div>

                <button onClick={() => navigate('/about')} className="text-gold font-semibold hover:text-white transition-colors flex items-center gap-2 group">
                  Read Our Story <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES - Luxury Cards */}
      <section className="py-32 bg-primary">
        <div className="container-custom">
          <Reveal className="text-center mb-20">
            <span className="text-gold font-bold tracking-widest text-xs uppercase mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-100">
              Holistic Design Services
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES_LIST.slice(0, 3).map((service, idx) => (
              <Reveal key={idx} delay={idx * 150} className="h-full">
                <div
                  className="group relative h-full p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-gold/50 transition-all duration-500 cursor-pointer"
                  onClick={() => navigate('/services')}
                >
                  <div className="bg-surface h-full rounded-xl p-8 relative overflow-hidden group-hover:bg-surface/80 transition-colors">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-all duration-500"></div>

                    <div className="mb-8 p-4 bg-primary rounded-2xl w-fit border border-white/5 group-hover:border-gold/30 transition-colors">
                      {service.icon === 'Building' && <LayoutTemplate size={32} className="text-stone-300 group-hover:text-gold transition-colors" />}
                      {service.icon === 'Sofa' && <Sparkles size={32} className="text-stone-300 group-hover:text-gold transition-colors" />}
                      {service.icon === 'Cpu' && <BrainCircuit size={32} className="text-stone-300 group-hover:text-gold transition-colors" />}
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-stone-100 mb-4">{service.title}</h3>
                    <p className="text-stone-400 text-sm leading-relaxed mb-8">{service.desc}</p>

                    <div className="flex items-center text-xs font-bold uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Explore Service <MoveRight className="ml-2 w-3 h-3" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4.5. TESTIMONIALS CAROUSEL */}
      <section className="py-24 bg-surface/30">
        <div className="container-custom">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-stone-100 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-center text-stone-400 mb-16 max-w-2xl mx-auto">
              Trusted by homeowners, architects, and developers across Gujarat
            </p>
          </Reveal>

          <Reveal delay={200}>
            <TestimonialsCarousel testimonials={TESTIMONIALS} />
          </Reveal>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="relative py-32 bg-gradient-to-br from-primary via-surface to-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-10"></div>
        <div className="container-custom relative z-10 text-center">
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-stone-100 mb-8">
              Ready to Build <span className="text-gold">Extraordinary?</span>
            </h2>
            <p className="text-xl text-stone-400 mb-12 max-w-2xl mx-auto">
              Let's create a space that resonates with your soul and stands the test of time.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="btn-primary text-lg px-10 py-4 shadow-[0_0_40px_rgba(212,175,55,0.4)]"
            >
              Schedule Consultation
            </button>
          </Reveal>
        </div>
      </section>

    </div>
  );
};

export default Home;