import { motion } from 'framer-motion';
import { 
  Home, 
  Palette, 
  Map, 
  Box, 
  FileText, 
  ClipboardCheck,
  Briefcase,
  Leaf,
  Hammer,
  Store,
  ShoppingBag,
  TreePine,
  Paintbrush,
  PenTool
} from 'lucide-react';

const services = [
  { icon: Home, title: 'Architectural design', description: 'Lorem ipsum dolor sit amet consectetur faucibus nunc habitasse aliquam vestibulum auctor fringilla risus consequat est semper.' },
  { icon: Palette, title: 'Interior design', description: 'Lorem ipsum dolor sit amet consectetur faucibus nunc habitasse aliquam vestibulum auctor fringilla risus consequat est semper.' },
  { icon: Map, title: 'Urban planning', description: 'Lorem ipsum dolor sit amet consectetur faucibus nunc habitasse aliquam vestibulum auctor fringilla risus consequat est semper.' },
  { icon: Box, title: '3D rendering & visualization', description: 'Lorem ipsum dolor sit amet consectetur faucibus nunc habitasse aliquam vestibulum auctor fringilla risus consequat est semper.' },
  { icon: FileText, title: 'Construction documentation', description: 'Lorem ipsum dolor sit amet consectetur faucibus nunc habitasse aliquam vestibulum auctor fringilla risus consequat est semper.' },
  { icon: ClipboardCheck, title: 'Feasibility studies', description: 'Lorem ipsum dolor sit amet consectetur faucibus nunc habitasse aliquam vestibulum auctor fringilla risus consequat est semper.' },
  { icon: Briefcase, title: 'Project Management', description: 'Lorem ipsum dolor sit amet consectetur faucibus nunc habitasse aliquam vestibulum auctor fringilla risus consequat est semper.' },
  { icon: Leaf, title: 'Sustainable Design', description: 'Lorem ipsum dolor sit amet consectetur faucibus nunc habitasse aliquam vestibulum auctor fringilla risus consequat est semper.' },
  { icon: Hammer, title: 'Building Renovation', description: 'Lorem ipsum dolor sit amet consectetur faucibus nunc habitasse aliquam vestibulum auctor fringilla risus consequat est semper.' },
  { icon: Home, title: 'Custom home design', description: 'Lorem ipsum dolor sit amet consectetur faucibus nunc habitasse aliquam vestibulum auctor fringilla risus consequat est semper.' },
  { icon: Store, title: 'Retail space design', description: 'Lorem ipsum dolor sit amet consectetur faucibus nunc habitasse aliquam vestibulum auctor fringilla risus consequat est semper.' },
  { icon: ShoppingBag, title: 'Furniture & fixture selection', description: 'Lorem ipsum dolor sit amet consectetur faucibus nunc habitasse aliquam vestibulum auctor fringilla risus consequat est semper.' },
  { icon: TreePine, title: 'Exterior design', description: 'Lorem ipsum dolor sit amet consectetur faucibus nunc habitasse aliquam vestibulum auctor fringilla risus consequat est semper.' },
  { icon: Paintbrush, title: 'Decorating', description: 'Lorem ipsum dolor sit amet consectetur faucibus nunc habitasse aliquam vestibulum auctor fringilla risus consequat est semper.' },
  { icon: PenTool, title: 'Painting', description: 'Lorem ipsum dolor sit amet consectetur faucibus nunc habitasse aliquam vestibulum auctor fringilla risus consequat est semper.' },
];

const iconColors = [
  'bg-amber-100 text-amber-600',
  'bg-coral-light text-coral',
  'bg-green-100 text-green-600',
  'bg-blue-100 text-blue-600',
  'bg-purple-100 text-purple-600',
  'bg-pink-100 text-pink-600',
];

export function Services() {
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
            Our services
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur a quis dignissim scelerisque sed orci neque non placerat non ante volutpat amet senectus.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colorClass = iconColors[index % iconColors.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group bg-gray-50 rounded-3xl p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${colorClass}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3 group-hover:text-coral transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
