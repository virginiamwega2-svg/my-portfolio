import AnimateIn from "./AnimateIn";

const PROJECTS = [
  {
    number: "01",
    title: "FamNest",
    tagline: "An AI wellness coach for exhausted parents.",
    year: "2026",
    problem:
      "Working parents of young kids are chronically depleted and have no time for \"wellness\" — and most apps only add to the load. The bar I set: ask 30 seconds of input and give back one small, doable thing that fits the day they're actually having.",
    impact:
      "Turned a single LLM call into a small multi-agent pipeline — a coach that drafts the plan, a safety reviewer that screens for crisis, a memory layer that tracks each parent's trends, and lightweight RAG that grounds advice in vetted guidance — so a 30-second daily check-in (mood, stress, sleep, time, goal) returns a warm, personalized micro-plan. Runs in production at zero API cost on a free model, with a deterministic safety floor for crisis cases that holds independent of the model.",
    stack: ["Next.js 16", "React 19", "Supabase", "Postgres RLS", "Groq", "Llama 3.3 70B", "Tailwind v4", "Vercel"],
    features: [
      "Orchestrated multi-agent pipeline instead of one prompt: a coach agent drafts a history-aware plan around the parent's worst lever (sleep, stress, or mood), a safety-reviewer agent screens each draft (ok / revise / crisis) through a bounded revise loop, and a memory layer summarizes each parent's trends back into the next plan",
      "Deterministic crisis floor: a keyword guard escalates self-harm language to curated support resources, independent of the probabilistic model — real end-to-end testing caught two safety bugs a code review missed (the offline path had no crisis handling; the LLM classifier was non-deterministic on crisis)",
      "Lightweight lexical RAG grounds advice in a curated, sourced wellness corpus (chosen over vector embeddings — free and serverless-appropriate) with provenance on every plan; a provider-swappable LLM layer runs at zero cost on Groq's free tier, with a deterministic fallback plan when the model is down, all on Supabase RLS + rate limiting",
    ],
    demo: "https://famnest-iota.vercel.app/",
    github: "https://github.com/virginiamwega2-svg/Famnest",
    image: "/projects/famnest.png",
    gradientFrom: "from-rose-950/50",
    glowColor: "rgba(251,113,133,0.14)",
    accentLine: "#FB7185",
    accentDot: "bg-rose-400",
    accentText: "text-rose-400",
  },
  {
    number: "02",
    title: "Fit Parent Plan",
    tagline: "AI-powered fitness platform for busy parents.",
    year: "2026",
    problem:
      "Busy parents abandon fitness programs because every plan assumes ideal conditions — a sick kid or a brutal work week, and they restart from zero two months later. Generic apps hand over a static PDF and disappear; there's no fast, judgment-free way to adapt the plan to the week a parent is actually having.",
    impact:
      "Designed, built, and shipped a production AI fitness product end to end — schema to deployed UI — in a single 100% TypeScript codebase. Three live AI features on the Anthropic SDK (generate plan, generate workout, adapt last plan), each server-validated with Zod, and a $0-credit mock fallback that keeps the product fully usable when the key is unavailable, so the UI never breaks. AI widgets lazy-load off the critical path for sub-second perceived load; static where it can be, dynamic where it matters.",
    stack: ["Next.js 15", "TypeScript", "Claude API", "Zod", "n8n", "Vercel"],
    features: [
      "AI check-in turns free-text into a 20-minute, parent-friendly plan (headline, steps, confidence score, reasoning); a pantry-to-plate agent parses fridge contents into a meal plus a gap shopping list",
      "Automation pipeline: anonymous session tracking → n8n lead-nurture flow feeding a weekly Parent Pulse digest, with a pagehide email-recovery hook so plans are never lost on tab close",
      "IP-based daily rate limiting with reset time returned to the client (no DB write per request), email/password auth + protected dashboard, and live per-call observability surfacing real cost + latency ($0.00xx · NNNms)",
    ],
    demo: "https://fit-parent-plan-platform.vercel.app/",
    github: "https://github.com/virginiamwega2-svg/Fit-Parent-Plan-Platform",
    image: "/projects/fit-parent-plan.png",
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
    image: "/projects/hirely-job-board.png",
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
    image: "/projects/purenest-store.png",
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
