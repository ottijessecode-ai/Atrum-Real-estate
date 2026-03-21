import { Link } from 'react-router-dom';

const footerLinks = {
  Properties: [
    { label: 'Exclusive Listings', href: '/listings' },
    { label: 'The Collection', href: '/collection' },
    { label: 'Property Detail', href: '/property/1' },
    { label: 'New Developments', href: '/listings' },
  ],
  Company: [
    { label: 'Our Philosophy', href: '/philosophy' },
    { label: 'Investment Portfolios', href: '/investments' },
    { label: 'Global Branches', href: '/branches' },
    { label: 'Private Concierge', href: '/concierge' },
  ],
  Contact: [
    { label: '+1 (212) 555-0190', href: 'tel:+12125550190' },
    { label: 'private@aurum.estate', href: 'mailto:private@aurum.estate' },
    { label: '432 Park Avenue, NYC', href: '#' },
    { label: 'Geneva · Dubai · London', href: '/branches' },
  ],
};

const socials = [
  { label: 'Instagram', href: '#', icon: 'IG' },
  { label: 'LinkedIn', href: '#', icon: 'LI' },
  { label: 'Telegram', href: '#', icon: 'TG' },
];

export function Footer() {
  return (
    <footer className="bg-[#FFF0C3] text-[#1A1A1A]/80 border-t border-[#1A1A1A]/5">
      {/* Top Section */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center shadow-lg">
                <span className="text-white font-display font-bold text-lg">A</span>
              </div>
              <span className="font-heading font-700 tracking-[0.3em] text-[10px] uppercase text-[#1A1A1A]">AURUM ESTATE</span>
            </div>
            <p className="font-body text-[#1A1A1A]/50 text-base leading-relaxed max-w-sm mb-10">
              We don't sell properties.<br />
              We curate legacies.
            </p>
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full border border-[#1A1A1A]/10 flex items-center justify-center text-[10px] font-heading text-[#1A1A1A]/50 hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-all duration-500"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-heading text-[10px] tracking-widest uppercase text-brand-gold mb-8 font-700">
                {category}
              </h4>
              <ul className="space-y-4">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.href}
                      className="font-body text-sm text-[#1A1A1A]/50 hover:text-brand-gold transition-colors duration-300"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="h-px bg-brand-gold/20" />
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-heading text-[10px] text-[#1A1A1A]/30 tracking-widest uppercase">
          © 2025 AURUM Estate · Licensed Real Estate Brokerage
        </p>
        <div className="flex gap-8">
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((t) => (
            <a key={t} href="#" className="font-heading text-[10px] text-[#1A1A1A]/30 hover:text-brand-gold transition-colors duration-300 uppercase tracking-widest">
              {t}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
