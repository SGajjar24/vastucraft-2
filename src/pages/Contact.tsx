import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, CheckCircle, Loader2, MessageCircle, Sparkles, Zap, ArrowDown } from 'lucide-react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { IMAGES, CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        // Optimize: Stop updating transform if hero is well out of view
        if (scrolled < 1000) {
          heroRef.current.style.transform = `translate3d(0, ${scrolled * 0.4}px, 0)`;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const defaultService = location.state?.service || 'Architecture Design';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const dataObject = Object.fromEntries(formData.entries());

    // Access environment variable with fallbacks for stability
    const accessKey = process.env.VITE_WEB3FORMS_ACCESS_KEY ||
      (import.meta as any).env?.VITE_WEB3FORMS_ACCESS_KEY ||
      '83a05dbd-9847-45c4-8be5-a9c911ca5eaf';

    const payload = {
      ...dataObject,
      access_key: accessKey,
      subject: "New Inquiry | VastuCraft AI",
      from_name: "VastuCraft Website",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (data.success) {
        setFormStatus('success');
        formRef.current?.reset();
      } else {
        setFormStatus('error');
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setFormStatus('error');
      setErrorMessage("Network error. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-primary overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none overflow-hidden">
          <div
            ref={heroRef}
            className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform"
          >
            <img
              src={IMAGES.HERO_CONTACT}
              alt="VastuCraft Studio"
              className="w-full h-full object-cover opacity-50 animate-hero-zoom"
            />
          </div>
          {/* Enhanced Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary" />
        </div>

        <div className="relative z-10 container-custom text-center pt-10">
          <Reveal variant="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5 backdrop-blur-md text-gold text-xs font-bold tracking-widest uppercase mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span> Open for Collaborations
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-100 mb-8 tracking-tight">
              Let's Build Something <br />
              <span className="text-gradient-gold">Incredible</span>
            </h1>

            <p className="text-xl text-stone-300 max-w-2xl mx-auto font-light leading-relaxed mb-10 text-balance">
              Share your project vision with us. Whether it's a Vastu consultation, a modern home design, or an AI-monitored construction project.
            </p>

            <div
              className="inline-flex flex-col items-center gap-2 text-white/50 text-xs font-bold uppercase tracking-widest animate-bounce cursor-pointer hover:text-gold transition-colors"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Scroll to Connect
              <ArrowDown size={16} />
            </div>
          </Reveal>
        </div>
      </section>

      <div id="contact-form" className="container-custom py-24 scroll-mt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <Reveal delay={100} variant="fade-up">
              <div className="bg-surface p-8 rounded-2xl shadow-lg border border-white/5">
                <h3 className="text-2xl font-serif font-bold text-stone-100 mb-8">Contact Details</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-5 group">
                    <div className="bg-primary p-3 rounded-full text-gold shrink-0 border border-white/5 group-hover:border-gold/30 transition-colors duration-300">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-stone-100 text-lg">Main Studio</p>
                      <p className="text-stone-400 leading-relaxed">{CONTACT_INFO.ADDRESS_LINE_1},<br />{CONTACT_INFO.ADDRESS_LINE_2}</p>
                      <p className="text-xs text-stone-500 mt-2 uppercase tracking-wide">Serving Ahmedabad, Gandhinagar & Surat</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="bg-primary p-3 rounded-full text-gold shrink-0 border border-white/5 group-hover:border-gold/30 transition-colors duration-300">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-stone-100 text-lg">Call Us</p>
                      <p className="text-stone-400 font-mono text-lg tracking-tight">{CONTACT_INFO.PHONE_DISPLAY}</p>
                      <a href={CONTACT_INFO.WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-green-500 text-sm font-bold mt-2 hover:text-green-400">
                        <MessageCircle size={14} /> Chat on WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group">
                    <div className="bg-primary p-3 rounded-full text-gold shrink-0 border border-white/5 group-hover:border-gold/30 transition-colors duration-300">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-stone-100 text-lg">Email</p>
                      <p className="text-stone-400">{CONTACT_INFO.EMAIL}</p>
                      <p className="text-stone-500 text-sm mt-1">Response time: Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200} variant="fade-up">
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-2xl border border-slate-700 transition-all hover:shadow-gold/10 hover:-translate-y-1 duration-300">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-gold/10 transition-all duration-700 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-gold/10 rounded-xl text-gold ring-1 ring-inset ring-gold/20">
                        <Zap className="w-5 h-5 fill-current" />
                      </div>
                      <div>
                        <h3 className="text-xl font-serif font-bold text-white leading-none">Fast Track</h3>
                        <span className="text-xs text-slate-400 font-medium">Priority Support</span>
                      </div>
                    </div>
                    <span className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-[10px] font-bold uppercase tracking-wider border border-green-500/20">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      Online
                    </span>
                  </div>

                  <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                    Skip the form queue. For urgent Vastu audits or site visits, connect directly with our senior architects via WhatsApp.
                  </p>

                  <div className="bg-slate-950/50 p-4 rounded-xl border border-white/5 mb-6 backdrop-blur-sm">
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                      <p className="text-xs text-slate-400 leading-relaxed">
                        <strong className="text-white">Note:</strong> Specialized consultations may be chargeable.
                      </p>
                    </div>
                  </div>

                  <Button
                    variant="gold"
                    fullWidth
                    className="flex items-center justify-center gap-2 py-3.5 text-sm font-bold shadow-lg shadow-amber-900/20 group-hover:shadow-amber-900/40 transition-all border border-transparent hover:border-amber-400/30"
                    onClick={() => window.open(CONTACT_INFO.WHATSAPP_LINK, '_blank')}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Message Expert
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={300} variant="fade-up">
            <div className="bg-surface p-8 lg:p-10 rounded-2xl shadow-xl border border-white/5">
              {formStatus === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 animate-fade-in">
                  <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-stone-100 mb-2">Message Sent</h3>
                  <p className="text-stone-400 mb-8">Thank you. We usually respond within 24 hours.</p>
                  <Button variant="outline" onClick={() => setFormStatus('idle')}>Send Another</Button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="mb-8">
                    <h3 className="text-2xl font-serif font-bold text-stone-100">Send a Message</h3>
                    <p className="text-stone-400 text-sm mt-1">Fill out the form below and we'll get back to you.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-stone-300">Name</label>
                      <input name="name" id="name" required className="w-full px-4 py-3 bg-primary rounded-lg border border-white/10 focus:border-gold/50 focus:ring-1 focus:ring-gold/50 outline-none transition-all text-stone-200 placeholder-stone-600" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold text-stone-300">Phone</label>
                      <input name="phone" id="phone" required type="tel" className="w-full px-4 py-3 bg-primary rounded-lg border border-white/10 focus:border-gold/50 focus:ring-1 focus:ring-gold/50 outline-none transition-all text-stone-200 placeholder-stone-600" placeholder="+91" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-stone-300">Email</label>
                    <input name="email" id="email" required type="email" className="w-full px-4 py-3 bg-primary rounded-lg border border-white/10 focus:border-gold/50 focus:ring-1 focus:ring-gold/50 outline-none transition-all text-stone-200 placeholder-stone-600" placeholder="john@example.com" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-bold text-stone-300">Interest</label>
                    <div className="relative">
                      <select
                        name="service"
                        id="service"
                        defaultValue={defaultService}
                        className="w-full px-4 py-3 bg-primary rounded-lg border border-white/10 focus:border-gold/50 focus:ring-1 focus:ring-gold/50 outline-none transition-all appearance-none text-stone-200"
                      >
                        <option value="Architecture Design">Architecture Design</option>
                        <option value="Interior Design">Interior Design</option>
                        <option value="Vastu Consultation">Vastu Consultation</option>
                        <option value="AI Construction Monitoring">AI Construction Monitoring</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-stone-300">Project Details</label>
                    <textarea name="message" id="message" required rows={4} className="w-full px-4 py-3 bg-primary rounded-lg border border-white/10 focus:border-gold/50 focus:ring-1 focus:ring-gold/50 outline-none transition-all resize-none text-stone-200 placeholder-stone-600" placeholder="Location, plot size, requirements..."></textarea>
                  </div>

                  {formStatus === 'error' && (
                    <div className="p-3 bg-red-500/10 text-red-400 text-sm rounded-md border border-red-500/20 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      {errorMessage}
                    </div>
                  )}

                  <Button
                    type="submit"
                    fullWidth
                    size="lg"
                    disabled={formStatus === 'submitting'}
                    className="mt-2"
                  >
                    {formStatus === 'submitting' ? <Loader2 className="animate-spin" /> : 'Send Request'}
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;