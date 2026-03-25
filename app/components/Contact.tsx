import AnimateIn from "./AnimateIn";

const SOCIALS = [
  { name: "GitHub", handle: "@johndoe", href: "#" },
  { name: "LinkedIn", handle: "in/john-doe", href: "#" },
  { name: "Twitter / X", handle: "@johndoe", href: "#" },
  { name: "Dribbble", handle: "@johndoe", href: "#" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <AnimateIn>
          <div className="flex items-center gap-4 mb-20">
            <span className="font-mono text-sm text-accent">04</span>
            <span className="h-px w-10 bg-border" />
            <span className="text-xs uppercase tracking-[0.2em] text-text-secondary">
              Contact
            </span>
          </div>
        </AnimateIn>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — CTA */}
          <div>
            <AnimateIn delay={100}>
              <h2 className="text-[clamp(2.8rem,7vw,5rem)] font-bold text-text-primary tracking-tight leading-[0.92] mb-8">
                Let&apos;s build
                <br />
                something
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dim">
                  great.
                </span>
              </h2>
            </AnimateIn>

            <AnimateIn delay={200}>
              <p className="text-text-secondary text-lg leading-relaxed mb-10">
                Whether you have a project in mind or just want to explore what
                &apos;s possible — I&apos;d love to hear from you.
              </p>
            </AnimateIn>

            <AnimateIn delay={300}>
              <a
                href="mailto:hello@johndoe.com"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-canvas font-semibold rounded-full text-lg hover:bg-accent-dim transition-all duration-300 hover:shadow-[0_0_48px_rgba(201,169,110,0.22)]"
              >
                hello@johndoe.com
                <span className="group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </a>
            </AnimateIn>
          </div>

          {/* Right — social links */}
          <AnimateIn delay={200}>
            <div className="flex flex-col gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="group flex items-center justify-between p-5 rounded-xl bg-canvas border border-border hover:border-accent/40 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                >
                  <div>
                    <div className="text-text-primary font-medium text-sm group-hover:text-accent transition-colors duration-200">
                      {s.name}
                    </div>
                    <div className="text-text-secondary text-xs font-mono mt-0.5">
                      {s.handle}
                    </div>
                  </div>
                  <span className="text-text-tertiary group-hover:text-accent group-hover:translate-x-1 transition-all duration-200 text-sm">
                    →
                  </span>
                </a>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
