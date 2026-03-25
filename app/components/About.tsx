import AnimateIn from "./AnimateIn";

const STATS = [
  { value: "3+",   label: "Years\nExperience" },
  { value: "20+",  label: "Projects\nDelivered" },
  { value: "15+",  label: "Happy\nClients" },
];

const FOCUS = [
  {
    label: "FE",
    title: "Frontend Engineering",
    body:  "React, Next.js, TypeScript, Tailwind. Pixel-precise UIs that are fast, accessible, and easy to maintain.",
  },
  {
    label: "BE",
    title: "Backend & APIs",
    body:  "Python, Django, Node.js, PostgreSQL. Scalable services with clean data models and clear API contracts.",
  },
  {
    label: "OPS",
    title: "Cloud & DevOps",
    body:  "AWS, Docker, GitHub Actions. I own a feature from the first commit all the way through to production.",
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
            <AnimateIn>
              <div className="flex items-center gap-4 mb-10">
                <span className="font-mono text-sm text-accent">01</span>
                <span className="h-px w-10 bg-border" />
                <span className="text-xs uppercase tracking-[0.2em] text-text-secondary">
                  About Me
                </span>
              </div>
            </AnimateIn>

            {/* Headline */}
            <AnimateIn delay={80}>
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight leading-tight mb-8">
                Engineering great software,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dim">
                  end to end.
                </span>
              </h2>
            </AnimateIn>

            {/* Bio */}
            <AnimateIn delay={160}>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-5">
                I&apos;m a full-stack software engineer based in New York with
                3+ years building production systems across the entire stack —
                from pixel-precise React interfaces to distributed backend APIs
                and cloud infrastructure. I&apos;ve shipped features used daily
                by tens of thousands of people across startups and enterprise
                clients alike.
              </p>
            </AnimateIn>

            <AnimateIn delay={220}>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-12">
                I treat every project as a product problem first: understand
                what users actually need, cut scope ruthlessly, ship early, and
                measure what changes. The best code is the code that solves the
                right problem simply.
              </p>
            </AnimateIn>

            {/* Focus area cards */}
            <AnimateIn delay={280}>
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
            <AnimateIn delay={340}>
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
            <AnimateIn delay={120}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-surface">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-elevated to-canvas" />
                <div className="absolute inset-0 dot-grid opacity-25" />
                {/* Avatar */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-20 h-20 rounded-full border border-accent/30 bg-accent/10 flex items-center justify-center">
                      <span className="font-mono text-xl font-bold text-accent">JD</span>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-semibold text-text-primary">John Doe</p>
                      <p className="text-xs text-text-secondary mt-0.5">Full-Stack Engineer · New York</p>
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
                <AnimateIn key={s.value} delay={200 + i * 70}>
                  <div className="p-4 rounded-xl bg-surface border border-border text-center hover:border-accent/40 transition-colors duration-300">
                    <div className="text-2xl font-bold text-text-primary font-mono mb-0.5">
                      {s.value}
                    </div>
                    <div className="text-[0.65rem] text-text-secondary whitespace-pre-line leading-relaxed">
                      {s.label}
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>

            {/* Currently working with */}
            <AnimateIn delay={380}>
              <div className="p-5 rounded-xl bg-surface border border-border">
                <p className="text-[0.65rem] font-semibold text-text-tertiary uppercase tracking-[0.18em] mb-3">
                  Currently working with
                </p>
                <div className="flex flex-wrap gap-2">
                  {CURRENTLY.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full text-xs font-mono bg-elevated border border-border text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>

            {/* Open to work */}
            <AnimateIn delay={440}>
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
