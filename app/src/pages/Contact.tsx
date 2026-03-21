import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowRight, Plus, Minus, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const offices = [
  { city: 'Ottawa, Canada', email: 'hello@archipro.com', flag: '🇨🇦' },
  { city: 'New York, USA', email: 'hello@archipro.com', flag: '🇺🇸' },
  { city: 'London, UK', email: 'hello@archipro.com', flag: '🇬🇧' },
  { city: 'Amsterdam, NL', email: 'hello@archipro.com', flag: '🇳🇱' },
];

const faqs = [
  {
    id: 'getting-in-touch',
    question: 'Getting in touch',
    answer: 'Lorem ipsum dolor sit amet consectetur. Ut ornare non at id semper turpis sed in convallis quam pharetra eget bibendum molestie tincidunt sed sem magna faucibus vitae.',
  },
  {
    id: 'booking-chat',
    question: 'Booking a chat',
    answer: 'Lorem ipsum dolor sit amet consectetur. Ut ornare non at id semper turpis sed in convallis quam pharetra eget bibendum molestie tincidunt sed sem magna faucibus vitae.',
  },
  {
    id: 'working-together',
    question: 'Working together',
    answer: 'Lorem ipsum dolor sit amet consectetur. Ut ornare non at id semper turpis sed in convallis quam pharetra eget bibendum molestie tincidunt sed sem magna faucibus vitae.',
  },
];

const services = [
  'Architectural design',
  'Interior design',
  'Urban planning',
  '3D rendering',
  'Construction documentation',
];

export function Contact() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Offices Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-dark mb-4">
            Our offices around the world
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur faucibus nunc habitasse aliquam vestibulum auctor fringilla risus consequat est semper.
          </p>
        </motion.div>

        {/* Map Background with Office Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-gray-100 mb-20"
        >
          <div className="absolute inset-0 opacity-20">
            <svg viewBox="0 0 1000 500" className="w-full h-full">
              {/* Simplified world map dots */}
              <circle cx="200" cy="150" r="3" fill="#666" />
              <circle cx="220" cy="140" r="3" fill="#666" />
              <circle cx="250" cy="160" r="3" fill="#666" />
              <circle cx="500" cy="120" r="3" fill="#666" />
              <circle cx="520" cy="130" r="3" fill="#666" />
              <circle cx="550" y="140" r="3" fill="#666" />
              <circle cx="480" cy="200" r="3" fill="#666" />
              <circle cx="750" cy="180" r="3" fill="#666" />
              <circle cx="800" cy="200" r="3" fill="#666" />
              <circle cx="850" cy="220" r="3" fill="#666" />
            </svg>
          </div>
          <div className="relative z-10 p-8 lg:p-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {offices.map((office, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-card transition-shadow"
                >
                  <div className="text-2xl mb-2">{office.flag}</div>
                  <h3 className="font-semibold text-dark mb-1">{office.city}</h3>
                  <a href={`mailto:${office.email}`} className="text-sm text-coral hover:underline">
                    {office.email}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-dark mb-6">
              Send us a message
            </h2>
            <p className="text-muted-foreground mb-8">
              Lorem ipsum dolor sit amet consectetur faucibus nunc habitasse aliquam vestibulum auctor fringilla risus consequat est semper.
            </p>

            <div className="space-y-4 mb-8">
              <a href="mailto:hello@archipro.com" className="flex items-center gap-3 text-dark hover:text-coral transition-colors">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                hello@archipro.com
              </a>
              <a href="tel:+15551234567" className="flex items-center gap-3 text-dark hover:text-coral transition-colors">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                +1 (555) 123-4567
              </a>
            </div>

            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-coral hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-coral hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-coral hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-coral hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-3xl p-8"
          >
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Full name"
                  className="bg-white border-gray-200 rounded-xl h-12"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-white border-gray-200 rounded-xl h-12"
                />
              </div>
              <Input
                placeholder="Phone"
                className="bg-white border-gray-200 rounded-xl h-12"
              />
              <select className="w-full bg-white border border-gray-200 rounded-xl h-12 px-4 text-gray-600">
                <option value="">Service</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
              <Textarea
                placeholder="Message"
                className="bg-white border-gray-200 rounded-xl min-h-[120px]"
              />
              <Button className="w-full bg-coral hover:bg-coral-hover text-white rounded-full h-12">
                Send message
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-dark mb-4">
            Got questions? We've got you
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur faucibus nunc habitasse aliquam vestibulum auctor fringilla risus consequat est semper.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-dark">{faq.question}</span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    openFaq === faq.id
                      ? 'bg-coral text-white'
                      : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {openFaq === faq.id ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>
              {openFaq === faq.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6"
                >
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
