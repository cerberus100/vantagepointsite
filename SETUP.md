# 🚀 VantagePoint Website Setup Guide

Follow these steps to get the website running locally.

## Prerequisites

Before you begin, ensure you have:

- **Node.js 18+** - [Download](https://nodejs.org/)
- **pnpm 8+** - Install with: `npm install -g pnpm`
- **Git** - [Download](https://git-scm.com/)

## Step 1: Clone & Install

```bash
# Clone the repository
git clone <repository-url>
cd vantagepointsite

# Install dependencies
pnpm install
```

This will install all required packages (~5 minutes on first run).

## Step 2: Environment Setup

```bash
# Copy the example environment file
cp .env.example .env.local

# Edit .env.local with your values
# You can use nano, vim, or your preferred editor
nano .env.local
```

Required variables:
```bash
SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=VantagePoint
```

Optional (for production):
```bash
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=vantagepoint.health
```

## Step 3: Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

You should see the VantagePoint homepage! 🎉

## Step 4: Verify Setup

Run these commands to ensure everything is working:

```bash
# Type checking
pnpm typecheck

# Linting
pnpm lint

# Tests
pnpm test --run

# Build (optional, takes ~2 min)
pnpm build
```

If all commands complete without errors, you're ready to develop!

## Common Issues & Solutions

### Issue: `pnpm: command not found`

**Solution**: Install pnpm globally
```bash
npm install -g pnpm
```

### Issue: Port 3000 already in use

**Solution**: Kill the process or use a different port
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or run on different port
pnpm dev -- -p 3001
```

### Issue: Module not found errors

**Solution**: Clear cache and reinstall
```bash
rm -rf node_modules .next
pnpm install
pnpm dev
```

### Issue: TypeScript errors

**Solution**: Ensure you're using Node 18+
```bash
node --version  # Should be v18.x.x or higher
```

## Next Steps

### For Developers

1. **Read the docs**: Check out `README.md` for project structure
2. **Review components**: Explore `components/` directory
3. **Check tests**: Look at `__tests__/` for examples
4. **Run Storybook** (if configured): `pnpm storybook`

### For Content Authors

1. **Read content guide**: See `CONTENT_GUIDE.md`
2. **Add case study**: Create file in `content/case-studies/`
3. **Add resource**: Create file in `content/resources/`
4. **Preview changes**: Save file and refresh browser

### For Designers

1. **Review design system**: Check `tailwind.config.ts`
2. **Brand colors**: See `app/globals.css`
3. **Component library**: Explore `components/ui/`
4. **Typography**: Inter (UI), Source Serif Pro (headlines)

## Development Workflow

```bash
# 1. Create a feature branch
git checkout -b feature/your-feature-name

# 2. Make your changes
# Edit files in app/, components/, or content/

# 3. Test your changes
pnpm typecheck
pnpm lint
pnpm test

# 4. Commit (pre-commit hooks will run automatically)
git add .
git commit -m "feat: add new feature"

# 5. Push and create PR
git push origin feature/your-feature-name
```

## Useful Commands

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Create production build
pnpm start            # Run production build locally

# Code Quality
pnpm typecheck        # Check TypeScript types
pnpm lint             # Run ESLint
pnpm format           # Format code with Prettier
pnpm format:check     # Check if code is formatted

# Testing
pnpm test             # Run tests in watch mode
pnpm test --run       # Run tests once
pnpm test:ui          # Run tests with UI

# Utilities
pnpm clean            # Clean build artifacts (if configured)
```

## Project Structure Quick Reference

```
vantagepointsite/
├── app/              # Pages and routes
├── components/       # React components
├── content/          # MDX content (case studies, resources)
├── lib/              # Utilities and helpers
├── public/           # Static files (images, fonts)
├── __tests__/        # Test files
└── ...config files
```

## Getting Help

- **Documentation**: See `README.md`
- **Content Guide**: See `CONTENT_GUIDE.md`
- **Launch Checklist**: See `LAUNCH_CHECKLIST.md`
- **Technical Issues**: dev@vantagepoint.health
- **Slack**: #website-support

## Additional Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [MDX Docs](https://mdxjs.com)
- [Vitest Docs](https://vitest.dev)

---

**Ready to build?** Start editing `app/page.tsx` and see your changes live! 🚀
