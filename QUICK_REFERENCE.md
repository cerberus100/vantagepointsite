# 🚀 Quick Reference Card

Essential commands and patterns for working with the VantagePoint website.

## ⚡ Common Commands

```bash
# Development
pnpm dev              # Start dev server (http://localhost:3000)
pnpm build            # Build for production
pnpm start            # Run production build

# Code Quality
pnpm typecheck        # Check types
pnpm lint             # Lint code
pnpm format           # Format code
pnpm test             # Run tests

# All checks at once
pnpm typecheck && pnpm lint && pnpm test --run
```

## 📝 Adding Content

### New Case Study

1. Create `content/case-studies/your-slug.mdx`
2. Add frontmatter (see CONTENT_GUIDE.md)
3. Write content in Markdown
4. Save and refresh browser

### New Resource

1. Create `content/resources/your-slug.mdx`
2. Add frontmatter (see CONTENT_GUIDE.md)
3. Write content in Markdown
4. Save and refresh browser

## 🎨 Component Usage

### Button
```tsx
import { Button } from "@/components/ui/button";

<Button variant="gold" size="lg">Click Me</Button>
// Variants: default, gold, outline, secondary, ghost, link
// Sizes: sm, default, lg, icon
```

### Card
```tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content here</CardContent>
</Card>
```

### Hero Section
```tsx
import { HeroSection } from "@/components/hero-section";

<HeroSection
  title="Your Title"
  subtitle="Your subtitle"
  variant="pattern" // or "default"
>
  <Button>CTA</Button>
</HeroSection>
```

### Stat Card
```tsx
import { StatCard } from "@/components/stat-card";

<StatCard
  title="Metric Name"
  value="+50%"
  qualifier="optional"
  footnote="Additional context"
/>
```

### Testimonial
```tsx
import { Testimonial } from "@/components/testimonial";

<Testimonial
  quote="Client quote here"
  author="Name"
  role="Title"
  org="Company"
/>
```

## 🎨 Styling Patterns

### Colors
```tsx
// Text colors
className="text-navy"      // Primary brand
className="text-teal"      // Secondary/accent
className="text-slate"     // Body text
className="text-fog"       // Light text

// Background colors
className="bg-navy"
className="bg-teal"
className="bg-fog"
className="bg-gold"
```

### Typography
```tsx
// Headings (use font-serif)
className="font-serif text-4xl font-bold text-navy"

// Body text (default font-sans)
className="text-lg text-slate"

// Small text
className="text-sm text-slate"
```

### Spacing
```tsx
// Padding
className="p-6"           // All sides
className="px-6 py-4"     // Horizontal & vertical

// Margin
className="mt-8"          // Top
className="mb-12"         // Bottom
className="mx-auto"       // Horizontal center

// Gap (for flex/grid)
className="gap-8"
```

### Layout
```tsx
// Container
className="mx-auto max-w-7xl px-6 lg:px-8"

// Flex
className="flex items-center justify-between gap-4"

// Grid
className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
```

## 🔗 Common Paths

```
/                          # Home
/about                     # About
/contact                   # Contact
/compliance                # Compliance
/solutions/education-programs
/programs                  # List
/programs/[slug]           # Detail
/resources                 # List
/resources/[slug]          # Detail
```

## 📁 File Locations

```
Components:     components/
Pages:          app/
Content:        content/
Images:         public/images/
Styles:         app/globals.css
Utils:          lib/
Tests:          __tests__/
Config:         *.config.ts
```

## 🧪 Testing Patterns

```tsx
// Component test
import { render, screen } from "@testing-library/react";
import { MyComponent } from "@/components/my-component";

describe("MyComponent", () => {
  it("renders correctly", () => {
    render(<MyComponent title="Test" />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
```

## 🔍 Debugging

```bash
# Check TypeScript errors
pnpm typecheck

# Check linting errors
pnpm lint

# Check build errors
pnpm build

# Clear cache
rm -rf .next node_modules
pnpm install
```

## 🚀 Deployment Checklist

```bash
# Pre-deploy checks
pnpm typecheck        # ✓ No type errors
pnpm lint             # ✓ No lint errors
pnpm test --run       # ✓ All tests pass
pnpm build            # ✓ Build succeeds

# Deploy
git push origin main  # Triggers CI/CD
```

## 📊 SEO Quick Tips

```tsx
// Page-level SEO
import { NextSeo } from "next-seo";

<NextSeo
  title="Page Title"
  description="Page description (150-160 chars)"
/>

// Image alt text
<img src="/path.jpg" alt="Descriptive alt text" />

// Link text (avoid "click here")
<Link href="/about">Learn about our team</Link>
```

## ♿ Accessibility Quick Tips

```tsx
// Always use semantic HTML
<button> not <div onClick>
<nav> for navigation
<main> for main content
<article> for articles

// Add ARIA labels when needed
<button aria-label="Close menu">
  <X />
</button>

// Form labels
<label htmlFor="email">Email</label>
<input id="email" type="email" />

// Focus indicators (automatic with Tailwind)
className="focus-visible:ring-2 focus-visible:ring-ring"
```

## 🎨 Brand Voice

**Do:**
- Use evidence-based language
- Cite sources for claims
- Be clear and concise
- Focus on outcomes
- Show empathy for patients

**Don't:**
- Use hype or superlatives
- Make unsubstantiated claims
- Use excessive jargon
- Promote off-label use
- Include PHI in examples

## 📞 Need Help?

- **Setup Issues**: See SETUP.md
- **Content Questions**: See CONTENT_GUIDE.md
- **Full Docs**: See README.md
- **Launch Prep**: See LAUNCH_CHECKLIST.md
- **Technical Support**: dev@vantagepoint.health

---

**Pro Tip**: Bookmark this file for quick reference! 🔖
