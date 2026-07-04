import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WishlistStore {
  productIds: number[];
  toggleWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
  clearWishlist: () => void;
  totalItems: () => number;
}

export const useWishlist = create<WishlistStore>()(
  persist(
    (set, get) => ({
      productIds: [],
      toggleWishlist: (productId) => {
        const ids = get().productIds;
        const exists = ids.includes(productId);
        set({
          productIds: exists ? ids.filter((id) => id !== productId) : [...ids, productId],
        });
      },
      isInWishlist: (productId) => get().productIds.includes(productId),
      clearWishlist: () => set({ productIds: [] }),
      totalItems: () => get().productIds.length,
    }),
    {
      name: "ethnic-elegance-wishlist",
    }
  )
);
