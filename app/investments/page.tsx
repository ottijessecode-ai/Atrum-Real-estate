"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';

const yoyData = [
  { year: '2020', value: 18.2 },
  { year: '2021', value: 22.1 },
  { year: '2022', value: 26.8 },
  { year: '2023', value: 31.4 },
  { year: '2024', value: 38.9 },
  { year: '2025', value: 47.2 },
];

const sectorData = [
  { name: 'Penthouse', pct: 38 },
  { name: 'Villa', pct: 27 },
  { name: 'Estate', pct: 18 },
  { name: 'Apartment', pct: 11 },
  { name: 'Other', pct: 6 },
];

const portfolios = [
  {
    name: 'Apex Alpha',
    roi: '18.4%',
    horizon: '5-Year',
    type: 'Urban Penthouses',
    aum: '$240M',
    status: 'Open',
  },
  {
    name: 'Riviera Reserve',
    roi: '14.2%',
    horizon: '7-Year',
    type: 'Waterfront Estates',
    aum: '$310M',
    status: 'Closed',
  },
  {
    name: 'Alpine Accord',
    roi: '11.8%',
    horizon: '10-Year',
    type: 'Alpine Sanctuaries',
    aum: '$185M',
    status: 'Open',
  },
];

const CustomTooltip = ({ active, payload, label }: {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
}) => {
  if (active && payload?.length) {
    return (
      <div className="glass-dark rounded-xl px-4 py-3 border-gold text-white text-sm font-heading">
        <p className="text-brand-gold tracking-widest uppercase text-xs">{label}</p>
        <p className="text-white font-600">${payload[0].value}B AUM</p>
      </div>
    );
  }
  return null;
};

function Investments() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.inv-stat',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.inv-stats', start: 'top 80%' },
        }
      );
      gsap.fromTo('.chart-box',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.charts-grid', start: 'top 80%' },
        }
      );
      gsap.fromTo('.port-row',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.portfolios-table', start: 'top 80%' },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-brand-bg">
      {/* Header */}
      <div className="pt-32 pb-20 bg-brand-dark">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-brand-gold" />
            <span className="font-heading text-xs tracking-widest uppercase text-brand-gold">Investment Division</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-white tracking-tighter mb-6">
            Investment<br />Portfolios
          </h1>
          <p className="font-body text-white/50 max-w-xl leading-relaxed">
            Institutional-grade luxury real estate portfolios built on proprietary market intelligence.
            Access is by introduction only.
          </p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="inv-stats max-w-[1600px] mx-auto px-6 lg:px-12 py-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { v: '$4.2B', l: 'Total AUM', sub: '↑ 21% YoY' },
          { v: '16.2%', l: 'Avg. Annual ROI', sub: 'Across all portfolios' },
          { v: '380+', l: 'Properties', sub: 'Under management' },
          { v: '£18.2M', l: 'Avg. Asset Value', sub: 'Per holding' },
        ].map((s) => (
          <div key={s.l} className="inv-stat p-6 bg-white rounded-3xl shadow-premium">
            <p className="font-display text-3xl text-brand-dark tracking-tighter mb-1">{s.v}</p>
            <p className="font-heading text-xs text-brand-muted tracking-widest uppercase mb-1">{s.l}</p>
            <p className="font-body text-xs text-brand-gold">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="charts-grid max-w-[1600px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-8 pb-16">
        <div className="chart-box lg:col-span-2 bg-white rounded-3xl p-8 shadow-premium">
          <h3 className="font-display text-xl text-brand-dark tracking-tight mb-2">Assets Under Management (2020–2025)</h3>
          <p className="font-heading text-xs text-brand-muted tracking-widest uppercase mb-6">USD Billions</p>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={yoyData}>
              <defs>
                <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#C5A377" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#C5A377" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#F2EDE6" />
              <XAxis dataKey="year" stroke="#999" tick={{ fontSize: 12, fontFamily: 'Space Grotesk' }} />
              <YAxis stroke="#999" tick={{ fontSize: 12, fontFamily: 'Space Grotesk' }} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="value" stroke="#C5A377" strokeWidth={2.5} fill="url(#goldGrad)" dot={{ fill: '#C5A377', r: 4 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box bg-brand-dark rounded-3xl p-8">
          <h3 className="font-display text-xl text-white tracking-tight mb-6">Portfolio by Sector</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={sectorData} layout="vertical">
              <XAxis type="number" domain={[0, 50]} stroke="transparent" tick={false} />
              <YAxis type="category" dataKey="name" stroke="transparent" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12, fontFamily: 'Space Grotesk' }} width={80} />
              <Bar dataKey="pct" fill="#C5A377" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>

          <div className="mt-6 space-y-2">
            {sectorData.map(s => (
              <div key={s.name} className="flex justify-between items-center">
                <span className="font-heading text-xs text-white/50 tracking-wide">{s.name}</span>
                <span className="font-heading text-sm text-brand-gold font-600">{s.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Table */}
      <div className="portfolios-table max-w-[1600px] mx-auto px-6 lg:px-12 pb-24">
        <h2 className="font-display text-3xl text-brand-dark tracking-tighter mb-8">Active Portfolios</h2>
        <div className="space-y-4">
          {portfolios.map((p) => (
            <div
              key={p.name}
              className="port-row flex flex-wrap items-center gap-6 p-6 bg-white rounded-2xl shadow-premium hover:shadow-premium-hover transition-all duration-300 hover:-translate-y-0.5 cursor-pointer group"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-display text-xl text-brand-dark tracking-tight group-hover:text-brand-gold transition-colors duration-300">
                    {p.name}
                  </h3>
                  <span className={`font-heading text-xs tracking-widest uppercase px-3 py-1 rounded-full ${
                    p.status === 'Open'
                      ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                      : 'bg-gray-100 text-gray-400 border border-gray-200'
                  }`}>
                    {p.status}
                  </span>
                </div>
                <p className="font-heading text-xs text-brand-muted tracking-widest uppercase">{p.type}</p>
              </div>
              <div className="text-center">
                <p className="font-display text-2xl text-brand-gold tracking-tight">{p.roi}</p>
                <p className="font-heading text-xs text-brand-muted tracking-widest uppercase">Avg ROI</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-base text-brand-dark font-600">{p.horizon}</p>
                <p className="font-heading text-xs text-brand-muted tracking-widest uppercase">Horizon</p>
              </div>
              <div className="text-center">
                <p className="font-display text-xl text-brand-dark tracking-tight">{p.aum}</p>
                <p className="font-heading text-xs text-brand-muted tracking-widest uppercase">AUM</p>
              </div>
              <div className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center group-hover:border-brand-gold group-hover:text-brand-gold text-brand-muted transition-all duration-300">
                →
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/concierge"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-dark text-white font-heading text-xs tracking-widest uppercase rounded-full hover:bg-brand-gold hover:shadow-gold transition-all duration-300"
          >
            Request Investor Pack
          </a>
        </div>
      </div>
    </div>
  );
}

export default Investments;
