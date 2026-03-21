# Archipro Website - Complete Animation Reference Guide

## Animation Library Used
- **Framer Motion** (primary animation library)
- **Tailwind CSS Transitions** (hover effects)
- **CSS Animations** (custom keyframes in tailwind.config.js)

---

## 1. NAVBAR ANIMATIONS

### File: `src/components/layout/Navbar.tsx`

| Animation | Type | Description | Code Location |
|-----------|------|-------------|---------------|
| **Slide Down on Load** | Framer Motion | Navbar slides down from -100px on page load | Line 43-46: `initial={{ y: -100 }} animate={{ y: 0 }}` |
| **Scroll Background Change** | React State + CSS | Background changes from transparent to white on scroll | Line 30-36: `useEffect` with scroll listener |
| **Dropdown Fade + Slide** | Framer Motion + AnimatePresence | Pages dropdown fades in and slides down | Line 85-105: `initial={{ opacity: 0, y: 10 }}` |
| **Chevron Rotation** | CSS Transform | Chevron icon rotates 180° when dropdown opens | Line 83: `rotate-180` class toggle |
| **Mobile Menu Slide** | Framer Motion + AnimatePresence | Mobile menu slides down with height animation | Line 145-209: `initial={{ opacity: 0, height: 0 }}` |
| **Link Hover Color** | Tailwind CSS | Links change to coral color on hover | Line 78: `hover:text-coral` |
| **Button Scale on Hover** | Tailwind CSS | CTA button scales 1.05x on hover | Line 124: `hover:scale-105` |

---

## 2. HERO SECTION ANIMATIONS

### File: `src/sections/Hero.tsx`

| Animation | Type | Description | Code Location |
|-----------|------|-------------|---------------|
| **Heading Fade + Slide Up** | Framer Motion | Main heading fades in and slides up from 30px | Line 22-25: `initial={{ opacity: 0, y: 30 }}` delay 0.1s |
| **Paragraph Fade + Slide Up** | Framer Motion | Subtext fades in with 0.2s delay | Line 31-34: delay 0.2s |
| **Input Group Fade + Slide Up** | Framer Motion | Email input and button fade in with 0.3s delay | Line 40-43: delay 0.3s |
| **Floating Badge Scale In** | Framer Motion | Badge scales from 0.9 to 1 with fade | Line 58-70: `initial={{ opacity: 0, scale: 0.9 }}` |
| **Button Scale on Hover** | Tailwind CSS | Get in touch button scales on hover | Line 51: `hover:scale-105` |

---

## 3. SERVICES TABS ANIMATIONS

### File: `src/sections/ServicesTabs.tsx`

| Animation | Type | Description | Code Location |
|-----------|------|-------------|---------------|
| **Header Fade + Slide Up** | Framer Motion | Section header animates on scroll into view | Line 41-46: `whileInView` with `viewport={{ once: true }}` |
| **Tabs Slide from Left** | Framer Motion | Tab buttons slide from -30px on scroll | Line 64-68: `initial={{ opacity: 0, x: -30 }}` |
| **Image Slide from Right** | Framer Motion | Service image slides from +30px on scroll | Line 115-119: `initial={{ opacity: 0, x: 30 }}` |
| **Tab Active Background** | CSS Transition | Background color changes on tab selection | Line 75-79: `transition-all duration-300` |
| **Chevron Rotation** | CSS Transform | Chevron rotates 90° when tab is active | Line 102-108: `rotate-90` class |
| **Image Crossfade** | Framer Motion AnimatePresence | Image crossfades with scale when tab changes | Line 122-133: `mode="wait"` with scale animation |
| **Description Expand** | Framer Motion | Description text expands with opacity/height | Line 93-99: `initial={{ opacity: 0, height: 0 }}` |

---

## 4. OFFICE TOUR SLIDER ANIMATIONS

### File: `src/sections/OfficeTour.tsx`

