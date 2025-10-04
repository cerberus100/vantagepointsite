# VantagePoint Website

A high-trust, healthcare-grade website optimized for recruiting and B2B lead generation. Built with enterprise Next.js patterns, robust accessibility, and a modular design system.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm 8+ (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd vantagepointsite

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## 📁 Project Structure

```
vantagepointsite/
├── app/                      # Next.js 14 App Router
│   ├── (site)/              # Main site routes
│   │   ├── page.tsx         # Home page
│   │   ├── about/           # About page
│   │   ├── contact/         # Contact page
│   │   ├── solutions/       # Solutions pages
│   │   ├── programs/       # Programs & Blueprints (list + detail)
│   │   ├── resources/       # Resources (list + detail)
│   │   └── compliance/      # Compliance & standards
│   ├── api/                 # API routes
│   │   └── contact/         # Contact form handler
│   ├── globals.css          # Global styles
│   └── layout.tsx           # Root layout
├── components/              # React components
│   ├── ui/                  # shadcn/ui components
│   ├── header.tsx           # Site header
│   ├── footer.tsx           # Site footer
│   ├── hero-section.tsx     # Hero component
│   ├── stat-card.tsx        # Stat display
│   ├── testimonial.tsx      # Testimonial component
│   └── ...                  # Other components
├── content/                 # MDX content
│   ├── case-studies/        # Case study MDX files
│   └── resources/           # Resource MDX files
├── lib/                     # Utilities
│   ├── utils.ts             # General utilities
│   ├── mdx.ts               # MDX helpers
│   └── seo.ts               # SEO configuration
├── __tests__/               # Test files
├── public/                  # Static assets
└── ...config files
```

## 🎨 Design System

### Brand Colors

```css
--navy: #0A2540      /* Primary brand color */
--teal: #0FB5BA      /* Secondary/accent */
--slate: #334155     /* Body text */
--fog: #E5E7EB       /* Backgrounds */
--gold: #C8A85A      /* CTAs/highlights */
```

### Typography

- **UI/Body**: Inter (sans-serif)
- **Headlines/Quotes**: Source Serif Pro (serif)
- **Line Height**: ≥ 1.5 for readability

### Components

All UI components are built with:
- **shadcn/ui**: Accessible, customizable primitives
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations (respects `prefers-reduced-motion`)

## 📝 Content Management

### Adding Programs & Blueprints

Create a new MDX file in `content/programs/`:

```mdx
---
title: "Your Program Blueprint Title"
category: "Medical Device Category"
barriers: ["Barrier 1", "Barrier 2", "Barrier 3"]
deliverables: ["Deliverable 1", "Deliverable 2", "Deliverable 3"]
overview: "Brief overview of the program"
measurement_plan: "Leading indicators and measurement approach"
compliance_guardrails: "HIPAA, MLR, and regulatory considerations"
publishedAt: "2024-01-01"
---

## Your Content Here

Write your program blueprint content in Markdown...
```

### Adding Resources

Create a new MDX file in `content/resources/`:

```mdx
---
title: "Resource Title"
type: "guide" | "webinar" | "brief"
tags: ["Tag1", "Tag2"]
summary: "Brief summary"
gated: true | false
publishedAt: "2024-01-01"
---

## Your Content Here
```

## 🧪 Testing

```bash
# Run unit tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with UI
pnpm test:ui
```

## 🔍 Code Quality

```bash
# Type checking
pnpm typecheck

# Linting
pnpm lint

# Format code
pnpm format

# Check formatting
pnpm format:check
```

## 🏗️ Building for Production

```bash
# Create production build
pnpm build

# Start production server
pnpm start
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Environment Variables

```bash
# Required
SITE_URL=https://vantagepoint.health
NEXT_PUBLIC_SITE_NAME=VantagePoint

# Optional
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=vantagepoint.health
NEXT_PUBLIC_FORM_ENDPOINT=/api/contact
```

## ♿ Accessibility

This site is built to WCAG 2.2 AA standards:

- ✅ Semantic HTML and ARIA landmarks
- ✅ Keyboard navigation support
- ✅ Skip link for main content
- ✅ Color contrast ≥ 4.5:1
- ✅ Focus indicators on all interactive elements
- ✅ Reduced motion support
- ✅ Alt text on all images
- ✅ Form labels and error messages

## 🔒 Security & Compliance

- **HIPAA-Aware**: No PHI collected in forms
- **Security Headers**: HSTS, CSP, X-Frame-Options, etc.
- **Data Protection**: All form submissions validated server-side
- **Privacy**: Cookie-less analytics with Plausible

## 📊 Analytics

This site uses [Plausible Analytics](https://plausible.io) for privacy-friendly, GDPR-compliant analytics. No cookies, no personal data collection.

## 🎯 Performance

Target metrics (Lighthouse):
- Performance: ≥ 95
- Accessibility: ≥ 95
- Best Practices: 100
- SEO: 100

Optimization techniques:
- Image optimization with Next.js Image
- Font subsetting and preloading
- Route prefetching
- Edge caching
- Tree shaking

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new case study page
fix: resolve mobile menu issue
docs: update README
style: format code
refactor: simplify contact form
test: add stat card tests
```

## 📄 License

Proprietary - VantagePoint Health Solutions

## 🆘 Support

For technical issues or questions:
- Email: dev@vantagepoint.health
- Internal Slack: #website-support

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [MDX](https://mdxjs.com)
- [Framer Motion](https://www.framer.com/motion)

## 🗺️ Roadmap

- [ ] Multi-language support (en-US, es-US)
- [ ] Customer portal for enablement kits
- [ ] Events & webinars module
- [ ] Advanced search functionality
- [ ] CMS integration (Contentful/Sanity)

---

Built with ❤️ by the VantagePoint team
