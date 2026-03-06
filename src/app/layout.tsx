import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Navbar from '@/components/shared/Navbar';
import { Footer } from '@/components/shared/Footer';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Intactic Systems | Bold Digital Presence',
  description:
    'Intactic Systems provides custom software, web design, brand aesthetics, bulk SMS, and premium e-commerce solutions for your business growth.',
  keywords: [
    'custom software',
    'web design',
    'branding',
    'bulk SMS',
    'e-commerce',
    'SME solutions',
  ],
  authors: [{ name: 'Intactic Systems' }],
  creator: 'Intactic Systems',
  publisher: 'Intactic Systems',
  robots: 'follow, index',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://intacticsystems.com',
    title: 'Intactic Systems | Bold Digital Presence',
    description:
      'Intactic Systems provides custom software, web design, brand aesthetics, bulk SMS, and premium e-commerce solutions for your business growth.',
    siteName: 'Intactic Systems',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Intactic Systems | Bold Digital Presence',
    description:
      'Intactic Systems provides custom software, web design, brand aesthetics, bulk SMS, and premium e-commerce solutions for your business growth.',
    creator: '@intacticsystems',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
