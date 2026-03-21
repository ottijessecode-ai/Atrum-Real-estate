import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

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
      <body className="bg-[#FFF0C3] text-[#1A1A1A] antialiased overflow-x-hidden">
        <div className="min-h-screen flex flex-col bg-brand-bg">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
