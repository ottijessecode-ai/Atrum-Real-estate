"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Consultation & Private Vision',
    desc: 'Deep discovery into your requirements, leveraging our global intel to map opportunities.',
  },
  {
    number: '02',
    title: 'Strategic Portfolio Selection',
    desc: 'Accessing off-market inventory and vetting assets through an architectural lens.',
  },
  {
    number: '03',
    title: 'Acquisition & Seamless Craft',
    desc: 'Managing the complexity of transaction with absolute discretion and perfection.',
  },
];

const ProcessTimeline: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Background Number Reveal
      gsap.fromTo('.process-bg-number',
        { opacity: 0, x: -100 },
        {
          opacity: 0.05,
          x: 0,
          duration: 2,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top bottom' }
        }
      );

      // Steps Stagger
      gsap.fromTo('.step-item',
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: '.steps-container',
            start: 'top 80%',
          }
        }
      );

      // Line animation
      gsap.fromTo('.step-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'none',
          scrollTrigger: {
            trigger: '.steps-container',
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-zinc-950 text-white relative overflow-hidden">
      {/* Huge Background Reveal */}
      <div className="process-bg-number absolute -top-10 -left-10 font-display text-[40vw] font-bold text-white leading-none pointer-events-none select-none">
        03
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left: Sticky Header */}
          <div className="lg:sticky lg:top-32 lg:h-max">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-10 bg-brand-gold" />
              <span className="font-heading text-[10px] tracking-editorial uppercase text-brand-gold">The Methodology</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl tracking-tighter leading-none mb-8">
              From Concept<br />To Completion.
            </h2>
            <p className="font-body text-white/40 text-lg leading-relaxed max-w-sm mb-12">
              Our process is designed for precision. Every step is handled by a dedicated director,
              ensuring absolute continuity and quality.
            </p>
            <button className="px-8 py-4 border border-white/20 rounded-full font-heading text-[10px] tracking-editorial uppercase hover:bg-white hover:text-brand-dark transition-all duration-500">
              View Case Studies
            </button>
          </div>

          {/* Right: Timeline Steps */}
          <div className="steps-container relative pt-10 lg:pl-20">
            {/* Animated Vertical Line */}
            <div className="absolute left-0 lg:left-20 top-0 w-px h-full bg-white/10">
              <div className="step-line w-full h-full bg-brand-gold origin-top" />
            </div>

            <div className="space-y-24">
              {steps.map((step) => (
                <div key={step.number} className="step-item relative pl-10">
                  {/* Step Dot */}
                  <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-brand-gold shadow-[0_0_15px_rgba(197,163,119,0.5)]" />

                  <p className="font-display text-xl text-brand-gold mb-4">{step.number}</p>
                  <h3 className="font-display text-3xl md:text-4xl tracking-tight mb-6">
                    {step.title}
                  </h3>
                  <p className="font-body text-white/50 leading-relaxed text-sm md:text-base max-w-md">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
