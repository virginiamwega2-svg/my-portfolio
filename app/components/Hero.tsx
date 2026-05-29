import {
  ArrowRight, Download, Github, Linkedin, Mail, Palette,
} from "lucide-react";
import CommandSearch from "./CommandSearch";
import AccentSwitcher from "./AccentSwitcher";

const SOCIALS = [
  { label: "GitHub",   href: "https://github.com/virginiamwega2-svg",  icon: Github   },
  { label: "LinkedIn", href: "https://linkedin.com/in/virginia-mwega", icon: Linkedin },
  { label: "Email",    href: "mailto:virginiamwega2@gmail.com",         icon: Mail     },
];

// Hero uses pure CSS keyframe animations so it can stay a Server Component
// (no IntersectionObserver needed — everything is above the fold on load).

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden bg-canvas"
    >
      {/* Ambient glow orbs — slow breathing pulse for depth */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-1/4 right-1/3 w-130 h-130 rounded-full bg-accent/10 blur-3xl animate-[heroPulse_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-accent/8 blur-3xl animate-[heroPulse_10s_ease-in-out_infinite] [animation-delay:1.5s]" />
      </div>

      {/* Grain overlay */}
      <div className="absolute inset-0 grain pointer-events-none select-none opacity-30" />

      {/* Main content — 2-column on lg, single column on smaller screens */}
      <div className="relative flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full px-6 pt-24 max-[360px]:pt-44 sm:pt-32 pb-12 sm:pb-16">
        <div className="grid gap-12 sm:gap-10 lg:gap-16 sm:grid-cols-[1fr_220px] md:grid-cols-[1fr_280px] lg:grid-cols-[1fr_360px] sm:items-center">

          {/* ── Text column ── */}
          <div>
            {/* Available badge */}
            <div
              className="hero-fade-up inline-flex items-center gap-2.5 px-4 py-1.5 mb-10 w-fit rounded-full border border-border bg-elevated text-text-secondary text-sm"
              style={{ animationDelay: "0s" }}
            >
              <span className="status-dot w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              Available for new projects
            </div>

            {/* Name */}
            <p
              className="hero-fade-up text-text-secondary text-xs font-medium tracking-[0.22em] uppercase mb-4"
              style={{ animationDelay: "0.08s" }}
            >
              Virginia Mwega
            </p>

            {/* Role headline — reduced: clamp(1.875rem, 5vw, 3.5rem) */}
            <h1
              className="hero-fade-up text-[clamp(1.875rem,5vw,3.5rem)] font-bold tracking-tight leading-[1] text-text-primary mb-6"
              style={{ animationDelay: "0.18s" }}
            >
              Full Stack &amp;{" "}
              <span className="gradient-text-animated">
                AI Engineer
              </span>
              <span className="text-text-tertiary">.</span>
            </h1>

            {/* Tagline — slightly smaller */}
            <p
              className="hero-fade-up text-text-secondary text-base md:text-lg max-w-xl leading-relaxed mb-8"
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
                    className="flex items-center justify-center w-9 h-9 rounded-full border border-border bg-elevated text-text-secondary hover:text-accent hover:border-accent hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>

            {/* CTAs — slightly smaller padding */}
            <div
              className="hero-fade-up flex flex-wrap gap-3"
              style={{ animationDelay: "0.38s" }}
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-5 sm:px-7 py-3.5 bg-accent text-canvas font-semibold rounded-full text-sm hover:bg-accent-dim transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,169,110,0.28)]"
              >
                View Work
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 sm:px-7 py-3.5 border border-border text-text-secondary font-semibold rounded-full text-sm hover:border-accent hover:text-accent transition-all duration-300"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
              <a
                href="/virginia-mwega-cv.pdf"
                download
                className="inline-flex items-center gap-2 px-5 sm:px-7 py-3.5 border border-border text-text-secondary font-semibold rounded-full text-sm hover:border-accent/50 hover:text-text-primary transition-all duration-300"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>

          {/* ── Image column — Virginia ──
              Mobile / tablet: centered portrait below the intro text. The
              floating search/theme toolbar lives top-right, so keeping the
              photo in normal flow (rather than at the top) avoids any overlap.
              Desktop (lg): right column; lg:pt-24 clears the toolbar above. */}
          <div
            className="hero-fade-up relative flex justify-center sm:block lg:pt-24"
            style={{ animationDelay: "0.45s" }}
          >
            <div className="group relative aspect-[3/4] w-56 sm:w-full lg:w-auto rounded-3xl overflow-hidden border border-border bg-surface shadow-[0_24px_64px_rgba(0,0,0,0.4)]">
              <img
                src="/photos/vee-mwega-hero.jpeg"
                alt="Virginia Mwega — Full Stack & AI Engineer"
                width={360}
                height={480}
                decoding="async"
                fetchPriority="high"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />

              {/* Base gradient — grounds the card and lifts the canvas behind it */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-canvas/55 to-transparent pointer-events-none" />

              {/* Floating accent ring that brightens on hover */}
              <div className="absolute -inset-px rounded-3xl border border-accent/15 pointer-events-none transition-colors duration-500 group-hover:border-accent/40" />
            </div>
          </div>
        </div>
      </div>

      {/* Toolbar — pinned top-right, just below the navbar's Hire Me button.
          Compact on mobile: "Theme" label hidden to keep the pill narrow. */}
      <div
        className="hero-fade-up flex absolute top-20 sm:top-24 right-4 sm:right-6 z-20 flex-col items-end gap-2"
        style={{ animationDelay: "0s" }}
      >
        <CommandSearch />
        <div className="flex items-center gap-2 sm:gap-3 px-3 py-2 sm:py-1.5 rounded-full border border-border bg-elevated/80 backdrop-blur">
          {/* Palette icon makes the bare swatches read as a theme picker
              on mobile, where the "Theme" label is hidden to save space. */}
          <Palette className="h-3.5 w-3.5 text-text-tertiary shrink-0" aria-hidden="true" />
          <span className="hidden sm:inline text-[0.7rem] uppercase tracking-[0.18em] text-text-tertiary font-mono">
            Theme
          </span>
          <AccentSwitcher />
        </div>
      </div>
    </section>
  );
}
