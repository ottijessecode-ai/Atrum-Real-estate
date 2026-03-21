import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const categories = ['All', 'Construction', 'Design', 'Remodeling'];

const featuredArticles = [
  {
    id: 1,
    title: '12 design tricks for picking the perfect home color palette',
    image: '/images/blog-1.jpg',
    category: 'Remodeling',
    featured: true,
  },
  {
    id: 2,
    title: '25 color trends designers can\'t wait to see in 2026',
    image: '/images/blog-2.jpg',
    category: 'Design',
    date: 'Dec 3, 2025',
  },
  {
    id: 3,
    title: 'Clever DIY home improvements you can easily do anytime',
    image: '/images/blog-3.jpg',
    category: 'Construction',
    date: 'Dec 3, 2025',
  },
];

const latestArticles = [
  {
    id: 4,
    title: '12 design tricks for picking the perfect home color palette',
    image: '/images/blog-1.jpg',
    category: 'Remodeling',
    date: 'Dec 3, 2025',
  },
  {
    id: 5,
    title: '25 color trends designers can\'t wait to see in 2026',
    image: '/images/blog-2.jpg',
    category: 'Design',
    date: 'Dec 3, 2025',
  },
  {
    id: 6,
    title: 'Clever DIY home improvements you can easily do anytime',
    image: '/images/blog-3.jpg',
    category: 'Construction',
    date: 'Dec 3, 2025',
  },
  {
    id: 7,
    title: '15 mind-blowing floor designs to make your home look great',
    image: '/images/blog-4.jpg',
    category: 'Remodeling',
    date: 'Dec 3, 2025',
  },
  {
    id: 8,
    title: 'How to give maintenance to your wooden furniture: The full guide',
    image: '/images/portfolio-3.jpg',
    category: 'Design',
    date: 'Dec 3, 2025',
  },
  {
    id: 9,
    title: 'Front door design ideas: 6 great concepts for your home',
    image: '/images/instagram-1.jpg',
    category: 'Construction',
    date: 'Dec 3, 2025',
  },
];

export function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredArticles = activeCategory === 'All' 
    ? latestArticles 
    : latestArticles.filter(article => article.category === activeCategory);

  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-dark mb-4">
            Articles and resources
          </h1>
        </motion.div>

        {/* Featured Articles */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {/* Main Featured */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 group relative rounded-3xl overflow-hidden aspect-[16/10]"
          >
            <img
              src={featuredArticles[0].image}
              alt={featuredArticles[0].title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute top-4 left-4">
              <Badge className="bg-white text-dark rounded-full">{featuredArticles[0].category}</Badge>
            </div>
            <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Plus className="w-5 h-5" />
            </button>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h2 className="text-white text-xl font-semibold">{featuredArticles[0].title}</h2>
            </div>
          </motion.article>

          {/* Side Featured */}
          <div className="space-y-6">
            {featuredArticles.slice(1).map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] mb-3">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-white text-dark text-xs rounded-full">{article.category}</Badge>
                  </div>
                </div>
                <h3 className="text-dark font-medium line-clamp-2 group-hover:text-coral transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{article.date}</p>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Browse All Button */}
        <div className="flex justify-end mb-12">
          <Button variant="outline" className="rounded-full border-dark text-dark hover:bg-dark hover:text-white">
            Browse all articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Subscribe Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-green-800 mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
                Subscribe for weekly design insights
              </h2>
              <p className="text-white/80 mb-6">
                Lorem ipsum dolor sit amet consectetur. Risus euismod sed aliquam nibh pellentesque velit. Augue sit sed et sit nisl tempor.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/50 rounded-full px-6 py-3"
                />
                <Button className="bg-coral hover:bg-coral-hover text-white rounded-full px-6">
                  Subscribe
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="/images/blog-2.jpg"
                alt="Newsletter"
                className="rounded-2xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Latest Articles */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <h2 className="text-2xl font-semibold text-dark mb-4 lg:mb-0">Latest articles</h2>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-coral text-white'
                    : 'bg-gray-100 text-dark hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <Link to="#" className="block">
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <h3 className="text-dark font-semibold mb-2 group-hover:text-coral transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="rounded-full text-xs">
                    {article.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{article.date}</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Next Button */}
        <div className="flex justify-center mt-12">
          <Button className="bg-coral hover:bg-coral-hover text-white rounded-full">
            Next
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
