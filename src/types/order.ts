export type OrderStatus = "pending" | "paid" | "failed";

export interface OrderLineItem {
  productId: number;
  name: string;
  image: string;
  selectedSize?: string;
  unitPrice: number;
  quantity: number;
}

export interface Order {
  id: string;
  createdAt: string;
  status: OrderStatus;
  customerEmail?: string;
  currency: "usd";
  subtotal: number;
  items: OrderLineItem[];
  stripeSessionId?: string;
}
