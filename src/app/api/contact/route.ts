import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7).max(20).optional().or(z.literal("")),
  subject: z.string().min(2),
  message: z.string().min(10),
  preferredContact: z.enum(["email", "phone", "whatsapp"]).optional(),
  sourcePage: z.string().max(255).optional(),
  productId: z.number().int().positive().optional(),
});

export async function POST(request: Request) {
  try {
    const parsed = contactSchema.safeParse(await request.json());
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid contact form payload", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const payload = parsed.data;

    await prisma.contactLead.create({
      data: {
        name: payload.name,
        email: payload.email,
        phone: payload.phone || null,
        subject: payload.subject,
        message: payload.message,
        preferredContact: payload.preferredContact ?? null,
        sourcePage: payload.sourcePage ?? null,
        productId: payload.productId ?? null,
      },
    });

    return NextResponse.json({ ok: true, message: "Inquiry submitted successfully." });
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to submit contact form", details: String(error) },
      { status: 500 }
    );
  }
}
