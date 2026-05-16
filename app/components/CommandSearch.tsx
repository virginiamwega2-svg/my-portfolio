"use client";

import { useEffect, useRef, useState } from "react";
import {
  Search, X, User, Briefcase, FolderGit2,
  Wrench, Sparkles, BookOpen, Github, Mail, CornerDownLeft,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Section = {
  id: string;
  label: string;
  hint: string;
  icon: LucideIcon;
};

const SECTIONS: Section[] = [
  { id: "about",      label: "About",      hint: "Who I am",           icon: User          },
  { id: "experience", label: "Experience", hint: "Project work",        icon: Briefcase     },
  { id: "projects",   label: "Projects",   hint: "Selected work",       icon: FolderGit2    },
  { id: "skills",     label: "Skills",     hint: "Tech stack",          icon: Wrench        },
  { id: "services",   label: "Services",   hint: "What I do",           icon: Sparkles      },
  { id: "blog",       label: "Writing",    hint: "Notes & posts",       icon: BookOpen      },
  { id: "github",     label: "GitHub",     hint: "Contribution graph",  icon: Github        },
  { id: "contact",    label: "Contact",    hint: "Get in touch",        icon: Mail          },
];

export default function CommandSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [highlight, setHighlight] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = SECTIONS.filter((s) =>
    `${s.label} ${s.hint}`.toLowerCase().includes(query.toLowerCase())
  );

  // Cmd/Ctrl + K toggle + keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
        return;
      }
      if (!open) return;
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setHighlight((h) => Math.min(h + 1, filtered.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setHighlight((h) => Math.max(h - 1, 0));
      }
      if (e.key === "Enter" && filtered[highlight]) {
        e.preventDefault();
        handleJump(filtered[highlight].id);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, highlight, filtered]);

  // Focus + reset on open
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setHighlight(0);
    } else {
      setQuery("");
    }
  }, [open]);

  // Reset highlight when query changes
  useEffect(() => setHighlight(0), [query]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleJump = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  return (
    <>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open search"
        className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-elevated text-text-secondary hover:text-text-primary hover:border-accent/50 transition-all duration-200 text-sm"
      >
        <Search className="h-3.5 w-3.5" />
        <span>Search</span>
        <kbd className="hidden sm:inline-flex items-center gap-0.5 ml-1 px-1.5 py-0.5 rounded text-[0.65rem] font-mono border border-border bg-canvas text-text-tertiary">
          ⌘K
        </kbd>
      </button>

      {/* Modal */}
      {open && (
        <div
          className="cmd-overlay fixed inset-0 z-[100] flex items-start justify-center pt-[12vh] px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="cmd-panel relative w-full max-w-xl rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Quick navigation"
          >
            {/* Input */}
            <div className="cmd-input-row flex items-center gap-3 px-5 py-4 border-b border-border">
              <Search className="h-5 w-5 text-accent shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type to jump to a section…"
                className="flex-1 bg-transparent outline-none text-base text-text-primary placeholder:text-text-tertiary"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="px-2.5 py-1 rounded-md border border-border bg-canvas text-text-secondary hover:text-text-primary hover:border-accent/50 transition-colors text-xs font-mono"
                >
                  clear
                </button>
              )}
              {/* Close — solid accent button, impossible to miss */}
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close search"
                title="Close (Esc)"
                className="cmd-close flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 shrink-0"
              >
                <X className="h-4 w-4" strokeWidth={3} />
              </button>
            </div>

            {/* Results */}
            <ul className="max-h-[55vh] overflow-y-auto py-2">
              {filtered.length === 0 ? (
                <li className="px-5 py-10 text-sm text-text-tertiary text-center">
                  No matches for &quot;<span className="text-text-primary">{query}</span>&quot;
                </li>
              ) : (
                filtered.map((s, i) => {
                  const Icon = s.icon;
                  const isOn = i === highlight;
                  return (
                    <li key={s.id}>
                      <button
                        type="button"
                        onMouseEnter={() => setHighlight(i)}
                        onClick={() => handleJump(s.id)}
                        className={[
                          "w-full flex items-center gap-3 px-5 py-3 text-left transition-colors",
                          isOn ? "bg-accent/10" : "hover:bg-elevated",
                        ].join(" ")}
                      >
                        <span
                          className={[
                            "flex items-center justify-center w-9 h-9 rounded-lg border transition-colors",
                            isOn
                              ? "border-accent/40 bg-accent/15 text-accent"
                              : "border-border bg-canvas text-text-secondary",
                          ].join(" ")}
                        >
                          <Icon className="h-4 w-4" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className={[
                            "text-sm font-semibold transition-colors",
                            isOn ? "text-accent" : "text-text-primary",
                          ].join(" ")}>
                            {s.label}
                          </p>
                          <p className="text-xs text-text-tertiary">{s.hint}</p>
                        </div>
                        {isOn && (
                          <CornerDownLeft className="h-3.5 w-3.5 text-accent shrink-0" />
                        )}
                      </button>
                    </li>
                  );
                })
              )}
            </ul>

            {/* Footer hints */}
            <div className="flex items-center justify-between gap-3 px-5 py-2.5 border-t border-border bg-canvas/60 text-[0.7rem] text-text-tertiary font-mono">
              <span className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded border border-border bg-canvas">↑</kbd>
                  <kbd className="px-1.5 py-0.5 rounded border border-border bg-canvas">↓</kbd>
                  navigate
                </span>
                <span className="inline-flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded border border-border bg-canvas">↵</kbd>
                  select
                </span>
              </span>
              <span className="inline-flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded border border-border bg-canvas">esc</kbd>
                close
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
