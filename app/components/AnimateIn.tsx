"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/* ─── Types ────────────────────────────────────────────────────
   variant  controls the starting transform (see globals.css)
   as       lets you render a semantic tag instead of <div>
             e.g. as="li", as="article", as="section"
   delay    milliseconds before the transition starts
   once     default true — unobserve after first trigger;
            set false to re-animate every time it enters view
   ──────────────────────────────────────────────────────────── */

export type AnimateVariant = "up" | "left" | "right" | "fade" | "scale";

const VARIANT_CLASS: Record<AnimateVariant, string> = {
  up:    "animate-reveal",
  left:  "animate-reveal-left",
  right: "animate-reveal-right",
  fade:  "animate-reveal-fade",
  scale: "animate-reveal-scale",
};

interface AnimateInProps {
  children:  ReactNode;
  variant?:  AnimateVariant;
  delay?:    number;
  className?: string;
  as?:       ElementType;
  once?:     boolean;
}

export default function AnimateIn({
  children,
  variant   = "up",
  delay     = 0,
  className = "",
  as:       Tag = "div",
  once      = true,
}: AnimateInProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback for browsers without IntersectionObserver (older mobile)
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("in-view");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove("in-view");
        }
      },
      // threshold:0  — fire as soon as any pixel enters the viewport
      // rootMargin   — percentage-based so it scales with screen height;
      //                avoids cutting off elements on short mobile screens
      { threshold: 0, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const baseClass = VARIANT_CLASS[variant];
  const classes   = [baseClass, className].filter(Boolean).join(" ");

  return (
    /* @ts-expect-error — ref typing varies by ElementType */
    <Tag
      ref={ref}
      className={classes}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
