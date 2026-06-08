import { NextRequest } from "next/server";
import Stripe from "stripe";
import { calculateTotal } from "@/lib/pricing";

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  try {
    const { checkIn, checkOut, guests, name, email, message } =
      await req.json();

    if (!checkIn || !checkOut || !guests || !name || !email) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    if (checkOutDate <= checkInDate) {
      return Response.json(
        { error: "Check-out must be after check-in" },
        { status: 400 }
      );
    }

    const { nights, total } = calculateTotal(
      checkInDate,
      checkOutDate,
      parseInt(guests)
    );

    if (nights === 0 || total === 0) {
      return Response.json({ error: "Invalid dates or zero total" }, { status: 400 });
    }

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: `Vito's Village House — ${nights} night${nights > 1 ? "s" : ""}`,
              description: `Agios Matthaios, Corfu · Check-in: ${checkIn} · Check-out: ${checkOut} · ${guests} guest${parseInt(guests) > 1 ? "s" : ""}`,
            },
            unit_amount: total * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/#book`,
      metadata: {
        checkIn,
        checkOut,
        guests: guests.toString(),
        name,
        email,
        message: message || "",
      },
    });

    return Response.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return Response.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