| Animation | Type | Description | Code Location |
|-----------|------|-------------|---------------|
| **Header Fade + Slide Up** | Framer Motion | Header section animates on scroll | Line 42-46 |
| **Image Slide from Left** | Framer Motion | Slider image slides from -30px | Line 68-72 |
| **Info Slide from Right** | Framer Motion | Info panel slides from +30px | Line 90-94 |
| **Image Crossfade** | Framer Motion AnimatePresence | Image fades between slides | Line 75-86: `mode="wait"` |
| **Info Text Slide** | Framer Motion AnimatePresence | Text slides up/down on slide change | Line 97-114: `initial={{ opacity: 0, y: 20 }}` |
| **Nav Button Hover** | Tailwind CSS | Arrow buttons get coral background on hover | Line 120 & 125: `hover:bg-coral` |

---

## 5. PROCESS ACCORDION ANIMATIONS

### File: `src/sections/Process.tsx`

| Animation | Type | Description | Code Location |
|-----------|------|-------------|---------------|
| **Header Fade + Slide Up** | Framer Motion | Section header animates on scroll | Line 48-52 |
| **Accordion Items Stagger** | Framer Motion | Each accordion item staggers in with 0.1s delay | Line 66-71: `delay: index * 0.1` |
| **Plus/Minus Icon Toggle** | React State | Icon changes between Plus and Minus | Line 86-91 |
| **Icon Background Change** | CSS Transition | Background changes from gray to coral when open | Line 80-84 |
| **Content Height Animation** | Framer Motion AnimatePresence | Content expands with height animation | Line 94-132: `initial={{ height: 0, opacity: 0 }}` |

---

## 6. CTA BANNER ANIMATIONS

### File: `src/sections/CTABanner.tsx`

| Animation | Type | Description | Code Location |
|-----------|------|-------------|---------------|
| **Container Fade + Slide Up** | Framer Motion | Entire banner section slides up on scroll | Line 10-14 |
| **Heading Stagger** | Framer Motion | Heading fades in with 0.2s delay | Line 30-34 |
| **Subheading Stagger** | Framer Motion | Subheading fades in with 0.3s delay | Line 39-43 |
| **Button Stagger** | Framer Motion | Button fades in with 0.4s delay | Line 48-52 |
| **Floating Badge Scale In** | Framer Motion | Badge scales in with 0.6s delay | Line 64-77 |
| **Button Scale on Hover** | Tailwind CSS | Button scales 1.05x on hover | Line 55: `hover:scale-105` |

---

## 7. TESTIMONIALS BENTO GRID ANIMATIONS

### File: `src/sections/Testimonials.tsx`

| Animation | Type | Description | Code Location |
|-----------|------|-------------|---------------|
| **Header Fade + Slide Up** | Framer Motion | Section header animates on scroll | Line 38-42 |
| **Testimonial Image Card** | Framer Motion | Large testimonial card slides up | Line 56-77 |
| **Stat Card 1 Slide Up** | Framer Motion | Beige stat card with 0.1s delay | Line 82-94 |
| **Testimonial Card Slide Up** | Framer Motion | White testimonial card with 0.2s delay | Line 97-110 |
| **Coral Stat Card Slide Up** | Framer Motion | Coral stat card with 0.3s delay | Line 114-124 |

---

## 8. INSTAGRAM FEED ANIMATIONS

### File: `src/sections/InstagramFeed.tsx`

| Animation | Type | Description | Code Location |
|-----------|------|-------------|---------------|
| **Text Slide from Left** | Framer Motion | Left text panel slides from -30px | Line 31-36 |
| **Carousel Slide from Right** | Framer Motion | Image carousel slides from +30px | Line 60-65 |
| **Images Stagger In** | Framer Motion | Each image staggers with 0.1s delay | Line 87-93: `delay: index * 0.1` |
| **Image Zoom on Hover** | Tailwind CSS | Images scale 1.1x on hover | Line 100: `group-hover:scale-110` |
| **Instagram Overlay Fade** | Tailwind CSS | Black overlay fades in on hover | Line 104: `opacity-0 group-hover:opacity-100` |
| **Carousel Scroll** | Native JS | Smooth horizontal scroll on button click | Line 16-23: `scrollBy` with smooth behavior |
| **Nav Button Hover** | Tailwind CSS | Arrow buttons darken on hover | Line 70 & 76: `hover:bg-coral-hover` |

