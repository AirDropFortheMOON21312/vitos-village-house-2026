import { NextRequest } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";

export const runtime = "nodejs";

function guestConfirmationHtml(
  name: string,
  email: string,
  checkIn: string,
  checkOut: string,
  guests: string,
  amount: number
): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
  body { font-family: Georgia, 'Times New Roman', serif; background: #f9f7f4; margin: 0; padding: 40px 16px; }
  .card { background: white; border-radius: 16px; max-width: 520px; margin: 0 auto; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
  .header { background: linear-gradient(135deg, #0d2137 0%, #1a4a6b 100%); padding: 40px 32px; color: white; text-align: center; }
  .header h1 { font-size: 24px; margin: 0 0 6px; font-style: italic; font-weight: 700; }
  .header p { font-size: 13px; opacity: 0.7; margin: 0; font-family: Arial, sans-serif; }
  .badge { display: inline-block; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); color: white; font-size: 11px; padding: 4px 12px; border-radius: 20px; margin-top: 12px; font-family: Arial, sans-serif; letter-spacing: 1px; text-transform: uppercase; }
  .body { padding: 32px; }
  .greeting { font-size: 16px; color: #1a1a2e; margin: 0 0 24px; line-height: 1.6; }
  .detail-row { display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid #f0ede8; font-size: 14px; }
  .detail-row:last-child { border-bottom: none; }
  .detail-label { color: #888; font-family: Arial, sans-serif; }
  .detail-value { font-weight: 600; color: #1a1a2e; font-family: Arial, sans-serif; }
  .total-box { background: #f6f7f0; border: 1px solid #d3d7b3; border-radius: 12px; padding: 16px 20px; margin: 20px 0; display: flex; justify-content: space-between; align-items: center; }
  .total-label { font-weight: 600; color: #353921; font-family: Arial, sans-serif; font-size: 14px; }
  .total-amount { font-size: 22px; font-weight: 700; color: #4f562c; }
  .note { font-size: 14px; color: #666; line-height: 1.7; margin: 16px 0; font-family: Arial, sans-serif; }
  .contact-link { color: #4f562c; text-decoration: none; font-weight: 600; }
  .footer { padding: 20px 32px; background: #f9f7f4; text-align: center; border-top: 1px solid #f0ede8; }
  .footer p { font-size: 12px; color: #aaa; margin: 4px 0; font-family: Arial, sans-serif; }
</style>
</head>
<body>
<div class="card">
  <div class="header">
    <h1>Vito's Village House</h1>
    <p>Agios Matthaios, Corfu, Greece</p>
    <div class="badge">✓ Booking Confirmed</div>
  </div>
  <div class="body">
    <p class="greeting">
      Dear <strong>${name}</strong>,<br><br>
      Your booking is <strong>confirmed</strong> and your payment has been received.
      We're so excited to welcome you to our little corner of Corfu!
    </p>
    <div class="detail-row">
      <span class="detail-label">Check-in</span>
      <span class="detail-value">${checkIn} — from 15:00</span>
    </div>
    <div class="detail-row">
      <span class="detail-label">Check-out</span>
      <span class="detail-value">${checkOut} — by 11:00</span>
    </div>
    <div class="detail-row">
      <span class="detail-label">Guests</span>
      <span class="detail-value">${guests}</span>
    </div>
    <div class="detail-row">
      <span class="detail-label">Your email</span>
      <span class="detail-value">${email}</span>
    </div>
    <div class="total-box">
      <span class="total-label">Total Paid</span>
      <span class="total-amount">€${amount}</span>
    </div>
    <p class="note">
      We'll be in touch very soon with detailed arrival instructions, parking info,
      and our favourite local restaurants. In the meantime, feel free to reach us at
      <a href="mailto:vitosvillagehouse@gmail.com" class="contact-link">vitosvillagehouse@gmail.com</a>
      — we're always happy to help with anything you need.
    </p>
    <p class="note">📍 Agios Matthaios, Corfu 49084, Greece<br>
    🏖️ Paramonas Beach — just 3.1 km away (5 min by car)</p>
  </div>
  <div class="footer">
    <p>© 2026 Vito's Village House · Agios Matthaios, Corfu</p>
    <p><a href="https://www.instagram.com/vitosvillagehouse" style="color:#4f562c;">@vitosvillagehouse</a></p>
  </div>
</div>
</body>
</html>`;
}

function hostNotificationHtml(
  name: string,
  email: string,
  checkIn: string,
  checkOut: string,
  guests: string,
  amount: number,
  message: string
): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<style>
  body { font-family: Arial, sans-serif; background: #f0ede8; margin: 0; padding: 32px 16px; }
  .card { background: white; border-radius: 12px; max-width: 480px; margin: 0 auto; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.08); }
  .header { background: #4f562c; padding: 24px 28px; color: white; }
  .header h1 { font-size: 16px; margin: 0 0 4px; }
  .header p { font-size: 12px; opacity: 0.7; margin: 0; }
  .body { padding: 28px; }
  .row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #f0ede8; font-size: 14px; }
  .row:last-child { border-bottom: none; }
  .label { color: #888; }
  .value { font-weight: 600; color: #1a1a2e; }
  .amount { font-size: 20px; font-weight: 700; color: #4f562c; }
  .note-box { background: #f6f7f0; border-radius: 8px; padding: 12px 16px; margin-top: 16px; font-size: 13px; color: #555; }
</style>
</head>
<body>
<div class="card">
  <div class="header">
    <h1>🏠 New Booking Received</h1>
    <p>Vito's Village House · Payment confirmed via Stripe</p>
  </div>
  <div class="body">
    <div class="row"><span class="label">Guest</span><span class="value">${name}</span></div>
    <div class="row"><span class="label">Email</span><span class="value"><a href="mailto:${email}" style="color:#4f562c;">${email}</a></span></div>
    <div class="row"><span class="label">Check-in</span><span class="value">${checkIn}</span></div>
    <div class="row"><span class="label">Check-out</span><span class="value">${checkOut}</span></div>
    <div class="row"><span class="label">Guests</span><span class="value">${guests}</span></div>
    <div class="row"><span class="label">Total Paid</span><span class="amount">€${amount}</span></div>
    ${
      message
        ? `<div class="note-box"><strong>Guest note:</strong> ${message}</div>`
        : ""
    }
  </div>
</div>
</body>
</html>`;
}

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const resend = new Resend(process.env.RESEND_API_KEY!);

  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return new Response("Missing stripe-signature header", { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch {
    return new Response("Webhook signature verification failed", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const { checkIn, checkOut, guests, name, email, message } =
      session.metadata ?? {};
    const amount = (session.amount_total ?? 0) / 100;

    try {
      await Promise.all([
        resend.emails.send({
          from: "Vito's Village House <noreply@vitosvillagehouse.com>",
          to: email,
          subject:
            "Your Booking is Confirmed — Vito's Village House, Corfu 🇬🇷",
          html: guestConfirmationHtml(
            name,
            email,
            checkIn,
            checkOut,
            guests,
            amount
          ),
        }),
        resend.emails.send({
          from: "Bookings <noreply@vitosvillagehouse.com>",
          to: "vitosvillagehouse@gmail.com",
          subject: `New Booking: ${name} · ${checkIn} → ${checkOut} · €${amount}`,
          html: hostNotificationHtml(
            name,
            email,
            checkIn,
            checkOut,
            guests,
            amount,
            message ?? ""
          ),
        }),
      ]);
    } catch (err) {
      console.error("Email send error:", err);
    }
  }

  return new Response("OK", { status: 200 });
}
