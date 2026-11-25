import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, service, message } = body;

    // ─── Server-side honeypot & validation ───────────────────────────────────
    if (body.website_url) {
      // Bot submission — silently accept
      return NextResponse.json({ ok: true });
    }

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Please provide a valid name." }, { status: 400 });
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json({ error: "Please tell us a bit more about your project." }, { status: 400 });
    }

    // ─── TODO: Wire up your email provider here ───────────────────────────────
    // Options:
    //   • Resend:  import { Resend } from 'resend'; const resend = new Resend(process.env.RESEND_API_KEY);
    //   • SendGrid: import sgMail from '@sendgrid/mail';
    //   • Nodemailer: use with SMTP (Gmail, Zoho, etc.)
    //
    // Example with Resend (recommended):
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'noreply@webfluency.agency',
    //   to: 'hello@webfluency.agency',  // <-- your inbox
    //   subject: `New inquiry from ${name} — ${service || 'General'}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Service:</strong> ${service || 'Not specified'}</p>
    //     <hr/>
    //     <p><strong>Message:</strong></p>
    //     <p>${message.replace(/\n/g, '<br>')}</p>
    //   `,
    // });

    // ─── Temporary: Log to console (remove before production) ────────────────
    console.log("Contact form submission:", { name, email, service, message });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
