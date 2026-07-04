import { OrderLineItem } from "@/types/order";

export function calculateSubtotal(items: OrderLineItem[]): number {
  return items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
}
