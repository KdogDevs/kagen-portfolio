# Kagen Jensen - Portfolio

A modern, high-performance portfolio website built with Apple's "liquid glass" design language.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ✨ Features

### Apple-Style Design Language
- **Glass Morphism**: Translucent cards with backdrop-blur effects
- **Smooth Animations**: Apple's cubic-bezier timing functions
- **SF Pro Typography**: System font stack for optimal readability
- **Dark Mode**: Seamless light/dark theme switching
- **Responsive Design**: Mobile-first approach with fluid layouts

### Performance Optimized
- **Modern JavaScript**: ES2022 target for smaller bundles
- **Code Splitting**: Lazy-loaded components and routes
- **Optimized Assets**: Compressed images and fonts
- **Critical CSS**: Inlined above-the-fold styles
- **Bundle Analysis**: Optimized chunk splitting

### Accessibility & SEO
- **WCAG Compliance**: AA color contrast and screen reader support
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Meta Tags**: Open Graph and Twitter Card support
- **Structured Data**: JSON-LD for rich search results
- **Performance**: Target Lighthouse score ≥ 95

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with HMR and optimizations
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion with reduced motion support
- **State Management**: TanStack Query for data fetching
- **Routing**: React Router 6 with code splitting

## 📱 Browser Support

- Chrome/Edge 91+
- Firefox 90+
- Safari 14+
- iOS Safari 14+
- Android Chrome 91+

## 🎨 Design System

### Glass Morphism Utilities
```css
.glass-sm   /* 8px blur, light transparency */
.glass-md   /* 16px blur, medium transparency */
.glass-lg   /* 24px blur, strong transparency */
.glass-xl   /* 32px blur, maximum transparency */
```

### Apple Transitions
```css
.apple-transition      /* 300ms cubic-bezier */
.apple-transition-fast /* 200ms cubic-bezier */
.apple-transition-slow /* 400ms cubic-bezier */
```

## 📊 Performance Metrics

- **Lighthouse Performance**: 95+
- **First Contentful Paint**: < 1.2s
- **Largest Contentful Paint**: < 1.5s
- **Cumulative Layout Shift**: < 0.1
- **Total Bundle Size**: < 200KB gzipped

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy dist/ folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy dist/ folder to gh-pages branch
```

## 📝 License

MIT License - feel free to use this as a template for your own portfolio.

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with ❤️ by [Kagen Jensen](https://kagen.dev)
