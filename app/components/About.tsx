import AnimateIn from "./AnimateIn";

const PRINCIPLES = [
  {
    title: "Practical by default",
    body: "I design around real schedules, messy edge cases, and the small moments where software either saves time or creates more work.",
  },
  {
    title: "Clear under the hood",
    body: "I like tidy data models, secure flows, useful validation, and interfaces that make the next step obvious.",
  },
  {
    title: "Built to hold up",
    body: "From webhooks to CI checks, I care about the parts users do not see because they are what keep a product dependable.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-canvas py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <AnimateIn variant="left">
          <div className="flex items-center gap-4 mb-14">
            <span className="font-mono text-sm text-accent">01</span>
            <span className="h-px w-10 bg-border" />
            <span className="text-xs uppercase tracking-[0.2em] text-text-secondary">
              About Me
            </span>
          </div>
        </AnimateIn>

        {/* Main content — single column, left-aligned, comfortable max width */}
        <AnimateIn>
          <div className="max-w-3xl">
            <h2 className="mb-7 text-4xl font-bold leading-tight text-text-primary md:text-5xl">
              I ship{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-accent-dim">
                AI products
              </span>{" "}
              that fit real life.
            </h2>

            <div className="space-y-5 text-base leading-[1.8] text-text-secondary md:text-lg">
              <p>
                I&apos;m Virginia Mwega, a Full-Stack &amp; AI Engineer. I
                build production systems with Claude tool use, structured
                outputs, response caching, and graceful fallbacks — the kind
                of AI that never breaks when an API key runs out of credits.
              </p>
              <p>
                My work is drawn to family, wellness, and flexible work:
                products for busy parents who need software designed around
                messy weeks, not happy paths. Three production AI products
                shipped, with real users and real metrics.
              </p>
              <p>
                I own the path from rough idea to shipped feature — schema,
                API, AI integration, auth, payments, CI, and the operational
                details (idempotent webhooks, cached AI responses, security
                headers) that keep a product steady after launch.
              </p>
            </div>

            <a
              href="#contact"
              className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors duration-200 hover:text-accent-dim link-underline"
            >
              Let&apos;s build something clear and useful
              <span className="group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </a>
          </div>
        </AnimateIn>

        {/* Principles — full-width row, balanced against the main column above */}
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {PRINCIPLES.map((item, index) => (
            <AnimateIn key={item.title} variant="up" delay={120 + index * 90}>
              <article className="h-full rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent/30 hover:bg-elevated">
                <span className="font-mono text-xs text-accent">
                  0{index + 1}
                </span>
                <h3 className="mt-4 mb-2 text-lg font-semibold leading-snug text-text-primary">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.body}
                </p>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
