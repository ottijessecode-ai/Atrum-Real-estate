import { motion } from 'framer-motion';
import { ArrowRight, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const articles = [
  {
    id: 1,
    title: '12 design tricks for picking the perfect home color palette',
    image: '/images/blog-1.jpg',
    category: 'Remodeling',
    date: 'Dec 3, 2025',
  },
  {
    id: 2,
    title: '25 color trends designers can\'t wait to see in 2026',
    image: '/images/blog-2.jpg',
    category: 'Design',
    date: 'Dec 3, 2025',
  },
];

export function BlogPreview() {
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
            Read our latest articles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur faucibus nunc habitasse aliquam vestibulum auctor fringilla risus consequat est semper.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href="/blog" className="block">
                {/* Image */}
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Plus Button */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <Plus className="w-5 h-5 text-dark" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-dark mb-3 group-hover:text-coral transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="rounded-full">
                    {article.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{article.date}</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Browse All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/blog">
            <Button variant="outline" className="rounded-full border-dark text-dark hover:bg-dark hover:text-white">
              Browse all articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
