import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, MapPin, Mail, Phone } from 'lucide-react';
import Logo from './Logo';
import { CONTACT_INFO, SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleServiceClick = (hash: string) => {
    navigate(`/services#${hash}`);
  };

  return (
    <footer className="bg-primary border-t border-white/10 pt-16 pb-8">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
          {/* Brand */}
          <div className="space-y-5">
            <Logo className="h-10 w-auto" />
            <p className="text-stone-400 text-sm leading-relaxed">
              Where ancient Vastu wisdom meets modern AI technology. Designing soulful spaces with intelligent precision.
            </p>
            <div className="flex gap-3 pt-2">
              <a href={SOCIAL_LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-surface hover:bg-gold/20 text-stone-400 hover:text-gold transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-surface hover:bg-gold/20 text-stone-400 hover:text-gold transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href={SOCIAL_LINKS.TWITTER} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-surface hover:bg-gold/20 text-stone-400 hover:text-gold transition-all duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-stone-100 mb-5">Explore</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' },
                { name: 'Digital Card', path: '/connect' },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-stone-400 hover:text-gold transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold transition-colors"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-stone-100 mb-5">Expertise</h3>
            <ul className="space-y-3">
              {[
                { name: 'Architecture', hash: 'architecture' },
                { name: 'Interior Design', hash: 'interiors' },
                { name: 'Vastu Consulting', hash: 'vastu' },
                { name: 'AI Monitoring', hash: 'ai-tech' },
                { name: 'Facade Design', hash: 'exterior' },
              ].map((service) => (
                <li key={service.name}>
                  <button
                    onClick={() => handleServiceClick(service.hash)}
                    className="text-stone-400 hover:text-gold transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold transition-colors"></span>
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif font-semibold text-stone-100 mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-stone-400 text-sm group">
                <MapPin size={18} className="text-gold shrink-0 mt-0.5 group-hover:animate-bounce" />
                <span className="leading-relaxed">Science City Road,<br />Ahmedabad, Gujarat</span>
              </li>
              <li className="flex items-center gap-3 text-stone-400 text-sm group">
                <Phone size={18} className="text-gold shrink-0 group-hover:animate-pulse" />
                <a href={`tel:${CONTACT_INFO.PHONE}`} className="hover:text-gold transition-colors">{CONTACT_INFO.PHONE_DISPLAY}</a>
              </li>
              <li className="flex items-center gap-3 text-stone-400 text-sm group">
                <Mail size={18} className="text-gold shrink-0 group-hover:animate-pulse" />
                <a href={`mailto:${CONTACT_INFO.EMAIL}`} className="hover:text-gold transition-colors break-all">{CONTACT_INFO.EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-stone-500">
          <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} VastuCraft AI Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <button onClick={() => navigate('/privacy')} className="hover:text-gold transition-colors">Privacy Policy</button>
            <button onClick={() => navigate('/terms')} className="hover:text-gold transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;