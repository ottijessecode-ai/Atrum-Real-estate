"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Check, X } from "lucide-react";
import { PROPERTIES } from "@/data/properties";

export function SiteVisitModal() {
  const [open, setOpen] = useState(false);
  const listing = PROPERTIES[0];

  useEffect(() => {
    // Show modal after 3 seconds on the home page
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent showCloseButton={false} className="w-[90vw] max-w-[800px] h-[80vh] min-h-[400px] max-h-[500px] p-0 overflow-hidden bg-white border-none rounded-xl relative">
        <DialogClose className="absolute top-4 right-4 z-50 p-2 bg-[#1A1A1A]/5 hover:bg-[#1A1A1A]/10 rounded-full text-[#1A1A1A] transition-colors focus:outline-none">
          <X className="w-5 h-5" />
          <span className="sr-only">Close</span>
        </DialogClose>
        <DialogTitle className="sr-only">Schedule a site visit</DialogTitle>
        <DialogDescription className="sr-only">Details about {listing.title} and scheduling a visit.</DialogDescription>
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          {/* External Image placeholder */}
          <div className="relative h-[200px] md:h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1600607687931-cecebd80d600?auto=format&fit=crop&q=80"
              alt={listing.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 z-10">
              <span className="font-heading text-[9px] tracking-widest uppercase px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#1A1A1A] border border-[#1A1A1A]/5 shadow-sm">
                {listing.tag}
              </span>
            </div>
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center h-full">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-[#1A1A1A] mb-2 leading-[1.1]">
              {listing.title}
            </h2>
            <p className="font-heading text-[10px] text-[#1A1A1A]/50 tracking-[0.15em] uppercase mb-4">
              {listing.location}
            </p>
            <p className="text-[#1A1A1A]/70 mb-6 font-sans text-xs md:text-sm leading-relaxed line-clamp-3">
              A well-established neighborhood boasting solid infrastructure and fantastic access to all that the city has to offer. Enjoy modern living in a vibrant, centralized location with immediate value.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                `${listing.beds} Bedrooms, ${listing.baths} Baths`,
                `${listing.sqft} sqft Living Space`,
                "Premium Infrastructure",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#1A1A1A]/80 font-sans text-xs md:text-sm">
                  <div className="bg-[#48BB78] rounded p-[2px]">
                     <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <p className="font-display text-xl text-[#1A1A1A] font-medium tracking-tight mb-3">
                {listing.price}
              </p>
              <button
                onClick={() => setOpen(false)}
                className="bg-[#111625] text-white py-3.5 px-6 w-full font-sans font-medium text-sm hover:bg-brand-gold transition-colors duration-300 rounded"
              >
                Schedule your site visit today!
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
