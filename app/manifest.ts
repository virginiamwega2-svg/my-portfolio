import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Virginia Mwega — Full-Stack and AI Engineer",
    short_name: "Virginia Mwega",
    description:
      "Full-Stack and AI Engineer shipping production AI products built on Claude tool use, structured outputs, and graceful fallbacks.",
    start_url: "/",
    display: "standalone",
    background_color: "#0D0C0B",
    theme_color: "#C9A96E",
    icons: [
      // TODO: drop favicon.ico, icon-192.png, icon-512.png in public/
      // when #6 (favicon set) lands, then uncomment these entries.
      // {
      //   src: "/icon-192.png",
      //   sizes: "192x192",
      //   type: "image/png",
      //   purpose: "any maskable",
      // },
      // {
      //   src: "/icon-512.png",
      //   sizes: "512x512",
      //   type: "image/png",
      //   purpose: "any maskable",
      // },
    ],
  };
}
