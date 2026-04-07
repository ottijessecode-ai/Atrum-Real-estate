export const SITE_CONFIG = {
  site_name: "AURUM Real Estate",
  logo: "/logo.png",
  brand_colors: {
    primary: "#1A1A1A",
    secondary: "#FFF0C3",
    accent: "#C5A377"
  },
  contact_info: {
    email: "contact@aurum.com",
    phone: "+1 234 567 890",
  },
  whatsapp_number: "+1234567890",
  hero_content: {
    tag: "Exclusive Real Estate",
    title: {
      part1: "Where Space",
      highlight: "Becomes",
      part2: "Legacy."
    },
    subtitle: "Curated portfolios of the world's most extraordinary properties, presented with the discretion they deserve.",
    cta1: { text: "View Listings", link: "/listings" },
    cta2: { text: "Private Concierge", link: "/concierge" }
  },
  vision: {
    tag: "The Vision",
    title: {
      part1: "Architecting",
      highlight: "The",
      part2: "Atmosphere."
    },
    body: "We believe that architecture is the ultimate form of immortality. At AURUM, we don't just broker real estate; we curate environments where life and design converge.",
    stats: {
      label: "Market Leadership",
      value: "$4.2B+",
      desc: "Private transaction volume curated over the last decade for ultra-high-net-worth families."
    }
  },
  expertise: [
    {
      id: '01',
      title: 'Bespoke Interiors',
      tags: ['Estates', 'Villas', 'Penthouses'],
      body: 'Curating spaces that reflect the soul. We partner with world-renowned designers to craft environments of unparalleled distinction.',
    },
    {
      id: '02',
      title: 'Regenerative Landscapes',
      tags: ['Gardens', 'Private Parks', 'Estates'],
      body: 'Merging the boundaries between nature and architecture with sustainable, high-end landscape design.',
    },
    {
      id: '03',
      title: 'Investment Logistics',
      tags: ['Portfolio', 'Yield', 'Growth'],
      body: 'Institutional-grade data paired with boutique discretion. We manage the acquisition and optimization of global assets.',
    },
    {
      id: '04',
      title: 'Development Advisory',
      tags: ['Conceptual', 'Planning', 'Launch'],
      body: 'From raw land to iconic landmark. We provides end-to-end strategic advisory for developers worldwide.',
    },
  ],
  featured: {
    tag: "The Collection",
    title: "Curated Masterpieces",
  },
  global: {
    tag: "Global Presence",
    title: "World-Class Influence",
    description: "From the financial hubs of London and New York to the rising skylines of Dubai and Singapore, we are where you need us to be.",
    branches: [
      { name: 'New York', country: 'USA', lat: 40.7128, lng: -74.006, properties: 142 },
      { name: 'London', country: 'UK', lat: 51.5074, lng: -0.1278, properties: 98 },
      { name: 'Dubai', country: 'UAE', lat: 25.2048, lng: 55.2708, properties: 87 },
      { name: 'Geneva', country: 'Switzerland', lat: 46.2044, lng: 6.1432, properties: 63 },
      { name: 'Singapore', country: 'Singapore', lat: 1.3521, lng: 103.8198, properties: 54 },
      { name: 'Hong Kong', country: 'China', lat: 22.3193, lng: 114.1694, properties: 49 },
    ]
  }
};
