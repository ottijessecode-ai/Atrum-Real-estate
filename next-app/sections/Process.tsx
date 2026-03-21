"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const steps = [
  {
    id: 'talk',
    title: "Let's talk",
    content: {
      heading: 'We start with a conversation',
      description: 'Lorem ipsum dolor sit amet consectetur. Ut ornare non at id semper turpis sed in convallis quam pharetra eget bibendum molestie tincidunt sed sem magna faucibus vitae.',
      step: 'Step 01',
    },
  },
  {
    id: 'creating',
    title: 'We start creating',
    content: {
      heading: 'Design phase begins',
      description: 'Our team of experts will create detailed plans and 3D visualizations to bring your vision to life before construction begins.',
      step: 'Step 02',
      cardStyle: 'coral',
    },
  },
  {
    id: 'building',
    title: 'Building',
    content: {
      heading: 'Construction in progress',
      description: 'With meticulous attention to detail, we transform designs into reality, ensuring quality at every step of the construction process.',
      step: 'Step 03',
      cardStyle: 'dark',
    },
  },
];

export function Process() {
  const [openStep, setOpenStep] = useState<string | null>('talk');

  const toggleStep = (id: string) => {
    setOpenStep(openStep === id ? null : id);
  };

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
            Check how our process is done
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur faucibus nunc habitasse aliquam vestibulum auctor fringilla risus consequat est semper.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleStep(step.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-medium text-dark">{step.title}</span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    openStep === step.id
                      ? 'bg-coral text-white'
                      : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {openStep === step.id ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openStep === step.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`px-6 pb-6 rounded-xl mx-4 mb-4 ${
                        step.content.cardStyle === 'coral'
                          ? 'bg-coral text-white'
                          : step.content.cardStyle === 'dark'
                          ? 'bg-dark text-white'
                          : 'bg-gray-50'
                      }`}
                    >
                      <div className="p-6">
                        <span
                          className={`text-sm font-medium mb-4 block ${
                            step.content.cardStyle ? 'text-white/70' : 'text-coral'
                          }`}
                        >
                          {step.content.step}
                        </span>
                        <h4 className="text-xl font-semibold mb-3">
                          {step.content.heading}
                        </h4>
                        <p
                          className={`text-sm ${
                            step.content.cardStyle ? 'text-white/80' : 'text-muted-foreground'
                          }`}
                        >
                          {step.content.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
