"use client";

import { useState } from "react";

const EMAIL = "virginiamwega2@gmail.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (message.length < 10) {
      setError("Message must be at least 10 characters.");
      return;
    }
    setError("");

    // Open the visitor's email client with a fully drafted message.
    const subject = `Portfolio enquiry from ${name}`;
    const body = `${message}\n\n— ${name}\n${email}`;
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-start gap-4 p-8 rounded-2xl border border-success/25 bg-success-subtle h-full justify-center animate-[scaleIn_0.5s_var(--ease-spring)_both]">
        <div className="w-10 h-10 rounded-full bg-success/15 border border-success/30 flex items-center justify-center text-success text-lg">
          ✓
        </div>
        <div>
          <p className="text-text-primary font-semibold mb-1">Email drafted</p>
          <p className="text-text-secondary text-sm leading-relaxed">
            Your mail app should have opened with the message ready to send. If
            it didn&apos;t, reach me directly at{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="text-accent hover:text-accent-dim font-medium"
            >
              {EMAIL}
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>

      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-name" className="type-eyebrow">
          Name
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Jane Smith"
          className="input"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-email" className="type-eyebrow">
          Email
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="jane@company.com"
          className="input"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-message" className="type-eyebrow">
          Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project, role, or just say hello..."
          className="input textarea"
        />
      </div>

      {/* Error feedback */}
      {error && (
        <p className="text-sm text-error" role="alert">
          {error}
        </p>
      )}

      {/* Submit */}
      <button type="submit" className="btn btn-primary btn-md self-start">
        Send Message →
      </button>

    </form>
  );
}
