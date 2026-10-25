import type { Metadata } from 'next';
import { Inter, Outfit, Lora } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
import { CookieConsent } from '@/components/cookie-consent';
import { LayoutShell } from '@/components/layout-shell';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' });
const lora = Lora({ subsets: ['latin'], variable: '--font-lora', display: 'swap' });

const siteUrl = 'https://www.cpsspeedtest.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'CpsSpeedTest - High-Precision Click Speed & Skill Gaming Hub',
    template: '%s | CpsSpeedTest',
  },
  description: 'Test and improve your clicks per second (CPS), reaction time, typing speed, and cognitive agility with 45+ free in-house browser skill games.',
  keywords: ['cps test', 'click speed test', 'clicks per second', 'reaction time test', 'typing test', 'aim trainer', 'kohi click test', 'jitter click test', 'butterfly click'],
  openGraph: {
    title: {
      default: 'CpsSpeedTest - High-Precision Click Speed & Skill Gaming Hub',
      template: '%s | CpsSpeedTest',
    },
    description: 'Measure your clicking cadence, reaction time, and typing speed with sub-millisecond precision on 45+ free in-house tools.',
    url: siteUrl,
    siteName: 'CpsSpeedTest',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'CpsSpeedTest - High-Precision Browser Skill Games',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: 'CpsSpeedTest - High-Precision Click Speed & Skill Gaming Hub',
      template: '%s | CpsSpeedTest',
    },
    description: 'Test your clicking speed, reaction time, and keyboard dexterity with high-precision browser benchmarks.',
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-adsense-account" content="ca-pub-7316477328258550" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7316477328258550"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": siteUrl,
              "name": "CpsSpeedTest",
              "description": "Test and improve your clicking speed, reaction time, typing skills, and cognitive abilities with 45+ free browser-based skill games."
            })
          }}
        />
      </head>
      <body className={`antialiased flex flex-col min-h-screen ${inter.variable} ${outfit.variable} ${lora.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LayoutShell>
            {children}
          </LayoutShell>
        </ThemeProvider>
        <Toaster />
        <CookieConsent />
      </body>
    </html>
  );
}
