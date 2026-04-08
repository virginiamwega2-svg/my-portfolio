import AnimateIn from "./AnimateIn";

export default function About() {
  return (
    <section id="about" className="py-32 bg-canvas">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label */}
        <AnimateIn variant="left">
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-sm text-accent">01</span>
            <span className="h-px w-10 bg-border" />
            <span className="text-xs uppercase tracking-[0.2em] text-text-secondary">
              About Me
            </span>
          </div>
        </AnimateIn>

        {/* Main about panel */}
        <AnimateIn variant="fade" delay={80}>
          <div className="rounded-3xl bg-surface border border-border p-6 md:p-10 shadow-[0_24px_48px_rgba(0,0,0,0.25)]">

            {/* Top card */}
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight leading-tight mb-6">
                  Calm, reliable software for
                  <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-accent-dim">
                    busy family life.
                  </span>
                </h2>
                <p className="text-text-secondary text-[0.98rem] md:text-lg leading-[1.7] mb-6 max-w-2xl">
                  I build clean, fast tools for busy parents, turning complex
                  routines into simple, elegant products that save time and
                  reduce everyday stress.
                </p>
                <p className="text-text-secondary text-[0.98rem] md:text-lg leading-[1.7] mb-6 max-w-2xl">
                  Performance, reliability, and thoughtful UX are non-negotiable
                  — onboarding feels effortless, and the product stays calm when
                  life gets busy.
                </p>
                <p className="text-text-secondary text-[0.98rem] md:text-lg leading-[1.7] mb-6 max-w-2xl">
                  I&apos;ve shipped scheduling, reminders, and shared-info flows
                  that keep families in sync across devices.
                </p>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 text-accent hover:text-accent-dim font-medium transition-colors duration-200 underline underline-offset-4 decoration-accent/40 hover:decoration-accent"
                >
                  Let&apos;s build your next calm product
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </a>

                {/* Stats strip removed */}
              </div>

              {/* Image placeholder */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-elevated">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-elevated to-canvas" />
                <div className="absolute inset-0 dot-grid opacity-25" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[72%] h-[72%] rounded-2xl border border-dashed border-border flex items-center justify-center text-xs text-text-tertiary">
                    Add your photo here
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary card */}
            <div className="mt-8 rounded-2xl bg-elevated border border-border p-6 md:p-8">
              <div className="grid md:grid-cols-[220px_1fr] gap-6 items-center">
                <div className="relative aspect-[4/3] rounded-xl border border-border bg-canvas overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-elevated to-canvas" />
                  <div className="absolute inset-0 flex items-center justify-center text-xs text-text-tertiary">
                    Add a second photo or mockup
                  </div>
                </div>
                <div>
                  <p className="text-[0.7rem] font-semibold text-text-tertiary uppercase tracking-[0.2em] mb-2">
                    Focus
                  </p>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    Calm, reliable software for real family life.
                  </h3>
                  <p className="text-text-secondary text-[0.95rem] leading-[1.7] mb-3">
                    I focus on clarity and reliability — quick setup, intuitive
                    flows, and features that fit real family life like schedules,
                    reminders, and shared information without the clutter.
                  </p>
                  <p className="text-text-secondary text-[0.95rem] leading-[1.7]">
                    I like building with TypeScript and React, and I&apos;m
                    comfortable shaping APIs and data flows that stay simple as
                    products scale. My goal is to grow on a product-focused team
                    and ship thoughtful software parents actually use —
                    experiences that feel calm, not complicated.
                  </p>
                </div>
              </div>
            </div>

            {/* Open to work */}
            <div className="mt-6 flex items-center gap-3 px-5 py-3.5 rounded-xl border border-emerald-900/40 bg-emerald-950/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
              <p className="text-sm text-text-secondary">
                Open to full-time &amp; contract roles
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
