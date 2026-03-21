import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { SITE_DATA } from '../constants/siteData';

export function FeaturedListings() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { featured } = SITE_DATA;

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo('.reveal-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Card Stagger
      gsap.fromTo('.listing-card',
        { opacity: 0, scale: 0.98, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.1,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: '.listings-grid',
            start: 'top 75%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 bg-brand-cream flex flex-col justify-center py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 mb-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 text-center lg:text-left">
            <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start reveal-header">
              <span className="h-px w-12 bg-brand-gold" />
              <span className="font-heading text-[10px] tracking-widest uppercase text-brand-gold">{featured.tag}</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl lg:text-[4.5rem] text-[#1A1A1A] tracking-tighter leading-[1] reveal-header">
              {featured.title}
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right hidden lg:block reveal-header">
            <a
              href="/listings"
              className="group inline-flex items-center gap-4 font-heading text-[10px] text-[#1A1A1A]/40 tracking-[0.2em] uppercase hover:text-brand-gold transition-all duration-500"
            >
              Explore Full Catalog
              <span className="w-10 h-10 rounded-full border border-[#1A1A1A]/10 flex items-center justify-center transition-all duration-500 group-hover:bg-brand-gold group-hover:text-white group-hover:border-brand-gold">
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Grid container */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 w-full">
        <div className="listings-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {featured.properties.map((p, i) => (
            <a
              key={p.id}
              href={`/property/${p.id}`}
              className="listing-card group block rounded-[2.5rem] overflow-hidden bg-white/40 backdrop-blur-md border border-[#1A1A1A] transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-premium hover:bg-white/60"
            >
              {/* Property Visual */}
              <div className="relative h-[280px] md:h-[340px] overflow-hidden bg-[#F2EDE6]">
                <div className="absolute inset-0 flex items-center justify-center opacity-10 select-none pointer-events-none transition-transform duration-1000 group-hover:scale-110">
                  <span className="font-display text-[12rem] md:text-[15rem] font-bold text-brand-gold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                
                {/* Tag */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="font-heading text-[9px] tracking-widest uppercase px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-[#1A1A1A] border border-[#1A1A1A]/5 shadow-sm">
                    {p.tag}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl text-[#1A1A1A] mb-2 tracking-tight group-hover:text-brand-gold transition-colors duration-500">{p.title}</h3>
                    <p className="font-heading text-[10px] text-[#1A1A1A]/30 tracking-[0.15em] uppercase">{p.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-2xl text-[#1A1A1A] font-500 tracking-tight">{p.price}</p>
                    <p className="font-heading text-[9px] text-brand-gold uppercase tracking-widest">Guide Price</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 md:gap-8 border-t border-[#1A1A1A]/5 pt-6">
                  {[
                    { val: p.beds, label: 'Beds' },
                    { val: p.baths, label: 'Baths' },
                    { val: p.sqft, label: 'sqft' },
                  ].map((d) => (
                    <div key={d.label}>
                      <p className="font-heading text-sm text-[#1A1A1A] font-600 mb-0.5">{d.val}</p>
                      <p className="font-heading text-[8px] text-[#1A1A1A]/30 uppercase tracking-widest">{d.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
        
        {/* Mobile Catalog Link */}
        <div className="mt-12 text-center lg:hidden">
          <a
            href="/listings"
            className="inline-flex items-center gap-4 font-heading text-[10px] text-brand-gold tracking-[0.2em] uppercase py-4 px-8 rounded-full border border-brand-gold/20 hover:bg-brand-gold hover:text-white transition-all"
          >
            Explore Full Catalog →
          </a>
        </div>
      </div>
    </section>
  );
}

