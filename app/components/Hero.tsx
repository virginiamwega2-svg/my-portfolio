// Hero uses pure CSS keyframe animations so it can stay a Server Component
// (no IntersectionObserver needed — everything is above the fold on load).
// Typewriter and CountUp are Client Components imported here; Next.js
// App Router renders them as hydration boundaries automatically.

import Typewriter from "./Typewriter";
import CountUp    from "./CountUp";

const STATS = [
  { end: 3,   suffix: "+", label: "Years Experience" },
  { end: 20,  suffix: "+", label: "Projects Delivered" },
  { end: 15,  suffix: "+", label: "Happy Clients" },
  { end: 100, suffix: "%", label: "Commitment" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "#140D0C" }}
    >
      {/* Ambient glow orbs */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-1/4 right-1/3 w-130 h-130 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-accent/3 blur-3xl" />
      </div>

      {/* Grain overlay */}
      <div className="absolute inset-0 grain pointer-events-none select-none opacity-30" />

      {/* Main content */}
      <div className="relative flex-1 flex flex-col justify-center max-w-5xl mx-auto w-full px-6 pt-32 pb-16">

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

        {/* Role headline */}
        <h1
          className="hero-fade-up text-[clamp(3.5rem,10vw,7.5rem)] font-bold tracking-tight leading-[0.88] text-text-primary mb-8"
          style={{ animationDelay: "0.18s" }}
        >
          Software
          <br />
          <Typewriter
            words={["Engineer", "Developer", "Builder"]}
            className="text-transparent bg-clip-text bg-linear-to-r from-accent to-accent-dim"
          />
          <span className="text-text-tertiary">.</span>
        </h1>

        {/* Tagline */}
        <p
          className="hero-fade-up text-text-secondary text-lg md:text-xl max-w-md leading-relaxed mb-14"
          style={{ animationDelay: "0.28s" }}
        >
          Turning complex problems into clean, fast, and elegant products people
          actually love to use.
        </p>

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
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 border border-border text-text-secondary font-semibold rounded-full hover:border-accent hover:text-accent transition-all duration-300"
          >
            Contact Me
          </a>
          <a
            href="/virginia-mwega-cv.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-4 border border-border text-text-secondary font-semibold rounded-full hover:border-accent/50 hover:text-text-primary transition-all duration-300"
          >
            <span className="text-text-tertiary text-xs">↓</span>
            Download CV
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="hero-fade-up"
              style={{ animationDelay: `${0.48 + i * 0.08}s` }}
            >
              <div className="text-3xl font-bold text-text-primary font-mono mb-1">
                <CountUp end={s.end} suffix={s.suffix} />
              </div>
              <div className="text-sm text-text-secondary">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
