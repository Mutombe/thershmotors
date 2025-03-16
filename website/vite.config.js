import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    sitemap({
      hostname: 'https://thershmotors.com',
      dynamicRoutes: [
        '/',
        '/volvo-specialist-services',
        '/volvo-valuation',
        '/volvo-vehicles',
        '/volvo-spares',
        '/thersh-motors-contact',
      ],
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.8,
    }),
  ],
})
