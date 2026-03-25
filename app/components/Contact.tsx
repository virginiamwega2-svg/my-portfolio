import AnimateIn from "./AnimateIn";
import ContactForm from "./ContactForm";

const SOCIALS = [
  { name: "GitHub",   handle: "@virginiamwega2-svg",         href: "https://github.com/virginiamwega2-svg"      },
  { name: "LinkedIn", handle: "in/virginia-mwega",       href: "https://linkedin.com/in/virginiamwega2-svg" },
  { name: "Twitter",  handle: "@virginiamwega2-svg",          href: "https://twitter.com/virginiamwega2-svg"     },
  { name: "Dribbble", handle: "@virginiamwega2-svg",          href: "https://dribbble.com/virginiamwega2-svg"    },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label */}
        <AnimateIn>
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-sm text-accent">05</span>
            <span className="h-px w-10 bg-border" />
            <span className="text-xs uppercase tracking-[0.2em] text-text-secondary">
              Contact
            </span>
          </div>
        </AnimateIn>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* ── Left — heading + email + socials ─────────── */}
          <div>
            <AnimateIn variant="left" delay={100}>
              <h2 className="text-[clamp(2.8rem,7vw,5rem)] font-bold text-text-primary tracking-tight leading-[0.92] mb-8">
                Let&apos;s build
                <br />
                something
                <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-accent-dim">
                  great.
                </span>
              </h2>
            </AnimateIn>

            <AnimateIn variant="left" delay={200}>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                Have a project in mind, a role to discuss, or just want to say
                hello? My inbox is always open.
              </p>
            </AnimateIn>

            <AnimateIn variant="left" delay={260}>
              <a
                href="mailto:hello@virginiamwega.dev"
                className="group inline-flex items-center gap-2 text-accent hover:text-accent-dim font-medium transition-colors duration-200 mb-10"
              >
                hello@virginiamwega.dev
                <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                  ↗
                </span>
              </a>
            </AnimateIn>

            {/* Social links */}
            <AnimateIn variant="left" delay={320}>
              <div className="flex flex-col gap-2">
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 rounded-xl border border-border bg-canvas hover:border-accent/35 transition-all duration-300"
                  >
                    <div className="min-w-0">
                      <span className="text-text-primary font-medium text-sm group-hover:text-accent transition-colors duration-200">
                        {s.name}
                      </span>
                      <span className="ml-3 font-mono text-xs text-text-tertiary truncate">
                        {s.handle}
                      </span>
                    </div>
                    <span className="text-text-tertiary group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 text-sm">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </AnimateIn>
          </div>

          {/* ── Right — contact form ──────────────────────── */}
          <AnimateIn variant="right" delay={150}>
            <div className="p-8 rounded-2xl border border-border bg-canvas">
              <p className="text-text-primary font-semibold mb-6">
                Send a message
              </p>
              <ContactForm />
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
