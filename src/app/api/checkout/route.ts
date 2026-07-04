import { NextResponse } from "next/server";
import Stripe from "stripe";
import { z } from "zod";
import { createOrder, updateOrderStripeSessionId } from "@/lib/orders";

const checkoutSchema = z.object({
  items: z
    .array(
      z.object({
        id: z.number().int().positive(),
        name: z.string().min(1),
        image: z.string().min(1),
        price: z.number().positive(),
        quantity: z.number().int().positive(),
        selectedSize: z.string().optional(),
      })
    )
    .min(1),
  customerEmail: z.string().email().optional(),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = checkoutSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid checkout payload", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Stripe is not configured. Add STRIPE_SECRET_KEY." },
        { status: 500 }
      );
    }

    const orderId = crypto.randomUUID();
    const order = await createOrder({
      id: orderId,
      customerEmail: parsed.data.customerEmail,
      items: parsed.data.items.map((item) => ({
        productId: item.id,
        name: item.name,
        image: item.image,
        selectedSize: item.selectedSize,
        unitPrice: item.price,
        quantity: item.quantity,
      })),
    });

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const host = request.headers.get("origin") ?? process.env.NEXT_PUBLIC_SITE_URL;
    if (!host) {
      return NextResponse.json(
        { error: "Unable to determine site URL. Set NEXT_PUBLIC_SITE_URL." },
        { status: 500 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: `${host}/checkout?status=success&orderId=${order.id}`,
      cancel_url: `${host}/checkout?status=cancel`,
      customer_email: parsed.data.customerEmail,
      metadata: { orderId: order.id },
      line_items: parsed.data.items.map((item) => ({
        quantity: item.quantity,
        price_data: {
          currency: "usd",
          unit_amount: Math.round(item.price * 100),
          product_data: {
            name: item.name,
            images: item.image.startsWith("http") ? [item.image] : undefined,
            metadata: item.selectedSize ? { selectedSize: item.selectedSize } : undefined,
          },
        },
      })),
    });

    await updateOrderStripeSessionId(order.id, session.id);

    return NextResponse.json({
      checkoutUrl: session.url,
      orderId: order.id,
      sessionId: session.id,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create checkout session", details: String(error) },
      { status: 500 }
    );
  }
}
