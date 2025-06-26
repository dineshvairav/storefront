import type {Metadata} from 'next';
import './globals.css';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Usha App',
  description: 'Your one-stop destination for quality household goods, from traditional vessels to modern appliances.',
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
