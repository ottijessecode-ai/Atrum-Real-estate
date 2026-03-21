import { useParams, Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const properties: Record<string, {
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  type: string;
  description: string;
  features: string[];
  floors: number;
  year: number;
}> = {
  '1': {
    title: 'The Observatory Penthouse',
    location: '432 Park Avenue, Manhattan, New York',
    price: '$32.5M',
    beds: 5,
    baths: 6,
    sqft: '8,200',
    type: 'Penthouse',
    description: 'Perched at the summit of one of Manhattan\'s most iconic towers, The Observatory offers 360° views of Central Park and the city skyline. Conceived by Raphael Viñoly Architects, the interiors are defined by 10-foot windows and hand-selected European stone throughout.',
    features: ['Private lobby', 'Double-height ceilings', '12-seat formal dining', 'Temperature-controlled wine cellar', 'Home theatre', 'Staff quarters', 'White-glove concierge'],
    floors: 84,
    year: 2016,
  },
  '2': {
    title: 'Villa Serenissima',
    location: 'Route de Lausanne 124, Geneva, Switzerland',
    price: 'CHF 28M',
    beds: 7,
    baths: 8,
    sqft: '12,400',
    type: 'Villa',
    description: 'Set across 2.4 acres of manicured lakeside gardens, Villa Serenissima represents the pinnacle of Geneva\'s residential market. The south-facing principal rooms enjoy uninterrupted views across Lac Léman to the Alps.',
    features: ['240m lake frontage', 'Private jetty', 'Heated infinity pool', 'Staff apartment', 'Garage for 8 vehicles', 'Helipad', 'Geothermal heating'],
    floors: 3,
    year: 1892,
  },
};

const specs = [
  { label: 'Bedrooms', icon: '🛏' },
  { label: 'Bathrooms', icon: '🛁' },
  { label: 'Interior Area', icon: '📐' },
  { label: 'Property Type', icon: '🏛' },
  { label: 'Floor', icon: '↑' },
  { label: 'Year Built', icon: '📅' },
];

export function PropertyDetail() {
  const { id } = useParams<{ id: string }>();
  const p = properties[id ?? '1'] ?? properties['1'];
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.detail-hero-text',
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 1, ease: 'power3.out', delay: 0.3 }
      );
      gsap.fromTo('.detail-side',
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.5 }
      );
      gsap.fromTo('.detail-spec',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.06, duration: 0.6, ease: 'power3.out', delay: 0.7 }
      );
    });
    return () => ctx.revert();
  }, [id]);

  const specValues = [p.beds, p.baths, p.sqft + ' sqft', p.type, p.floors, p.year];

  return (
    <div className="min-h-screen bg-[#FFF0C3]">
      {/* Hero Header */}
      <div
        ref={headerRef}
        className="relative h-[60vh] md:h-[70vh] flex items-end overflow-hidden"
        style={{ background: 'radial-gradient(circle at center, #F2EDE6 0%, #FFF0C3 100%)' }}
      >
        {/* Decorative Background Letter */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-display text-[40vw] font-bold text-brand-gold/[0.05] leading-none">
            {p.title[0]}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFF0C3] via-transparent to-transparent opacity-60" />

        {/* Hero text */}
        <div className="relative z-10 max-w-[1600px] mx-auto w-full px-6 lg:px-12 pb-16">
          <div className="detail-hero-text">
            <span className="inline-block font-heading text-[10px] text-brand-gold tracking-widest uppercase mb-6 border border-brand-gold/30 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md shadow-sm">
              {p.type} Portfolio
            </span>
          </div>
          <h1 className="detail-hero-text font-display text-4xl md:text-7xl lg:text-8xl text-[#1A1A1A] tracking-tighter leading-none mb-4">
            {p.title}
          </h1>
          <p className="detail-hero-text font-heading text-[10px] md:text-xs text-[#1A1A1A]/40 tracking-widest uppercase">
            {p.location}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Specs Grid - Mobile Friendly */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16 p-6 md:p-10 bg-white/40 backdrop-blur-md rounded-[2.5rem] border border-[#1A1A1A]/5 shadow-sm">
              {specs.map((s, i) => (
                <div key={s.label} className="detail-spec p-4 text-center md:text-left">
                  <span className="text-2xl mb-4 block group-hover:scale-110 transition-transform">{s.icon}</span>
                  <p className="font-display text-xl md:text-2xl text-[#1A1A1A] tracking-tight mb-1">{specValues[i]}</p>
                  <p className="font-heading text-[9px] text-[#1A1A1A]/30 tracking-widest uppercase">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="mb-16">
              <h2 className="font-display text-3xl text-[#1A1A1A] tracking-tight mb-6">Architectural Context</h2>
              <p className="font-body text-[#1A1A1A]/60 leading-relaxed text-base md:text-lg max-w-3xl">{p.description}</p>
            </div>

            {/* Features */}
            <div>
              <h2 className="font-display text-3xl text-[#1A1A1A] tracking-tight mb-8">Exclusive Amenities</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-4 p-4 rounded-2xl bg-white/20 border border-[#1A1A1A]/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                    <span className="font-heading text-[11px] uppercase tracking-widest text-[#1A1A1A]/70">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-4 detail-side">
            <div className="sticky top-28 rounded-[2.5rem] bg-[#1A1A1A] p-8 md:p-10 shadow-premium">
              <div className="flex justify-between items-start mb-2">
                <p className="font-heading text-[9px] text-brand-gold tracking-widest uppercase">Guide Price</p>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 text-xs">
                  ⓘ
                </div>
              </div>
              <p className="font-display text-4xl md:text-5xl text-white tracking-tighter mb-8">{p.price}</p>

              <div className="h-px bg-white/5 mb-8" />

              <div className="space-y-4">
                <Link
                  to="/concierge"
                  className="block w-full text-center py-5 bg-brand-gold text-white font-heading text-[10px] tracking-widest uppercase rounded-2xl hover:bg-brand-gold/80 transition-all duration-300 shadow-xl"
                >
                  Request Private Briefing
                </Link>
                <button className="block w-full text-center py-5 border border-white/10 text-white/40 font-heading text-[10px] tracking-widest uppercase rounded-2xl hover:border-brand-gold hover:text-brand-gold transition-all duration-300">
                  Download Full Portfolio
                </button>
              </div>

              <div className="mt-10 pt-8 border-t border-white/5">
                <p className="font-heading text-[9px] text-white/30 tracking-widest uppercase mb-6">Private Portfolio Manager</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative z-10 text-white font-heading text-lg font-600">JL</span>
                  </div>
                  <div>
                    <p className="font-heading text-sm text-white font-600">James Laurent</p>
                    <p className="font-body text-[10px] text-white/30 uppercase tracking-widest">Global Account Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
