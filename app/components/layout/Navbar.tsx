"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state (for styling)
      setIsScrolled(currentScrollY > 100);

      // Update visibility (hide on scroll down, show on scroll up)
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setIsVisible(false); // Scrolling down - hide
      } else {
        setIsVisible(true); // Scrolling up - show
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Listings', path: '/listings' },
    { name: 'Philosophy', path: '/philosophy' },
    { name: 'Collection', path: '/collection' },
    { name: 'Investments', path: '/investments' },
    { name: 'Branches', path: '/branches' },
  ];

  return (
    <header 
      ref={navRef}
      className={`fixed left-1/2 -translate-x-1/2 z-[100] transition-all duration-700 ease-expo ${
        isVisible ? 'top-0' : '-top-32 opacity-0 pointer-events-none'
      } ${
        isScrolled ? 'top-6 w-[95%] max-w-[1200px]' : 'top-10 w-[98%] max-w-[1600px]'
      }`}
    >
      <nav className={`relative w-full px-6 lg:px-10 py-4 rounded-full border transition-all duration-700 ${
        isScrolled 
          ? 'bg-white/70 backdrop-blur-2xl border-[#1A1A1A]/5 shadow-[0_15px_40px_rgba(26,26,26,0.05)]' 
          : 'bg-[#FFF0C3]/60 backdrop-blur-md border-[#1A1A1A]/5'
      }`}>
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className={`w-10 h-10 flex items-center justify-center border transition-all duration-500 rounded-full ${
              isScrolled ? 'border-brand-gold bg-brand-gold text-white shadow-xl' : 'border-[#1A1A1A]/20 text-[#1A1A1A]'
            }`}>
              <span className="font-display font-bold text-base">A</span>
            </div>
            <span className={`font-heading font-700 tracking-[0.3em] text-[10px] uppercase transition-colors duration-500 ${
              isScrolled ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]/80 group-hover:text-[#1A1A1A]'
            }`}>
              AURUM
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`font-heading text-[10px] tracking-[0.2em] uppercase transition-all duration-500 relative group overflow-hidden py-1 ${
                  pathname === link.path ? 'text-brand-gold' : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-px bg-brand-gold transform transition-transform duration-700 ${
                  pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
          </div>

          {/* CTA & Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/concierge"
              className={`hidden md:block px-8 py-2.5 rounded-full font-heading text-[9px] tracking-[0.2em] uppercase transition-all duration-700 ${
                isScrolled 
                  ? 'bg-[#1A1A1A] text-white hover:bg-brand-gold shadow-lg' 
                  : 'bg-[#1A1A1A] text-white hover:bg-brand-gold'
              }`}
            >
              Access
            </Link>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#1A1A1A] p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`absolute top-full left-0 w-full mt-4 bg-white/95 backdrop-blur-[40px] rounded-[2.5rem] border border-[#1A1A1A]/5 p-8 transition-all duration-700 transform origin-top shadow-2xl ${
          isOpen ? 'opacity-100 scale-100 pointer-events-auto translate-y-0' : 'opacity-0 scale-95 pointer-events-none -translate-y-4'
        }`}>
          <div className="flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <Link
                key={link.path}
                href={link.path}
                className="flex items-center justify-between group py-2"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <span className="font-display text-3xl text-[#1A1A1A] tracking-tighter group-hover:text-brand-gold transition-all duration-500 group-hover:translate-x-2">
                  {link.name}
                </span>
                <ChevronRight className="text-[#1A1A1A]/10 group-hover:text-brand-gold transform transition-all duration-500 group-hover:translate-x-1" size={24} />
              </Link>
            ))}
            <div className="h-px bg-[#1A1A1A]/5 my-2" />
            <Link
              href="/concierge"
              className="w-full py-5 text-center bg-[#1A1A1A] text-white rounded-[1.5rem] font-heading text-[10px] tracking-[0.3em] uppercase shadow-lg hover:bg-brand-gold transition-colors"
            >
              Request Access
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

