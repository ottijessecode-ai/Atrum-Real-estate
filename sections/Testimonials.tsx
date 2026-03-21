import { motion } from 'framer-motion';

const stats = [
  {
    number: '80+',
    label: 'Clients across sectors',
    description: 'Lorem ipsum dolor sit amet consectetur faucibus nunc habitasse aliquam vestibulum auctor fringilla.',
    bgColor: 'bg-beige',
  },
  {
    number: '340+',
    label: 'Clients across sectors',
    description: 'Lorem ipsum dolor sit amet consectetur faucibus nunc habitasse aliquam vestibulum auctor fringilla.',
    bgColor: 'bg-coral',
    textColor: 'text-white',
  },
];

const testimonials = [
  {
    quote: 'From concept to build, every step was smooth and thoughtful.',
    author: 'John Carter',
    role: 'VP of Design at Converse',
    bgImage: '/images/portfolio-2.jpg',
  },
  {
    quote: 'Remarkable service, thoughtful process, and a final result that speaks for itselfâ€”refined, timeless, and functional.',
    author: 'John Carter',
    role: 'VP of Design at Converse',
  },
];

export function Testimonials() {
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
            Trusted by 10k+ happy<br />clients worldwide
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur faucibus nunc habitasse aliquam vestibulum auctor fringilla risus consequat est semper.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Testimonial with Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden aspect-[4/3]"
          >
            <img
              src={testimonials[0].bgImage}
              alt="Project"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-white text-xl font-medium mb-4">
                "{testimonials[0].quote}"
              </p>
              <p className="text-white/70 text-sm">
                {testimonials[0].author} | {testimonials[0].role}
              </p>
            </div>
          </motion.div>

          {/* Stats and Testimonial */}
          <div className="space-y-6">
            {/* Stat Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-beige rounded-3xl p-8"
            >
              <div className="text-5xl font-semibold text-dark mb-2">
                {stats[0].number}
              </div>
              <p className="text-dark font-medium mb-2">{stats[0].label}</p>
              <p className="text-muted-foreground text-sm">{stats[0].description}</p>
            </motion.div>

            {/* Testimonial Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border border-gray-200 rounded-3xl p-8"
            >
              <p className="text-dark text-lg mb-6">
                "{testimonials[1].quote}"
              </p>
              <p className="text-muted-foreground text-sm">
                {testimonials[1].author} | {testimonials[1].role}
              </p>
            </motion.div>
          </div>

          {/* Coral Stat Card - Full Width on Mobile, Half on Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-coral rounded-3xl p-8 text-white md:col-span-1"
          >
            <div className="text-5xl font-semibold mb-2">{stats[1].number}</div>
            <p className="font-medium mb-2">{stats[1].label}</p>
            <p className="text-white/80 text-sm">{stats[1].description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
