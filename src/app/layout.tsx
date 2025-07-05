import type {Metadata} from 'next';
import './globals.css';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Usha App',
  description: 'Your one-stop destination for quality household goods, from traditional vessels to modern appliances.',
  openGraph: {
    title: 'Usha Since160|wholesale store',
    description: 'Your one-stop destination for quality household goods, from traditional vessels to modern appliances.',
    siteName: 'Usha1960',
    images: [
      {
        url: '/home_1.png',
        width: 1200,
        height: 630,
        alt: 'A collection of Usha kitchenware and appliances.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Usha App',
    description: 'Your one-stop destination for quality household goods, from traditional vessels to modern appliances.',
    images: ['/home_1.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Meera+Inimai&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("antialiased min-h-screen font-sans")}>
        {children}
      </body>
    </html>
  );
}
