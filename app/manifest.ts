export default function manifest() {
  return {
    name: 'Finvestor - Servicios Financieros Corporativos',
    short_name: 'Finvestor',
    description: 'Prestación de servicios financieros para compañías, gestión de inversiones y patrimonios',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0284c7',
    orientation: 'portrait-primary',
    categories: ['finance', 'business'],
    icons: [
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  }
}
