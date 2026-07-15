"use client";

import { FormEvent, useState } from "react";
import { getSupabase } from "@/lib/supabase";

type Status = "idle" | "loading" | "success" | "error";

function friendlyError(message: string): string {
  const lower = message.toLowerCase();

  if (lower.includes("failed to fetch") || lower.includes("network")) {
    return "We couldn’t reach our servers. Please check your connection and try again.";
  }
  if (lower.includes("invalid api key") || lower.includes("jwt")) {
    return "Something went wrong on our side. Please try again in a moment.";
  }
  if (lower.includes("row-level security") || lower.includes("rls")) {
    return "Something went wrong on our side. Please try again in a moment.";
  }
  if (lower.includes("could not find the table") || lower.includes("schema cache")) {
    return "Something went wrong on our side. Please try again in a moment.";
  }
  if (lower.includes("not configured") || lower.includes("missing")) {
    return "The contact form is temporarily unavailable. Please email info@belugaeducorp.com.";
  }

  return "We couldn’t send your message right now. Please try again, or email info@belugaeducorp.com.";
}

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

    const supabase = getSupabase();
    if (!supabase) {
      setStatus("error");
      setError(
        "The contact form is temporarily unavailable. Please email info@belugaeducorp.com.",
      );
      return;
    }

    const { error: insertError } = await supabase
      .from("contact_messages")
      .insert(payload);

    if (insertError) {
      setStatus("error");
      setError(friendlyError(insertError.message));
      return;
    }

    form.reset();
    setStatus("success");
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
