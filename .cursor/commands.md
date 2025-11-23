# Naylence Website - Common Commands & Shortcuts

## Development Commands

### Setup
```bash
# Install dependencies
npm install

# Start development server (adjust port if needed)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Package Management
```bash
# Add a new dependency
npm install <package-name>

# Add a dev dependency
npm install -D <package-name>

# Update dependencies
npm update

# Check for outdated packages
npm outdated
```

## Git Commands

### Basic Workflow
```bash
# Check status
git status

# Stage all changes
git add .

# Commit with message
git commit -m "Description of changes"

# Push to remote
git push origin main

# Pull latest changes
git pull origin main
```

### Branch Management
```bash
# Create and switch to new branch
git checkout -b feature/feature-name

# Switch branches
git checkout branch-name

# List all branches
git branch -a

# Merge branch
git merge branch-name

# Delete branch
git branch -d branch-name
```

## Vercel Commands

### Deployment
```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod

# View deployment logs
vercel logs

# List deployments
vercel ls
```

### Environment Variables
```bash
# Add environment variable
vercel env add VARIABLE_NAME

# List environment variables
vercel env ls

# Remove environment variable
vercel env rm VARIABLE_NAME
```

## Code Quality Commands

### Linting & Formatting
```bash
# Run linter (if configured)
npm run lint

# Fix linting issues
npm run lint:fix

# Format code (if Prettier configured)
npm run format

# Check formatting
npm run format:check
```

### Type Checking (if TypeScript)
```bash
# Type check without building
npm run type-check

# Watch mode for type checking
npm run type-check:watch
```

## Testing Commands (if configured)

```bash
# Run tests
npm test

# Run tests in watch mode
npm test:watch

# Run tests with coverage
npm test:coverage

# Run E2E tests
npm run test:e2e
```

## Build & Optimization

### Production Build
```bash
# Build for production
npm run build

# Analyze bundle size (if configured)
npm run build:analyze

# Build with source maps
npm run build:dev
```

### Asset Optimization
```bash
# Optimize images (if tool configured)
npm run optimize:images

# Generate favicons (if tool configured)
npm run generate:favicons
```

## Debugging Commands

### Development Server
```bash
# Start with specific port
PORT=3000 npm run dev

# Start with host binding
npm run dev -- --host

# Start with verbose logging
DEBUG=* npm run dev
```

### Browser DevTools
- **Chrome/Edge**: F12 or Cmd+Option+I (Mac) / Ctrl+Shift+I (Windows)
- **Firefox**: F12 or Cmd+Option+I (Mac) / Ctrl+Shift+I (Windows)
- **Safari**: Cmd+Option+I (enable Developer menu first)

## Useful Terminal Shortcuts

### Navigation
```bash
# Go to project root
cd /Users/jt/naylence

# Go to parent directory
cd ..

# List files with details
ls -la

# Find files by name
find . -name "*.jsx"

# Search in files
grep -r "search-term" .
```

### File Operations
```bash
# Create directory
mkdir directory-name

# Create file
touch filename.jsx

# Copy file
cp source.jsx dest.jsx

# Move/rename file
mv old-name.jsx new-name.jsx

# Delete file
rm filename.jsx

# Delete directory
rm -rf directory-name
```

## VS Code / Cursor Shortcuts

### Editing
- **Format Document**: Shift+Option+F (Mac) / Shift+Alt+F (Windows)
- **Go to Definition**: Cmd+Click (Mac) / Ctrl+Click (Windows)
- **Find All References**: Shift+F12
- **Rename Symbol**: F2
- **Quick Fix**: Cmd+. (Mac) / Ctrl+. (Windows)

### Navigation
- **Command Palette**: Cmd+Shift+P (Mac) / Ctrl+Shift+P (Windows)
- **Go to File**: Cmd+P (Mac) / Ctrl+P (Windows)
- **Go to Symbol**: Cmd+Shift+O (Mac) / Ctrl+Shift+O (Windows)
- **Toggle Sidebar**: Cmd+B (Mac) / Ctrl+B (Windows)

### Multi-Cursor
- **Add Cursor**: Option+Click (Mac) / Alt+Click (Windows)
- **Add Cursor Above**: Option+Cmd+Up (Mac) / Alt+Ctrl+Up (Windows)
- **Add Cursor Below**: Option+Cmd+Down (Mac) / Alt+Ctrl+Down (Windows)

## Browser Testing Commands

### Open in Different Browsers
```bash
# Chrome (Mac)
open -a "Google Chrome" http://localhost:5173

# Firefox (Mac)
open -a Firefox http://localhost:5173

# Safari (Mac)
open -a Safari http://localhost:5173
```

### Responsive Testing
- Use browser DevTools device emulation
- Test breakpoints: 375px (mobile), 768px (tablet), 1024px (desktop), 1440px (large)

## Performance Testing

### Lighthouse (Chrome DevTools)
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Select categories (Performance, Accessibility, Best Practices, SEO)
4. Click "Generate report"

### Web Vitals
```bash
# Install web-vitals (if not already)
npm install web-vitals

# Use in code to measure Core Web Vitals
```

## Quick Fixes

### Clear Cache
```bash
# Clear npm cache
npm cache clean --force

# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear browser cache
# Chrome: Cmd+Shift+Delete (Mac) / Ctrl+Shift+Delete (Windows)
```

### Port Already in Use
```bash
# Find process using port
lsof -ti:5173

# Kill process
kill -9 $(lsof -ti:5173)

# Or use different port
PORT=3000 npm run dev
```

## Useful Aliases (add to ~/.zshrc or ~/.bashrc)

```bash
# Project navigation
alias naylence="cd /Users/jt/naylence"

# Git shortcuts
alias gs="git status"
alias ga="git add ."
alias gc="git commit -m"
alias gp="git push"
alias gl="git pull"

# NPM shortcuts
alias ni="npm install"
alias nd="npm run dev"
alias nb="npm run build"

# Quick server
alias serve="python3 -m http.server 8000"
```

## Environment-Specific Commands

### Development
- Hot reload enabled
- Source maps enabled
- Verbose error messages
- Dev tools enabled

### Production
- Minified code
- Optimized assets
- Error tracking (if configured)
- Analytics (if configured)

## Monitoring & Analytics

### Vercel Analytics (if enabled)
```bash
# View analytics in Vercel dashboard
# No CLI commands needed, use web interface
```

### Error Tracking (if configured)
- Check error tracking service dashboard
- Monitor error rates and types
- Set up alerts for critical errors

