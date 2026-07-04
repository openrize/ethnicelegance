import { describe, expect, it } from "vitest";
import { calculateSubtotal } from "@/lib/order-utils";

describe("orders store", () => {
  it("calculates subtotal correctly", () => {
    const subtotal = calculateSubtotal([
      {
        productId: 1,
        name: "Test Product",
        image: "/next.svg",
        unitPrice: 100,
        quantity: 2,
      },
      {
        productId: 2,
        name: "Another Product",
        image: "/globe.svg",
        unitPrice: 50,
        quantity: 1,
      },
    ]);

    expect(subtotal).toBe(250);
  });
});
