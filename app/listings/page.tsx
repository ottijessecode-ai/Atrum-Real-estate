"use client";
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

const allListings = [
  {
    id: 1,
    title: 'The Observatory Penthouse',
    location: 'Manhattan, New York',
    price: '$32.5M',
    priceNum: 32500000,
    beds: 5,
    baths: 6,
    sqft: '8,200',
    type: 'Penthouse',
    status: 'Available',
    tag: 'NEW',
  },
  {
    id: 2,
    title: 'Villa Serenissima',
    location: 'Geneva, Switzerland',
    price: 'CHF 28M',
    priceNum: 28000000,
    beds: 7,
    baths: 8,
    sqft: '12,400',
    type: 'Villa',
    status: 'Available',
    tag: 'FEATURED',
  },
  {
    id: 3,
    title: 'Burj Khalifa Sky Residence',
    location: 'Downtown Dubai',
    price: 'AED 85M',
    priceNum: 85000000,
    beds: 4,
    baths: 5,
    sqft: '6,800',
    type: 'Penthouse',
    status: 'Under Offer',
    tag: null,
  },
  {
    id: 4,
    title: 'The Beaumont Estate',
    location: 'Mayfair, London',
    price: '£18.2M',
    priceNum: 18200000,
    beds: 6,
    baths: 7,
    sqft: '9,650',
    type: 'Townhouse',
    status: 'Available',
    tag: null,
  },
  {
    id: 5,
    title: 'Raffles Residences',
    location: 'Marina Bay, Singapore',
    price: 'SGD 22M',
    priceNum: 22000000,
    beds: 3,
    baths: 4,
    sqft: '4,200',
    type: 'Apartment',
    status: 'Available',
    tag: 'NEW',
  },
  {
    id: 6,
    title: 'The Grand Ocean Villa',
    location: 'Côte d\'Azur, France',
    price: '€45M',
    priceNum: 45000000,
    beds: 9,
    baths: 11,
    sqft: '18,000',
    type: 'Villa',
    status: 'Available',
    tag: 'EXCLUSIVE',
  },
];

const propertyTypes = ['All', 'Penthouse', 'Villa', 'Townhouse', 'Apartment'];

function Listings() {
  const [activeType, setActiveType] = useState('All');
  const sectionRef = useRef<HTMLDivElement>(null);

  const filtered = activeType === 'All'
    ? allListings
    : allListings.filter(p => p.type === activeType);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.listings-hero-text',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.fromTo('.property-card',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: 'power3.out',
      }
    );
  }, [activeType]);

  const [showFilters, setShowFilters] = useState(true);
  const lastScrollY = useRef(0);

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

  return (
    <div ref={sectionRef} className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="pt-32 pb-8 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="listings-hero-text">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 bg-brand-gold" />
            <span className="font-heading text-xs tracking-widest uppercase text-brand-gold">Exclusive Portfolio</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-[#1A1A1A] tracking-tighter mb-4">
            The Listings
          </h1>
          <p className="font-body text-[#1A1A1A]/50 max-w-lg">
            Handpicked properties from markets where access is earned, not given.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className={`sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#1A1A1A]/5 transition-transform duration-500 ease-expo ${
        showFilters ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-4 flex gap-3 overflow-x-auto no-scrollbar">
          {propertyTypes.map((t) => (
            <button
              key={t}
              onClick={() => setActiveType(t)}
              className={`flex-shrink-0 px-6 py-2.5 rounded-full font-heading text-[10px] tracking-widest uppercase transition-all duration-300 ${
                activeType === t
                  ? 'bg-[#1A1A1A] text-white shadow-lg'
                  : 'bg-white/40 text-[#1A1A1A]/60 border border-[#1A1A1A]/5 hover:border-brand-gold hover:text-brand-gold'
              }`}
            >
              {t}
            </button>
          ))}
          <div className="ml-auto flex-shrink-0 flex items-center gap-2 text-[10px] text-[#1A1A1A]/30 font-heading uppercase tracking-widest">
            <span>{filtered.length} Properties</span>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10">
          {filtered.map((p) => (
            <Link
              key={p.id}
              href={`/property/${p.id}`}
              className="property-card group block rounded-[2.5rem] overflow-hidden bg-white/40 backdrop-blur-md border border-[#1A1A1A]/5 shadow-sm transition-all duration-700 hover:shadow-premium hover:-translate-y-2 hover:bg-white/60"
            >
              {/* Image area placeholder */}
              <div
                className="relative h-64 md:h-72 overflow-hidden bg-[#F2EDE6]"
              >
                {/* Decorative fill */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 select-none">
                  <span className="font-display text-[10rem] font-bold text-brand-gold">{p.title[0]}</span>
                </div>
                <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Status + Tag */}
                <div className="absolute top-6 left-6 flex gap-2">
                  {p.tag && (
                    <span className="px-4 py-1.5 rounded-full bg-brand-gold text-white font-heading text-[9px] tracking-widest uppercase shadow-sm">
                      {p.tag}
                    </span>
                  )}
                  {p.status === 'Under Offer' && (
                    <span className="px-4 py-1.5 rounded-full bg-white/90 text-[#1A1A1A]/60 font-heading text-[9px] tracking-widest uppercase backdrop-blur-md border border-[#1A1A1A]/10 shadow-sm">
                      Under Offer
                    </span>
                  )}
                </div>

                {/* Arrow on hover */}
                <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border border-[#1A1A1A]/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 shadow-sm">
                  <span className="text-[#1A1A1A] text-lg">→</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-8">
                <p className="font-heading text-[9px] text-brand-gold tracking-widest uppercase mb-3">{p.type}</p>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl text-[#1A1A1A] tracking-tight mb-1 group-hover:text-brand-gold transition-colors duration-500">
                      {p.title}
                    </h3>
                    <p className="font-heading text-[10px] text-[#1A1A1A]/30 uppercase tracking-widest">{p.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-2xl text-[#1A1A1A] font-500 tracking-tight">{p.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-8 border-t border-[#1A1A1A]/5 pt-6">
                  {[
                    { v: p.beds, l: 'Beds' },
                    { v: p.baths, l: 'Baths' },
                    { v: p.sqft, l: 'sqft' },
                  ].map((d) => (
                    <div key={d.l}>
                      <p className="font-heading text-sm text-[#1A1A1A] font-600 mb-0.5">{d.v}</p>
                      <p className="font-heading text-[8px] text-[#1A1A1A]/30 uppercase tracking-widest">{d.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Listings;
