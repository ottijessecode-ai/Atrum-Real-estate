"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SITE_CONFIG } from '@/config/siteConfig';
import { PROPERTIES } from '@/data/properties';
import { SITE_DATA } from '@/constants/siteData';

gsap.registerPlugin(ScrollTrigger);

const EditorialVision: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { vision } = SITE_DATA;

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Reveal lines one by one
      gsap.fromTo('.reveal-line', 
        { 
          y: 70, 
          opacity: 0,
          skewY: 7
        },
        {
          y: 0,
          opacity: 1,
          skewY: 0,
          stagger: 0.15,
          duration: 1.5,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          }
        }
      );

      // Subtle parallax for the background accent
      gsap.to('.vision-accent', {
        y: -100,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative flex items-center justify-center bg-white pt-12 pb-16 overflow-hidden md:min-h-[70vh]"
    >
      {/* Background Decor */}
      <div className="vision-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[40vw] text-[#1A1A1A]/[0.03] font-bold pointer-events-none select-none">
        VISION
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 gap-12 items-center">
        {/* Main Content */}
        <div className="text-center lg:text-left">
          <div className="flex items-center gap-4 mb-8 justify-center lg:justify-start reveal-line">
            <span className="h-px w-12 bg-brand-gold/60" />
            <span className="font-heading text-[10px] tracking-editorial uppercase text-brand-gold">{vision.tag}</span>
          </div>

          <h2 className="reveal-line font-display text-4xl md:text-8xl lg:text-[6rem] xl:text-[6.5rem] text-[#1A1A1A] leading-[0.9] tracking-tightest mb-10">
            {vision.title.part1}<br />
            <span className="italic text-brand-gold reveal-line inline-block mx-2 md:mx-4">{vision.title.highlight}</span><br />
            {vision.title.part2}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10 md:mt-16">
            <div className="reveal-line">
              <p className="font-body text-[#1A1A1A]/70 text-base md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
                {vision.body}
              </p>
            </div>
            <div className="reveal-line lg:text-right flex flex-col items-center lg:items-end justify-end">
              <div className="p-8 border border-[#1A1A1A]/5 rounded-3xl bg-white/40 backdrop-blur-xl shadow-premium max-w-sm w-full">
                <p className="font-heading text-[10px] tracking-editorial uppercase text-brand-gold mb-4">{vision.stats.label}</p>
                <p className="font-display text-4xl md:text-5xl text-[#1A1A1A] mb-2 tracking-tight">{vision.stats.value}</p>
                <p className="font-body text-sm text-[#1A1A1A]/50 leading-relaxed">
                  {vision.stats.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialVision;

