"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Check } from "lucide-react";

export function SiteVisitModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show modal after 3 seconds on the home page
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-[900px] p-0 overflow-hidden bg-white border-none rounded-xl">
        <DialogTitle className="sr-only">Schedule a site visit</DialogTitle>
        <DialogDescription className="sr-only">Details about our Treasure tucked away in Surulere and scheduling a visit.</DialogDescription>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* External Image placeholder */}
          <div className="relative h-[250px] md:h-[500px] w-full">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
              alt="Perez Court Architecture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1A1A1A] mb-6 leading-[1.1]">
              Our Treasure tucked away in Surulere
            </h2>
            <p className="text-[#1A1A1A]/70 mb-8 font-sans text-sm md:text-base leading-relaxed">
              A well-established neighborhood boasting solid infrastructure and fantastic access to all that Lagos has to offer. At Perez Court, you can enjoy modern living in a vibrant, central location.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Well-Developed Infrastructure",
                "Tranquil Environment",
                "Immediate Value",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#1A1A1A]/80 font-sans text-sm md:text-base">
                  <div className="bg-[#48BB78] rounded p-[2px]">
                     <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setOpen(false)}
              className="bg-[#111625] text-white py-4 px-6 md:px-8 w-full font-sans font-medium text-sm md:text-base hover:bg-brand-gold transition-colors duration-300 rounded"
            >
              Schedule your site visit today!
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
