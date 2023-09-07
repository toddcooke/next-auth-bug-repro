import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  authors: [{ name: 'ToddCooke', url: 'https://github.com/toddcooke' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }) {
  return (
    <html className="h-full" lang="en">
      <head>
        <title>Name Checker</title>
        <meta property="og:image" />
      </head>
      <body className="h-full">{children}</body>
    </html>
  );
}
