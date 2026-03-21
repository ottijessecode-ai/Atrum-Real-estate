import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SITE_DATA } from '../constants/siteData';

// Image path
const HERO_IMG = '/images/hero-zoom-bg.jpg';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  const { hero } = SITE_DATA;

  useEffect(() => {
    const container = containerRef.current;
    const bg = bgRef.current;
    if (!container || !bg) return;
    
    gsap.registerPlugin(ScrollTrigger);

    // 1. Image Preload
    const img = new Image();
    img.src = HERO_IMG;
    img.onload = () => {
      // 2. Initial entry animations
      const tl = gsap.timeline();
      tl.to('.hero-loader', { opacity: 0, duration: 0.8, ease: 'power3.inOut', onComplete: () => { gsap.set('.hero-loader', { display: 'none' }); } })
        .fromTo(bg, { scale: 1.05, filter: 'brightness(0.6)' }, { scale: 1, filter: 'brightness(1)', duration: 2, ease: 'power2.out' }, '-=0.4')
        .fromTo('.hero-tag', { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1.2, ease: 'power4.out' }, '-=1.6')
        .fromTo('.hero-title', { opacity: 0, y: 100, skewY: 5 }, { opacity: 1, y: 0, skewY: 0, duration: 1.5, ease: 'expo.out' }, '-=1.2')
        .fromTo('.hero-subtitle', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' }, '-=1')
        .fromTo('.hero-cta', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power4.out' }, '-=1')
        .fromTo('.hero-scroll-hint', { opacity: 0 }, { opacity: 1, duration: 1 }, '-=0.5');

      // 3. Zoom-in on scroll (ScrollTrigger) - No pinning
      gsap.to(bg, {
        scale: 1.15,
        y: 100, // slight parallax down
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // 4. Fade out text on scroll
      gsap.to('.hero-overlay-text', {
        opacity: 0,
        y: -100,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // 5. Fade out static UI elements early on scroll
      gsap.to(['.hero-progress-info', '.hero-scroll-hint'], {
        opacity: 0,
        y: 20,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom top', // Can fade out faster if desired
          scrub: true,
        },
      });
    };

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#FFF0C3] perspective-1000"
      style={{ minHeight: '100dvh' }}
    >
      {/* Loading Screen */}
      <div className="hero-loader absolute inset-0 z-50 bg-[#FFF0C3] flex flex-col items-center justify-center">
        <div className="w-12 h-12 rounded-full border border-brand-gold/20 border-t-brand-gold animate-spin mb-6 shadow-[0_0_15px_rgba(197,163,119,0.3)]" />
        <span className="font-heading text-[10px] tracking-[0.3em] uppercase text-[#1A1A1A] font-600">
          Entering Experience
        </span>
      </div>

      {/* Background Image Container for Zoom */}
      <div 
        ref={bgRef}
        className="absolute inset-[-10%] w-[120%] h-[120%]"
        style={{ 
          backgroundImage: `url(${HERO_IMG})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          willChange: 'transform, filter'
        }}
      />

      {/* Dynamic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF0C3]/80 via-transparent to-[#FFF0C3]/90 pointer-events-none transition-opacity duration-1000" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFF0C3]/60 via-transparent to-transparent pointer-events-none" />

      {/* Text Content */}
      <div className="hero-overlay-text absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 lg:px-24 max-w-[1400px] z-20 pointer-events-none sm:pointer-events-auto">
        <div className="hero-tag opacity-0 flex items-center gap-4 mb-6 md:mb-8">
          <span className="h-px w-8 md:w-12 bg-brand-gold origin-left" />
          <span className="font-heading text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-brand-gold font-600">
            {hero.tag}
          </span>
        </div>

        <h1 className="hero-title opacity-0 font-display text-3xl md:text-5xl lg:text-[4.5rem] text-[#1A1A1A] leading-[0.98] tracking-tightest mb-8">
          {hero.title.part1}<br />
          <em className="text-brand-gold not-italic font-italic">{hero.title.highlight}</em><br />
          {hero.title.part2}
        </h1>

        <p className="hero-subtitle opacity-0 font-body text-[#1A1A1A]/50 text-sm md:text-lg max-w-lg leading-relaxed mb-10 md:mb-12">
          {hero.subtitle}
        </p>

        <div className="hero-cta opacity-0 flex flex-col items-stretch sm:flex-row gap-4 md:gap-6 w-full sm:w-auto">
          <a
            href={hero.cta1.link}
            className="group relative inline-flex items-center justify-center gap-4 px-8 md:px-10 py-4 md:py-5 bg-[#1A1A1A] text-white font-heading text-[10px] tracking-[0.2em] uppercase rounded-full overflow-hidden transition-all duration-700 hover:scale-105 active:scale-95 shadow-xl"
          >
            <span className="relative z-10">{hero.cta1.text}</span>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="relative z-10 transition-transform duration-500 group-hover:translate-x-2">
              <path d="M4 10H16M16 10L12 6M16 10L12 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="absolute inset-0 bg-brand-gold translate-y-full transition-transform duration-700 ease-expo group-hover:translate-y-0" />
          </a>
          <a
            href={hero.cta2.link}
            className="inline-flex items-center justify-center gap-4 px-8 md:px-10 py-4 md:py-5 bg-white/20 text-[#1A1A1A] font-heading text-[10px] tracking-[0.2em] uppercase rounded-full border border-[#1A1A1A]/10 backdrop-blur-xl transition-all duration-700 hover:bg-white/40 hover:border-brand-gold group"
          >
            {hero.cta2.text}
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_10px_rgba(197,163,119,0.8)]" />
          </a>
        </div>
      </div>

      {/* Progress Info */}
      <div className="hero-progress-info absolute bottom-10 right-6 md:right-12 flex items-center gap-4 md:gap-6 z-20">
        <div className="flex flex-col items-end">
          <span className="font-heading text-[9px] tracking-[0.2em] uppercase text-[#1A1A1A]/30 mb-2">Immersion Progress</span>
          <div className="w-32 md:w-48 h-px bg-[#1A1A1A]/10 relative overflow-hidden">
            <div id="hero-progress" className="h-full bg-brand-gold transition-all duration-300 ease-out" style={{ width: '100%' }} />
          </div>
        </div>
        <div className="font-heading text-[10px] md:text-xs tracking-widest text-brand-gold leading-tight">
          2026<br/>EDITION
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll-hint opacity-0 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 md:gap-4 pointer-events-none">
        <span className="font-heading text-[8px] md:text-[9px] tracking-[0.4em] uppercase text-[#1A1A1A]/40">Discover Below</span>
        <div className="h-12 md:h-16 w-px bg-gradient-to-b from-brand-gold via-brand-gold/20 to-transparent" />
      </div>
    </section>
  );
}

