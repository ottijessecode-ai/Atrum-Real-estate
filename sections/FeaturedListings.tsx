"use client";
import { useRef, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';
import { SITE_CONFIG } from '@/config/siteConfig';
import { PROPERTIES } from '@/data/properties';
import { SITE_DATA } from '@/constants/siteData';

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
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 mb-8 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 reveal-header">
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-8 bg-[#1A1A1A]" />
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-[#1A1A1A] tracking-tight m-0">
              {featured.title}
            </h2>
          </div>
          <div>
            <a
              href="/listings"
              className="inline-flex items-center justify-center font-sans text-sm text-white bg-[#111625] px-6 py-2.5 rounded-full hover:bg-brand-gold transition-colors duration-300"
            >
              Explore All Properties
            </a>
          </div>
        </div>
      </div>

      {/* Search Filter Container */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 mb-12 w-full reveal-header">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-xs text-[#1A1A1A]/70 font-sans tracking-wide">Property Title</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1A1A1A]/40 w-4 h-4" />
              <input type="text" placeholder="Search..." className="w-full bg-white/40 text-[#1A1A1A] pl-10 pr-4 py-3 rounded-lg border border-[#1A1A1A]/10 outline-none focus:ring-1 focus:ring-[#1A1A1A] font-sans placeholder:text-[#1A1A1A]/40 text-sm" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs text-[#1A1A1A]/70 font-sans tracking-wide">Listing Status</label>
            <div className="relative">
              <select className="w-full bg-white/40 text-[#1A1A1A] px-4 py-3 rounded-lg border border-[#1A1A1A]/10 appearance-none outline-none focus:ring-1 focus:ring-[#1A1A1A] font-sans text-sm">
                <option>All</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1A1A1A]/40 w-4 h-4 pointer-events-none" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs text-[#1A1A1A]/70 font-sans tracking-wide">Property Type</label>
            <div className="relative">
              <select className="w-full bg-white/40 text-[#1A1A1A] px-4 py-3 rounded-lg border border-[#1A1A1A]/10 appearance-none outline-none focus:ring-1 focus:ring-[#1A1A1A] font-sans text-sm">
                <option>All</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1A1A1A]/40 w-4 h-4 pointer-events-none" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs text-[#1A1A1A]/70 font-sans tracking-wide">Property Location</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1A1A1A]/40 w-4 h-4" />
              <input type="text" placeholder="Search..." className="w-full bg-white/40 text-[#1A1A1A] pl-10 pr-4 py-3 rounded-lg border border-[#1A1A1A]/10 outline-none focus:ring-1 focus:ring-[#1A1A1A] font-sans placeholder:text-[#1A1A1A]/40 text-sm" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs text-[#1A1A1A]/70 font-sans tracking-wide">Bedroom</label>
            <input type="text" placeholder="Number..." className="w-full bg-white/40 text-[#1A1A1A] px-4 py-3 rounded-lg border border-[#1A1A1A]/10 outline-none focus:ring-1 focus:ring-[#1A1A1A] font-sans placeholder:text-[#1A1A1A]/40 text-sm" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs text-[#1A1A1A]/70 font-sans tracking-wide">Agent</label>
            <div className="relative">
              <select className="w-full bg-white/40 text-[#1A1A1A] px-4 py-3 rounded-lg border border-[#1A1A1A]/10 appearance-none outline-none focus:ring-1 focus:ring-[#1A1A1A] font-sans text-sm">
                <option>All</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1A1A1A]/40 w-4 h-4 pointer-events-none" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs text-[#1A1A1A]/70 font-sans tracking-wide">Property ID</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1A1A1A]/40 w-4 h-4" />
              <input type="text" placeholder="Search..." className="w-full bg-white/40 text-[#1A1A1A] pl-10 pr-4 py-3 rounded-lg border border-[#1A1A1A]/10 outline-none focus:ring-1 focus:ring-[#1A1A1A] font-sans placeholder:text-[#1A1A1A]/40 text-sm" />
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-end">
            <button className="w-full bg-[#111625] text-white py-3 rounded-lg font-sans text-sm hover:bg-[#1A1A1A]/80 transition-colors border border-transparent">
              Reset
            </button>
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
            Explore Full Catalog â†’
          </a>
        </div>
      </div>
    </section>
  );
}

