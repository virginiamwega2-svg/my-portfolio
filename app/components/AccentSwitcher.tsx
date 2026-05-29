"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";

/*  Persists the user's accent choice in localStorage and applies it
    at runtime by overriding --color-accent + --color-accent-dim
    on document.documentElement. Affects every accent-coloured
    element on the page (CTAs, badges, gradients, hover rings).      */

type Preset = { id: string; name: string; accent: string; dim: string };

const PRESETS: Preset[] = [
  { id: "gold",    name: "Gold",    accent: "#C9A96E", dim: "#A07E47" },
  { id: "violet",  name: "Violet",  accent: "#A78BFA", dim: "#7C3AED" },
  { id: "emerald", name: "Emerald", accent: "#4ADE80", dim: "#10B981" },
  { id: "sky",     name: "Sky",     accent: "#38BDF8", dim: "#0284C7" },
  { id: "rose",    name: "Rose",    accent: "#FB7185", dim: "#E11D48" },
];

const STORAGE_KEY = "vm-accent";

function applyAccent(p: Preset) {
  const root = document.documentElement;
  root.style.setProperty("--color-accent", p.accent);
  root.style.setProperty("--color-accent-dim", p.dim);
}

export default function AccentSwitcher() {
  const [active, setActive] = useState<string>("gold");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const preset = PRESETS.find((p) => p.id === saved);
      if (preset) {
        setActive(preset.id);
        applyAccent(preset);
      }
    }
  }, []);

  const handleSelect = (p: Preset) => {
    setActive(p.id);
    applyAccent(p);
    localStorage.setItem(STORAGE_KEY, p.id);
  };

  return (
    <div className="flex items-center gap-2 sm:gap-1.5" role="radiogroup" aria-label="Accent color">
      {PRESETS.map((p) => {
        const isActive = mounted && active === p.id;
        return (
          <button
            key={p.id}
            type="button"
            onClick={() => handleSelect(p)}
            aria-label={`Use ${p.name} accent`}
            aria-pressed={isActive}
            title={p.name}
            className={[
              "relative flex items-center justify-center w-7 h-7 sm:w-6 sm:h-6 rounded-full transition-all duration-200",
              "ring-offset-2 ring-offset-canvas hover:scale-110",
              isActive ? "ring-2 ring-text-primary" : "ring-1 ring-border",
            ].join(" ")}
            style={{ background: p.accent }}
          >
            {isActive && (
              <Check
                className="h-3 w-3"
                style={{
                  color: "#0D0C0B",
                  strokeWidth: 3,
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
