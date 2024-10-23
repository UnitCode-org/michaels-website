import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Michael Healy',
  description: "Hi! I'm Michael Healy - Co-founder of Unit",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/M-black.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/M-light.svg',
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
    <html lang='en' className={montserrat.className}>
      <body>{children}</body>
    </html>
  );
}
