import AnimateIn from "./AnimateIn";

const EDUCATION = [
  {
    title: "Bachelor’s Degree / Diploma",
    school: "Your University or School",
    period: "Year — Year",
    details: "Program or major (replace with your actual program).",
  },
];

const CERTIFICATIONS = [
  {
    title: "Certification Name",
    issuer: "Issuing Organization",
    year: "Year",
  },
  {
    title: "Certification Name",
    issuer: "Issuing Organization",
    year: "Year",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <AnimateIn>
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-sm text-accent">03</span>
            <span className="h-px w-10 bg-border" />
            <span className="text-xs uppercase tracking-[0.2em] text-text-secondary">
              Education &amp; Certifications
            </span>
          </div>
        </AnimateIn>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8">
          {/* Education card */}
          <AnimateIn variant="left" delay={80}>
            <div className="rounded-2xl bg-elevated border border-border p-7">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Education
              </h3>
              <div className="flex flex-col gap-5">
                {EDUCATION.map((item) => (
                  <div key={item.title}>
                    <p className="text-sm font-semibold text-text-primary">
                      {item.title}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {item.school}
                      <span className="mx-2 text-text-tertiary">·</span>
                      {item.period}
                    </p>
                    <p className="text-sm text-text-secondary mt-2">
                      {item.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* Certifications card */}
          <AnimateIn variant="right" delay={120}>
            <div className="rounded-2xl bg-elevated border border-border p-7">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Certifications
              </h3>
              <ul className="flex flex-col gap-4">
                {CERTIFICATIONS.map((cert) => (
                  <li key={`${cert.title}-${cert.year}`}>
                    <p className="text-sm font-semibold text-text-primary">
                      {cert.title}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {cert.issuer}
                      <span className="mx-2 text-text-tertiary">·</span>
                      {cert.year}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
