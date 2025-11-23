# Public Assets

This folder contains static assets that will be served at the root URL.

## Required Images

Make sure you have these images in this folder:

- `swirl_dark_teal_darker_bg.png` - Logo image (used in Navigation and Footer)
- `swirl-original.png` - Background swirl image (used in Hero section)

## Adding Images

1. Place image files in this `public/` folder
2. Reference them in components using `/filename.png`
3. Vite will automatically serve them from the root

Example:
```jsx
<img src="/swirl_dark_teal_darker_bg.png" alt="Logo" />
```

## Image Optimization

For best performance:
- Use WebP format when possible
- Optimize images before adding (use tools like TinyPNG)
- Keep file sizes reasonable (< 500KB for most images)

