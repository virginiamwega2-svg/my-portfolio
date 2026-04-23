import AnimateIn from "./AnimateIn";
import Image from "next/image";

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
                  Full-stack products for
                  <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-accent-dim">
                    busy family life.
                  </span>
                </h2>
                <p className="text-text-secondary text-[0.98rem] md:text-lg leading-[1.7] mb-6 max-w-2xl">
                  I build parent-first web applications end-to-end — from data
                  modeling and APIs to UI, testing, and production deployment.
                </p>
                <p className="text-text-secondary text-[0.98rem] md:text-lg leading-[1.7] mb-6 max-w-2xl">
                  Recent work includes a flex-first job marketplace (structured
                  schedule + remote signals, one-step apply, employer workflow)
                  and a fitness planner designed for “messy weeks” (time-window
                  planning, member dashboard, payments, notifications).
                </p>
                <p className="text-text-secondary text-[0.98rem] md:text-lg leading-[1.7] mb-6 max-w-2xl">
                  I like systems that are calm on the surface and rigorous under
                  the hood: validation, guardrails, webhooks, and CI checks that
                  keep shipping safe.
                </p>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 text-accent hover:text-accent-dim font-medium transition-colors duration-200 underline underline-offset-4 decoration-accent/40 hover:decoration-accent"
                >
                  Let&apos;s build something parents actually finish
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </a>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Full-stack delivery",
                    "Auth + dashboards",
                    "Stripe + webhooks",
                    "Search + filtering",
                    "CI-gated deploys",
                  ].map((label) => (
                    <span
                      key={label}
                      className="inline-flex items-center rounded-full border border-border bg-elevated px-3 py-1 text-xs text-text-secondary"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image placeholder */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-elevated">
                <Image
                  src="/photos/vee-mwega-about.jpeg"
                  alt="Illustration of Vee Mwega working at a desk beside a family dashboard UI"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-canvas/10 via-transparent to-canvas/50" />
                <div className="absolute inset-0 dot-grid opacity-20" />
              </div>
            </div>

            {/* Secondary card */}
            <div className="mt-8 rounded-2xl bg-elevated border border-border p-6 md:p-8">
              <div className="grid md:grid-cols-[220px_1fr] gap-6 items-center">
                <div className="relative rounded-xl border border-border bg-canvas overflow-hidden p-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-elevated to-canvas" />
                  <div className="relative">
                    <p className="text-[0.7rem] font-semibold text-text-tertiary uppercase tracking-[0.2em] mb-3">
                      Principles
                    </p>
                    <ul className="flex flex-col gap-2 text-sm text-text-secondary">
                      {[
                        "Design for messy weeks",
                        "Make constraints structured",
                        "Ship with guardrails",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2.5 leading-snug">
                          <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-accent/80 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <p className="text-[0.7rem] font-semibold text-text-tertiary uppercase tracking-[0.2em] mb-2">
                    Talk to me about
                  </p>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    End-to-end product engineering.
                  </h3>
                  <p className="text-text-secondary text-[0.95rem] leading-[1.7] mb-4">
                    I&apos;m strongest when I can own a feature from spec to
                    production: data model → UI → tests → deploy. I care about
                    decisions that make products faster to use and safer to
                    operate.
                  </p>
                  <ul className="flex flex-col gap-2 text-sm text-text-secondary">
                    {[
                      "Data modeling for search/filtering (structured fields over vague text)",
                      "Secure auth flows (safe redirects, session handling, form validation)",
                      "Payments + webhooks (verification, retries, and operational alerts)",
                      "CI/CD reliability (typecheck, lint, tests, deploy checks)",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 leading-snug">
                        <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-text-tertiary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
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
