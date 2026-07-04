import { NextResponse } from "next/server";
import { ADMIN_AUTH_COOKIE } from "@/lib/admin-auth";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { key?: string };
    const configuredKey = process.env.ADMIN_DASHBOARD_KEY;
    if (!configuredKey) {
      return NextResponse.json({ error: "Admin dashboard is not configured." }, { status: 500 });
    }
    if (!body.key || body.key !== configuredKey) {
      return NextResponse.json({ error: "Invalid admin key." }, { status: 401 });
    }

    const response = NextResponse.json({ ok: true });
    response.cookies.set(ADMIN_AUTH_COOKIE, "1", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 12,
    });
    return response;
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to process admin login", details: String(error) },
      { status: 500 }
    );
  }
}
