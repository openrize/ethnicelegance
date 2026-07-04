import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const engagementSchema = z.object({
  eventType: z.literal("contact_click"),
  channel: z.enum(["phone", "email", "whatsapp"]),
  location: z.string().max(120).optional(),
  productId: z.number().int().positive().optional(),
});

export async function POST(request: Request) {
  try {
    const parsed = engagementSchema.safeParse(await request.json());
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    await prisma.engagementEvent.create({
      data: {
        eventType: parsed.data.eventType,
        channel: parsed.data.channel,
        location: parsed.data.location ?? null,
        productId: parsed.data.productId ?? null,
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to capture engagement event", details: String(error) },
      { status: 500 }
    );
  }
}
