import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const teamMembers = [
  { name: 'John Carter', role: 'CEO & Founder', image: '/images/team-john.jpg' },
  { name: 'Sophie Moore', role: 'Principal Architect', image: '/images/team-sophie.jpg' },
  { name: 'Matt Cannon', role: 'Design Director', image: '/images/team-matt.jpg' },
  { name: 'Lily Woods', role: 'Senior Architect', image: '/images/team-lily.jpg' },
  { name: 'Andy Smith', role: 'Project Architect', image: '/images/team-john.jpg' },
  { name: 'Sandy Houston', role: 'Junior Architect', image: '/images/team-sophie.jpg' },
  { name: 'Patrick Meyer', role: 'Architectural Intern', image: '/images/team-matt.jpg' },
  { name: 'Maya Collins', role: 'Studio Assistant', image: '/images/team-lily.jpg' },
];

export function Team() {
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
            Team
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur faucibus nunc habitasse aliquam vestibulum auctor fringilla risus consequat est semper.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative rounded-3xl overflow-hidden aspect-[3/4]"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Info */}
              <div className="absolute top-4 left-4 right-4">
                <h3 className="text-white font-semibold text-lg">{member.name}</h3>
                <p className="text-white/70 text-sm">{member.role}</p>
              </div>

              {/* Plus Button */}
              <button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-coral hover:text-white">
                <Plus className="w-5 h-5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
