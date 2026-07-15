import { NextResponse } from "next/server";
import {
  getServerSupabase,
  validateContactPayload,
} from "@/lib/supabase-server";

/**
 * Practice API route (same idea as Pelagic contact/API routes).
 * POST /api/contact
 * Body: { name, email, subject, message }
 *
 * Needs a Node host (localhost `next dev` / Vercel).
 * Does NOT run on DreamHost shared static file hosting.
 */
export async function POST(request: Request) {
  let json: unknown;

  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 },
    );
  }

  const parsed = validateContactPayload(json);
  if (!parsed.ok) {
    return NextResponse.json(
      { ok: false, error: parsed.error },
      { status: 400 },
    );
  }

  const supabase = getServerSupabase();
  if (!supabase) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Server is missing Supabase env vars. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.",
      },
      { status: 500 },
    );
  }

  const { error } = await supabase.from("contact_messages").insert(parsed.data);

  if (error) {
    console.error("[api/contact]", error.message);
    return NextResponse.json(
      {
        ok: false,
        error:
          "We could not save your message right now. Please try again later.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
