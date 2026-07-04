import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product, CartItem } from '@/types/product';

interface CartStore {
  items: CartItem[];
  addItem: (product: Product, selectedSize?: string) => void;
  removeItem: (productId: number, selectedSize?: string) => void;
  updateQuantity: (productId: number, quantity: number, selectedSize?: string) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, selectedSize) => {
        const items = get().items;
        const size = selectedSize || (product.sizes.length > 0 ? product.sizes[0] : undefined);
        
        const existingItem = items.find(
          (i) => i.id === product.id && i.selectedSize === size
        );
        
        if (existingItem) {
          if (existingItem.quantity >= product.stockLeft) {
            return;
          }
          set({
            items: items.map((i) =>
              (i.id === product.id && i.selectedSize === size)
                ? { ...i, quantity: i.quantity + 1 } 
                : i
            ),
          });
        } else {
          set({ items: [...items, { ...product, quantity: 1, selectedSize: size }] });
        }
      },
      removeItem: (productId, selectedSize) => {
        set({ 
          items: get().items.filter((i) => 
            !(i.id === productId && i.selectedSize === selectedSize)
          ) 
        });
      },
      updateQuantity: (productId, quantity, selectedSize) => {
        if (quantity <= 0) {
          get().removeItem(productId, selectedSize);
          return;
        }
        const matchedItem = get().items.find(
          (i) => i.id === productId && i.selectedSize === selectedSize
        );
        if (!matchedItem) return;
        const boundedQuantity = Math.min(quantity, matchedItem.stockLeft);
        set({
          items: get().items.map((i) =>
            (i.id === productId && i.selectedSize === selectedSize) 
              ? { ...i, quantity: boundedQuantity } 
              : i
          ),
        });
      },
      clearCart: () => set({ items: [] }),
      totalItems: () => get().items.reduce((acc, item) => acc + item.quantity, 0),
      totalPrice: () => get().items.reduce((acc, item) => acc + (item.price * item.quantity), 0),
    }),
    {
      name: 'ethnic-elegance-cart',
    }
  )
);
