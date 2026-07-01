import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Kiiom Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || "benjaminazuuri@gmail.com",
      replyTo: email,
      subject: `[Kiiom] ${subject} — from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; padding: 32px; border-radius: 12px;">
          <div style="background: #03045e; padding: 24px; border-radius: 8px; margin-bottom: 24px; text-align: center;">
            <h2 style="color: #ffffff; margin: 0; font-size: 20px;">New Message from Kiiom Website</h2>
          </div>
          <div style="background: #ffffff; padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151; width: 120px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #1f2937;">${name}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;"><a href="mailto:${email}" style="color: #03045e;">${email}</a></td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #374151;">Subject</td><td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #1f2937;">${subject}</td></tr>
            </table>
            <div style="margin-top: 20px;">
              <p style="font-weight: 600; color: #374151; margin-bottom: 8px;">Message:</p>
              <div style="background: #f9fafb; padding: 16px; border-radius: 8px; color: #4b5563; line-height: 1.7; white-space: pre-wrap;">${message}</div>
            </div>
          </div>
          <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 16px;">
            This message was sent via the Kiiom website contact form.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again or email us directly at info@kiiom.com." },
      { status: 500 }
    );
  }
}
