import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const offices = [
  {
    id: 1,
    title: 'House architecture design in Los Angeles, CA',
    category: 'Architecture',
    location: 'Los Angeles, CA',
    date: 'Oct 2026',
    image: '/images/office-1.jpg',
  },
  {
    id: 2,
    title: 'Modern office space in New York, NY',
    category: 'Interior Design',
    location: 'New York, NY',
    date: 'Nov 2026',
    image: '/images/office-2.jpg',
  },
];

export function OfficeTour() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentOffice = offices[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % offices.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + offices.length) % offices.length);
  };

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-dark mb-4">
              Tour our office space
            </h2>
            <p className="text-muted-foreground max-w-lg">
              Lorem ipsum dolor sit amet consectetur faucibus nunc habitasse aliquam vestibulum auctor fringilla risus consequat est semper.
            </p>
          </div>
          <Link to="/contact" className="mt-4 lg:mt-0">
            <Button className="bg-coral hover:bg-coral-hover text-white rounded-full">
              Get in touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>

        {/* Slider */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[16/10] rounded-3xl overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentOffice.id}
                src={currentOffice.image}
                alt={currentOffice.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:pl-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentOffice.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-semibold text-dark mb-4">
                  {currentOffice.title}
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground mb-8">
                  <p>{currentOffice.category}</p>
                  <p>{currentOffice.location}</p>
                  <p>{currentOffice.date}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center gap-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-coral hover:border-coral hover:text-white transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-coral hover:border-coral hover:text-white transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <span className="text-sm text-muted-foreground ml-4">
                {currentIndex + 1} / {offices.length}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
