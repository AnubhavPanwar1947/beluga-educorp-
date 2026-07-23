"use client";

import { FormEvent, useEffect, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [startedAt, setStartedAt] = useState(() => Date.now());

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("sent") === "1") {
      setStatus("success");
    }
    if (params.get("error") === "1") {
      setStatus("error");
      setError(
        "We couldn’t send your message. Please try again or email info@belugaeducorp.com.",
      );
    }
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError(null);

    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("form_started_at", String(startedAt));

    try {
      // DreamHost PHP handler (no paid third-party APIs)
      const response = await fetch("/send-mail.php", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
      });

      const result = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
        message?: string;
      } | null;

      if (!response.ok || !result?.ok) {
        setStatus("error");
        setError(
          result?.error ||
            result?.message ||
            "We couldn’t send your message right now. Please email info@belugaeducorp.com.",
        );
        return;
      }

      form.reset();
      setStartedAt(Date.now());
      setStatus("success");
    } catch {
      setStatus("error");
      setError(
        "Contact email works after the site is uploaded to DreamHost. Locally, open the design pages; on live, this form sends mail via DreamHost.",
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate={false}>
      {/* Honeypot — hidden from real users */}
      <div className="hp-field" aria-hidden="true">
        <label>
          Company website
          <input
            type="text"
            name="company_website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <label>
        Your name
        <input type="text" name="name" required autoComplete="name" maxLength={120} />
      </label>
      <label>
        Your email
        <input type="email" name="email" required autoComplete="email" maxLength={180} />
      </label>
      <label>
        Subject
        <input type="text" name="subject" required maxLength={180} />
      </label>
      <label>
        Message
        <textarea name="message" rows={5} required maxLength={4000} />
      </label>

      <button type="submit" className="button" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Send message"}
      </button>

      {status === "success" ? (
        <p className="form-success" role="status">
          Thank you — your message has been sent. You should also receive a
          confirmation email shortly.
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
