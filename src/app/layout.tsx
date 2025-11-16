import { Barlow_Semi_Condensed, Roboto } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';
import './globals.scss';
import type { Metadata } from 'next';

const barlowSemiCondensed = Barlow_Semi_Condensed({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-barlow-semi-condensed',
});

const roboto = Roboto({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'NFT Landing Page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          barlowSemiCondensed.variable,
          roboto.variable,
          'mx-auto max-w-[1600px] overflow-x-hidden font-sans',
        )}
      >
        <Header />
        <main className="bg-ink">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
