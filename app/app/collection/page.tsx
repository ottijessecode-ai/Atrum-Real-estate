"use client";
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

const categories = ['All', 'Waterfront', 'Urban', 'Alpine', 'Historic'];

const catalog = [
  { id: 1, title: 'CÃ´te d\'Azur Collection', category: 'Waterfront', count: 12, region: 'French Riviera', minPrice: 'â‚¬4.5M' },
  { id: 2, title: 'City Apex Series', category: 'Urban', count: 8, region: 'New York Â· London Â· Dubai', minPrice: '$6M' },
  { id: 3, title: 'Alpine Sanctuaries', category: 'Alpine', count: 6, region: 'Switzerland Â· Austria', minPrice: 'CHF 3.2M' },
  { id: 4, title: 'Heritage Residences', category: 'Historic', count: 9, region: 'UK Â· France Â· Italy', minPrice: 'Â£2.8M' },
  { id: 5, title: 'Marina Residences', category: 'Waterfront', count: 14, region: 'Dubai Â· Singapore Â· Monaco', minPrice: 'AED 8M' },
  { id: 6, title: 'Penthouse Index', category: 'Urban', count: 11, region: 'Global Top-Tier Cities', minPrice: '$8M' },
];

function Collection() {
  const [active, setActive] = useState('All');
  const [showFilters, setShowFilters] = useState(true);
  const lastScrollY = useRef(0);

  const filtered = active === 'All' ? catalog : catalog.filter(c => c.category === active);

  useEffect(() => {
    gsap.fromTo('.catalog-card',
      { opacity: 0, scale: 0.94, y: 30 },
      { opacity: 1, scale: 1, y: 0, stagger: 0.07, duration: 0.7, ease: 'power3.out' }
    );
  }, [active]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
        setShowFilters(false);
      } else {
        setShowFilters(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo('.collection-banner',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="pt-32 pb-12 bg-white/30 border-b border-[#1A1A1A]/5">
        <div className="collection-banner max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-brand-gold" />
            <span className="font-heading text-xs tracking-widest uppercase text-brand-gold">Curated Collections</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <h1 className="font-display text-5xl md:text-7xl text-[#1A1A1A] tracking-tighter">
                The Collection
              </h1>
            </div>
            <div>
              <p className="font-body text-[#1A1A1A]/50 leading-relaxed max-w-md">
                Thematically grouped portfolios of exceptional properties, 
                curated by geography, architecture, and lifestyle alignment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter bar */}
      <div className={`sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#1A1A1A]/5 transition-transform duration-500 ease-expo ${
        showFilters ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-4 flex gap-3 overflow-x-auto no-scrollbar">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`flex-shrink-0 px-6 py-2.5 rounded-full font-heading text-[10px] tracking-widest uppercase transition-all duration-300 ${
                active === c
                  ? 'bg-[#1A1A1A] text-white shadow-lg'
                  : 'bg-white/40 text-[#1A1A1A]/60 border border-[#1A1A1A]/5 hover:border-brand-gold hover:text-brand-gold'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Catalog Grid */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((item, i) => (
            <Link
              key={item.id}
              href="/listings"
              className={`catalog-card group block rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-premium bg-white/40 backdrop-blur-md border border-[#1A1A1A]/5 ${
                i === 0 ? 'md:col-span-2' : ''
              }`}
            >
              {/* Visual */}
              <div
                className="relative overflow-hidden bg-[#F2EDE6]"
                style={{
                  height: i === 0 ? '360px' : '280px',
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-10 select-none">
                  <span className="font-display text-[12rem] font-bold text-brand-gold">{item.count}</span>
                </div>
                {/* Category pill */}
                <div className="absolute top-6 left-6">
                  <span className="font-heading text-[9px] tracking-widest uppercase px-4 py-2 rounded-full bg-white/90 text-brand-gold border border-[#1A1A1A]/5 shadow-sm">
                    {item.category}
                  </span>
                </div>
                {/* Count */}
                <div className="absolute bottom-6 right-6">
                  <span className="font-heading text-[9px] text-[#1A1A1A]/20 tracking-widest uppercase">
                    {item.count} Properties
                  </span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Info */}
              <div className="p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl text-[#1A1A1A] tracking-tight mb-1 group-hover:text-brand-gold transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="font-heading text-[10px] text-[#1A1A1A]/30 tracking-widest uppercase">{item.region}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-body text-[10px] text-[#1A1A1A]/20 mb-0.5">From</p>
                    <p className="font-display text-xl text-[#1A1A1A] tracking-tight">{item.minPrice}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;
