"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={[
        "hidden md:inline-flex fixed bottom-6 left-6 z-40 items-center justify-center",
        "w-11 h-11 rounded-full border border-border bg-elevated/90 backdrop-blur",
        "text-text-secondary hover:text-accent hover:border-accent",
        "shadow-[0_10px_30px_rgba(0,0,0,0.35)]",
        "transition-all duration-300",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none",
      ].join(" ")}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
