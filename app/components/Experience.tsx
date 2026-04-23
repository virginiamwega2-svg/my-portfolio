import AnimateIn from "./AnimateIn";

const PROJECTS = [
  {
    title:   "Fit Parent Plan",
    context: "Personal Project",
    period:  "2026",
    current: true,
    bullets: [
      "Built a Time-Window Planner that generates realistic 2-week plans from real availability plus stress/sleep context.",
      "Implemented secure auth and a member dashboard with persisted tools, progress snapshots, and busy-week rescue flows.",
      "Integrated Stripe subscriptions + webhooks and shipped with CI gates (typecheck/lint/unit + E2E) to Vercel.",
    ],
    stack: ["Next.js (App Router)", "TypeScript", "SQLite", "Stripe", "Tailwind CSS"],
  },
  {
    title:   "Hirely — Flexible Jobs for Busy Parents",
    context: "Personal Project",
    period:  "2025",
    current: false,
    bullets: [
      "Made flexibility first-class data (schedule type, remote, hours/day) to power fast search and filtering.",
      "Streamlined the apply flow to one step with optional resume upload and server-side guardrails.",
      "Shipped a lightweight employer dashboard to post roles, review applicants, and track decisions.",
    ],
    stack: ["Python", "Django", "PostgreSQL", "Bootstrap 5"],
  },
  {
    title:   "PureNest Family Wellness Store",
    context: "Personal Project",
    period:  "2025",
    current: false,
    bullets: [
      "Built an e-commerce store for Canadian families focused on wellness products.",
      "Designed clean product categories, detail pages, and cart flows for fast shopping.",
      "Prioritized trust, clarity, and mobile-first performance.",
    ],
    stack: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title:   "Busy Parent Kits Store",
    context: "Personal Project",
    period:  "2024",
    current: false,
    bullets: [
      "Built an e-commerce experience for busy-parent kits and bundles.",
      "Implemented product browsing and detail pages with clean UX.",
      "Kept checkout flows simple and fast for mobile users.",
    ],
    stack: ["Node.js", "Express.js", "SQLite", "Render"],
  },
];

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
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight leading-tight mb-16">
            Projects I&apos;ve{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-accent-dim">
              shipped.
            </span>
          </h2>
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
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors duration-200">
                          {project.title}
                        </h3>
                        <p className="text-text-secondary text-sm mt-0.5">
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
                          {project.current ? "● Current" : "Project"}
                        </span>
                      </div>
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

      </div>
    </section>
  );
}
