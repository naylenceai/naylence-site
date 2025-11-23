# Naylence Website - AI Prompts & Instructions

## Quick Reference Prompts

### Adding New Features
```
Add a new [feature] section to the website following the existing design patterns:
- Use the established color palette (teal/emerald on dark background)
- Maintain responsive design (mobile-first)
- Include hover effects and transitions
- Follow the component structure pattern
- Ensure accessibility (ARIA labels, semantic HTML)
```

### Styling Components
```
Style this component using Tailwind CSS with:
- Background: bg-[#020808] or bg-[#030c0c]
- Border: border border-teal-900/30
- Hover: hover:border-teal-500/50 hover:-translate-y-1
- Text colors: text-white for headings, text-slate-400 for body
- Padding: p-6 or p-8
- Rounded corners: rounded-xl
```

### Creating Responsive Layouts
```
Create a responsive layout that:
- Uses grid on desktop (md:grid-cols-3)
- Stacks vertically on mobile
- Has consistent spacing (gap-6 or gap-8)
- Maintains max-width container (max-w-7xl mx-auto)
```

### Adding Animations
```
Add smooth animations using Tailwind:
- transition-all duration-200 for quick interactions
- hover effects with translate and shadow
- Use group-hover for nested elements
- Consider backdrop-blur for glassmorphism effects
```

## Component-Specific Prompts

### Navigation Bar
```
Update the navigation to:
- Maintain fixed positioning
- Add scroll-based styling changes
- Ensure mobile menu works correctly
- Include proper ARIA labels
- Add smooth scroll to anchors
```

### Hero Section
```
Enhance the hero section with:
- Maintain the gradient text effect
- Keep code preview with tab switching
- Ensure CTA buttons are prominent
- Add subtle background elements
- Maintain responsive layout
```

### Feature Cards
```
Create feature cards that:
- Use the established card pattern
- Include icons from lucide-react
- Have hover effects (border color change, slight lift)
- Maintain consistent spacing
- Are accessible and keyboard navigable
```

### Blog Cards
```
Design blog cards with:
- Date badge in teal
- Title and description
- External link indicator
- Hover effects (border, background, translate)
- Proper semantic HTML
```

## Code Quality Prompts

### Refactoring
```
Refactor this code to:
- Extract reusable components
- Follow the established patterns
- Improve performance (memoization if needed)
- Enhance accessibility
- Add proper TypeScript types (if applicable)
```

### Performance Optimization
```
Optimize this component for:
- Minimize re-renders
- Lazy load images below fold
- Optimize bundle size
- Improve Core Web Vitals
- Add proper loading states
```

### Accessibility Improvements
```
Improve accessibility by:
- Adding ARIA labels to icon-only buttons
- Ensuring keyboard navigation works
- Adding focus indicators
- Maintaining proper heading hierarchy
- Ensuring color contrast meets WCAG AA
```

## Design System Prompts

### Color Usage
```
Use the Naylence color palette:
- Primary: teal-400, teal-500, teal-600
- Secondary: emerald-500
- Background: #020808 (primary), #030c0c (secondary)
- Text: white (headings), slate-300/400 (body)
- Borders: teal-900/30, teal-800/50
```

### Typography
```
Apply typography following:
- Headings: font-bold, tracking-tight
- Body: regular weight, leading-relaxed
- Code: font-mono
- Responsive text sizes (text-5xl md:text-6xl lg:text-7xl)
```

### Spacing
```
Use consistent spacing:
- Section padding: py-24
- Container padding: px-4 sm:px-6 lg:px-8
- Card padding: p-6 or p-8
- Gaps: gap-4, gap-6, gap-8
- Margins: mb-4, mb-6, mb-8, mb-12
```

## Common Workflows

### Adding a New Section
1. Create section component following the pattern
2. Use section wrapper with id for anchor links
3. Apply consistent styling (bg-[#020808] or bg-[#030c0c])
4. Add to main component
5. Update navigation if needed
6. Test responsive behavior
7. Ensure accessibility

### Updating Content
1. Locate the content array/object
2. Update text while maintaining tone
3. Ensure links are correct
4. Verify images/assets exist
5. Test on different screen sizes
6. Check accessibility

### Fixing Bugs
1. Identify the issue
2. Check console for errors
3. Verify component state management
4. Test event handlers
5. Check responsive behavior
6. Verify accessibility
7. Test across browsers

## Best Practices Reminders

1. **Always maintain design consistency** - Use the established color palette and patterns
2. **Mobile-first approach** - Design for mobile, enhance for desktop
3. **Performance matters** - Optimize images, minimize re-renders
4. **Accessibility is required** - Not optional
5. **Test thoroughly** - Different screen sizes, browsers, devices
6. **Follow React best practices** - Proper hooks usage, cleanup, memoization
7. **Keep code DRY** - Extract reusable components and utilities
8. **Document complex logic** - Add comments for non-obvious code

