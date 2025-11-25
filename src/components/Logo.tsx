import React from 'react';
import { Compass } from 'lucide-react';

interface LogoProps {
  variant?: 'light' | 'dark'; // 'light' for dark backgrounds (White text), 'dark' for light backgrounds (Dark text)
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '' }) => {
  // ==============================================================================
  // CUSTOMIZATION GUIDE:
  // ==============================================================================
  // To use an IMAGE LOGO:
  // 1. Uncomment the <img> block below.
  // 2. Comment out the "Text / Icon Logo" block.
  // 3. Place your logo file (e.g., logo.png) in the /public folder.
  // ==============================================================================

  /* 
  // --- OPTION 1: IMAGE LOGO ---
  return (
    <img 
      src={variant === 'light' ? '/logo-white.png' : '/logo-dark.png'} 
      alt="VastuCraft Logo" 
      className={`h-10 w-auto object-contain ${className}`} 
    />
  );
  */

  // --- OPTION 2: TEXT / ICON LOGO (Current) ---

  // Dynamic styles based on variant
  const boxClass = variant === 'light'
    ? 'bg-white/10 text-white border border-white/10 backdrop-blur-sm group-hover:bg-white group-hover:text-slate-900'
    : 'bg-slate-900 text-white group-hover:bg-secondary';

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <Compass className="text-gold animate-spin-slow" size={32} strokeWidth={1.5} />
        <div className="absolute inset-0 bg-gold/20 blur-lg rounded-full animate-pulse-slow"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-serif font-bold tracking-wide text-stone-100 leading-none">
          VASTU<span className="text-gold">CRAFT</span>
        </span>
        <span className="text-[0.6rem] font-sans tracking-[0.2em] text-stone-400 uppercase">
          AI Studio
        </span>
      </div>
    </div>
  );
};

export default Logo;