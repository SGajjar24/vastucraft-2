import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Compass, Sun, Wind, Moon, CalendarClock, ArrowRight, Droplets, Flame, Mountain, Globe, Check, X, Sparkles } from 'lucide-react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { IMAGES } from '../constants';

const Vastu: React.FC = () => {
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

  const elements = [
    { name: "Water (Jal)", desc: "Flow & Prosperity", icon: <Droplets className="w-6 h-6" />, color: "bg-blue-500/10 text-blue-400 border-blue-500/20", direction: "North-East" },
    { name: "Fire (Agni)", desc: "Energy & Transformation", icon: <Flame className="w-6 h-6" />, color: "bg-red-500/10 text-red-400 border-red-500/20", direction: "South-East" },
    { name: "Earth (Prithvi)", desc: "Stability & Growth", icon: <Mountain className="w-6 h-6" />, color: "bg-amber-500/10 text-amber-400 border-amber-500/20", direction: "South-West" },
    { name: "Air (Vayu)", desc: "Movement & Change", icon: <Wind className="w-6 h-6" />, color: "bg-slate-500/10 text-slate-400 border-slate-500/20", direction: "North-West" },
    { name: "Space (Akash)", desc: "Openness & Connection", icon: <Globe className="w-6 h-6" />, color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20", direction: "Center" },
  ];

  return (
    <div className="w-full bg-primary min-h-screen">
      {/* Cinematic Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Parallax Background Image */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
          <div
            ref={heroRef}
            className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform"
          >
            <img
              src={IMAGES.PROJECT_2}
              alt="Vastu Background"
              className="w-full h-full object-cover opacity-20 animate-hero-zoom"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary" />

          {/* Smoother Bottom Fade to Next Section - Extended Height */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        </div>

        {/* Mandala Overlay Animation - Optimized to use CSS Keyframes or simplified logic */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold/30 rounded-full animate-[spin_60s_linear_infinite]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/30 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gold/30 rounded-full"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl px-6 pt-20 pb-24">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/10 backdrop-blur-sm text-gold text-xs font-bold tracking-widest uppercase mb-6">
              <Compass size={14} /> Ancient Wisdom, Modern Math
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-100 mb-6 leading-tight">
              The Geometry of <span className="text-gradient-gold">Wellbeing</span>
            </h1>
            <p className="text-xl text-stone-300 max-w-2xl mx-auto mb-10 font-light">
              We decode Vastu Shastra not as superstition, but as the science of alignment—optimizing your home for solar paths, wind direction, and magnetic fields.
            </p>
            <Button variant="gold" className="px-8 py-4 rounded-full text-lg shadow-lg shadow-amber-900/40" onClick={() => document.getElementById('zones')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore the Principles
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Pancha Mahabhuta (5 Elements) Strip */}
      <section className="py-16 bg-surface border-y border-white/5">
        <div className="container-custom">
          <Reveal>
            <p className="text-center text-stone-500 text-sm font-bold uppercase tracking-widest mb-10">Based on the 5 Elements</p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {elements.map((el, i) => (
              <Reveal key={i} delay={i * 100} className="h-full" fullHeight>
                <div className="flex flex-col items-center text-center group h-full">
                  <div className={`w-16 h-16 rounded-2xl ${el.color} border flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-lg`}>
                    {el.icon}
                  </div>
                  <h3 className="font-serif font-bold text-stone-100 text-lg">{el.name}</h3>
                  <p className="text-xs text-stone-500 uppercase tracking-wider mt-1 mb-2">{el.direction}</p>
                  <p className="text-sm text-stone-400 flex-grow">{el.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Science vs Myth */}
      <section className="py-24 bg-primary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <h2 className="text-4xl font-serif font-bold text-stone-100 mb-6">Science, Not Superstition.</h2>
                <p className="text-lg text-stone-400 mb-6">
                  Traditional Vastu is often misunderstood. At VastuCraft, we strip away the myths and focus on the architectural logic that has stood the test of time.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4 bg-surface p-4 rounded-xl shadow-lg border border-white/5">
                    <div className="mt-1"><Check className="text-green-500 w-5 h-5" /></div>
                    <div>
                      <h4 className="font-bold text-stone-100">Solar Passive Design</h4>
                      <p className="text-sm text-stone-400">East-facing entrances allow morning UV rays to sanitize the home, while thick South-West walls block harsh afternoon heat.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 bg-surface p-4 rounded-xl shadow-lg border border-white/5">
                    <div className="mt-1"><Check className="text-green-500 w-5 h-5" /></div>
                    <div>
                      <h4 className="font-bold text-stone-100">Ventilation Dynamics</h4>
                      <p className="text-sm text-stone-400">Placement of windows (North/East) ensures cross-ventilation based on prevailing wind patterns in India.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 bg-surface p-4 rounded-xl border border-red-500/20 shadow-lg opacity-70">
                    <div className="mt-1"><X className="text-red-400 w-5 h-5" /></div>
                    <div>
                      <h4 className="font-bold text-stone-500 line-through">Fear-Mongering</h4>
                      <p className="text-sm text-stone-500">"We never suggest demolition based on fear. We use color, mirrors, and geometry to balance energy."</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-surface relative border border-white/10">
                  <img src="https://images.unsplash.com/photo-1518098268026-4e1491a43259?auto=format&fit=crop&q=80&w=800" alt="Sunlight Architecture" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" loading="lazy" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <div className="font-serif text-2xl font-bold text-gold">The Sun Path</div>
                    <p className="text-white/80 text-sm">The core of Vastu Shastra</p>
                  </div>
                </div>
                {/* Decorative graphic */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/10 rounded-full blur-2xl"></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Detailed Zones Grid */}
      <section id="zones" className="py-24 bg-surface scroll-mt-32 border-t border-white/5">
        <div className="container-custom">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-stone-100 mb-4">Key Zones & Functions</h2>
              <p className="text-stone-400 max-w-2xl mx-auto">The ideal blueprint according to Vastu principles.</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { zone: "North-East (Ishanya)", element: "Water", use: "Prayer / Entrance", tip: "Keep this zone light, open, and clutter-free for mental clarity.", bg: "bg-blue-500/5 border-blue-500/10 hover:border-blue-500/30" },
              { zone: "South-East (Agneya)", element: "Fire", use: "Kitchen / Electric", tip: "The fire element resides here. Place burners and electrical mains here.", bg: "bg-red-500/5 border-red-500/10 hover:border-red-500/30" },
              { zone: "South-West (Nairutya)", element: "Earth", use: "Master Bedroom", tip: "The zone of stability. Heaviest furniture and the head of the family belong here.", bg: "bg-amber-500/5 border-amber-500/10 hover:border-amber-500/30" },
              { zone: "North-West (Vayu)", element: "Air", use: "Guest / Bathroom", tip: "Movement flows here. Ideal for guest rooms or finished goods in offices.", bg: "bg-slate-500/5 border-slate-500/10 hover:border-slate-500/30" },
            ].map((card, i) => (
              <Reveal key={i} delay={i * 100} className="h-full" fullHeight>
                <div className={`p-8 rounded-2xl border ${card.bg} hover:shadow-xl transition-all duration-300 group h-full flex flex-col`}>
                  <h3 className="font-serif font-bold text-xl text-stone-100 mb-1">{card.zone}</h3>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-4 text-stone-400">{card.element}</p>
                  <div className="h-px w-full bg-white/10 mb-4"></div>
                  <p className="text-sm font-bold text-stone-300 mb-2">Best for: {card.use}</p>
                  <p className="text-sm text-stone-500 leading-relaxed flex-grow">{card.tip}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI Integration - Dark Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px]"></div>

        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 bg-surface border border-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <span className="font-mono text-xs text-gold">AI VASTU SCANNER v2.1</span>
              </div>
              <div className="space-y-4 font-mono text-sm text-stone-400">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Orientation check...</span>
                  <span className="text-green-400">PASS (90° N)</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Brahmasthan load...</span>
                  <span className="text-green-400">CLEAR</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Master Bed Location...</span>
                  <span className="text-red-400">WARN (NW Offset)</span>
                </div>
                <div className="p-3 bg-black/30 rounded mt-4 text-xs text-stone-500 border border-white/5">
                  "AI Recommendation: Shift bed position 2ft East to align with magnetic North flow."
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <Reveal>
                <h2 className="text-4xl font-serif font-bold mb-6 text-stone-100">AI-Driven Vastu Audits</h2>
                <p className="text-stone-400 text-lg mb-8 leading-relaxed">
                  We combine Ar. Vidhi's architectural expertise with our proprietary AI modeling to analyze your floor plans. We identify geometric imbalances and suggest scientific, non-destructive remedies without the guesswork.
                </p>
                <button
                  onClick={() => navigate('/contact', { state: { service: 'Vastu Consultation' } })}
                  className="group bg-gradient-to-r from-gold to-gold-dark hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] text-primary px-8 py-4 rounded-full font-bold flex items-center gap-3 transition-all"
                >
                  <Sparkles size={20} />
                  Schedule AI Consultation
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="mt-4 text-stone-600 text-sm">
                  *Floor plan upload available after initial consultation.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-surface border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl font-serif font-bold text-center mb-12 text-stone-100">Common Questions</h2>
          </Reveal>
          <div className="space-y-4">
            {[
              { q: "Can Vastu be applied to apartments?", a: "Absolutely. While you cannot change the main structure, we focus on internal layouts, furniture placement, sleeping directions, and elemental balancing." },
              { q: "Do I need to demolish walls?", a: "Not always. We prioritize non-destructive remedies like color therapy, mirror placement, and changing room functions before suggesting structural changes." },
              { q: "Is Vastu relevant for offices?", a: "Yes. Proper seating orientation for the MD and staff can significantly impact decision-making and productivity." },
              { q: "How accurate is the AI Analysis?", a: "Our AI acts as a first-pass filter to catch 90% of geometric errors. Ar. Vidhi then reviews the context to provide the final human touch." }
            ].map((faq, i) => (
              <Reveal key={i} delay={i * 50}>
                <details className="group bg-primary rounded-xl p-6 cursor-pointer [&_svg]:open:rotate-180 border border-white/5 hover:border-gold/30 transition-colors">
                  <summary className="flex items-center justify-between font-serif font-bold text-stone-200 text-lg list-none outline-none">
                    {faq.q}
                    <span className="transition-transform duration-300 text-gold">
                      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <p className="text-stone-400 mt-4 leading-relaxed animate-fade-in">
                    {faq.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vastu;