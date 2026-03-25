"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-canvas/90 backdrop-blur-md border-b border-border-subtle py-4"
          : "py-7",
      ].join(" ")}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-base font-semibold text-accent tracking-tight"
        >
          JD<span className="text-text-secondary">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary hover:text-text-primary tracking-wide transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-5 py-2 text-sm font-medium bg-accent text-canvas rounded-full hover:bg-accent-dim transition-colors duration-200"
          >
            Hire Me
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          <span
            className={`block h-px w-6 bg-text-primary transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-text-primary transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-text-primary transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-surface border-t border-border px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-text-secondary hover:text-text-primary text-base transition-colors duration-200"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-1 px-5 py-3 text-sm font-medium bg-accent text-canvas rounded-full text-center"
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
