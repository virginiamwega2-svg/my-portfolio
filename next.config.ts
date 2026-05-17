import type { NextConfig } from "next";

const securityHeaders = [
  // Force HTTPS for 2 years, include subdomains, eligible for preload list
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Block MIME-sniffing — browser must trust the declared Content-Type
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Refuse to render in iframes — clickjacking defense
  { key: "X-Frame-Options", value: "DENY" },
  // Send origin only on cross-origin requests; full URL same-origin
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Lock down browser features the portfolio doesn't use
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Enable DNS prefetch for outbound links (small perf win)
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  async headers() {
    // Skip in development so HSTS / framing rules don't lock localhost
    if (process.env.NODE_ENV !== "production") return [];
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
