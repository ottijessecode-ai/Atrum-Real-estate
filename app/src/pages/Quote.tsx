import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const locations = [
  'New York, NY',
  'Los Angeles, CA',
  'Chicago, IL',
  'Miami, FL',
  'Seattle, WA',
];

const services = [
  'Architectural design',
  'Interior design',
  'Urban planning',
  '3D rendering',
  'Construction documentation',
  'Feasibility studies',
  'Project Management',
  'Sustainable Design',
];

export function Quote() {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-dark mb-4">
            Request a quote
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur faucibus nunc habitasse aliquam vestibulum auctor fringilla risus consequat est semper.
          </p>
        </motion.div>

        {/* Form Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="rounded-3xl overflow-hidden aspect-[3/4]">
              <img
                src="/images/quote-image.jpg"
                alt="Workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="First name"
                  className="bg-gray-50 border-gray-200 rounded-xl h-14"
                />
                <Input
                  placeholder="Last name"
                  className="bg-gray-50 border-gray-200 rounded-xl h-14"
                />
              </div>
              <Input
                type="email"
                placeholder="Email"
                className="bg-gray-50 border-gray-200 rounded-xl h-14"
              />
              <Input
                placeholder="Phone"
                className="bg-gray-50 border-gray-200 rounded-xl h-14"
              />
              <select className="w-full bg-gray-50 border border-gray-200 rounded-xl h-14 px-4 text-gray-600">
                <option value="">Location</option>
                {locations.map((location, index) => (
                  <option key={index} value={location}>{location}</option>
                ))}
              </select>
              <select className="w-full bg-gray-50 border border-gray-200 rounded-xl h-14 px-4 text-gray-600">
                <option value="">Service</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
              <Input
                placeholder="Company"
                className="bg-gray-50 border-gray-200 rounded-xl h-14"
              />
              <Button className="w-full bg-coral hover:bg-coral-hover text-white rounded-full h-14 text-base">
                Get more information
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
