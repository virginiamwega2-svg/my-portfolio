"use server";

export type ContactState = {
  status:  "idle" | "success" | "error";
  message: string;
};

export async function sendContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name    = (formData.get("name")    as string)?.trim();
  const email   = (formData.get("email")   as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  // ── Validation ─────────────────────────────────────────────
  if (!name || !email || !message) {
    return { status: "error", message: "All fields are required." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }
  if (message.length < 10) {
    return { status: "error", message: "Message must be at least 10 characters." };
  }

  // ── Send via Resend ─────────────────────────────────────────
  //
  // Setup (one-time):
  //   1. npm install resend
  //   2. Sign up at resend.com — free tier covers 100 emails/day
  //   3. Add your domain or use the Resend test address
  //   4. Add to .env.local:   RESEND_API_KEY=re_xxxxxxxxxxxx
  //   5. Add to Vercel env:   RESEND_API_KEY=re_xxxxxxxxxxxx
  //   6. Uncomment the block below and delete the console.log

  /*
  const { Resend } = await import("resend");
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from:    "Portfolio Contact <noreply@virginiamwega.dev>",
    to:      "hello@virginiamwega.dev",
    replyTo: email,
    subject: `New message from ${name}`,
    text:    `Name:    ${name}\nEmail:   ${email}\n\n${message}`,
    html: `
      <p><strong>Name:</strong>  ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <hr />
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
  });

  if (error) {
    console.error("[contact]", error);
    return {
      status:  "error",
      message: "Something went wrong. Please email me directly at hello@virginiamwega.dev",
    };
  }
  */

  // ── Fallback (remove once Resend is wired up) ───────────────
  console.log("[contact form]", { name, email, message });

  return {
    status:  "success",
    message: "Message sent! I'll get back to you within 24 hours.",
  };
}
