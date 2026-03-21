import { motion } from 'framer-motion';
import { ArrowRight, Play, Users, Building2, Award, Globe, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const stats = [
  { number: '340+', label: 'Built & designed projects', icon: Building2 },
  { number: '65+', label: 'Architects & designers', icon: Users },
  { number: '80+', label: 'Clients across sectors', icon: Globe },
  { number: '12+', label: 'Industry awards', icon: Award },
];

const values = [
  { title: 'Passion', description: 'Lorem ipsum dolor sit amet consectetur eualiquam.', color: 'bg-red-100 text-red-600' },
  { title: 'Innovation', description: 'Lorem ipsum dolor sit amet consectetur eualiquam.', color: 'bg-blue-100 text-blue-600' },
  { title: 'Comfort', description: 'Lorem ipsum dolor sit amet consectetur eualiquam.', color: 'bg-green-100 text-green-600' },
  { title: 'Sustainability', description: 'Lorem ipsum dolor sit amet consectetur eualiquam.', color: 'bg-teal-100 text-teal-600' },
  { title: 'Client first', description: 'Lorem ipsum dolor sit amet consectetur eualiquam.', color: 'bg-orange-100 text-orange-600' },
  { title: 'Safety', description: 'Lorem ipsum dolor sit amet consectetur eualiquam.', color: 'bg-purple-100 text-purple-600' },
];

const team = [
  { name: 'John Carter', role: 'CEO & Founder', image: '/images/team-john.jpg' },
  { name: 'Sophie Moore', role: 'Principal Architect', image: '/images/team-sophie.jpg' },
  { name: 'Matt Cannon', role: 'Design Director', image: '/images/team-matt.jpg' },
  { name: 'Lily Woods', role: 'Senior Architect', image: '/images/team-lily.jpg' },
];

const locations = [
  'New York, NY',
  'Amsterdam, NL',
  'London, UK',
  'San Francisco, CA',
];

export function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-dark mb-6">
                About our<br />architecture firm
              </h1>
              <p className="text-muted-foreground mb-8">
                Lorem ipsum dolor sit amet consectetur faucibus nunc habitasse aliquam vestibulum auctor fringilla risus consequat est semper.
              </p>
              <Link to="/portfolio">
                <Button variant="outline" className="rounded-full border-dark text-dark hover:bg-dark hover:text-white">
                  Browse portfolio
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[16/10]">
                <img
                  src="/images/about-hero.jpg"
                  alt="Our office"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-coral ml-1" />
                </button>
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-card max-w-xs">
                <p className="text-sm text-dark">
                  At Archipro, we don't just design buildings—we bring spaces to life with care, creativity, and purpose.
                </p>
                <a href="#" className="text-coral text-sm font-medium mt-2 inline-flex items-center">
                  Watch video <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-medium text-dark leading-relaxed"
          >
            From concept to construction, Archipro <span className="inline-block w-8 h-8 bg-coral rounded-full align-middle mx-1"></span> designs with intention, merging creativity and technology to shape <span className="inline-block w-8 h-8 bg-coral rounded-full align-middle mx-1"></span> environments that truly make a difference.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-semibold text-dark mb-2">
                  {stat.number}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </motion.div>
          <div className="text-center mt-8">
            <Link to="/about">
              <Button variant="outline" className="rounded-full border-dark text-dark hover:bg-dark hover:text-white">
                More about us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-dark mb-4">
              What guides every step we take
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet consectetur cras amet at a diam sed id dui lectus nullam platea mi non mattis elit tincidunt condimentum eget id in auctor aliquet orci.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6"
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${value.color}`}>
                  <div className="w-4 h-4 rounded-full bg-current" />
                </div>
                <h3 className="text-lg font-semibold text-dark mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inside the Firm CTA */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0">
              <img
                src="/images/office-1.jpg"
                alt="Inside the firm"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
            </div>
            <div className="relative z-10 px-8 py-16 lg:px-16 lg:py-24 max-w-lg">
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
                Inside the firm
              </h2>
              <p className="text-white/80 mb-8">
                Lorem ipsum dolor sit amet consectetur faucibus nunc habitasse aliquam vestibulum auctor fringilla risus consequat est semper.
              </p>
              <Link to="/contact">
                <Button className="bg-coral hover:bg-coral-hover text-white rounded-full">
                  Get in touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-dark mb-4 lg:mb-0">
              Our creative minds
            </h2>
            <p className="text-muted-foreground max-w-md">
              Lorem ipsum dolor sit amet consectetur faucibus nunc habitasse aliquam vestibulum auctor fringilla risus consequat est semper.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-3xl overflow-hidden aspect-[3/4]"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <h3 className="text-white font-semibold">{member.name}</h3>
                  <p className="text-white/70 text-sm">{member.role}</p>
                </div>
                <button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Plus className="w-5 h-5 text-dark" />
                </button>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/team">
              <Button variant="outline" className="rounded-full border-dark text-dark hover:bg-dark hover:text-white">
                Browse all team members
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-dark mb-4">
              Tour our office space
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet consectetur faucibus nunc habitasse aliquam vestibulum auctor fringilla risus consequat est semper.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden aspect-[16/10]"
            >
              <img
                src="/images/office-2.jpg"
                alt="Office space"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <h3 className="text-xl font-medium text-dark">{location}</h3>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
