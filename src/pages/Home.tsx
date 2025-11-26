import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight, Compass, Shield, Activity, Sparkles,
  BrainCircuit, LayoutTemplate, PenTool, MoveRight, Quote
} from 'lucide-react';
import Reveal from '../components/Reveal';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import ArtisticHero from '../components/hero/ArtisticHero';
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

      {/* 1. HERO SECTION - Artistic & Premium */}
      <ArtisticHero />

      {/* 2. ABOUT SECTION - Founders */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-surface via-primary to-surface relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-gold/5 to-transparent skew-x-12 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-30">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Images Grid - Enhanced */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <Reveal delay={200}>
                  <div className="relative group mt-12">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl bg-surface aspect-[3/4]">
                      <img src={IMAGES.SWETANG} alt="Swetang Gajjar" className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700" loading="eager" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-60"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                        <p className="text-white font-serif font-bold text-xl mb-1">Swetang Gajjar</p>
                        <p className="text-gold text-xs uppercase tracking-wider">AI Specialist</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={400}>
                  <div className="relative group -mt-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl bg-surface aspect-[3/4]">
                      <img src={IMAGES.VIDHI} alt="Ar. Vidhi Gajjar" className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700" loading="eager" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-60"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                        <p className="text-white font-serif font-bold text-xl mb-1">Ar. Vidhi Gajjar</p>
                        <p className="text-gold text-xs uppercase tracking-wider">Principal Architect</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-8 -left-8 w-24 h-24 border-4 border-gold/20 rounded-full"></div>
            </div>

            {/* Content */}
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-16 h-[2px] bg-gradient-to-r from-gold to-transparent"></div>
                  <span className="text-gold font-bold tracking-[0.3em] text-xs uppercase">The Visionaries</span>
                </div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-stone-100 mb-8 leading-[1.1]">
                  Bridging
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold">Two Worlds</span>
                </h2>
                <p className="text-stone-300 text-xl mb-10 leading-relaxed font-light">
                  We are a unique brother-sister duo combining two distinct disciplines.
                  <span className="text-gold font-semibold"> Ar. Vidhi Gajjar</span> specializes in the seamless implementation of Vastu principles in modern real estate, while
                  <span className="text-gold font-semibold"> Swetang Gajjar</span> integrates cutting-edge AI to ensure construction precision.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-gold/30 transition-all duration-500 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl group-hover:bg-gold/20 transition-all duration-500"></div>
                    <Compass className="text-gold mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300" size={40} />
                    <h3 className="text-2xl font-serif font-bold text-stone-100 mb-3 relative z-10">Vastu Shastra</h3>
                    <p className="text-stone-400 text-base leading-relaxed relative z-10">Ancient wisdom for harmonious living and positive energy flow.</p>
                  </div>
                  <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-blue-400/30 transition-all duration-500 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
                    <BrainCircuit className="text-blue-400 mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300" size={40} />
                    <h3 className="text-2xl font-serif font-bold text-stone-100 mb-3 relative z-10">AI Monitoring</h3>
                    <p className="text-stone-400 text-base leading-relaxed relative z-10">Computer vision for defect detection and safety compliance.</p>
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
      <section className="py-24 lg:py-32 bg-primary relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <Reveal className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-[2px] bg-gold"></div>
              <span className="text-gold font-bold tracking-[0.3em] text-xs uppercase">Our Expertise</span>
              <div className="w-16 h-[2px] bg-gold"></div>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-stone-100 mb-6">
              Holistic Design
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold">Services</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {SERVICES_LIST.slice(0, 3).map((service, idx) => (
              <Reveal key={idx} delay={idx * 150} className="h-full" fullHeight>
                <div
                  className="group relative h-full rounded-3xl overflow-hidden cursor-pointer transform hover:scale-[1.02] transition-all duration-500"
                  onClick={() => navigate('/services')}
                >
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/40 via-transparent to-blue-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Card Content */}
                  <div className="relative h-full m-[2px] rounded-3xl bg-gradient-to-br from-surface via-surface/95 to-primary p-10 lg:p-12 flex flex-col">
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-all duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all duration-500"></div>

                    {/* Icon */}
                    <div className="relative z-10 mb-8">
                      <div className="inline-flex p-5 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 group-hover:border-gold/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                        {service.icon === 'Building' && <LayoutTemplate size={40} className="text-stone-300 group-hover:text-gold transition-colors" />}
                        {service.icon === 'Sofa' && <Sparkles size={40} className="text-stone-300 group-hover:text-gold transition-colors" />}
                        {service.icon === 'Cpu' && <BrainCircuit size={40} className="text-stone-300 group-hover:text-gold transition-colors" />}
                        {service.icon === 'Frame' && <PenTool size={40} className="text-stone-300 group-hover:text-gold transition-colors" />}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="relative z-10 text-3xl font-serif font-bold text-stone-100 mb-4 group-hover:text-gold transition-colors">{service.title}</h3>
                    <p className="relative z-10 text-stone-400 text-base leading-relaxed mb-8 flex-grow">{service.desc}</p>

                    {/* CTA */}
                    <div className="relative z-10 flex items-center text-sm font-bold uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <span>Explore Service</span>
                      <MoveRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4.5. TESTIMONIALS CAROUSEL */}
      <section className="py-20 lg:py-24 bg-surface/30">
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
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-primary via-surface to-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-20"></div>
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