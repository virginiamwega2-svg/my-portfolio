import AnimateIn from "./AnimateIn";

const PROJECTS = [
  {
    number: "01",
    title: "FamNest",
    tagline: "An AI wellness coach for parents of young kids.",
    year: "2026",
    problem:
      "Parents of under-5s are among the most stretched and least-served people there are. Every wellness app assumes an hour and a quiet room they don't have — so the advice never fits the day they're actually living.",
    impact:
      "A 30-second daily check-in (mood, stress, sleep, available time) returns a small, realistic plan — three doable actions, a journaling prompt, and a sleep tip — sized to the day the parent actually has, plus trend tracking, scheduled email nudges, and a weekly AI report. Honesty is a hard requirement: no fake social proof, transparent AI. Free tier live in production; paid tier built and gated behind a clean \"coming soon\" pending local KYC.",
    stack: ["Next.js", "Supabase", "OpenAI", "Postgres RLS", "Flutterwave", "Resend", "PostHog", "Vercel"],
    features: [
      "AI that degrades gracefully: gpt-4o-mini generates each daily plan, wrapped in a hand-authored, input-aware fallback that returns a realistic plan if the model is unavailable — so a check-in never errors out",
      "Supabase Postgres with row-level security on every table, a signup trigger that provisions the user + free subscription on first login, and a Postgres-function rate limiter — no external service added",
      "Payments re-architected from Stripe to Flutterwave under a geographic constraint (Stripe unavailable locally), with webhook verification and an in-app cancel flow; scheduled + transactional email via Resend, product analytics via PostHog, cron on Vercel",
    ],
    demo: "https://famnest-iota.vercel.app/",
    github: "https://github.com/virginiamwega2-svg/Famnest",
    image: "/projects/famnest.svg",
    gradientFrom: "from-rose-950/50",
    glowColor: "rgba(251,113,133,0.14)",
    accentLine: "#FB7185",
    accentDot: "bg-rose-400",
    accentText: "text-rose-400",
  },
  {
    number: "02",
    title: "Fit Parent Plan",
    tagline: "AI-powered fitness coaching for busy parents.",
    year: "2026",
    problem:
      "Most fitness programs assume clean weeks, fixed gym time, and high energy. Parents have unpredictable schedules — sick kids, missed weeks, low sleep — so consistency breaks and apps treat it like failure instead of designing for real life.",
    impact:
      "74 parents coached at 4.9/5 across 38 reviews. Two Claude agents (Time-Window planner + Pantry-to-Plate) with streaming + mock fallback, adaptive replanning that survives missed weeks, and a 3-question lead-qualification quiz that filters prospects before they hit the coach — supporting a $199/mo price point.",
    stack: ["Next.js 15", "TypeScript", "Tailwind v4", "Claude API", "Stripe", "JWT Auth", "n8n", "Playwright"],
    features: [
      "Two AI agents: \"20-Minute Window\" workout planner + Pantry-to-Plate dinner agent — streaming, with mock fallback so a zero-balance API key never breaks the demo",
      "Event pipeline → n8n automation: every plan result emits a structured logSession event (planHeadline, planSource, mode, email) that powers the weekly Parent Pulse digest — plus a pagehide listener that auto-saves plans before the browser closes",
      "IP-based rate limiting (no-auth, x-forwarded-for parsing, resetInMs to client), Stripe Checkout + idempotent webhooks, plan-pause via localStorage, lazy-loaded AI demo for clean mobile Core Web Vitals",
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
    number: "03",
    title: "Hirely",
    tagline: "Full-stack AI job platform for parents and caregivers.",
    year: "2024",
    problem:
      "Job flexibility is invisible on most platforms — buried in paragraphs, not filterable, not comparable. For parents who need that information before they even open a listing, it's a real barrier.",
    impact:
      "Made flexibility a first-class, structured field (schedule type, remote, hours/day) and shipped 15+ production features end-to-end: Google OAuth, save-for-later bookmarking, AI job description writer, GDPR compliance suite, mobile sticky nav, IP-based rate limiting, and PostHog + Sentry observability — every AI feature has a graceful fallback so the app never breaks on an API failure.",
    stack: ["Django", "PostgreSQL", "Claude API", "django-allauth", "PostHog", "Sentry", "Render", "GitHub Actions", "Resend"],
    features: [
      "Google OAuth via django-allauth (one-click sign-in), AI job description writer (employer one-sentence brief → full role spec + requirements via Claude), and save-for-later bookmarking with heart toggle on every listing",
      "GDPR compliance suite: cookie consent banner, Privacy Policy, Terms of Service, and signed-token email unsubscribe with no extra DB table; robots.txt + auto-generated sitemap.xml for all active listings; application withdrawal with accepted/rejected status guard",
      "IP-based rate limiting on login, register, and AI chat (Django cache framework, zero third-party packages); PostHog analytics + Sentry error monitoring via env vars; mobile 4-tab sticky bottom nav with iOS safe-area support; CI/CD green on Render with all secrets via environment variables",
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
    number: "04",
    title: "PureNest Family",
    tagline: "Full-stack family wellness e-commerce, built from scratch.",
    year: "2023",
    problem:
      "Most wellness stores are bolted onto rigid templates — no custom checkout, no smart discovery, no visibility into shopper behavior. PureNest needed a fully owned platform purpose-built for a family wellness audience.",
    impact:
      "Shipped end-to-end: idempotent Stripe webhooks (zero duplicate orders across retries), a Claude-powered shopping assistant, verified-purchase reviews, a server-validated coupon engine, and production-grade security headers (CSP, HSTS, frame/MIME guards).",
    stack: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "Claude API", "NextAuth"],
    features: [
      "Stripe Checkout + idempotent webhook handler — processed event IDs persisted so retries never create duplicates",
      "Conversational AI assistant (Claude API) for contextual product recommendations across 5 wellness categories",
      "Full auth (email + OAuth + verification + signed reset tokens), verified-purchase reviews, admin dashboard with audit log",
    ],
    demo: "https://purenest-family.vercel.app/",
    github: "https://github.com/virginiamwega2-svg/purenest-family",
    image: "/projects/purenest-store.svg",
    gradientFrom: "from-emerald-950/50",
    glowColor: "rgba(52,211,153,0.14)",
    accentLine: "#34D399",
    accentDot: "bg-emerald-400",
    accentText: "text-emerald-400",
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
            <AnimateIn key={p.number} variant="scale" delay={i * 100} className={i === PROJECTS.length - 1 && PROJECTS.length % 2 === 1 ? "md:col-span-2" : ""}>
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