---

## 9. BLOG PREVIEW ANIMATIONS

### File: `src/sections/BlogPreview.tsx`

| Animation | Type | Description | Code Location |
|-----------|------|-------------|---------------|
| **Header Fade + Slide Up** | Framer Motion | Section header animates on scroll | Line 29-33 |
| **Article Cards Stagger** | Framer Motion | Cards slide up with 0.1s stagger | Line 47-52: `delay: index * 0.1` |
| **Image Zoom on Hover** | Tailwind CSS | Article images scale 1.05x on hover | Line 61: `group-hover:scale-105` |
| **Plus Button Fade In** | Tailwind CSS | Plus button appears on hover | Line 64: `opacity-0 group-hover:opacity-100` |
| **Title Color Change** | Tailwind CSS | Title changes to coral on hover | Line 70: `group-hover:text-coral` |
| **Browse Button Slide Up** | Framer Motion | Button fades in with 0.3s delay | Line 85-89 |

---

## 10. ABOUT PAGE ANIMATIONS

### File: `src/pages/About.tsx`

| Animation | Type | Description | Code Location |
|-----------|------|-------------|---------------|
| **Hero Text Slide from Left** | Framer Motion | Text slides from -30px on load | Line 43-46 |
| **Hero Image Slide from Right** | Framer Motion | Image slides from +30px on load | Line 61-64 |
| **Play Button Scale on Hover** | Tailwind CSS | Play button scales 1.1x on hover | Line 74: `hover:scale-110` |
| **Mission Statement Fade Up** | Framer Motion | Mission text fades in on scroll | Line 95-99 |
| **Stats Grid Fade Up** | Framer Motion | Stats section fades in on scroll | Line 109-113 |
| **Values Header Fade Up** | Framer Motion | Values header animates on scroll | Line 137-141 |
| **Value Cards Stagger** | Framer Motion | 6 value cards stagger with 0.1s delay | Line 151-167: `delay: index * 0.1` |
| **CTA Banner Fade Up** | Framer Motion | Inside the firm banner slides up | Line 175-179 |
| **Team Header Fade Up** | Framer Motion | Team section header animates | Line 210-214 |
| **Team Cards Stagger** | Framer Motion | 4 team cards stagger with 0.1s delay | Line 225-247 |
| **Team Image Zoom on Hover** | Tailwind CSS | Team photos scale 1.05x on hover | Line 237: `group-hover:scale-105` |
| **Plus Button Fade In** | Tailwind CSS | Plus button appears on hover | Line 244-246 |
| **Office Tour Header Fade Up** | Framer Motion | Office section header animates | Line 264-268 |
| **Office Image Slide from Left** | Framer Motion | Office image slides from -30px | Line 279-283 |
| **Locations Slide from Right** | Framer Motion | Location list slides from +30px | Line 292-296 |

---

## 11. SERVICES PAGE ANIMATIONS

### File: `src/pages/Services.tsx`

| Animation | Type | Description | Code Location |
|-----------|------|-------------|---------------|
| **Header Fade + Slide Up** | Framer Motion | Page header animates on load | Line 51-54 |
| **Service Cards Stagger** | Framer Motion | 15 cards stagger with 0.05s delay | Line 71-76: `delay: index * 0.05` |
| **Card Lift on Hover** | Tailwind CSS | Cards lift -4px on hover | Line 77: `hover:-translate-y-1` |
| **Card Shadow on Hover** | Tailwind CSS | Shadow increases on hover | Line 77: `hover:shadow-card` |
| **Title Color Change** | Tailwind CSS | Title changes to coral on hover | Line 82: `group-hover:text-coral` |

