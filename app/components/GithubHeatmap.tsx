import AnimateIn from "./AnimateIn";
import { Github } from "lucide-react";

/*  Server-rendered: fetched at build / ISR time, no client API key.
    Uses the free public `github-contributions-api.jogruber.de` proxy
    over GitHub's GraphQL contributions API.                         */

const GITHUB_USER = "virginiamwega2-svg";
const API_URL = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`;

type Contribution = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };
type ApiResponse = {
  total: Record<string, number>;
  contributions: Contribution[];
};

const LEVEL_BG: Record<number, string> = {
  0: "bg-elevated",
  1: "bg-accent/25",
  2: "bg-accent/50",
  3: "bg-accent/75",
  4: "bg-accent",
};

async function fetchContributions(): Promise<ApiResponse | null> {
  try {
    const res = await fetch(API_URL, { next: { revalidate: 60 * 60 * 6 } });
    if (!res.ok) return null;
    return (await res.json()) as ApiResponse;
  } catch {
    return null;
  }
}

function toWeeks(contributions: Contribution[]): Contribution[][] {
  // Group by Sunday-starting week
  const weeks: Contribution[][] = [];
  let current: Contribution[] = [];
  for (const day of contributions) {
    const weekday = new Date(day.date).getDay(); // 0 = Sun
    if (weekday === 0 && current.length > 0) {
      weeks.push(current);
      current = [];
    }
    current.push(day);
  }
  if (current.length) weeks.push(current);
  return weeks;
}

export default async function GithubHeatmap() {
  const data = await fetchContributions();

  // Past-year total — sum across whatever years the proxy returned
  const total = data
    ? Object.values(data.total).reduce((a, b) => a + b, 0)
    : 0;

  const weeks = data ? toWeeks(data.contributions) : [];

  return (
    <section id="github" className="py-32 bg-canvas">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <AnimateIn>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-sm text-accent">07</span>
            <span className="h-px w-10 bg-border" />
            <span className="text-xs uppercase tracking-[0.2em] text-text-secondary">
              GitHub Activity
            </span>
          </div>
        </AnimateIn>

        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <AnimateIn delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight leading-tight">
              Shipping,
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-accent-dim">
                quietly daily.
              </span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={180}>
            <a
              href={`https://github.com/${GITHUB_USER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors shrink-0"
            >
              <Github className="h-4 w-4" />
              @{GITHUB_USER}
            </a>
          </AnimateIn>
        </div>

        {/* Heatmap card */}
        <AnimateIn variant="scale" delay={120}>
          <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
            {/* Top meta */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <p className="text-sm text-text-secondary">
                {data ? (
                  <>
                    <span className="font-mono font-semibold text-text-primary">
                      {total.toLocaleString()}
                    </span>{" "}
                    contributions in the last year
                  </>
                ) : (
                  "Activity feed temporarily unavailable"
                )}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-text-tertiary">
                <span className="font-mono">Less</span>
                {[0, 1, 2, 3, 4].map((lvl) => (
                  <span
                    key={lvl}
                    className={`h-2.5 w-2.5 rounded-[3px] border border-border ${LEVEL_BG[lvl]}`}
                  />
                ))}
                <span className="font-mono">More</span>
              </div>
            </div>

            {/* Grid — horizontally scrollable on narrow screens */}
            {weeks.length > 0 ? (
              <div className="overflow-x-auto pb-2 -mx-1 px-1">
                <div className="flex gap-[3px] min-w-fit">
                  {weeks.map((week, wi) => (
                    <div key={wi} className="flex flex-col gap-[3px]">
                      {Array.from({ length: 7 }).map((_, di) => {
                        const day = week[di];
                        if (!day) {
                          return (
                            <span
                              key={di}
                              className="h-2.5 w-2.5 rounded-[3px] opacity-0"
                            />
                          );
                        }
                        return (
                          <span
                            key={di}
                            title={`${day.count} contributions on ${day.date}`}
                            className={`h-2.5 w-2.5 rounded-[3px] border border-border/40 ${LEVEL_BG[day.level]} hover:ring-1 hover:ring-accent transition`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-sm text-text-tertiary py-12 text-center">
                Couldn&apos;t load contribution data. View live on{" "}
                <a
                  href={`https://github.com/${GITHUB_USER}`}
                  className="text-accent hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub →
                </a>
              </p>
            )}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
