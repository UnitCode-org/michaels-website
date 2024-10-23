import type { Metadata } from 'next';
import './globals.css';
import { montserrat } from './fonts';

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