---

## 12. PORTFOLIO PAGE ANIMATIONS

### File: `src/pages/Portfolio.tsx`

| Animation | Type | Description | Code Location |
|-----------|------|-------------|---------------|
| **Header Fade + Slide Up** | Framer Motion | Page header animates on load | Line 48-51 |
| **Project Cards Stagger** | Framer Motion | Projects stagger with 0.1s delay | Line 65-70 |
| **Alternating Layout** | CSS Grid | Content alternates left/right | Line 74 & 89: `lg:order-2` conditional |
| **Image Zoom on Hover** | Tailwind CSS | Portfolio images scale 1.05x on hover | Line 94: `group-hover:scale-105` |
| **Plus Button Fade In** | Tailwind CSS | Plus button appears on hover | Line 98-100 |
| **Plus Button Hover** | Tailwind CSS | Button turns coral on hover | Line 98: `hover:bg-coral` |

---

## 13. TEAM PAGE ANIMATIONS

### File: `src/pages/Team.tsx`

| Animation | Type | Description | Code Location |
|-----------|------|-------------|---------------|
| **Header Fade + Slide Up** | Framer Motion | Page header animates on load | Line 20-23 |
| **Team Cards Stagger** | Framer Motion | 8 team cards stagger with 0.05s delay | Line 37-42 |
| **Image Zoom on Hover** | Tailwind CSS | Team photos scale 1.05x on hover | Line 48: `group-hover:scale-105` |
| **Plus Button Fade In** | Tailwind CSS | Plus button appears on hover | Line 59-61 |
| **Plus Button Hover** | Tailwind CSS | Button turns coral on hover | Line 59: `hover:bg-coral` |

---

## 14. BLOG PAGE ANIMATIONS

### File: `src/pages/Blog.tsx`

| Animation | Type | Description | Code Location |
|-----------|------|-------------|---------------|
| **Header Fade + Slide Up** | Framer Motion | Page header animates on load | Line 90-93 |
| **Featured Article Fade Up** | Framer Motion | Main featured article animates | Line 104-108 |
| **Side Articles Stagger** | Framer Motion | Side articles stagger with 0.1s delay | Line 129-135 |
| **Image Zoom on Hover** | Tailwind CSS | All blog images scale on hover | Line 113, 142, 237 |
| **Subscribe Banner Slide Up** | Framer Motion | Green banner slides up on scroll | Line 166-169 |
| **Category Filter Active** | React State | Active category gets coral background | Line 206-217 |
| **Latest Articles Stagger** | Framer Motion | Articles stagger with 0.05s delay | Line 224-229 |
| **Title Color Change** | Tailwind CSS | Title changes to coral on hover | Line 148, 243 |
| **Plus Button Fade In** | Tailwind CSS | Plus button appears on hover | Line 119-121, 239-241 |

---

## 15. CONTACT PAGE ANIMATIONS

### File: `src/pages/Contact.tsx`

| Animation | Type | Description | Code Location |
|-----------|------|-------------|---------------|
| **Header Fade + Slide Up** | Framer Motion | Page header animates on load | Line 52-55 |
| **Map Section Slide Up** | Framer Motion | Map with office cards slides up | Line 67-70 |
| **Office Cards Stagger** | Framer Motion | 4 office cards stagger with 0.1s delay | Line 90-96 |
| **Card Shadow on Hover** | Tailwind CSS | Office cards get shadow on hover | Line 97: `hover:shadow-card` |
| **Contact Info Slide from Left** | Framer Motion | Left panel slides from -30px | Line 113-117 |
| **Form Slide from Right** | Framer Motion | Form panel slides from +30px | Line 157-161 |
| **Social Icon Hover** | Tailwind CSS | Social icons turn coral on hover | Line 141-152 |
| **FAQ Header Fade Up** | Framer Motion | FAQ section header animates | Line 198-201 |
| **FAQ Items Stagger** | Framer Motion | FAQ items stagger in | Line 215-220 |
| **FAQ Content Expand** | Framer Motion | FAQ answers expand with height | Line 241-250 |
| **FAQ Icon Toggle** | React State | Plus/Minus icon toggles | Line 234-238 |

