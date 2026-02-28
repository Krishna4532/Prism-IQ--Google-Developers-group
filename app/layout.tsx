import './globals.css';
import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-[#F5F5DC]`}> 
        <Navbar />
        <main className="pt-32 px-6">
          {children}
        </main>
      </body>
    </html>
  );
}