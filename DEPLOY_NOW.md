# Quick Deploy to Vercel - Step by Step

## ✅ Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Naylence website"

# Create a new repository on GitHub.com first, then:
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/naylence-site.git
git push -u origin main
```

**Replace `YOUR_USERNAME` with your GitHub username**

## ✅ Step 2: Deploy on Vercel

1. **Go to Vercel**: https://vercel.com
2. **Sign in** with your GitHub account
3. **Click "Add New..." → "Project"**
4. **Import your repository**: Find `naylence-site` and click "Import"
5. **Configure** (Vercel should auto-detect):
   - Framework Preset: **Vite** ✅
   - Root Directory: `./` ✅
   - Build Command: `npm run build` ✅
   - Output Directory: `dist` ✅
   - Install Command: `npm install` ✅
6. **Click "Deploy"**
7. **Wait 60-90 seconds** ⏱️
8. **Your site is live!** 🎉

You'll get a URL like: `naylence-site.vercel.app`

---

## Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

---

## 🎯 Quick Checklist

Before deploying:
- [x] Dependencies installed (`npm install`)
- [x] Build works (`npm run build`)
- [ ] Code pushed to GitHub
- [ ] Images in `public/` folder:
  - [x] `swirl_dark_teal_darker_bg.png`
  - [ ] `swirl-original.png` (if you have it)

---

## 🐛 Troubleshooting

**Build fails on Vercel?**
- Check build logs in Vercel dashboard
- Ensure `package.json` has all dependencies
- Verify `vercel.json` configuration

**Images not loading?**
- Make sure images are in `public/` folder
- Check image paths start with `/` (e.g., `/swirl_dark_teal_darker_bg.png`)

**Need help?**
- See full guide: `DEPLOYMENT.md`
- Vercel docs: https://vercel.com/docs

