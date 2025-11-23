# Naylence Website

The official website for [Naylence.ai](https://naylence.ai) - A framework for building networks of distributed AI agents.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ ([Download](https://nodejs.org/))
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

## 📁 Project Structure

```
naylence/
├── public/              # Static assets
│   ├── swirl_dark_teal_darker_bg.png   # Logo
│   └── swirl-original.png
├── src/
│   ├── components/      # React components
│   ├── hooks/           # Custom hooks
│   ├── data/            # Constants/data
│   ├── App.jsx         # Main app
│   ├── main.jsx        # Entry point
│   └── index.css       # Tailwind CSS
├── index.html          # HTML entry
├── package.json
├── vite.config.js
├── tailwind.config.js
└── vercel.json         # Vercel config
```

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Vercel** - Deployment

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🚢 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy to Vercel

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy! ✨

## 🎨 Design System

- **Primary Colors**: Teal (`teal-400`, `teal-500`, `teal-600`)
- **Secondary Colors**: Emerald (`emerald-500`)
- **Background**: Deep Teal/Black (`#020808`, `#030c0c`)
- **Text**: White (headings), Slate (body)

See `.cursorrules` for complete design guidelines.

## 📚 Documentation

- [Deployment Guide](./DEPLOYMENT.md)
- [Refactoring Notes](./REFACTORING.md)
- [Cursor Rules](./.cursorrules)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

Open source under Apache 2.0

---

Built with ❤️ by the Naylence team

