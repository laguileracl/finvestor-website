import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Finvestor | Servicios Financieros Corporativos",
  description: "Prestación de servicios financieros para compañías, gestión de inversiones y patrimonios. Más de $200M USD en activos gestionados. Equipo de primer nivel en Las Condes, Santiago de Chile.",
  keywords: "servicios financieros, inversiones, gestión patrimonial, asesoría financiera, Chile, Santiago, Las Condes",
  authors: [{ name: "Finvestor" }],
  creator: "Finvestor",
  publisher: "Finvestor",
  metadataBase: new URL('https://finvestor.cl'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://finvestor.cl',
    siteName: 'Finvestor',
    title: 'Finvestor | Servicios Financieros Corporativos',
    description: 'Prestación de servicios financieros para compañías, gestión de inversiones y patrimonios.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Finvestor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finvestor | Servicios Financieros Corporativos',
    description: 'Prestación de servicios financieros para compañías, gestión de inversiones y patrimonios.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        {/* Favicons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#0284c7" />
        <meta name="msapplication-TileColor" content="#0284c7" />
        
        {/* Preconnect for fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
