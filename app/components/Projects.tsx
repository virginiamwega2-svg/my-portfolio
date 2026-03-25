import AnimateIn from "./AnimateIn";

const PROJECTS = [
  {
    number: "01",
    title: "Luminary Dashboard",
    year: "2024",
    problem:
      "Enterprise teams had no real-time visibility into KPIs — decisions depended on stale spreadsheets and weekly syncs that were already outdated.",
    stack: ["Next.js", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    features: [
      "Live charts with 15+ customisable widget types",
      "Role-based access control for multi-team orgs",
      "One-click CSV & PDF report export",
    ],
    demo: "#",
    github: "#",
    gradientFrom: "from-violet-950/60",
    glowColor: "rgba(139,92,246,0.14)",
    accentLine: "#7C3AED",
    accentDot: "bg-violet-400",
    accentText: "text-violet-400",
  },
  {
    number: "02",
    title: "Forge Commerce",
    year: "2024",
    problem:
      "Small brands needed a scalable headless storefront without the $50K+ price tag of enterprise platforms like Shopify Plus or Commercetools.",
    stack: ["Next.js", "Django", "Stripe", "PostgreSQL", "Redis"],
    features: [
      "Headless CMS with drag-and-drop page editor",
      "Stripe Checkout with recurring subscription billing",
      "Redis-backed cart — persists across sessions and devices",
    ],
    demo: "#",
    github: "#",
    gradientFrom: "from-amber-950/50",
    glowColor: "rgba(201,169,110,0.14)",
    accentLine: "#C9A96E",
    accentDot: "bg-accent",
    accentText: "text-accent",
  },
  {
    number: "03",
    title: "Pulse Health",
    year: "2023",
    problem:
      "Users' health data was siloed across five different apps with no unified view, no trends, and no actionable guidance on what to actually do.",
    stack: ["React Native", "GraphQL", "AWS Lambda", "TensorFlow"],
    features: [
      "AI-generated weekly health insights per user",
      "Syncs with Apple Health, Fitbit & Garmin",
      "Streak system that drove 3× daily engagement vs. baseline",
    ],
    demo: "#",
    github: "#",
    gradientFrom: "from-emerald-950/50",
    glowColor: "rgba(52,211,153,0.14)",
    accentLine: "#34D399",
    accentDot: "bg-emerald-400",
    accentText: "text-emerald-400",
  },
  {
    number: "04",
    title: "ReviewBot",
    year: "2023",
    problem:
      "A two-person engineering team was spending 40% of every sprint on manual code review instead of shipping product.",
    stack: ["Next.js", "Python", "OpenAI API", "GitHub API", "Postgres"],
    features: [
      "Automated PR summaries with risk scoring (low / medium / high)",
      "Security vulnerability pattern detection pre-merge",
      "Slack notifications with one-click approve workflow",
    ],
    demo: "#",
    github: "#",
    gradientFrom: "from-sky-950/50",
    glowColor: "rgba(56,189,248,0.14)",
    accentLine: "#38BDF8",
    accentDot: "bg-sky-400",
    accentText: "text-sky-400",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label */}
        <AnimateIn>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-sm text-accent">02</span>
            <span className="h-px w-10 bg-border" />
            <span className="text-xs uppercase tracking-[0.2em] text-text-secondary">
              Selected Work
            </span>
          </div>
        </AnimateIn>

        {/* Heading row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <AnimateIn delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight leading-tight">
              Projects that
              <br />
              made an impact.
            </h2>
          </AnimateIn>
          <AnimateIn delay={180}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors duration-200 shrink-0"
            >
              All repositories
              <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                ↗
              </span>
            </a>
          </AnimateIn>
        </div>

        {/* Cards grid — 2-col on md+, so each card has room to breathe */}
        <div className="grid md:grid-cols-2 gap-5">
          {PROJECTS.map((p, i) => (
            <AnimateIn key={p.number} variant="scale" delay={i * 100}>
              <article className="group flex flex-col h-full rounded-2xl overflow-hidden border border-border bg-canvas transition-all duration-500 hover:border-accent/30 hover:-translate-y-1.5 hover:shadow-[0_24px_64px_rgba(0,0,0,0.55)]">

                {/* Thumbnail strip */}
                <div
                  className={`relative h-40 shrink-0 bg-gradient-to-br ${p.gradientFrom} via-elevated to-canvas overflow-hidden`}
                >
                  {/* Radial hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(ellipse at 50% 110%, ${p.glowColor}, transparent 65%)`,
                    }}
                  />
                  {/* Dot-grid texture */}
                  <div className="absolute inset-0 dot-grid opacity-20" />
                  {/* Watermark number */}
                  <span className="absolute bottom-1 left-5 font-mono text-8xl font-bold text-text-primary/[0.04] select-none leading-none">
                    {p.number}
                  </span>
                  {/* Year badge */}
                  <span className="absolute top-4 right-4 font-mono text-xs text-text-tertiary">
                    {p.year}
                  </span>
                  {/* Accent rule */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-px opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: p.accentLine }}
                  />
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-6 gap-5">

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((tag) => (
                      <span
                        key={tag}
                        className="badge badge-warm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300 leading-snug">
                    {p.title}
                  </h3>

                  {/* Problem */}
                  <div>
                    <p className="text-[0.65rem] font-semibold text-text-tertiary uppercase tracking-[0.18em] mb-2">
                      Problem
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {p.problem}
                    </p>
                  </div>

                  {/* Key features */}
                  <div className="flex-1">
                    <p className="text-[0.65rem] font-semibold text-text-tertiary uppercase tracking-[0.18em] mb-2.5">
                      Key Features
                    </p>
                    <ul className="flex flex-col gap-2">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-text-secondary leading-snug">
                          <span
                            className={`mt-[3px] shrink-0 w-1.5 h-1.5 rounded-full ${p.accentDot} opacity-80`}
                          />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer — links */}
                  <div className="pt-4 border-t border-border flex items-center gap-5">
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group/link inline-flex items-center gap-1.5 text-sm font-semibold ${p.accentText} hover:opacity-75 transition-opacity duration-200`}
                    >
                      Live Demo
                      <span className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200">
                        ↗
                      </span>
                    </a>
                    <span className="w-px h-4 bg-border" />
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200"
                    >
                      GitHub
                      <span className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200">
                        ↗
                      </span>
                    </a>
                  </div>

                </div>
              </article>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
}
