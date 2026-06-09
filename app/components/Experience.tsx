import AnimateIn from "./AnimateIn";

const PROJECTS = [
  {
    title:   "FamNest",
    role:    "Solo Full-Stack & AI Engineer",
    context: "AI wellness coach for parents of young kids — production",
    period:  "2026 — Now",
    current: true,
    headline: "Free tier live in production · AI plans that never fail · Stripe → Flutterwave re-platform",
    bullets: [
      "Owned the full product end-to-end — Supabase schema with row-level security, OpenAI plan generation wrapped in a hand-authored fallback so a check-in never fails, Flutterwave billing re-architected from Stripe under a geographic constraint, plus scheduled email and cron.",
    ],
    stack: ["Next.js", "Supabase", "OpenAI", "Postgres RLS", "Flutterwave", "Resend", "PostHog", "Vercel"],
  },
  {
    title:   "Fit Parent Plan",
    role:    "Solo Fullstack Developer (design → build → ship)",
    context: "AI-powered fitness platform — production",
    period:  "2026 — Now",
    current: true,
    headline: "3 live AI features on the Anthropic SDK · $0-credit mock fallback · sub-second perceived load",
    bullets: [
      "Designed, built, and shipped end-to-end — schema → server action → streamed UI in 100% TypeScript — with three Zod-validated Claude features (generate plan, generate workout, adapt last plan), an n8n lead-nurture pipeline, IP-based rate limiting, and live per-call cost + latency observability.",
    ],
    stack: ["Next.js 15", "TypeScript", "Claude API", "Zod", "n8n", "Vercel"],
  },
  {
    title:   "Hirely",
    role:    "Solo builder — product, backend, AI, deployment",
    context: "AI hiring platform for parents and caregivers",
    period:  "2024 — 2025",
    current: false,
    headline: "10+ production AI features · graceful fallback on every surface",
    bullets: [
      "Designed and shipped 10+ Claude-powered AI features end-to-end — conversational search, CV parsing, AI-ranked matches, auto-screening, and empathy emails — each with a graceful fallback when the API key runs dry.",
    ],
    stack: ["Django", "PostgreSQL (Neon)", "Claude API", "Render", "GitHub Actions", "Resend"],
  },
  {
    title:   "PureNest Family",
    role:    "Solo Full-Stack Engineer",
    context: "AI-assisted family wellness e-commerce",
    period:  "2023",
    current: false,
    headline: "Zero duplicate orders across all Stripe webhook retries",
    bullets: [
      "Built a complete e-commerce platform from scratch — schema → API → AI assistant → checkout → admin tooling — without a starter template.",
    ],
    stack: ["Next.js 16", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "Claude API", "NextAuth"],
  },
];

const FOOTER_NOTE = {
  heading: "What runs through every project",
  body:
    "Four production AI products, one thesis: software designed around messy weeks, not happy paths. Every AI surface ships with a graceful fallback. Every payment flow handles retries idempotently. Every schema decision is deliberate — built to be reliable for the parents who actually use it.",
};

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-surface">
      <div className="max-w-4xl mx-auto px-6">

        {/* Section label */}
        <AnimateIn variant="left">
          <div className="flex items-center gap-4 mb-14">
            <span className="font-mono text-sm text-accent">02</span>
            <span className="h-px w-10 bg-border" />
            <span className="text-xs uppercase tracking-[0.2em] text-text-secondary">
              Project Experience
            </span>
          </div>
        </AnimateIn>

        {/* Headline */}
        <AnimateIn variant="left" delay={80}>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight leading-tight mb-6">
            Four AI products,{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-accent-dim">
              one thesis.
            </span>
          </h2>
        </AnimateIn>
        <AnimateIn variant="left" delay={140}>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl mb-16">
            Solo-shipped, end-to-end. Each one engineered around a parent&apos;s
            real constraints — and every AI surface built to keep working
            when an API key runs out of credits.
          </p>
        </AnimateIn>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical accent line */}
          <div className="absolute left-3 top-2 bottom-2 w-px bg-border" aria-hidden="true" />

          <div className="flex flex-col gap-12">
            {PROJECTS.map((project, i) => (
              <AnimateIn key={project.title} variant="left" delay={i * 100}>
                <div className="relative pl-12">

                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border flex items-center justify-center ${
                      project.current
                        ? "border-accent bg-accent/15"
                        : "border-border bg-elevated"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        project.current ? "bg-accent" : "bg-text-tertiary"
                      }`}
                    />
                  </div>

                  {/* Card */}
                  <div className="group p-6 rounded-2xl bg-elevated border border-border hover:border-accent/25 transition-colors duration-300">

                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors duration-200">
                          {project.title}
                        </h3>
                        <p className="text-accent text-xs font-mono mt-1 tracking-wide">
                          {project.role}
                        </p>
                        <p className="text-text-secondary text-sm mt-1">
                          {project.context}
                        </p>
                      </div>

                      <div className="flex flex-col items-end gap-1.5 shrink-0">
                        <span className="font-mono text-xs text-text-tertiary">
                          {project.period}
                        </span>
                        <span
                          className={`badge text-[0.65rem] ${
                            project.current ? "badge-accent" : "badge"
                          }`}
                        >
                          {project.current ? "● Current" : "Shipped"}
                        </span>
                      </div>
                    </div>

                    {/* Headline impact metric */}
                    <div className="mb-5 -mx-6 px-6 py-3 bg-canvas/60 border-y border-border/60">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-text-tertiary mb-1">
                        Impact
                      </p>
                      <p className="text-sm font-semibold text-text-primary leading-snug">
                        {project.headline}
                      </p>
                    </div>

                    {/* Bullets */}
                    <ul className="flex flex-col gap-2.5 mb-5">
                      {project.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-sm text-text-secondary leading-relaxed">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((t) => (
                        <span key={t} className="badge badge-warm">
                          {t}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* Thesis footer */}
        <AnimateIn variant="fade" delay={200}>
          <div className="mt-16 rounded-2xl border border-accent/20 bg-elevated p-8">
            <p className="text-accent font-semibold text-sm uppercase tracking-[0.18em] mb-3">
              {FOOTER_NOTE.heading}
            </p>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
              {FOOTER_NOTE.body}
            </p>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
