import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import LenisProvider from '@/components/providers/LenisProvider';

export const metadata: Metadata = {
  title: 'AURUM Estate | Exclusive Real Estate',
  description: "Curated portfolios of the world's most extraordinary properties, presented with the discretion they deserve.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#FFF0C3] text-[#1A1A1A] antialiased overflow-x-hidden">
        <LenisProvider>
          <div className="min-h-screen flex flex-col bg-brand-bg">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
