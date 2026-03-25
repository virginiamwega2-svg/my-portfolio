import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgress from "./components/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://virginiamwega.dev";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Virginia Mwega — Software Engineer",
    template: "%s | Virginia Mwega",
  },
  description:
    "Full-stack software engineer based in New York. I build fast, elegant web applications with React, Next.js, Python, and PostgreSQL.",
  keywords: [
    "software engineer",
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
    title:       "Virginia Mwega — Software Engineer",
    description: "Full-stack software engineer based in New York. I build fast, elegant web applications with React, Next.js, Python, and PostgreSQL.",
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Virginia Mwega — Software Engineer",
    description: "Full-stack software engineer based in New York.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
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
