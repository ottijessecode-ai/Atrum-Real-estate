The code is the blueprint; the system is the architecture.
# Archipro Website - Technical Specification

## 1. Tech Stack Overview

| Category | Technology |
|----------|------------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS 3.4 |
| UI Components | shadcn/ui |
| Animation | Framer Motion |
| Icons | Lucide React |
| Routing | React Router DOM |
| State | React hooks (useState, useEffect) |

## 2. Tailwind Configuration

```javascript
// tailwind.config.js extensions
{
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F26B4E',
          hover: '#E55A3D',
          light: '#FFF0ED',
        },
        background: {
          DEFAULT: '#FFFFFF',
          dark: '#1A1A1A',
          muted: '#F5F5F5',
        },
        foreground: {
          DEFAULT: '#1A1A1A',
          secondary: '#666666',
          muted: '#999999',
        },
        coral: {
          DEFAULT: '#F26B4E',
          light: '#FFF0ED',
        },
        beige: '#F5F0EB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
}
```

## 3. Component Inventory

### Shadcn/UI Components (Pre-installed)

| Component | Usage | Style Overrides |
|-----------|-------|-----------------|
| Button | CTAs, actions | Custom coral variant, rounded-full |
| Card | Content containers | Increased border-radius |
| Input | Form fields | Rounded-lg, custom focus ring |
| Accordion | FAQ, process | Custom trigger styling |
| Tabs | Service tabs | Vertical orientation |
| Badge | Category tags | Custom colors |
| Sheet | Mobile menu | - |
| Separator | Dividers | - |

### Custom Components

#### Layout Components

| Component | Props | Description |
|-----------|-------|-------------|
| `Navbar` | - | Fixed navigation with scroll effect |
| `Footer` | - | Dark footer with links grid |
| `Container` | `children, className` | Max-width wrapper |
| `Section` | `children, className, id` | Section wrapper with padding |

#### UI Components

| Component | Props | Description |
|-----------|-------|-------------|
| `Logo` | `variant: 'light' \| 'dark'` | Archipro logo |
| `SectionHeading` | `title, subtitle, centered` | Consistent section headers |
| `ServiceCard` | `icon, title, description` | Service grid card |
| `TeamCard` | `name, role, image, socials` | Team member card |
| `BlogCard` | `title, image, category, date` | Article preview card |
| `PortfolioCard` | `title, image, category, location, date` | Project showcase |
| `TestimonialCard` | `quote, author, role` | Client testimonial |
| `StatCard` | `number, label, description` | Statistics display |
| `OfficeCard` | `city, country, email, flag` | Office location card |

#### Animation Components

| Component | Props | Description |
|-----------|-------|-------------|
| `FadeIn` | `children, delay, direction` | Scroll-triggered fade |
| `StaggerContainer` | `children, staggerDelay` | Staggered children |
| `AnimatedCounter` | `value, duration` | Number count-up |

## 4. Animation Implementation Plan

| Interaction | Tech | Implementation |
|-------------|------|----------------|
| Page load | Framer Motion | `initial`, `animate` props on layout |
| Scroll reveal | Framer Motion | `whileInView` with `viewport={{ once: true }}` |
| Navbar scroll | React + CSS | `useScroll` hook, toggle class |
| Button hover | Tailwind | `hover:scale-102 transition-transform` |
| Card hover | Tailwind + FM | `whileHover={{ y: -4 }}` + shadow |
| Image zoom | Tailwind | `group-hover:scale-105` in overflow-hidden |
| Accordion | Framer Motion | `AnimatePresence` + height animation |
| Tab switch | Framer Motion | `AnimatePresence` mode="wait" |
| Slider | Framer Motion | `drag="x"` with constraints |
| Counter | Custom hook | `useCountUp` with requestAnimationFrame |
| Link underline | CSS | `after:` pseudo-element width animation |

### Animation Timing Reference

```typescript
const animations = {
  fast: { duration: 0.15 },
  normal: { duration: 0.3 },
  slow: { duration: 0.5 },
  easing: [0.4, 0, 0.2, 1], // cubic-bezier
  spring: { type: 'spring', stiffness: 300, damping: 30 },
};
```

## 5. Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   └── images/           # Generated images
├── src/
│   ├── components/
│   │   ├── ui/           # shadcn components
│   │   ├── layout/       # Navbar, Footer
│   │   ├── shared/       # Reusable UI components
│   │   └── animations/   # Animation wrappers
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Team.tsx
│   │   ├── Blog.tsx
│   │   ├── Contact.tsx
│   │   ├── Quote.tsx
│   │   └── NotFound.tsx
│   ├── sections/         # Page section components
│   │   ├── Hero.tsx
│   │   ├── ServicesTabs.tsx
│   │   ├── OfficeTour.tsx
│   │   ├── Process.tsx
│   │   ├── CTABanner.tsx
│   │   ├── Testimonials.tsx
│   │   ├── InstagramFeed.tsx
│   │   ├── BlogPreview.tsx
│   │   ├── Stats.tsx
│   │   ├── Values.tsx
│   │   ├── TeamGrid.tsx
│   │   ├── Offices.tsx
│   │   ├── FAQ.tsx
│   │   └── ContactForm.tsx
│   ├── hooks/
│   │   ├── useScrollPosition.ts
│   │   └── useCountUp.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── data/
│   │   ├── services.ts
│   │   ├── team.ts
│   │   ├── portfolio.ts
│   │   ├── blog.ts
│   │   └── offices.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## 6. Package Installation

```bash
# Initialize project
bash /app/.kimi/skills/webapp-building/scripts/init-webapp.sh "Archipro"

# Install animation library
npm install framer-motion

# Install additional utilities
npm install clsx tailwind-merge
```

## 7. Routing Structure

```typescript
// App.tsx routes
const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/services', element: <Services /> },
  { path: '/portfolio', element: <Portfolio /> },
  { path: '/team', element: <Team /> },
  { path: '/blog', element: <Blog /> },
  { path: '/contact', element: <Contact /> },
  { path: '/quote', element: <Quote /> },
  { path: '*', element: <NotFound /> },
];
```

## 8. Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| sm | 640px | Mobile landscape |
| md | 768px | Tablet |
| lg | 1024px | Desktop |
| xl | 1280px | Large desktop |
| 2xl | 1536px | Extra large |

### Responsive Patterns

- **Navbar**: Hamburger menu below md
- **Grids**: 1 col mobile → 2 col tablet → 3-4 col desktop
- **Section padding**: 60px mobile → 80px tablet → 120px desktop
- **Typography**: Scale down 20% on mobile
- **Images**: Full width mobile, constrained desktop

## 9. Performance Considerations

1. **Images**: Use WebP format, lazy loading, proper sizing
2. **Animations**: Use `transform` and `opacity` only
3. **Fonts**: Use system font stack with Inter as primary
4. **Code splitting**: Route-based lazy loading
5. **will-change**: Apply to animated elements sparingly

## 10. Accessibility Requirements

1. **Color contrast**: 4.5:1 minimum for text
2. **Focus states**: Visible focus rings on interactive elements
3. **Reduced motion**: Respect `prefers-reduced-motion`
4. **Semantic HTML**: Proper heading hierarchy, landmarks
5. **Alt text**: Descriptive alt for all images
