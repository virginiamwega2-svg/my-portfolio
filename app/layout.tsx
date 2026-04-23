import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono, Sora } from "next/font/google";
import "./globals.css";
import ScrollProgress from "./components/ScrollProgress";

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

const BASE_URL = "https://virginiamwega.dev";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Virginia Mwega — Full Stack Developer",
    template: "%s | Virginia Mwega",
  },
  description:
    "Full-stack developer based in New York. I build fast, elegant web applications with React, Next.js, Python, and PostgreSQL.",
  keywords: [
    "full stack developer",
    "full-stack developer",
    "React",
    "Next.js",
    "Python",
    "Django",
    "TypeScript",
    "portfolio",
  ],
  authors:  [{ name: "Virginia Mwega", url: BASE_URL }],
  creator:  "Virginia Mwega",
  openGraph: {
    type:        "website",
    locale:      "en_US",
    url:         BASE_URL,
    siteName:    "Virginia Mwega",
    title:       "Virginia Mwega — Full Stack Developer",
    description: "Full-stack developer based in New York. I build fast, elegant web applications with React, Next.js, Python, and PostgreSQL.",
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Virginia Mwega — Full Stack Developer",
    description: "Full-stack developer based in New York.",
    creator:     "@virginiamwega",
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
      className={`${sora.variable} ${fraunces.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Skip-to-content — first focusable element for keyboard/screen-reader users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-accent focus:text-canvas focus:font-medium focus:text-sm focus:shadow-lg"
        >
          Skip to main content
        </a>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
