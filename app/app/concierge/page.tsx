"use client";
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const services = [
  'Private Acquisitions',
  'Portfolio Management',
  'Investment Advisory',
  'Relocation Services',
  'Interior Consultation',
  'Property Development',
];

function Concierge() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!formRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo('.concierge-left',
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out', delay: 0.2 }
      );
      gsap.fromTo('.form-field',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.08, duration: 0.7, ease: 'power3.out', delay: 0.4 }
      );
    }, formRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    gsap.fromTo('.success-msg',
      { opacity: 0, scale: 0.9, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );
  };

  return (
    <div className="min-h-screen bg-white" ref={formRef}>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Info Panel - High Contrast Dark */}
        <div className="concierge-left flex flex-col justify-center px-10 lg:px-20 pt-28 pb-16 lg:py-20 bg-[#1A1A1A] text-white">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-10 bg-brand-gold" />
            <span className="font-heading text-[10px] tracking-widest uppercase text-brand-gold">Private Access</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl text-white tracking-tighter leading-none mb-8">
            Private<br />
            <em className="text-brand-gold not-italic">Concierge</em><br />
            Service.
          </h1>

          <p className="font-body text-white/50 text-base md:text-lg leading-relaxed max-w-sm mb-16">
            Every inquiry is handled personally by a senior AURUM director.
            Responses are guaranteed within 4 business hours.
          </p>

          <div className="space-y-8">
            {[
              { icon: 'â—Ž', label: 'Global Intelligence Unit', val: '+1 212 555 0190' },
              { icon: 'â—¶', label: 'Private Advisory Email', val: 'private@aurum.estate' },
              { icon: 'â—‰', label: 'Secure Communication', val: 'Signal / WhatsApp' },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-5">
                <span className="text-brand-gold text-2xl mt-1">{c.icon}</span>
                <div>
                  <p className="font-heading text-[9px] text-white/30 tracking-widest uppercase mb-1">{c.label}</p>
                  <p className="font-display text-lg tracking-tight text-white/80">{c.val}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-white/5">
            <p className="font-heading text-[9px] text-white/20 tracking-widest uppercase mb-4">Availability Threshold</p>
            <p className="font-body text-xs text-white/40 leading-relaxed uppercase tracking-widest">
              Monâ€“Sat Â· 09:00â€”19:00 GMT<br />
              Global Response Coordination Active
            </p>
          </div>
        </div>

        {/* Right Form Panel - Light Theme */}
        <div className="bg-white flex flex-col justify-center px-10 lg:px-20 pt-28 pb-16 lg:py-20">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md w-full">
              <h2 className="font-display text-3xl md:text-4xl text-[#1A1A1A] tracking-tighter mb-12">
                Enquiry Credentials.
              </h2>

              <div className="space-y-8">
                {/* Name */}
                <div className="form-field">
                  <label className="block font-heading text-[10px] text-[#1A1A1A]/40 tracking-widest uppercase mb-3">Principal Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    required
                    className="w-full px-0 py-3 bg-transparent border-b border-[#1A1A1A]/10 font-display text-lg text-[#1A1A1A] placeholder:text-[#1A1A1A]/20 focus:outline-none focus:border-brand-gold transition-colors duration-300"
                  />
                </div>

                {/* Email + Phone */}
                <div className="form-field grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block font-heading text-[10px] text-[#1A1A1A]/40 tracking-widest uppercase mb-3">Email Portfolio</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full px-0 py-3 bg-transparent border-b border-[#1A1A1A]/10 font-display text-lg text-[#1A1A1A] placeholder:text-[#1A1A1A]/20 focus:outline-none focus:border-brand-gold transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label className="block font-heading text-[10px] text-[#1A1A1A]/40 tracking-widest uppercase mb-3">Direct Contact</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (000) 000"
                      className="w-full px-0 py-3 bg-transparent border-b border-[#1A1A1A]/10 font-display text-lg text-[#1A1A1A] placeholder:text-[#1A1A1A]/20 focus:outline-none focus:border-brand-gold transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Service */}
                <div className="form-field">
                  <label className="block font-heading text-[10px] text-[#1A1A1A]/40 tracking-widest uppercase mb-3">Advisory Requirement</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-b border-[#1A1A1A]/10 font-display text-lg text-[#1A1A1A] focus:outline-none focus:border-brand-gold transition-colors duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-white">Select Requirement</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-white">{s}</option>
                    ))}
                  </select>
                </div>

                {/* Budget */}
                <div className="form-field">
                  <label className="block font-heading text-[10px] text-[#1A1A1A]/40 tracking-widest uppercase mb-3">Investment parameters</label>
                  <input
                    type="text"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    placeholder="e.g. $10M+"
                    className="w-full px-0 py-3 bg-transparent border-b border-[#1A1A1A]/10 font-display text-lg text-[#1A1A1A] placeholder:text-[#1A1A1A]/20 focus:outline-none focus:border-brand-gold transition-colors duration-300"
                  />
                </div>

                {/* Message */}
                <div className="form-field">
                  <label className="block font-heading text-[10px] text-[#1A1A1A]/40 tracking-widest uppercase mb-3">Brief / Intent</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={1}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-0 py-3 bg-transparent border-b border-[#1A1A1A]/10 font-display text-lg text-[#1A1A1A] placeholder:text-[#1A1A1A]/20 focus:outline-none focus:border-brand-gold transition-colors duration-300 resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="form-field pt-6">
                  <button
                    type="submit"
                    className="group relative w-full py-5 bg-[#1A1A1A] text-white font-heading text-[11px] tracking-[0.3em] uppercase rounded-full transition-all duration-500 hover:bg-brand-gold hover:shadow-premium overflow-hidden"
                  >
                    <span className="relative z-10">Initiate Protocol</span>
                    <div className="absolute inset-0 bg-brand-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </button>
                  <p className="font-heading text-[9px] text-[#1A1A1A]/20 tracking-widest text-center mt-6 uppercase">
                    Non-Disclosure & Confidentiality Guaranteed
                  </p>
                </div>
              </div>
            </form>
          ) : (
            <div className="success-msg max-w-md w-full text-center py-20">
              <div className="w-24 h-24 rounded-full bg-brand-gold/10 border border-brand-gold flex items-center justify-center mx-auto mb-10">
                <span className="text-brand-gold text-4xl">âœ“</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-[#1A1A1A] tracking-tighter mb-6">Protocol Initiated.</h2>
              <p className="font-body text-[#1A1A1A]/50 text-base leading-relaxed mb-12">
                Thank you, {form.name || 'valued client'}. A senior director will establish a secure line of communication
                within the next 4 business hours.
              </p>
              <a href="/" className="inline-flex items-center gap-4 font-heading text-[10px] text-brand-gold tracking-[0.2em] uppercase py-4 px-10 rounded-full border border-brand-gold hover:bg-brand-gold hover:text-white transition-all">
                â† Return to Portfolio
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Concierge;
