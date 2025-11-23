# Quick Start Guide - Deploy Naylence Site

## 🎯 Fastest Path to Deployment

### Step 1: Install Dependencies (2 minutes)

```bash
cd /Users/jt/naylence
npm install
```

### Step 2: Test Locally (1 minute)

```bash
npm run dev
```

Visit `http://localhost:5173` - your site should be running!

### Step 3: Push to GitHub (5 minutes)

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit"

# Create repo on GitHub.com, then:
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/naylence-site.git
git push -u origin main
```

### Step 4: Deploy on Vercel (2 minutes)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New..." → "Project"
3. Find `naylence-site` and click "Import"
4. Click "Deploy"
5. Wait 60 seconds... ✨ **Your site is live!**

## ✅ Checklist Before Deploying

- [ ] Run `npm install` successfully
- [ ] `npm run dev` works locally
- [ ] Images are in `public/` folder:
  - [ ] `swirl_dark_teal_darker_bg.png`
  - [ ] `swirl-original.png`
- [ ] Code pushed to GitHub
- [ ] Vercel project imported

## 🐛 Common Issues

**"Cannot find module"**
→ Run `npm install` again

**Images not showing**
→ Check images are in `public/` folder and paths start with `/`

**Build fails on Vercel**
→ Check `package.json` has all dependencies listed

## 📖 Need More Help?

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

---

**Total time to deploy: ~10 minutes** ⚡

