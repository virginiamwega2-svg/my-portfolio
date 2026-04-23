import AnimateIn from "./AnimateIn";

const PROJECTS = [
  {
    number: "01",
    title: "Fit Parent Plan",
    tagline: "Full-stack fitness system for busy parents.",
    year: "2026",
    problem:
      "Most fitness programs assume clean weeks, fixed gym time, and high energy. Busy parents have unpredictable schedules, so consistency breaks and apps treat it like failure instead of designing for real life.",
    impact:
      "Designed for 10–20 minute sessions and “messy-week” rescue flows, then shipped a production-ready system with CI-gated deploys to Vercel (typecheck/lint/tests/E2E), secure payments, and operational notifications.",
    stack: ["Next.js (App Router)", "React", "TypeScript", "Tailwind CSS", "SQLite", "Stripe"],
    features: [
      "Time-Window Planner generates a realistic 2-week plan from availability + stress/sleep context",
      "Auth + member dashboard with persisted tools, progress snapshots, and meal-plan tracking",
      "Stripe subscriptions + verified webhooks, Zod validation, rate limiting, and Resend notifications",
    ],
    demo: "https://fit-parent-plan-platform.vercel.app/",
    github: "https://github.com/virginiamwega2-svg/Fit-Parent-Plan-Platform",
    image: "/projects/fit-parent-plan.svg",
    gradientFrom: "from-violet-950/60",
    glowColor: "rgba(139,92,246,0.14)",
    accentLine: "#7C3AED",
    accentDot: "bg-violet-400",
    accentText: "text-violet-400",
  },
  {
    number: "02",
    title: "Hirely",
    tagline: "Flexible jobs, structured for busy parents.",
    year: "2024",
    problem:
      "Flexibility is usually buried in job descriptions, so parents waste time opening listings just to check schedule, remote fit, and hours.",
    impact:
      "Turned flexibility into structured data (schedule type, remote, hours/day) to power fast discovery, then shipped one-step apply and a lightweight employer workflow to track decisions.",
    stack: ["Python", "Django", "PostgreSQL", "Bootstrap 5"],
    features: [
      "Search, sorting, and filters built on structured flexibility data",
      "One-step apply with guardrails + optional resume upload",
      "Employer dashboard to manage roles and update applicant statuses",
    ],
    demo: "https://hirely-a0lx.onrender.com/",
    github: "https://github.com/virginiamwega2-svg/hirely",
    image: "/projects/hirely-job-board.svg",
    gradientFrom: "from-amber-950/50",
    glowColor: "rgba(201,169,110,0.14)",
    accentLine: "#C9A96E",
    accentDot: "bg-accent",
    accentText: "text-accent",
  },
  {
    number: "03",
    title: "PureNest Family Wellness Store",
    tagline: "Family wellness e-commerce for Canadian households.",
    year: "2023",
    problem:
      "A family wellness e-commerce store tailored to Canadian households.",
    impact:
      "Focused on trust and clarity to help shoppers decide quickly.",
    stack: ["React", "Next.js", "Tailwind CSS"],
    features: [
      "Clean product categories and detail pages",
      "Fast, simple cart and checkout flow",
      "Trust-first layout with clear product info",
    ],
    demo: "#",
    github: "https://github.com/virginiamwega2-svg/purenest-family",
    image: "/projects/purenest-store.svg",
    gradientFrom: "from-emerald-950/50",
    glowColor: "rgba(52,211,153,0.14)",
    accentLine: "#34D399",
    accentDot: "bg-emerald-400",
    accentText: "text-emerald-400",
  },
  {
    number: "04",
    title: "SchedAI Product Landing Page",
    tagline: "Scheduling content without adding headcount.",
    year: "2023",
    problem:
      "SchedAI helps ecommerce operators and creator-led brands publish on schedule without adding headcount.",
    impact:
      "Clear messaging and flow to move visitors from idea to action.",
    stack: ["React", "Next.js", "Tailwind CSS"],
    features: [
      "Scheduling, approvals, and analytics in one place",
      "Clear value props and conversion-focused layout",
      "Fast, mobile-first experience",
    ],
    demo: "https://product-landig-page.vercel.app/",
    github: "https://github.com/virginiamwega2-svg/Product-Landing-Page",
    image: "/projects/schedai-landing.svg",
    gradientFrom: "from-sky-950/50",
    glowColor: "rgba(56,189,248,0.14)",
    accentLine: "#38BDF8",
    accentDot: "bg-sky-400",
    accentText: "text-sky-400",
  },
];

const HOW_I_WORK = [
  {
    title: "Clarity first",
    body: "I simplify the flow so busy parents can finish tasks in minutes.",
  },
  {
    title: "Speed matters",
    body: "Fast load times and smooth interactions on every device.",
  },
  {
    title: "Built for real life",
    body: "Designs that reduce stress and fit daily routines.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-canvas">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label */}
        <AnimateIn>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-sm text-accent">03</span>
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
              href="https://github.com/virginiamwega2-svg"
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
                  className={`relative h-44 shrink-0 bg-gradient-to-br ${p.gradientFrom} via-elevated to-canvas overflow-hidden`}
                >
                  {/* Project screenshot */}
                  <img
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                    loading="lazy"
                  />
                  {/* Radial hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(ellipse at 50% 110%, ${p.glowColor}, transparent 65%)`,
                    }}
                  />
                  {/* Gradient wash for legibility */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.gradientFrom} via-elevated to-canvas opacity-75`} />
                  {/* Dot-grid texture */}
                  <div className="absolute inset-0 dot-grid opacity-20" />
                  {/* Watermark number */}
                  <span className="absolute bottom-1 left-5 font-mono text-8xl font-bold text-text-primary/[0.04] select-none leading-none">
                    {p.number}
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
                  <p className="text-sm text-text-secondary -mt-3">
                    {p.tagline}
                  </p>

                  {/* Problem */}
                  <div>
                    <p className="text-[0.65rem] font-semibold text-text-tertiary uppercase tracking-[0.18em] mb-2">
                      Problem
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {p.problem}
                    </p>
                  </div>

                  {/* Impact */}
                  <div>
                    <p className="text-[0.65rem] font-semibold text-text-tertiary uppercase tracking-[0.18em] mb-2">
                      Impact
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {p.impact}
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
                  {(p.demo !== "#" || p.github !== "#") && (
                    <div className="pt-4 border-t border-border flex items-center gap-5">
                      {p.demo !== "#" && (
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
                      )}
                      {p.demo !== "#" && p.github !== "#" && <span className="w-px h-4 bg-border" />}
                      {p.github !== "#" && (
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
                      )}
                    </div>
                  )}

                </div>
              </article>
            </AnimateIn>
          ))}
        </div>

        {/* How I work */}
        <AnimateIn variant="fade" delay={420}>
          <div className="mt-10 rounded-2xl bg-surface border border-border p-8">
            <div className="grid sm:grid-cols-3 gap-8 text-center sm:text-left">
              {HOW_I_WORK.map((item, i) => (
                <div key={item.title} className={i > 0 ? "sm:border-l sm:border-border sm:pl-8" : ""}>
                  <div className="text-accent font-semibold mb-2">
                    {item.title}
                  </div>
                  <div className="text-sm text-text-secondary leading-relaxed">
                    {item.body}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>

      </div>
    </section>
  );
}
