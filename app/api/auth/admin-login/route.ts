import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  const adminUser = process.env.ADMIN_USERNAME || "admin";
  const adminHashedPass = process.env.ADMIN_PASSWORD_HASH || "";

  if (!adminHashedPass) {
    const isDefaultMatch = username === adminUser && password === (process.env.ADMIN_PASSWORD || "kiiom@admin2024");
    if (!isDefaultMatch) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }
  } else {
    const usernameMatch = username === adminUser;
    const passwordMatch = await bcrypt.compare(password, adminHashedPass);
    if (!usernameMatch || !passwordMatch) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set("admin_session", "authenticated", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 8,
    path: "/",
  });

  return response;
}
