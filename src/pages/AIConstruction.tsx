import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Cpu, Activity, ShieldCheck, BarChart3, Users } from 'lucide-react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { IMAGES } from '../constants';

const AIConstruction: React.FC = () => {
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

  const handleContactClick = () => {
    navigate('/contact', { state: { service: 'AI Construction Monitoring' } });
  };

  return (
    <div className="w-full bg-primary min-h-screen">
      {/* AI Hero */}
      <section className="relative h-[75vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
          {/* Parallax Background */}
          <div
            ref={heroRef}
            className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform"
          >
            <img
              src={IMAGES.HERO_AI}
              alt="AI Background"
              className="w-full h-full object-cover opacity-20 animate-hero-zoom"
            />
          </div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary z-0"></div>

          {/* Smoother Bottom Fade to Next Section */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-primary via-primary/80 to-transparent z-0" />
        </div>

        <div className="container-custom relative z-10 flex flex-col items-center text-center pt-20">
          <Reveal variant="fade-up">
            <div className="inline-block px-4 py-1.5 border border-blue-500/30 bg-blue-500/10 backdrop-blur-md rounded-full text-blue-400 text-sm font-bold tracking-wider uppercase mb-6">
              Powered by Advanced AI & Computer Vision
            </div>
          </Reveal>

          <Reveal variant="zoom" delay={200}>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-100 mb-8 tracking-tight leading-tight">
              From Smart Factories to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-gold">
                Smart Buildings
              </span>
            </h1>
          </Reveal>

          <Reveal variant="fade-up" delay={400}>
            <p className="text-xl text-stone-300 max-w-2xl mb-10 leading-relaxed font-light">
              We adapt industrial-grade AI and IoT technology to monitor your construction quality, safety, and timeline in real-time.
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={600}>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white border-none shadow-[0_0_30px_rgba(37,99,235,0.3)] px-8 rounded-full" onClick={handleContactClick}>
              Request an AI Demo
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-surface relative z-10 border-t border-white/5">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal variant="slide-right">
              <div>
                <h2 className="text-3xl font-serif font-bold text-stone-100 mb-6">Computer Vision on Site</h2>
                <p className="text-stone-400 mb-8 text-lg leading-relaxed">
                  Traditional site visits miss details. Our AI models analyze video feeds from site cameras to detect defects, verify material usage, and ensure workers are wearing safety gear (PPE).
                </p>

                <div className="space-y-6">
                  {[
                    { icon: <ShieldCheck className="text-green-400" />, title: "Safety Compliance", desc: "Auto-detect missing helmets or vests." },
                    { icon: <Activity className="text-red-400" />, title: "Defect Detection", desc: "Identify masonry cracks or uneven plastering instantly." },
                    { icon: <Camera className="text-blue-400" />, title: "Progress Tracking", desc: "Compare daily footage against BIM models." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1 bg-white/5 p-3 rounded-full h-fit border border-white/10">{item.icon}</div>
                      <div>
                        <h4 className="font-bold text-stone-100">{item.title}</h4>
                        <p className="text-stone-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Visual Representation */}
            <Reveal variant="slide-left" delay={200}>
              <div className="relative bg-primary rounded-2xl p-8 border border-white/10 shadow-2xl">
                <div className="absolute top-4 right-4 animate-pulse">
                  <div className="h-3 w-3 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                </div>
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" alt="Tech Analysis" className="rounded-lg shadow-lg mb-4 grayscale hover:grayscale-0 transition-all duration-500 border border-white/5" />
                <div className="bg-black/50 text-green-400 font-mono text-xs p-4 rounded-lg overflow-hidden border border-white/10 backdrop-blur-sm">
                  <p>{`> Analyzing stream: CAMERA_04`}</p>
                  <p>{`> PPE Check: PASS`}</p>
                  <p>{`> Material Est: CEMENT_BAGS = 45`}</p>
                  <p className="animate-pulse">{`> Status: MONITORING ACTIVE`}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Cost & Cloud */}
      <section className="py-24 bg-primary">
        <div className="container-custom">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-stone-100 mb-4">Cost & Performance Optimization</h2>
              <p className="text-stone-400 max-w-2xl mx-auto text-lg">
                Swetang's expertise in AWS/Azure helps developers reduce operational cloud costs by up to 40%.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "IoT Integration", icon: <Cpu size={32} />, desc: "Connect temperature, humidity, and occupancy sensors for long-term building health." },
              { title: "Digital Twin", icon: <BarChart3 size={32} />, desc: "A live digital replica of your building to predict maintenance needs." },
              { title: "Smart Dashboards", icon: <Activity size={32} />, desc: "Real-time analytics for developers to track multiple sites." },
            ].map((card, i) => (
              <Reveal key={i} delay={i * 100} className="h-full" fullHeight>
                <div className="bg-surface p-8 rounded-2xl shadow-lg text-center hover:bg-surface/80 transition-colors group h-full border border-white/5 hover:border-blue-500/30 flex flex-col">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-serif text-stone-100">{card.title}</h3>
                  <p className="text-stone-500 flex-grow">{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 bg-surface border-t border-white/5">
        <div className="container-custom">
          <Reveal>
            <div className="flex flex-col items-center text-center mb-16">
              <div className="bg-white/5 p-4 rounded-full mb-6 text-gold border border-white/10">
                <Users className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-stone-100 mb-4">Engagement Models</h2>
              <p className="text-stone-400 max-w-2xl text-lg">Flexible solutions whether you are building a single villa or a township.</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Reveal delay={100} className="h-full" fullHeight>
              <div className="p-8 border border-white/10 rounded-2xl hover:border-gold/30 transition-colors h-full flex flex-col bg-primary/50">
                <h3 className="text-2xl font-serif font-bold text-stone-100 mb-2">For Homeowners</h3>
                <span className="inline-block w-fit bg-white/10 text-stone-300 text-xs font-bold px-2 py-1 rounded mb-6">Lightweight Monitoring</span>
                <p className="text-stone-400 mb-8 flex-1">
                  Perfect for individual bungalow or villa projects. We deploy portable sensors and conduct periodic AI drone scans to ensure your contractor is delivering on promises.
                </p>
                <Button variant="outline" fullWidth onClick={handleContactClick}>
                  Get Homeowner Kit
                </Button>
              </div>
            </Reveal>

            <Reveal delay={200} className="h-full" fullHeight>
              <div className="p-8 border border-blue-500/20 rounded-2xl hover:border-blue-500/50 transition-colors bg-blue-900/10 h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-bl-full"></div>
                <h3 className="text-2xl font-serif font-bold text-stone-100 mb-2">For Developers</h3>
                <span className="inline-block w-fit bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded mb-6">Site-Wide System</span>
                <p className="text-stone-300 mb-8 flex-1">
                  Full-scale deployment for high-rises and townships. Includes permanent CCTV analysis, labor tracking, inventory management, and a centralized cloud dashboard.
                </p>
                <Button variant="primary" fullWidth onClick={handleContactClick} className="bg-blue-600 hover:bg-blue-500 border-none">
                  Schedule Developer Demo
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIConstruction;