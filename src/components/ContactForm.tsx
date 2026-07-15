"use client";

import { FormEvent, useState } from "react";
import { getSupabase } from "@/lib/supabase";

type Status = "idle" | "loading" | "success" | "error";

function friendlyError(message: string): string {
  const lower = message.toLowerCase();

  if (lower.includes("failed to fetch") || lower.includes("network")) {
    return "Network error talking to Supabase. Check your internet and NEXT_PUBLIC_SUPABASE_URL.";
  }
  if (lower.includes("invalid api key") || lower.includes("jwt")) {
    return "Invalid Supabase anon key. Copy the anon/public key from Project Settings → API.";
  }
  if (lower.includes("row-level security") || lower.includes("rls")) {
    return "RLS blocked the insert. Run supabase/contact_messages.sql (insert policy for anon).";
  }
  if (lower.includes("could not find the table") || lower.includes("schema cache")) {
    return "Table missing. Create public.contact_messages with the SQL in supabase/contact_messages.sql.";
  }
  if (lower.includes("not configured") || lower.includes("missing")) {
    return message;
  }

  return message;
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
        "Supabase is not configured. Copy .env.example to .env.local and add NEXT_PUBLIC_SUPABASE_URL + NEXT_PUBLIC_SUPABASE_ANON_KEY, then restart npm run dev. (Same env pattern you will use on Pelagic.)",
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
      <p className="note">
        Submissions go to Supabase (<code>contact_messages</code>). Use this as
        practice before wiring Pelagic&apos;s contact form the same way.
      </p>

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
          Message sent. Check the row in Supabase → Table Editor →
          contact_messages.
        </p>
      ) : null}

      {status === "error" && error ? (
        <p className="form-error" role="alert">
          <strong>Supabase error (practice this before Pelagic):</strong>{" "}
          {error}
        </p>
      ) : null}
    </form>
  );
}
