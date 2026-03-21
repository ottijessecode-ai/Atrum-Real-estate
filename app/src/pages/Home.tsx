import React from 'react';
import { Hero } from '../sections/Hero';
import EditorialVision from '../sections/EditorialVision';
import ExpertiseGrid from '../sections/ExpertiseGrid';
import { FeaturedListings } from '../sections/FeaturedListings';
import { GlobeSection } from '../sections/GlobeSection';
import ProcessTimeline from '../sections/ProcessTimeline';
import { TestimonialParallax } from '../sections/TestimonialParallax';

const Home: React.FC = () => {
  return (
    <main className="bg-[#FFF0C3] overflow-x-hidden relative">
      <div className="noise opacity-[0.03] pointer-events-none" />
      {/* 1. Canvas Hero (Scrolltelling) */}
      <Hero />

      {/* 2. Editorial Vision (Philosophy Reveal) */}
      <EditorialVision />

      {/* 3. Expertise Grid (Services/Categories) */}
      <ExpertiseGrid />

      {/* 4. Portfolio (Featured Work) */}
      <FeaturedListings />

      {/* 5. Global Presence (Interactive Globe) */}
      <GlobeSection />

      {/* 6. The Process (Numbered Steps) */}
      <ProcessTimeline />

      {/* 7. Client Stories (Parallax Testimonials) */}
      <TestimonialParallax />
    </main>
  );
};

export default Home;
