# How to Deploy Your Naylence Site to Vercel

This guide will help you deploy your refactored Naylence website to Vercel. The project is already set up with Vite, React, Tailwind CSS, and all necessary components.

## Prerequisites

- Node.js installed (v18 or higher recommended) - [Download here](https://nodejs.org/)
- A GitHub account
- A Vercel account (free tier works perfectly)

## Phase 1: Install Dependencies

Open your terminal in the project directory (`/Users/jt/naylence`) and run:

```bash
npm install
```

This will install all the required dependencies including:
- React & React DOM
- Vite (build tool)
- Tailwind CSS
- Lucide React (icons)

## Phase 2: Test Locally

Before deploying, test your site locally:

```bash
npm run dev
```

Open your browser to `http://localhost:5173` (or the port shown in terminal). You should see your Naylence website running locally.

To build for production:

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

## Phase 3: Set Up Git Repository

If you haven't already initialized git:

```bash
git init
git add .
git commit -m "Initial commit: Naylence website"
```

## Phase 4: Push to GitHub

1. **Create a new repository on GitHub:**
   - Go to [GitHub.com](https://github.com)
   - Click "New repository"
   - Name it `naylence-site` (or any name you prefer)
   - **Don't** initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

2. **Connect and push your code:**
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/naylence-site.git
   git push -u origin main
   ```
   
   Replace `YOUR_USERNAME` with your GitHub username.

## Phase 5: Deploy on Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Log in to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import your project:**
   - Click "Add New..." → "Project"
   - You'll see a list of your GitHub repositories
   - Find `naylence-site` and click "Import"

3. **Configure deployment:**
   - **Framework Preset**: Vite (should auto-detect)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (should auto-detect)
   - **Output Directory**: `dist` (should auto-detect)
   - **Install Command**: `npm install` (should auto-detect)

4. **Deploy:**
   - Click "Deploy"
   - Wait 60-90 seconds for the build to complete
   - Your site will be live at `naylence-site.vercel.app` (or similar)

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Link to existing project? No
   - Project name: `naylence-site`
   - Directory: `./`
   - Override settings? No

4. **Deploy to production:**
   ```bash
   vercel --prod
   ```

## Phase 6: Add Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `naylence.ai`)
4. Follow DNS configuration instructions

## Phase 7: Add Static Assets

Make sure your logo images are in the `public` folder:

```
public/
├── swirl_dark_teal_darker_bg.png
└── swirl-original.png
```

If they're not there, create the `public` folder and add them. Vite will automatically serve files from `public/` at the root URL.

## Troubleshooting

### Build Fails

**Error: "Cannot find module"**
- Run `npm install` again
- Check that all dependencies are in `package.json`

**Error: "Tailwind CSS not working"**
- Verify `tailwind.config.js` has correct content paths
- Check that `src/index.css` has Tailwind directives

### Images Not Loading

- Ensure images are in the `public/` folder
- Check image paths in components (should start with `/`)
- Verify file names match exactly (case-sensitive)

### Vercel Deployment Issues

**Build timeout:**
- Check `vercel.json` configuration
- Ensure build command is correct

**404 errors:**
- Verify `vercel.json` rewrite rules are correct
- Check that `index.html` is in the root

### Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview production build

# Git
git add .                # Stage changes
git commit -m "message"  # Commit changes
git push                 # Push to GitHub

# Vercel CLI
vercel                   # Deploy preview
vercel --prod            # Deploy to production
vercel logs              # View deployment logs
```

## Project Structure

Your refactored project structure:

```
naylence/
├── public/              # Static assets (images, etc.)
│   ├── swirl_dark_teal_darker_bg.png
│   └── swirl-original.png
├── src/
│   ├── components/     # React components
│   │   ├── Logo.jsx
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── CodePreview.jsx
│   │   ├── Architecture.jsx
│   │   ├── Blog.jsx
│   │   └── Footer.jsx
│   ├── hooks/          # Custom React hooks
│   │   └── useScroll.js
│   ├── data/           # Data/constants
│   │   └── constants.js
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # React entry point
│   └── index.css       # Tailwind CSS
├── index.html          # HTML entry point
├── package.json        # Dependencies
├── vite.config.js     # Vite configuration
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
├── vercel.json         # Vercel deployment config
└── .gitignore          # Git ignore rules
```

## Next Steps After Deployment

1. **Test the live site:**
   - Check all links work
   - Test mobile responsiveness
   - Verify images load correctly

2. **Set up environment variables** (if needed):
   - In Vercel dashboard → Settings → Environment Variables

3. **Enable analytics** (optional):
   - Vercel Analytics in project settings

4. **Set up automatic deployments:**
   - Already enabled! Every push to `main` branch auto-deploys

## Continuous Deployment

Once set up, every time you:
1. Make changes to your code
2. Commit and push to GitHub
3. Vercel automatically rebuilds and redeploys your site

No manual deployment needed! 🎉

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

---

**Your site should now be live!** 🚀

Visit your Vercel URL to see your Naylence website in action.

