import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono, Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import ScrollProgress from "./components/ScrollProgress";
import ThemeProvider from "./components/ThemeProvider";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

// Placeholder Vercel URL — when you buy a custom domain, swap this one line.
// Make sure the Vercel project name matches (e.g. "virginia-mwega" gives
// virginia-mwega.vercel.app) so the canonical URL points where the site lives.
const BASE_URL = "https://virginia-mwega.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Virginia Mwega — Full-Stack and AI Engineer",
    template: "%s | Virginia Mwega",
  },
  description:
    "Full-Stack and AI Engineer based in Nairobi. I ship production AI products built on Claude, Next.js, Django, and Stripe — with graceful fallbacks that keep working when an API key runs out.",
  keywords: [
    "Full-Stack and AI Engineer",
    "AI engineer",
    "Claude API",
    "Next.js",
    "React",
    "Django",
    "TypeScript",
    "Python",
    "Stripe",
    "Nairobi developer",
    "portfolio",
  ],
  authors:  [{ name: "Virginia Mwega", url: BASE_URL }],
  creator:  "Virginia Mwega",
  openGraph: {
    type:        "website",
    locale:      "en_US",
    url:         BASE_URL,
    siteName:    "Virginia Mwega",
    title:       "Virginia Mwega — Full-Stack and AI Engineer",
    description: "Full-Stack and AI Engineer based in Nairobi. I ship production AI products built on Claude, Next.js, Django, and Stripe.",
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Virginia Mwega — Full-Stack and AI Engineer",
    description: "Full-Stack and AI Engineer based in Nairobi. Shipping production AI products with Claude.",
    creator:     "@veemwega2",
  },
  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:               true,
      follow:              true,
      "max-image-preview": "large",
      "max-snippet":       -1,
    },
  },
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
      className={`${sora.variable} ${fraunces.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          {/* Skip-to-content — first focusable element for keyboard/screen-reader users */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-accent focus:text-canvas focus:font-medium focus:text-sm focus:shadow-lg"
          >
            Skip to main content
          </a>
          <ScrollProgress />
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
