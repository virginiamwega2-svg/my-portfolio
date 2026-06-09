"use client";

import { ArrowUp, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const NAV_LINKS = [
  { label: "About",      href: "#about"      },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects"   },
  { label: "Skills",     href: "#skills"     },
  { label: "Writing",    href: "#writing"    },
  { label: "Contact",    href: "#contact"    },
];

const SOCIAL_LINKS = [
  { label: "GitHub",   href: "https://github.com/virginiamwega2-svg",      icon: Github   },
  { label: "LinkedIn", href: "https://linkedin.com/in/virginia-mwega",     icon: Linkedin },
  { label: "Email",    href: "mailto:virginiamwega2@gmail.com",             icon: Mail     },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-canvas">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">

        {/* ── Top grid ──────────────────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto] gap-12 mb-14">

          {/* Brand + tagline */}
          <div className="max-w-xs">
            <a href="#" className="font-mono text-lg font-bold text-accent hover:text-accent-dim transition-colors duration-200">
              VM.
            </a>
            <p className="mt-4 text-text-secondary text-sm leading-relaxed">
              Full-stack &amp; AI engineer building production systems for busy
              parents. Available worldwide.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-success status-dot shrink-0" />
              <span className="text-xs text-text-secondary font-mono">
                Available for new projects
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="type-eyebrow mb-5">Navigation</p>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-underline text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="type-eyebrow mb-5">Connect</p>
            <ul className="flex flex-col gap-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
                    >
                      <Icon className="h-3.5 w-3.5 text-text-tertiary group-hover:text-accent transition-colors" />
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 text-text-tertiary group-hover:text-accent transition-colors" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ────────────────────────────────────── */}
        <div className="divider mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-text-tertiary">
            &copy; {new Date().getFullYear()} Virginia Mwega. All rights reserved.
          </span>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 font-mono text-xs text-text-secondary hover:text-accent transition-colors duration-200"
            aria-label="Scroll back to top"
          >
            Back to top
            <ArrowUp className="h-3 w-3 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>

      </div>
    </footer>
  );
}
