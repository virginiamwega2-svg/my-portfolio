"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About",      href: "#about"      },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects"   },
  { label: "Skills",     href: "#skills"     },
  { label: "Contact",    href: "#contact"    },
];

export default function Navbar() {
  const [scrolled,       setScrolled]       = useState(false);
  const [menuOpen,       setMenuOpen]        = useState(false);
  const [activeSection,  setActiveSection]   = useState("");

  /* ── Scroll state ──────────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Active section (IntersectionObserver) ─────────────────── */
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ── Close mobile menu on nav click ────────────────────────── */
  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-canvas/80 backdrop-blur-xl border-b border-border-subtle py-3.5"
          : "py-7",
      ].join(" ")}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* ── Logo ─────────────────────────────────────────── */}
        <a
          href="#"
          className="group flex items-center gap-2.5 focus-ring"
          aria-label="Go to top"
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-lg border border-accent/25 bg-accent/10 font-mono text-sm font-bold text-accent transition-all duration-200 group-hover:border-accent/60 group-hover:bg-accent/15">
            VM
          </span>
          <span className="hidden sm:block font-mono text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors duration-200">
            Virginia Mwega
          </span>
        </a>

        {/* ── Desktop nav ──────────────────────────────────── */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const id      = link.href.slice(1);
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={[
                  "relative px-4 py-2 text-sm tracking-wide rounded-full transition-all duration-200 focus-ring",
                  isActive
                    ? "text-text-primary"
                    : "text-text-secondary hover:text-text-primary",
                ].join(" ")}
              >
                {link.label}
                {/* Active underline pill */}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
                )}
              </a>
            );
          })}

          {/* Separator */}
          <span className="w-px h-4 bg-border mx-2" />

          {/* CTA */}
          <a
            href="#contact"
            className="btn btn-primary btn-sm focus-ring"
          >
            Hire Me
          </a>
        </div>

        {/* ── Hamburger ────────────────────────────────────── */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-9 h-9 rounded-lg border border-border bg-elevated focus-ring"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block mx-auto h-px w-4 bg-text-primary transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[5px]" : ""
            }`}
          />
          <span
            className={`block mx-auto h-px bg-text-primary transition-all duration-300 ${
              menuOpen ? "opacity-0 w-0" : "w-4"
            }`}
          />
          <span
            className={`block mx-auto h-px w-4 bg-text-primary transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* ── Mobile drawer ────────────────────────────────────── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-350 ease-out ${
          menuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-2 mx-4 mb-4 rounded-2xl border border-border bg-surface overflow-hidden">

          {/* Links */}
          <div className="flex flex-col px-2 pt-3 pb-2 gap-0.5">
            {NAV_LINKS.map((link) => {
              const id      = link.href.slice(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className={[
                    "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-accent/10 text-accent"
                      : "text-text-secondary hover:bg-elevated hover:text-text-primary",
                  ].join(" ")}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  )}
                  <span className={isActive ? "" : "ml-[18px]"}>{link.label}</span>
                </a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="divider mx-4" />

          {/* CTA */}
          <div className="px-4 py-3">
            <a
              href="#contact"
              onClick={handleNavClick}
              className="btn btn-primary btn-md w-full"
            >
              Hire Me
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}
