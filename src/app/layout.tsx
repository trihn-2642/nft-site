import { Barlow_Semi_Condensed } from 'next/font/google';
import localFont from 'next/font/local';
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

const neueHaas = localFont({
  src: [
    {
      path: '../../public/fonts/NeueHaasDisplayLight.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueHaasDisplayRoman.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueHaasDisplayMediu.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueHaasDisplayBold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueHaasDisplayBlack.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-neue-haas',
});

export const metadata: Metadata = {
  title: 'NFT Landing Page',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
      {
        rel: 'android-chrome',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
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
          neueHaas.variable,
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
