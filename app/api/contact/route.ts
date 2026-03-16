import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.formData();
  if (data.get("website")) return NextResponse.json({ ok: true });
  return NextResponse.redirect(new URL("/contact", request.url));
}