---

## 16. QUOTE PAGE ANIMATIONS

### File: `src/pages/Quote.tsx`

| Animation | Type | Description | Code Location |
|-----------|------|-------------|---------------|
| **Header Fade + Slide Up** | Framer Motion | Page header animates on load | Line 30-33 |
| **Image Slide from Left** | Framer Motion | Workspace image slides from -30px | Line 47-51 |
| **Form Slide from Right** | Framer Motion | Quote form slides from +30px | Line 63-67 |

---

## 17. 404 PAGE ANIMATIONS

### File: `src/pages/NotFound.tsx`

| Animation | Type | Description | Code Location |
|-----------|------|-------------|---------------|
| **Decorative Images Stagger** | Framer Motion | 4 floating images scale in with stagger | Line 20-24: `delay: index * 0.1` |
| **404 Text Slide Up** | Framer Motion | Large 404 text slides up | Line 38-42 |
| **Heading Stagger** | Framer Motion | "Oops!" heading fades in with 0.2s delay | Line 49-52 |
| **Paragraph Stagger** | Framer Motion | Description fades in with 0.3s delay | Line 58-61 |
| **Button Stagger** | Framer Motion | Back home button fades in with 0.4s delay | Line 67-70 |

---

## 18. FOOTER ANIMATIONS

### File: `src/components/layout/Footer.tsx`

| Animation | Type | Description | Code Location |
|-----------|------|-------------|---------------|
| **Link Hover Color** | Tailwind CSS | Footer links turn white on hover | Line 47, 63, 79, 95: `hover:text-white` |
| **Social Icon Hover** | Tailwind CSS | Social icons turn white on hover | Line 115-127 |

---

## Animation Timing Constants

### Easing Functions Used
```javascript
// Default easing (cubic-bezier)
[0.4, 0, 0.2, 1]

// Used in Navbar
{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }
```

### Duration Standards
| Type | Duration | Usage |
|------|----------|-------|
| Fast | 0.2s | Dropdowns, small transitions |
| Normal | 0.3s | Accordion content, most animations |
| Medium | 0.5s | Scroll reveal animations |
| Slow | 0.6s | Hero elements, page transitions |

### Stagger Delays
| Component | Delay | Items |
|-----------|-------|-------|
| Services Grid | 0.05s | 15 cards |
| Team Grid | 0.05s | 8 members |
| Blog Articles | 0.05s | 6 articles |
| Process Accordion | 0.1s | 3 items |
| Values Grid | 0.1s | 6 cards |
| About Team | 0.1s | 4 members |
| Portfolio | 0.1s | 4 projects |
| Instagram Feed | 0.1s | 4 images |
| Blog Preview | 0.1s | 2 articles |
| Office Cards | 0.1s | 4 offices |
| 404 Images | 0.1s | 4 decorations |

---

## CSS Custom Animations (Tailwind Config)

### Keyframes Defined
```javascript
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
}
```

### Animation Classes Available
- `animate-fade-in`
- `animate-slide-up`
- `animate-scale-in`

---

## Common Animation Patterns

### Scroll Reveal Pattern
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  {/* Content */}
</motion.div>
```

### Stagger Pattern
```tsx
{items.map((item, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    {/* Content */}
  </motion.div>
))}
```

### AnimatePresence Pattern
```tsx
<AnimatePresence mode="wait">
  {condition && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Content */}
    </motion.div>
  )}
</AnimatePresence>
```

### Hover Effects Pattern
```tsx
<div className="group">
  <img className="transition-transform duration-500 group-hover:scale-105" />
  <button className="opacity-0 group-hover:opacity-100 transition-opacity" />
</div>
```
