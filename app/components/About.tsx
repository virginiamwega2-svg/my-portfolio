import AnimateIn from "./AnimateIn";
import CountUp   from "./CountUp";

const STATS = [
  { end: 3,  suffix: "+", label: "Years\nExperience" },
  { end: 20, suffix: "+", label: "Projects\nDelivered" },
  { end: 15, suffix: "+", label: "Happy\nClients" },
];

const FOCUS = [
  {
    label: "FE",
    title: "Frontend Engineering",
    body:  "I build interfaces that feel fast and look intentional — React, Next.js, TypeScript, Tailwind. No layout shifts, no janky interactions, no 'it works on my machine'.",
  },
  {
    label: "BE",
    title: "Backend & APIs",
    body:  "REST and GraphQL APIs in Python and Node.js, backed by PostgreSQL and Redis. I design for the query patterns that actually matter in production, not just the happy path.",
  },
  {
    label: "OPS",
    title: "Cloud & DevOps",
    body:  "AWS, Docker, GitHub Actions CI/CD. I write infrastructure that's boring in the best way — predictable, observable, and easy for the next engineer to reason about.",
  },
];

const CURRENTLY = [
  "Next.js 16 App Router",
  "Python / Django REST",
  "PostgreSQL + Redis",
  "AWS ECS & Lambda",
  "Tailwind CSS v4",
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-canvas">
      <div className="max-w-6xl mx-auto px-6">

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 lg:gap-24 items-start">

          {/* ── Left column ─────────────────────────────── */}
          <div>
            {/* Section label */}
            <AnimateIn variant="left">
              <div className="flex items-center gap-4 mb-10">
                <span className="font-mono text-sm text-accent">01</span>
                <span className="h-px w-10 bg-border" />
                <span className="text-xs uppercase tracking-[0.2em] text-text-secondary">
                  About Me
                </span>
              </div>
            </AnimateIn>

            {/* Headline */}
            <AnimateIn variant="left" delay={80}>
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight leading-tight mb-8">
                I build software that
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dim">
                  earns its keep.
                </span>
              </h2>
            </AnimateIn>

            {/* Who I am */}
            <AnimateIn variant="left" delay={160}>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-5">
                I&apos;m Virginia Mwega, a full-stack software engineer based in New
                York with 3+ years of experience turning product ideas into
                production-ready systems. I&apos;ve worked across the full
                spectrum — early-stage startups moving fast, and enterprise
                teams managing scale — shipping features used daily by tens of
                thousands of people.
              </p>
            </AnimateIn>

            {/* What problems I solve */}
            <AnimateIn variant="left" delay={220}>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-5">
                The problems I enjoy most are the ones that sit between
                disciplines: a frontend that needs to feel instant without
                hammering the backend, a data model that made sense at launch
                but no longer fits the product, an API that needs to serve three
                different clients without becoming a mess. I reduce technical
                debt without stopping the clock on delivery.
              </p>
            </AnimateIn>

            {/* Career goals */}
            <AnimateIn variant="left" delay={260}>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-12">
                My goal is to join a product-focused team where engineers have
                real ownership — not just tickets to close. I want to work on
                problems that are worth solving, with people who care about
                craft, and keep growing as both an engineer and a thoughtful
                collaborator who makes the people around them better.
              </p>
            </AnimateIn>

            {/* Focus area cards */}
            <AnimateIn variant="scale" delay={280}>
              <div className="grid sm:grid-cols-3 gap-4 mb-12">
                {FOCUS.map((f) => (
                  <div
                    key={f.label}
                    className="group p-5 rounded-xl bg-surface border border-border hover:border-accent/35 transition-colors duration-300"
                  >
                    {/* Monospace label */}
                    <span className="inline-block font-mono text-xs font-bold text-accent bg-accent/10 px-2 py-0.5 rounded mb-3">
                      {f.label}
                    </span>
                    <h3 className="text-sm font-semibold text-text-primary mb-1.5 group-hover:text-accent transition-colors duration-200">
                      {f.title}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {f.body}
                    </p>
                  </div>
                ))}
              </div>
            </AnimateIn>

            {/* CTA */}
            <AnimateIn variant="fade" delay={340}>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-accent hover:text-accent-dim font-medium transition-colors duration-200"
              >
                Let&apos;s work together
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </a>
            </AnimateIn>
          </div>

          {/* ── Right column ────────────────────────────── */}
          <div className="flex flex-col gap-5">

            {/* Avatar card */}
            <AnimateIn variant="right" delay={120}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-surface">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-elevated to-canvas" />
                <div className="absolute inset-0 dot-grid opacity-25" />
                {/* Avatar */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-20 h-20 rounded-full border border-accent/30 bg-accent/10 flex items-center justify-center">
                      <span className="font-mono text-xl font-bold text-accent">VM</span>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-semibold text-text-primary">Virginia Mwega</p>
                      <p className="text-xs text-text-secondary mt-0.5">Full-Stack Software Engineer · New York</p>
                    </div>
                  </div>
                </div>
                {/* Decorative rings */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full border border-accent/15" />
                <div className="absolute bottom-4 left-4 w-5 h-5 rounded-md bg-accent/10 border border-accent/20" />
              </div>
            </AnimateIn>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {STATS.map((s, i) => (
                <AnimateIn key={s.value} variant="right" delay={200 + i * 70}>
                  <div className="p-4 rounded-xl bg-surface border border-border text-center hover:border-accent/40 transition-colors duration-300">
                    <div className="text-2xl font-bold text-text-primary font-mono mb-0.5">
                      <CountUp end={s.end} suffix={s.suffix} />
                    </div>
                    <div className="text-[0.65rem] text-text-secondary whitespace-pre-line leading-relaxed">
                      {s.label}
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>

            {/* Currently working with */}
            <AnimateIn variant="right" delay={380}>
              <div className="p-5 rounded-xl bg-surface border border-border">
                <p className="text-[0.65rem] font-semibold text-text-tertiary uppercase tracking-[0.18em] mb-3">
                  Currently working with
                </p>
                <div className="flex flex-wrap gap-2">
                  {CURRENTLY.map((tech) => (
                    <span key={tech} className="badge badge-warm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>

            {/* Open to work */}
            <AnimateIn variant="fade" delay={440}>
              <div className="flex items-center gap-3 px-5 py-3.5 rounded-xl border border-emerald-900/40 bg-emerald-950/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
                <p className="text-sm text-text-secondary">
                  Open to full-time &amp; contract roles
                </p>
              </div>
            </AnimateIn>

          </div>
        </div>
      </div>
    </section>
  );
}
