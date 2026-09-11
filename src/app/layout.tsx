import type { Metadata, Viewport } from 'next';
import { Antonio, Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const antonio = Antonio({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Conatus Bharat. Own Tomorrow.',
  description:
    'Conatus Bharat builds Wonder, an adaptive learning platform that helps schools see every student. Grades 3 to 12, NEP-aligned.',
  keywords: 'education, NEP, learning, Wonder, ConatusBharat, India, schools, CBSE',
  openGraph: {
    title: 'Conatus Bharat. Own Tomorrow.',
    description:
      'Conatus Bharat builds Wonder, an adaptive learning platform that helps schools see every student. Grades 3 to 12, NEP-aligned.',
    url: 'https://www.conatusbharat.com',
    siteName: 'Conatus Bharat',
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.conatusbharat.com',
  },
};

export const viewport: Viewport = {
  themeColor: '#5B6BFF',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${antonio.variable}`}
    >
      <body
        suppressHydrationWarning
        className="font-sans bg-paper text-ink antialiased"
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
