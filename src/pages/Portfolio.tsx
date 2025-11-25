import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PROJECTS, IMAGES } from '../constants';
import Reveal from '../components/Reveal';

const Portfolio: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const heroRef = useRef<HTMLDivElement>(null);
  const categories = ['All', 'Residential', 'Commercial'];

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

  const filteredProjects = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="bg-primary min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
          <div
            ref={heroRef}
            className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform"
          >
            <img
              src={IMAGES.PROJECT_3}
              alt="Portfolio Background"
              className="w-full h-full object-cover opacity-40 animate-hero-zoom"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary" />
        </div>

        <div className="relative z-10 container-custom text-center pt-20">
          <Reveal>
            <span className="text-gold font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Our Masterpieces</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-100 mb-6">Selected Works</h1>
            <p className="text-lg text-stone-300 max-w-2xl mx-auto">
              A showcase of Vastu-compliant, tech-enabled design excellence.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="container-custom py-24">
        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all focus:outline-none ${filter === cat
                  ? 'bg-gold text-primary shadow-lg shadow-gold/20'
                  : 'bg-surface text-stone-400 hover:text-gold hover:bg-white/5 border border-white/5'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {filteredProjects.map((project, i) => (
            <Reveal key={project.id} delay={i * 100}>
              <div className="bg-surface rounded-2xl overflow-hidden shadow-lg border border-white/5 hover:border-gold/30 transition-all duration-300 group">
                <div className="relative overflow-hidden h-72">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-300" />
                  <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur text-gold text-xs font-bold px-3 py-1 rounded-full border border-gold/20">
                    {project.category}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-stone-100 mb-3 group-hover:text-gold transition-colors">{project.title}</h3>
                  <p className="text-stone-400 mb-6">{project.description}</p>
                  <button onClick={() => navigate('/contact')} className="text-gold font-medium hover:text-white transition-colors bg-transparent border-0 cursor-pointer p-0 flex items-center gap-2">
                    Request Case Study
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;