"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SITE_CONFIG } from '@/config/siteConfig';
import { PROPERTIES } from '@/data/properties';
import { SITE_DATA } from '@/constants/siteData';

gsap.registerPlugin(ScrollTrigger);

const ExpertiseGrid: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { expertise } = SITE_DATA;

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header Reveal
      gsap.fromTo('.expertise-header', 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: 'power3.out',
          scrollTrigger: { trigger: '.expertise-header', start: 'top 85%' }
        }
      );

      // Grid Cards Reveal
      gsap.fromTo('.expertise-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: '.expertise-grid',
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pt-12 pb-16 bg-[#FFF0C3] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="expertise-header mb-16 text-center lg:text-left">
          <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
            <span className="h-px w-10 bg-brand-gold" />
            <span className="font-heading text-[10px] tracking-editorial uppercase text-brand-gold">Specialized Expertise</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-[#1A1A1A] tracking-tighter leading-none">
            Architectural<br />Disciplines.
          </h2>
        </div>

        {/* Grid */}
        <div className="expertise-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {expertise.map((item) => (
            <div 
              key={item.id}
              className="expertise-card group p-10 bg-white/40 backdrop-blur-md border border-[#1A1A1A]/5 rounded-[2.5rem] hover:bg-white/60 transition-all duration-700 hover:shadow-premium hover:-translate-y-2 flex flex-col justify-between min-h-[420px]"
            >
              <div>
                <p className="font-display text-3xl text-brand-gold/40 group-hover:text-brand-gold transition-colors duration-500 mb-8">{item.id}</p>
                <h3 className="font-display text-3xl text-[#1A1A1A] group-hover:text-brand-gold transition-colors duration-500 tracking-tight leading-[1.1] mb-6">
                  {item.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-8 opacity-60 group-hover:opacity-100 transition-opacity">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full border border-[#1A1A1A]/10 text-[#1A1A1A]/60 font-heading text-[8px] tracking-widest uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-body text-[#1A1A1A]/60 group-hover:text-[#1A1A1A]/80 leading-relaxed text-sm mb-8">
                  {item.body}
                </p>
                <div className="h-px w-full bg-[#1A1A1A]/5 mb-8 transition-colors" />
                <button className="flex items-center gap-3 font-heading text-[10px] tracking-widest uppercase text-[#1A1A1A]/60 group-hover:text-brand-gold transition-colors">
                  Details <span className="transform transition-transform group-hover:translate-x-1">â†’</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseGrid;

