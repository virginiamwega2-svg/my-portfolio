"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "../actions/contact";

const INITIAL: ContactState = { status: "idle", message: "" };

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendContact, INITIAL);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 p-8 rounded-2xl border border-success/25 bg-success-subtle h-full justify-center">
        <div className="w-10 h-10 rounded-full bg-success/15 border border-success/30 flex items-center justify-center text-success text-lg">
          ✓
        </div>
        <div>
          <p className="text-text-primary font-semibold mb-1">Message received</p>
          <p className="text-text-secondary text-sm leading-relaxed">
            {state.message}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-5" noValidate>

      {/* Name */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="cf-name"
          className="type-eyebrow"
        >
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
        <label
          htmlFor="cf-email"
          className="type-eyebrow"
        >
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
        <label
          htmlFor="cf-message"
          className="type-eyebrow"
        >
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
      {state.status === "error" && (
        <p className="text-sm text-error" role="alert">
          {state.message}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={pending}
        className="btn btn-primary btn-md self-start"
      >
        {pending ? "Sending…" : "Send Message →"}
      </button>

    </form>
  );
}
