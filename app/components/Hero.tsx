import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import CommandSearch from "./CommandSearch";
import AccentSwitcher from "./AccentSwitcher";

const SOCIALS = [
  { label: "GitHub",   href: "https://github.com/virginiamwega2-svg",  icon: Github   },
  { label: "LinkedIn", href: "https://linkedin.com/in/virginia-mwega", icon: Linkedin },
  { label: "Email",    href: "mailto:hello@virginiamwega.dev",         icon: Mail     },
];

// Hero uses pure CSS keyframe animations so it can stay a Server Component
// (no IntersectionObserver needed — everything is above the fold on load).

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden bg-canvas"
    >
      {/* Ambient glow orbs — bumped opacity so they read in light mode too */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-1/4 right-1/3 w-130 h-130 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-accent/8 blur-3xl" />
      </div>

      {/* Grain overlay */}
      <div className="absolute inset-0 grain pointer-events-none select-none opacity-30" />

      {/* Main content */}
      <div className="relative flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full px-6 pt-32 pb-16">

        {/* Available badge */}
        <div
          className="hero-fade-up inline-flex items-center gap-2.5 px-4 py-1.5 mb-12 w-fit rounded-full border border-border bg-elevated text-text-secondary text-sm"
          style={{ animationDelay: "0s" }}
        >
          <span className="status-dot w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
          Available for new projects
        </div>

        {/* Name */}
        <p
          className="hero-fade-up text-text-secondary text-sm font-medium tracking-[0.22em] uppercase mb-5"
          style={{ animationDelay: "0.08s" }}
        >
          Virginia Mwega
        </p>

        {/* Role headline — reduced from clamp(3.5,10vw,7.5) → clamp(2.25,6vw,4.5) */}
        <h1
          className="hero-fade-up text-[clamp(2.25rem,6vw,4.5rem)] font-bold tracking-tight leading-[0.95] text-text-primary mb-8"
          style={{ animationDelay: "0.18s" }}
        >
          Full Stack &amp;{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-accent-dim">
            AI Engineer
          </span>
          <span className="text-text-tertiary">.</span>
        </h1>

        {/* Tagline */}
        <p
          className="hero-fade-up text-text-secondary text-lg md:text-xl max-w-xl leading-relaxed mb-10"
          style={{ animationDelay: "0.28s" }}
        >
          AI-powered products for busy parents — from conversational coaching
          to AI hiring. Production systems with paying users.
        </p>

        {/* Socials */}
        <div
          className="hero-fade-up flex items-center gap-2 mb-6"
          style={{ animationDelay: "0.32s" }}
        >
          {SOCIALS.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                title={s.label}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-elevated text-text-secondary hover:text-accent hover:border-accent hover:-translate-y-0.5 transition-all duration-200"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>

        {/* CTAs */}
        <div
          className="hero-fade-up flex flex-wrap gap-4"
          style={{ animationDelay: "0.38s" }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2.5 px-8 py-4 bg-accent text-canvas font-semibold rounded-full hover:bg-accent-dim transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,169,110,0.28)]"
          >
            View Work
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border border-border text-text-secondary font-semibold rounded-full hover:border-accent hover:text-accent transition-all duration-300"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
          <a
            href="/virginia-mwega-cv.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-4 border border-border text-text-secondary font-semibold rounded-full hover:border-accent/50 hover:text-text-primary transition-all duration-300"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </div>
      </div>

      {/* Toolbar — pinned top-right, just below the navbar's Hire Me button */}
      <div
        className="hero-fade-up absolute top-20 sm:top-24 right-4 sm:right-6 z-20 flex flex-col items-end gap-2"
        style={{ animationDelay: "0s" }}
      >
        <CommandSearch />
        <div className="flex items-center gap-3 px-3 py-1.5 rounded-full border border-border bg-elevated/80 backdrop-blur">
          <span className="text-[0.7rem] uppercase tracking-[0.18em] text-text-tertiary font-mono">
            Theme
          </span>
          <AccentSwitcher />
        </div>
      </div>
    </section>
  );
}
