import AnimateIn from "./AnimateIn";

const SARAH_JOURNEY = [
  {
    label: "Week 1",
    quote: "I did two sessions. The third didn't happen — my youngest got sick.",
    coach: "Maya's reply: \"Two is a win. See you Monday.\"",
  },
  {
    label: "Week 6",
    quote: "Down 4 lbs. The bigger thing was more energy at 3pm — when I always used to crash.",
    coach: "First week she didn't miss a session.",
  },
  {
    label: "Month 3",
    quote: "11 lbs down. I forgot what it felt like to not be tired all the time.",
    coach: "Still going.",
  },
];

const HIRELY_QUOTE = {
  quote:
    "A job board that doesn't make me feel guilty for wanting school hours. Just tell me when the work happens and what it pays.",
  who: "Parent returning from a career break",
  project: "Hirely",
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-canvas">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label */}
        <AnimateIn>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-sm text-accent">✦</span>
            <span className="h-px w-10 bg-border" />
            <span className="text-xs uppercase tracking-[0.2em] text-text-secondary">
              In Their Words
            </span>
          </div>
        </AnimateIn>

        {/* Heading */}
        <AnimateIn delay={80}>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight leading-tight mb-4">
            Real parents.{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-accent-dim">
              Real weeks.
            </span>
          </h2>
        </AnimateIn>
        <AnimateIn delay={140}>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl mb-14">
            Not five-star marketing copy. The actual messages from people using
            what I built — including the weeks they missed.
          </p>
        </AnimateIn>

        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-6">

          {/* ── Featured: Sarah's 3-stage journey ── */}
          <AnimateIn variant="scale" delay={100}>
            <article className="relative h-full rounded-2xl border border-border bg-elevated p-8 md:p-10 overflow-hidden">
              {/* Top accent rule */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

              {/* Quote mark */}
              <div
                className="absolute -top-4 right-6 font-serif text-9xl leading-none text-accent/10 select-none pointer-events-none"
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Header */}
              <div className="flex items-center justify-between mb-8 relative">
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.22em] text-text-tertiary mb-2">
                    Client Journey · Fit Parent Plan
                  </p>
                  <h3 className="text-xl font-semibold text-text-primary">
                    Sarah — mom of two
                  </h3>
                </div>
                <div
                  className="flex items-center gap-0.5 text-accent text-sm"
                  aria-label="5 out of 5 stars"
                >
                  {"★★★★★"}
                </div>
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-2 top-2 bottom-2 w-px bg-border" aria-hidden="true" />

                <div className="flex flex-col gap-7">
                  {SARAH_JOURNEY.map((stage) => (
                    <div key={stage.label} className="relative pl-10">
                      {/* Dot */}
                      <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-canvas border border-accent flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      </div>

                      <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-accent mb-2">
                        {stage.label}
                      </p>
                      <p className="text-text-primary text-base md:text-lg leading-relaxed font-medium mb-2">
                        &ldquo;{stage.quote}&rdquo;
                      </p>
                      <p className="text-text-tertiary text-sm italic leading-relaxed">
                        {stage.coach}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer note */}
              <div className="mt-8 pt-6 border-t border-border flex items-center gap-3 text-sm text-text-secondary">
                <span className="status-dot w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                One of 38 reviews · 4.9 / 5 average
              </div>
            </article>
          </AnimateIn>

          {/* ── Supporting Hirely quote ── */}
          <AnimateIn variant="scale" delay={220}>
            <article className="relative h-full rounded-2xl border border-border bg-surface p-8 md:p-10 flex flex-col">
              {/* Quote mark */}
              <div
                className="absolute -top-4 right-6 font-serif text-9xl leading-none text-accent/10 select-none pointer-events-none"
                aria-hidden="true"
              >
                &ldquo;
              </div>

              <div className="mb-6 relative">
                <p className="text-[0.65rem] uppercase tracking-[0.22em] text-text-tertiary">
                  User Feedback · {HIRELY_QUOTE.project}
                </p>
              </div>

              <p className="text-text-primary text-lg md:text-xl leading-relaxed font-medium mb-8 flex-1">
                &ldquo;{HIRELY_QUOTE.quote}&rdquo;
              </p>

              <div className="pt-6 border-t border-border">
                <p className="text-sm font-semibold text-text-primary mb-1">
                  {HIRELY_QUOTE.who}
                </p>
                <p className="text-xs text-text-tertiary uppercase tracking-[0.16em]">
                  {HIRELY_QUOTE.project} user
                </p>
              </div>
            </article>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
