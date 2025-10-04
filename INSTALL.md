# 📦 Installation Instructions

Get the VantagePoint website running in 5 minutes.

## Prerequisites Check

Run these commands to verify your environment:

```bash
node --version    # Should be v18.0.0 or higher
pnpm --version    # Should be 8.0.0 or higher
git --version     # Any recent version
```

If any are missing:
- **Node.js**: Download from [nodejs.org](https://nodejs.org/)
- **pnpm**: Run `npm install -g pnpm`
- **Git**: Download from [git-scm.com](https://git-scm.com/)

## Installation Steps

### 1. Install Dependencies

```bash
cd vantagepointsite
pnpm install
```

This will:
- Install all npm packages (~2-5 minutes)
- Set up Husky git hooks
- Prepare the development environment

### 2. Environment Configuration

```bash
# Copy the example file
cp .env.example .env.local

# Edit with your values (optional for local development)
nano .env.local
```

Minimum configuration for local development:
```bash
SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=VantagePoint
```

### 3. Start Development Server

```bash
pnpm dev
```

You should see:
```
  ▲ Next.js 14.2.5
  - Local:        http://localhost:3000
  - Ready in 2.3s
```

### 4. Verify Installation

Open your browser to [http://localhost:3000](http://localhost:3000)

You should see the VantagePoint homepage with:
- ✅ Hero section with gradient background
- ✅ Trust band with placeholder logos
- ✅ Three pillars section
- ✅ Outcomes metrics
- ✅ Featured case study
- ✅ Testimonial
- ✅ CTA section

### 5. Run Tests (Optional)

```bash
# Type checking
pnpm typecheck

# Linting
pnpm lint

# Unit tests
pnpm test --run

# Build test
pnpm build
```

All should complete without errors.

## What Gets Installed

### Core Dependencies
- **next**: React framework
- **react** & **react-dom**: UI library
- **typescript**: Type safety
- **tailwindcss**: Styling
- **framer-motion**: Animations
- **zod**: Validation
- **next-seo**: SEO optimization

### UI Components
- **@radix-ui/***: Accessible primitives
- **lucide-react**: Icons
- **class-variance-authority**: Component variants

### Development Tools
- **eslint**: Code linting
- **prettier**: Code formatting
- **vitest**: Testing framework
- **husky**: Git hooks

Total install size: ~500MB

## Troubleshooting

### "Cannot find module" errors

```bash
# Clear everything and reinstall
rm -rf node_modules .next
pnpm install
```

### Port 3000 already in use

```bash
# Option 1: Kill the process
lsof -ti:3000 | xargs kill -9

# Option 2: Use a different port
pnpm dev -- -p 3001
```

### TypeScript errors on first run

This is normal. TypeScript will check files as you navigate. To check all files:

```bash
pnpm typecheck
```

### Slow installation

```bash
# Use a faster mirror (if in China)
pnpm config set registry https://registry.npmmirror.com

# Or use npm instead
npm install
npm run dev
```

### Git hooks not working

```bash
# Manually set up Husky
pnpm husky install
chmod +x .husky/pre-commit
```

## Post-Installation

### Recommended VS Code Extensions

Install these for the best development experience:

1. **ESLint** (dbaeumer.vscode-eslint)
2. **Prettier** (esbenp.prettier-vscode)
3. **Tailwind CSS IntelliSense** (bradlc.vscode-tailwindcss)
4. **MDX** (unifiedjs.vscode-mdx)

### VS Code Settings

Add to `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

## Verification Checklist

After installation, verify these work:

- [ ] Homepage loads at localhost:3000
- [ ] Navigation menu works
- [ ] All pages are accessible
- [ ] Contact form renders
- [ ] Case studies page loads
- [ ] Resources page loads
- [ ] No console errors
- [ ] `pnpm typecheck` passes
- [ ] `pnpm lint` passes
- [ ] `pnpm test --run` passes

## Next Steps

1. **Explore the site**: Click through all pages
2. **Read the docs**: Check out README.md
3. **Review components**: Look at components/ directory
4. **Add content**: Create a case study or resource
5. **Make changes**: Edit app/page.tsx and see live updates

## Getting Help

- **Setup issues**: See SETUP.md for detailed guide
- **Development questions**: See README.md
- **Content authoring**: See CONTENT_GUIDE.md
- **Quick reference**: See QUICK_REFERENCE.md
- **Technical support**: dev@vantagepoint.health

## System Requirements

### Minimum
- **OS**: macOS, Windows, Linux
- **RAM**: 4GB
- **Disk**: 2GB free space
- **Node**: 18.0.0+

### Recommended
- **OS**: macOS or Linux
- **RAM**: 8GB+
- **Disk**: 5GB free space
- **Node**: 20.0.0+
- **Editor**: VS Code with extensions

## Build Times

Typical times on modern hardware:

- **Install**: 2-5 minutes
- **Dev server start**: 2-5 seconds
- **Hot reload**: <1 second
- **Production build**: 1-2 minutes
- **Type check**: 5-10 seconds
- **Tests**: 2-5 seconds

---

**Installation complete!** 🎉

Run `pnpm dev` and start building!
