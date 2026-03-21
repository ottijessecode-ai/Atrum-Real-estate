import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { gsap } from 'gsap';

export function NotFound() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.nf-404',
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' }
      );
      gsap.fromTo('.nf-content',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.4 }
      );
    });
    return () => gsap.globalTimeline.clear();
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <div className="nf-404 font-display text-[20vw] leading-none text-white/5 font-bold select-none mb-4">
          404
        </div>
        <div className="nf-content">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 bg-brand-gold" />
            <span className="font-heading text-xs tracking-widest uppercase text-brand-gold">Not Found</span>
            <span className="h-px w-8 bg-brand-gold" />
          </div>
          <h1 className="font-display text-4xl text-white tracking-tighter mb-4">
            This Property Has Been Sold
          </h1>
          <p className="font-body text-white/50 leading-relaxed mb-10">
            The page you're looking for no longer exists or has been moved.
            Our portfolio is always evolving — explore what's available now.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-3 px-8 py-4 bg-brand-gold text-white font-heading text-xs tracking-widest uppercase rounded-full transition-all duration-300 hover:bg-brand-gold-dim hover:shadow-gold"
          >
            ← Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
