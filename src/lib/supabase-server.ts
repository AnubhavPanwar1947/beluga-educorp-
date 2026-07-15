import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/** Server-only Supabase client (for API routes). Same pattern Pelagic will use. */
export function getServerSupabase(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return null;
  }

  return createClient(url, anonKey);
}

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function validateContactPayload(body: unknown): {
  ok: true;
  data: ContactPayload;
} | {
  ok: false;
  error: string;
} {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body." };
  }

  const record = body as Record<string, unknown>;
  const name = String(record.name ?? "").trim();
  const email = String(record.email ?? "").trim();
  const subject = String(record.subject ?? "").trim();
  const message = String(record.message ?? "").trim();

  if (!name || !email || !subject || !message) {
    return { ok: false, error: "Please fill in all fields." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  if (name.length > 200 || email.length > 320 || subject.length > 300 || message.length > 5000) {
    return { ok: false, error: "One or more fields are too long." };
  }

  return { ok: true, data: { name, email, subject, message } };
}
