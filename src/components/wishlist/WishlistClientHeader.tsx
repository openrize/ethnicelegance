"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import ProductCard from "@/components/product/ProductCard";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/store/useWishlist";

interface WishlistClientHeaderProps {
  allById: [number, Product][];
}

export default function WishlistClientHeader({ allById }: WishlistClientHeaderProps) {
  const productIds = useWishlist((state) => state.productIds);
  const clearWishlist = useWishlist((state) => state.clearWishlist);
  const map = new Map(allById);
  const products = productIds.map((id) => map.get(id)).filter((p): p is Product => Boolean(p));

  return (
    <>
      <div className="text-center mb-14">
        <span className="text-secondary text-sm font-bold uppercase tracking-[0.3em] block mb-3">
          Saved Pieces
        </span>
        <h1 className="font-serif text-4xl lg:text-6xl font-bold text-primary italic">Your Wishlist</h1>
        <p className="text-muted-foreground mt-4">
          {products.length} {products.length === 1 ? "item" : "items"} curated for later.
        </p>
      </div>

      {products.length === 0 ? (
        <div className="max-w-xl mx-auto border border-dashed border-border rounded-3xl p-12 text-center bg-gray-50">
          <Heart className="w-10 h-10 mx-auto text-secondary mb-4" />
          <h2 className="font-serif text-2xl font-bold text-primary italic mb-2">Your wishlist is empty</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Save products while browsing to review and purchase them later.
          </p>
          <Link href="/shop">
            <Button className="rounded-full px-8">Browse Collection</Button>
          </Link>
        </div>
      ) : (
        <>
          <div className="flex justify-center mb-8">
            <Button variant="outline" onClick={clearWishlist} className="rounded-full">
              Clear Wishlist
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
