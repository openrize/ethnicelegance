import { Product } from "@/types/product";

export type InventoryStatus = "in-stock" | "low-stock" | "out-of-stock";

export function getInventoryStatus(stockLeft: number): InventoryStatus {
  if (stockLeft <= 0) return "out-of-stock";
  if (stockLeft <= 3) return "low-stock";
  return "in-stock";
}

export function getInventoryLabel(product: Product): string {
  const status = getInventoryStatus(product.stockLeft);
  if (status === "out-of-stock") return "Sold Out";
  if (status === "low-stock") return `Only ${product.stockLeft} left`;
  return `${product.stockLeft} available`;
}
