# Saelix - Professional AI Research Website

A modern, professional website for the Saelix Institute built with React, TypeScript, and Vite.

## 🎯 Features

- **Professional Design** - Clean, minimal design inspired by Nvidia, AMD, and Intel
- **Fast Performance** - Optimized React + Vite for quick page loads
- **Responsive** - Fully mobile-responsive design
- **TypeScript** - Full type safety across the codebase
- **SEO Ready** - Semantic HTML and optimized metadata

## 📄 Pages

1. **Home** - Professional landing page with features and product preview
2. **Saelix Slate** - Product page with detailed specifications and use cases

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
Saelix/
├── components/
│   ├── Navigation.tsx      # Top navigation bar
│   ├── Hero.tsx            # Hero section component
│   ├── Features.tsx        # Features grid
│   ├── ProductPreview.tsx  # Product showcase
│   └── Footer.tsx          # Footer section
├── pages/
│   ├── Home.tsx            # Landing page
│   └── SaelixSlate.tsx     # Product page
├── App.tsx                 # Main app component
├── index.tsx               # React entry point
├── styles.css              # Global styles
├── constants.ts            # Site data and configuration
├── types.ts                # TypeScript interfaces
└── package.json            # Dependencies
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#0066CC`
- **Dark Text**: `#111827`
- **Secondary Text**: `#6B7280`
- **Light Background**: `#F3F4F6`
- **Accent Green**: `#10B981`

### Typography
- **Font Family**: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto)
- **Headings**: Bold (700), tight line-height
- **Body**: Regular (400), normal line-height

### Spacing & Sizing
- Base unit: 8px
- Sizes: xs (4px), sm (8px), md (16px), lg (24px), xl (32px), 2xl (48px), 3xl (64px)

## 🔧 Configuration

Edit `constants.ts` to update:
- Company information
- Product details (Saelix Slate)
- Features and benefits
- Use cases

```typescript
export const COMPANY_INFO = {
  name: 'Saelix',
  tagline: 'Advanced AI Research & Development',
  description: '...',
  contactEmail: 'collaborate@saelix.org'
};
```

## 📦 Dependencies

- **react** ^19.2.1 - UI framework
- **react-dom** ^19.2.1 - DOM rendering
- **lucide-react** ^0.559.0 - Icon library
- **typescript** ~5.8.2 - Type checking
- **vite** ^6.2.0 - Build tool

## 🌐 Deployment

### GitHub Pages

```bash
# Build the site
npm run build

# Push the dist folder to GitHub Pages
git add dist/
git commit -m "Deploy site"
git push origin main
```

### Custom Domain

Update `CNAME` file with your domain:
```
saelix.org
```

## 📝 License

Copyright © 2025 Saelix Institute. All rights reserved.

## 📧 Contact

For inquiries: collaborate@saelix.org
