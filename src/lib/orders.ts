import { Order, OrderLineItem, OrderStatus } from "@/types/order";
import { prisma } from "@/lib/prisma";
import { calculateSubtotal } from "@/lib/order-utils";

function fromDbOrder(dbOrder: {
  id: string;
  createdAt: Date;
  status: string;
  customerEmail: string | null;
  currency: string;
  subtotal: number;
  stripeSessionId: string | null;
  itemsJson: string;
}): Order {
  return {
    id: dbOrder.id,
    createdAt: dbOrder.createdAt.toISOString(),
    status: dbOrder.status as OrderStatus,
    customerEmail: dbOrder.customerEmail ?? undefined,
    currency: dbOrder.currency as "usd",
    subtotal: dbOrder.subtotal,
    stripeSessionId: dbOrder.stripeSessionId ?? undefined,
    items: JSON.parse(dbOrder.itemsJson) as OrderLineItem[],
  };
}

export async function createOrder(input: {
  id: string;
  items: OrderLineItem[];
  customerEmail?: string;
  status?: OrderStatus;
  stripeSessionId?: string;
}): Promise<Order> {
  const created = await prisma.order.create({
    data: {
      id: input.id,
      status: input.status ?? "pending",
      customerEmail: input.customerEmail,
      currency: "usd",
      subtotal: calculateSubtotal(input.items),
      stripeSessionId: input.stripeSessionId,
      itemsJson: JSON.stringify(input.items),
    },
  });
  return fromDbOrder(created);
}

export async function updateOrderStatus(orderId: string, status: OrderStatus): Promise<Order | null> {
  const existing = await prisma.order.findUnique({ where: { id: orderId } });
  if (!existing) return null;
  const updated = await prisma.order.update({
    where: { id: orderId },
    data: { status },
  });
  return fromDbOrder(updated);
}

export async function updateOrderStripeSessionId(
  orderId: string,
  stripeSessionId: string
): Promise<Order | null> {
  const existing = await prisma.order.findUnique({ where: { id: orderId } });
  if (!existing) return null;
  const updated = await prisma.order.update({
    where: { id: orderId },
    data: { stripeSessionId },
  });
  return fromDbOrder(updated);
}

export async function updateOrderStatusByStripeSessionId(
  stripeSessionId: string,
  status: OrderStatus
): Promise<Order | null> {
  const existing = await prisma.order.findUnique({ where: { stripeSessionId } });
  if (!existing) return null;
  const updated = await prisma.order.update({
    where: { id: existing.id },
    data: { status },
  });
  return fromDbOrder(updated);
}

export async function getOrder(orderId: string): Promise<Order | null> {
  const order = await prisma.order.findUnique({ where: { id: orderId } });
  return order ? fromDbOrder(order) : null;
}

export async function listOrders(): Promise<Order[]> {
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: "desc" },
  });
  return orders.map(fromDbOrder);
}
