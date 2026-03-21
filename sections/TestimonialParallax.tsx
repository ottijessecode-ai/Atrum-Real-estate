"use client";
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const testimonials = [
  {
    quote: 'AURUM found us a property that doesn\'t exist on any public market. The discretion and expertise they showed throughout the process was unparalleled.',
    author: 'A.R.',
    role: 'Private Equity Partner, London',
    property: 'Acquired · The Connaught Residence',
    value: '£22.4M',
  },
  {
    quote: 'Three other agencies had failed before AURUM succeeded. They understand that at this level, it\'s not just about the property â€” it\'s about the life it enables.',
    author: 'S.M.',
    role: 'Tech Founder, Dubai',
    property: 'Acquired · Palm Jumeirah Villa',
    value: 'AED 65M',
  },
  {
    quote: 'The portfolio they assembled for us over 18 months outperformed every benchmark in the luxury segment. They truly think as wealth managers, not just agents.',
    author: 'F.B.',
    role: 'Family Office Principal, Geneva',
    property: '7-Property Portfolio · Managed',
    value: 'CHF 180M',
  },
];

export function TestimonialParallax() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      // Parallax slow scroll for background elements
      gsap.to('.parallax-bg-text', {
        y: -120,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Cards stagger reveal
      gsap.fromTo('.testimonial-card',
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.testimonials-grid',
            start: 'top 75%',
          },
        }
      );

      // Header
      gsap.fromTo('.testimonials-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-brand-cream relative overflow-hidden">
      {/* Parallax bg text */}
      <div className="parallax-bg-text absolute top-0 left-0 w-full text-center pointer-events-none select-none">
        <p
          className="font-display font-bold text-[20vw] leading-none text-brand-dark/5 whitespace-nowrap"
          style={{ letterSpacing: '-0.05em' }}
        >
          TRUST
        </p>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="testimonials-header text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-brand-gold" />
            <span className="font-heading text-xs tracking-widest uppercase text-brand-gold">Client Stories</span>
            <span className="h-px w-10 bg-brand-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-brand-dark tracking-tighter">
            Trusted by the World's<br />
            Most Discerning Buyers
          </h2>
        </div>

        {/* Cards */}
        <div className="testimonials-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`testimonial-card rounded-3xl p-8 shadow-premium hover:shadow-premium-hover transition-all duration-500 hover:-translate-y-1 ${i === 1 ? 'bg-brand-dark text-white md:mt-8' : 'bg-white text-brand-dark'
                }`}
            >
              {/* Quote mark */}
              <div className="mb-6">
                <span
                  className={`font-display text-5xl leading-none ${i === 1 ? 'text-brand-gold' : 'text-brand-gold'
                    }`}
                >
                  "
                </span>
              </div>

              <p
                className={`font-body text-base leading-relaxed mb-8 ${i === 1 ? 'text-white/70' : 'text-brand-muted'
                  }`}
              >
                {t.quote}
              </p>

              {/* Author */}
              <div className="border-t pt-6"
                style={{ borderColor: i === 1 ? 'rgba(197,163,119,0.2)' : 'rgba(224,216,207,0.8)' }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className={`font-heading font-600 text-sm ${i === 1 ? 'text-white' : 'text-brand-dark'}`}>
                      {t.author}
                    </p>
                    <p className={`font-heading text-xs mt-0.5 ${i === 1 ? 'text-white/40' : 'text-brand-muted'}`}>
                      {t.role}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-body text-xs text-brand-gold mb-0.5">{t.property}</p>
                    <p className={`font-display text-lg tracking-tight ${i === 1 ? 'text-white' : 'text-brand-dark'}`}>
                      {t.value}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA below */}
        <div className="text-center mt-16">
          <a
            href="/concierge"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-dark text-white font-heading text-xs tracking-widest uppercase rounded-full transition-all duration-300 hover:bg-brand-gold hover:shadow-gold hover:scale-105"
          >
            Begin Your Journey
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
