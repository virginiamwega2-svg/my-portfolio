import AnimateIn from "./AnimateIn";

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

        {/* Main content — text left, round image slot right */}
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[1fr_320px] lg:items-start">
          <AnimateIn>
            <div className="max-w-3xl">
              <h2 className="mb-7 text-4xl font-bold leading-tight text-text-primary md:text-5xl">
                I ship{" "}
                <span className="gradient-text-animated">
                  AI products
                </span>{" "}
                that fit real life.
              </h2>

              <div className="space-y-5 text-base leading-[1.8] text-text-secondary md:text-lg">
                <p>
                  I&apos;m Virginia Mwega, a Full-Stack &amp; AI Engineer. I
                  work close to the model — Claude tool use, structured outputs,
                  response caching — building AI that behaves predictably in
                  production, not just in a demo.
                </p>
                <p>
                  I build for family, wellness, and flexible work: software for
                  busy parents, designed around messy weeks instead of happy
                  paths. Four production AI products shipped — real users, real
                  payments, live in production today.
                </p>
                <p>
                  I own the whole path from rough idea to shipped feature —
                  schema, API, AI integration, auth, payments, and CI — plus the
                  operational details that keep a product steady long after
                  launch: idempotent webhooks, rate limiting, and hardened
                  security headers.
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

          {/* Round portrait — Virginia */}
          <AnimateIn variant="right" delay={120}>
            <div className="flex justify-center lg:sticky lg:top-28">
              <div className="group relative aspect-square w-44 sm:w-56 lg:w-72 rounded-full overflow-hidden border border-border bg-surface shadow-[0_24px_64px_rgba(0,0,0,0.35)]">
                <img
                  src="/photos/vee-mwega-about.jpeg"
                  alt="Virginia Mwega"
                  width={288}
                  height={288}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                {/* Subtle accent ring that brightens on hover */}
                <div className="absolute inset-2 rounded-full border border-accent/15 pointer-events-none transition-colors duration-500 group-hover:border-accent/40" />
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
