import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'House architecture design in Los Angeles, CA',
    category: 'Architecture',
    location: 'Los Angeles, CA',
    date: 'Oct 2026',
    description: 'Lorem ipsum dolor sit amet consectetur ac habitant viverra pretium nulla vel ac scelerisque proin volutpat nisl integer lorem pellentesque sed convallis pharetra adipiscing turpis elementum in eu nunc ipsum.',
    image: '/images/portfolio-1.jpg',
  },
  {
    id: 2,
    title: 'House architecture design in Los Angeles, CA',
    category: 'Architecture',
    location: 'Los Angeles, CA',
    date: 'Oct 2026',
    description: 'Lorem ipsum dolor sit amet consectetur ac habitant viverra pretium nulla vel ac scelerisque proin volutpat nisl integer lorem pellentesque sed convallis pharetra adipiscing turpis elementum in eu nunc ipsum.',
    image: '/images/portfolio-2.jpg',
  },
  {
    id: 3,
    title: 'House architecture design in Los Angeles, CA',
    category: 'Architecture',
    location: 'Los Angeles, CA',
    date: 'Oct 2026',
    description: 'Lorem ipsum dolor sit amet consectetur ac habitant viverra pretium nulla vel ac scelerisque proin volutpat nisl integer lorem pellentesque sed convallis pharetra adipiscing turpis elementum in eu nunc ipsum.',
    image: '/images/portfolio-3.jpg',
  },
  {
    id: 4,
    title: 'Interior design in San Francisco, California',
    category: 'Interior design',
    location: 'San Francisco, CA',
    date: 'Jul 2026',
    description: 'Lorem ipsum dolor sit amet consectetur ac habitant viverra pretium nulla vel ac scelerisque proin volutpat nisl integer lorem pellentesque sed convallis pharetra adipiscing turpis elementum in eu nunc ipsum.',
    image: '/images/hero-bg.jpg',
  },
];

export function Portfolio() {
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
            Selected works
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur faucibus nunc habitasse aliquam vestibulum auctor fringilla risus consequat est semper.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              {/* Content - Left for odd, Right for even */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <h2 className="text-2xl sm:text-3xl font-semibold text-dark mb-4">
                  {project.title}
                </h2>
                <div className="space-y-1 text-sm text-muted-foreground mb-6">
                  <p>{project.category}</p>
                  <p>{project.location}</p>
                  <p>{project.date}</p>
                </div>
                <p className="text-muted-foreground">
                  {project.description}
                </p>
              </div>

              {/* Image - Right for odd, Left for even */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="aspect-[16/10] rounded-3xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Plus Button */}
                <button className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-coral hover:text-white">
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
