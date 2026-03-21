"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const pillars = [
  {
    num: '01',
    title: 'Curation Over Volume',
    body: 'We hold fewer than 40 active listings at any time. Every property is personally evaluated by our senior directors before representation.',
  },
  {
    num: '02',
    title: 'Discretion as Standard',
    body: 'Many of our transactions never appear on public records. Our network operates on trust built over decades, not databases.',
  },
  {
    num: '03',
    title: 'Legacy, Not Transaction',
    body: 'We ask our clients not what they want to buy, but what kind of life they wish to build. The property follows.',
  },
  {
    num: '04',
    title: 'Lifetime Partnership',
    body: 'Our relationships span generations. Some clients have worked with the same AURUM advisor for over 25 years.',
  },
];

function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.phil-left',
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out', delay: 0.2 }
      );
      gsap.fromTo('.phil-right',
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.2,
          scrollTrigger: {
            trigger: '.phil-right',
            start: 'top 80%',
          },
        }
      );
      gsap.fromTo('.pillar-item',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.pillars-grid',
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-brand-bg">
      {/* Split-screen Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Dark Left Panel */}
        <div className="phil-left bg-brand-dark flex flex-col justify-center px-10 lg:px-16 py-28 lg:py-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-brand-gold" />
            <span className="font-heading text-xs tracking-widest uppercase text-brand-gold">Our Philosophy</span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl text-white tracking-tighter leading-none mb-8">
            The Art of<br />
            <em className="text-gold-shimmer not-italic">Knowing When</em><br />
            Not to Sell.
          </h1>

          <p className="font-body text-white/50 text-base leading-relaxed max-w-md mb-12">
            The rarest properties are never advertised. They are whispered from one trusted advisor
            to another. At AURUM, we have spent 25 years earning that whisper.
          </p>

          <div className="flex gap-8">
            {[
              { v: '1998', l: 'Founded' },
              { v: '26', l: 'Countries' },
              { v: '98%', l: 'Off-market' },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-3xl text-brand-gold tracking-tight">{s.v}</p>
                <p className="font-heading text-xs text-white/40 tracking-widest uppercase">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Light Right Panel */}
        <div className="phil-right bg-brand-cream flex flex-col justify-center px-10 lg:px-16 py-28 lg:py-20">
          <div
            className="w-full h-64 rounded-3xl mb-10 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #2C2C2C 0%, #1A1A1A 100%)' }}
          >
            <p className="font-display text-8xl text-brand-gold/15 font-bold">A</p>
          </div>

          <blockquote className="font-display text-2xl md:text-3xl text-brand-dark tracking-tight leading-snug italic mb-6">
            "We are not in the business of real estate. We are in the business of trust."
          </blockquote>
          <p className="font-heading text-xs text-brand-muted tracking-widest uppercase">
            â€” Founder, AURUM Estate
          </p>
        </div>
      </div>

      {/* Pillars Section */}
      <div className="py-24 lg:py-32 bg-brand-bg">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-brand-dark tracking-tighter">
              Four Pillars of Practice
            </h2>
          </div>
          <div className="pillars-grid grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p) => (
              <div
                key={p.num}
                className="pillar-item p-8 rounded-3xl bg-white shadow-premium hover:shadow-premium-hover transition-all duration-500 hover:-translate-y-1 group"
              >
                <p className="font-display text-4xl text-brand-gold/30 tracking-tighter mb-4 group-hover:text-brand-gold transition-colors duration-500">
                  {p.num}
                </p>
                <h3 className="font-display text-2xl text-brand-dark tracking-tight mb-3">{p.title}</h3>
                <p className="font-body text-brand-muted leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Philosophy;
