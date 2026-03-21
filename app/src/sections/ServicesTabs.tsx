import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 'exterior',
    title: 'Exterior design',
    description: 'Lorem ipsum dolor sit amet consectetur faucibus nunc habitasse aliquam vestibulum auctor fringilla risus consequat est semper.',
    image: '/images/service-exterior.jpg',
  },
  {
    id: 'decoration',
    title: 'Decoration',
    description: 'Transform your space with our expert decoration services, bringing elegance and style to every corner.',
    image: '/images/service-decoration.jpg',
  },
  {
    id: 'construction',
    title: 'Construction',
    description: 'From foundation to finish, we build structures that stand the test of time with quality craftsmanship.',
    image: '/images/service-construction.jpg',
  },
  {
    id: 'interior',
    title: 'Interior design',
    description: 'Create beautiful, functional spaces that reflect your personality and enhance your lifestyle.',
    image: '/images/service-interior.jpg',
  },
];

export function ServicesTabs() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-dark mb-4">
            From concept to completion
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur faucibus nunc habitasse aliquam vestibulum auctor fringilla risus consequat est semper.
          </p>
          <Link to="/services">
            <Button variant="outline" className="mt-6 rounded-full border-dark text-dark hover:bg-dark hover:text-white">
              Browse all services
            </Button>
          </Link>
        </motion.div>

        {/* Tabs and Image */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service)}
                className={`w-full text-left p-4 rounded-2xl transition-all duration-300 ${
                  activeService.id === service.id
                    ? 'bg-coral-light'
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3
                      className={`text-lg font-medium transition-colors ${
                        activeService.id === service.id
                          ? 'text-coral'
                          : 'text-dark'
                      }`}
                    >
                      {service.title}
                    </h3>
                    {activeService.id === service.id && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-sm text-muted-foreground mt-2"
                      >
                        {service.description}
                      </motion.p>
                    )}
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 transition-all duration-300 ${
                      activeService.id === service.id
                        ? 'text-coral rotate-90'
                        : 'text-gray-400'
                    }`}
                  />
                </div>
              </button>
            ))}
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeService.id}
                src={activeService.image}
                alt={activeService.title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
