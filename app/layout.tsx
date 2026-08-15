import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
// CustomCursor removed to use native pointer
import BackgroundElements from '@/components/BackgroundElements';
import ClearHashOnLoad from '@/components/ClearHashOnLoad';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Intelligent Systems Portfolio',
  description: 'Exploring intelligent systems, data architectures, and emerging technologies.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${cormorant.variable} dark`} suppressHydrationWarning>
      <body className="bg-[#0F0F0F] text-[#E5E7EB] antialiased selection:bg-[#FB923C]/30 selection:text-[#FB923C]" suppressHydrationWarning>
        <Script id="clear-fragment" strategy="beforeInteractive">
          {`(function(){try{if('scrollRestoration' in history)history.scrollRestoration='manual';function clearAndTop(){try{if(location.hash){history.replaceState(null,'',location.pathname+location.search);}setTimeout(function(){window.scrollTo(0,0);},0);}catch(e){}};clearAndTop();window.addEventListener('pageshow', clearAndTop);window.addEventListener('load', clearAndTop);}catch(e){} })();`}
        </Script>
        <BackgroundElements />
        <ClearHashOnLoad />
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.03),transparent_50%)] pointer-events-none" />
        {children}
      </body>
    </html>
  );
}
