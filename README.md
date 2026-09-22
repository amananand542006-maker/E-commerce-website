# ShopEase

ShopEase is a standalone React storefront. It runs entirely in the browser with a local product catalog, so no backend or database is required for the live site.

## Requirements

- Node.js 20 or newer
- npm 10 or newer

## Install and run

From this directory:

```bash
npm install
npm run dev
```

Open the URL printed by Vite, usually `http://localhost:5173`. If that port is busy, Vite selects the next available port.

## Validate and preview

```bash
npm run lint
npm run build
npm run preview
```

The production build is generated in `dist/` and can be deployed to any static hosting service such as GitHub Pages, Netlify, Vercel, or Cloudflare Pages.

## Features

- ShopEase brand logo and responsive layout.
- Product search by name.
- Category filters for trousers, watches, shoes, T-shirts, fashion, beauty, cosmetics, and home accessories.
- Cart counter with add-to-cart controls.
- Twelve locally loaded products with Indian rupee pricing.
- No API, server, or external database dependency.

## Libraries and tools

- React 19 and React DOM for the interface.
- Vite for local development, hot reload, and production bundling.
- ESLint with React Hooks and React Refresh rules for code quality.
- npm for dependency management.
- VS Code for editing and the integrated terminal.

## Project structure

```text
frontend-react/
  src/
    App.jsx              Storefront UI, search, filters, and cart state
    App.css              Responsive ShopEase visual design
    data/products.js     Frontend catalog data
    index.css            Global reset
    main.jsx             React entry point
  public/
    favicon.svg          Browser icon
  index.html             Page metadata and root element
  vite.config.js         Vite configuration
  package.json            Scripts and dependencies
```

## Troubleshooting

- Run npm commands in `frontend-react`, where `package.json` is located.
- If the default port is busy, use the alternate URL printed by Vite.
- If the page looks stale, stop older Vite processes and run `npm run dev` again.
