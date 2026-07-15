"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError(null);

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      subject: String(data.get("subject") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    try {
      // Practice Pelagic-style flow: browser → Next.js API → Supabase
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;

      if (!response.ok || !result?.ok) {
        setStatus("error");
        setError(
          result?.error ||
            "We couldn’t send your message right now. Please try again, or email info@belugaeducorp.com.",
        );
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setError(
        "We couldn’t reach our servers. Please check your connection and try again.",
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate={false}>
      <label>
        Your name
        <input type="text" name="name" required autoComplete="name" />
      </label>
      <label>
        Your email
        <input type="email" name="email" required autoComplete="email" />
      </label>
      <label>
        Subject
        <input type="text" name="subject" required />
      </label>
      <label>
        Message
        <textarea name="message" rows={5} required />
      </label>

      <button type="submit" className="button" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Send"}
      </button>

      {status === "success" ? (
        <p className="form-success" role="status">
          Thank you — your message has been sent. Our team will get back to you
          soon.
        </p>
      ) : null}

      {status === "error" && error ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}
    </form>
  );
}
