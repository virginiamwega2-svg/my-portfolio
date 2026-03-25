import AnimateIn from "./AnimateIn";

const JOBS = [
  {
    role:     "Software Engineer",
    company:  "Meridian Analytics",
    period:   "Jan 2023 — Present",
    location: "New York, NY",
    type:     "Full-time",
    current:  true,
    bullets: [
      "Led a full rebuild of the customer analytics dashboard with Next.js and React Query, reducing page load time by 58% and eliminating stale-data bugs.",
      "Designed a normalized PostgreSQL schema for multi-tenant reporting — cut median query time from 1.4 s to under 0.5 s.",
      "Built and owned the GitHub Actions → AWS ECS deployment pipeline; took deploy time from 22 min to 7 min.",
    ],
    stack: ["Next.js", "TypeScript", "React Query", "Python", "PostgreSQL", "AWS ECS"],
  },
  {
    role:     "Full-Stack Developer",
    company:  "Stacklabs",
    period:   "Aug 2021 — Dec 2022",
    location: "Remote",
    type:     "Full-time",
    current:  false,
    bullets: [
      "Shipped the end-to-end onboarding flow for a B2B SaaS product serving 8 000+ active users, from API design through to React UI.",
      "Built a REST API with Django REST Framework, including role-based access, rate limiting, and webhook delivery.",
      "Migrated legacy data warehouse from a self-hosted MySQL monolith to Redshift — reduced monthly infra cost by 35%.",
    ],
    stack: ["React", "Django REST", "PostgreSQL", "Redshift", "Docker", "Stripe"],
  },
  {
    role:     "Software Engineer Intern",
    company:  "Brightwave Corp",
    period:   "Mar 2021 — Jul 2021",
    location: "New York, NY",
    type:     "Internship",
    current:  false,
    bullets: [
      "Built internal tooling for the operations team that automated a 4-hour manual reporting process down to a 5-minute scheduled job.",
      "Shipped a product search feature with Elasticsearch integration — improved search relevance score by 40% per A/B test.",
    ],
    stack: ["React", "Node.js", "Elasticsearch", "Redis"],
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
              Experience
            </span>
          </div>
        </AnimateIn>

        {/* Headline */}
        <AnimateIn variant="left" delay={80}>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight leading-tight mb-16">
            Where I&apos;ve{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dim">
              shipped things.
            </span>
          </h2>
        </AnimateIn>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical accent line */}
          <div className="absolute left-3 top-2 bottom-2 w-px bg-border" aria-hidden="true" />

          <div className="flex flex-col gap-12">
            {JOBS.map((job, i) => (
              <AnimateIn key={job.company} variant="left" delay={i * 100}>
                <div className="relative pl-12">

                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border flex items-center justify-center ${
                      job.current
                        ? "border-accent bg-accent/15"
                        : "border-border bg-elevated"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        job.current ? "bg-accent" : "bg-text-tertiary"
                      }`}
                    />
                  </div>

                  {/* Card */}
                  <div className="group p-6 rounded-2xl bg-elevated border border-border hover:border-accent/25 transition-colors duration-300">

                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors duration-200">
                          {job.role}
                        </h3>
                        <p className="text-text-secondary text-sm mt-0.5">
                          {job.company}
                          <span className="mx-2 text-text-tertiary">·</span>
                          {job.location}
                        </p>
                      </div>

                      <div className="flex flex-col items-end gap-1.5 shrink-0">
                        <span className="font-mono text-xs text-text-tertiary">
                          {job.period}
                        </span>
                        <span
                          className={`badge text-[0.65rem] ${
                            job.current ? "badge-accent" : "badge"
                          }`}
                        >
                          {job.current ? "● Current" : job.type}
                        </span>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="flex flex-col gap-2.5 mb-5">
                      {job.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-sm text-text-secondary leading-relaxed">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-2">
                      {job.stack.map((t) => (
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
