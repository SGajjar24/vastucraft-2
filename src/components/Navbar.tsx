import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Vastu', path: '/vastu' },
    { name: 'AI Tech', path: '/ai-construction' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Digital Card', path: '/connect' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary/80 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-6'
        }`}>
        <div className="container-custom flex justify-between items-center">
          <Link to="/" className="z-50 relative">
            <Logo className="h-10 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-gold ${location.pathname === link.path ? 'text-gold' : 'text-stone-300'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+919104518311"
              className="btn-outline-gold text-sm"
            >
              <Phone size={16} />
              <span>Book Consultation</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-stone-100 hover:text-gold transition-colors z-50"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-primary/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center transition-all duration-500 overflow-y-auto ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}>
        <div className="flex flex-col space-y-6 text-center py-20 min-h-screen justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-2xl font-serif font-medium transition-all duration-300 hover:text-gold ${location.pathname === link.path ? 'text-gold' : 'text-stone-300'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+919104518311"
            className="btn-primary text-lg px-8 py-3 flex items-center gap-2 mt-4 mx-auto"
          >
            <Phone size={20} />
            <span>Book Consultation</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;