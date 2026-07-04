"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, Heart, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/types/product";
import { useCart } from "@/store/useCart";
import { useWishlist } from "@/store/useWishlist";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import QuickView from "@/components/product/QuickView";
import { getInventoryLabel, getInventoryStatus } from "@/lib/inventory";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

const ProductCard = ({ product, priority = false }: ProductCardProps) => {
  const router = useRouter();
  const addItem = useCart((state) => state.addItem);
  const toggleWishlist = useWishlist((state) => state.toggleWishlist);
  const isInWishlist = useWishlist((state) => state.isInWishlist(product.id));
  const [isHovered, setIsHovered] = useState(false);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const inventoryStatus = getInventoryStatus(product.stockLeft);
  const isOutOfStock = inventoryStatus === "out-of-stock";

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const selectedSize = product.sizes.length === 1 ? product.sizes[0] : undefined;
    
    if (!selectedSize) {
      setIsQuickViewOpen(true);
      return;
    }

    addItem(product, selectedSize);
    toast.success(`${product.name} added to cart`, {
      description: `Size ${selectedSize} reserved.`,
      action: {
        label: "View Cart",
        onClick: () => router.push("/cart"),
      },
    });
  };

  const mainImage = product.image;
  const hoverImage = product.gallery && product.gallery.length > 1 ? product.gallery[1] : product.image;

  const onWishlistToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
    toast.success(isInWishlist ? "Removed from wishlist" : "Added to wishlist", {
      description: product.name,
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col bg-white overflow-hidden transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-50 rounded-[1.5rem] shadow-sm group-hover:shadow-2xl transition-all duration-500 ease-out border border-primary/5">
      {/* Badges */}
        {product.badge && (
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-primary/95 backdrop-blur-md text-white text-[8px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full shadow-lg border border-white/10">
              {product.badge}
            </span>
          </div>
        )}
        
        {/* Wishlist Button */}
        <button
          type="button"
          onClick={onWishlistToggle}
          aria-label={isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
          className={cn(
            "absolute top-4 right-4 z-20 p-2.5 backdrop-blur-md rounded-full transition-all duration-300 shadow-xl scale-90 group-hover:scale-100",
            isInWishlist
              ? "bg-primary text-white opacity-100"
              : "bg-white/85 opacity-0 group-hover:opacity-100 text-primary hover:bg-secondary hover:text-white"
          )}
        >
          <Heart className={cn("w-4 h-4", isInWishlist && "fill-current")} />
        </button>

        {/* Image Swap Logic */}
        <div className="absolute inset-0 transition-opacity duration-700">
           <Image
            src={`/${mainImage}`}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
            className={cn(
              "object-cover transition-all duration-700 ease-out",
              isHovered && product.gallery && product.gallery.length > 1 ? "opacity-0 scale-110" : "opacity-100"
            )}
          />
          {product.gallery && product.gallery.length > 1 && (
            <Image
              src={`/${hoverImage}`}
              alt={`${product.name} alternate view`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={cn(
                "object-cover transition-all duration-700 ease-out",
                isHovered ? "opacity-100 scale-105" : "opacity-0 scale-100"
              )}
            />
          )}
        </div>

        {/* Quick Shop Overlay (Desktop) */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent hidden md:flex flex-col justify-end p-4 z-20"
            >
              <div className="w-full rounded-2xl bg-white/95 backdrop-blur-md p-3 shadow-2xl space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    type="button"
                    onClick={(e) => handleQuickAdd(e)}
                    disabled={isOutOfStock}
                    className="h-10 bg-primary hover:bg-secondary text-white font-bold uppercase tracking-[0.12em] text-[10px] rounded-xl"
                  >
                    {isOutOfStock ? "Sold Out" : "Quick Add"}
                  </Button>
                  <Button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsQuickViewOpen(true);
                    }}
                    variant="outline"
                    className="h-10 w-full border-primary/20 text-primary hover:bg-primary hover:text-white font-bold uppercase tracking-[0.12em] text-[10px] rounded-xl flex items-center justify-center"
                  >
                    <Eye className="w-4 h-4 mr-1.5" />
                    Quick View
                  </Button>
                </div>
                <Link href={`/product/${product.id}`} className="block w-full">
                  <Button 
                    variant="outline"
                    className="w-full h-10 border-primary/20 text-primary hover:bg-primary hover:text-white font-bold uppercase tracking-[0.12em] text-[10px] rounded-xl transition-all"
                  >
                    View Heritage Details
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Quick Action - Cleaner & Less Bulky */}
        <div className="absolute bottom-4 left-4 right-4 md:hidden">
           <Link href={`/product/${product.id}`}>
             <Button 
               className="w-full h-10 bg-white/95 backdrop-blur-md text-primary font-bold text-[9px] uppercase tracking-widest rounded-full shadow-2xl active:scale-95 border border-primary/5"
             >
               View Details
             </Button>
           </Link>
        </div>
      </div>

      {/* Info Section - Refined Spacing */}
      <div className="pt-6 pb-2 text-center group/info">
        <div className="flex items-center justify-center gap-1.5 mb-2.5 opacity-60">
           <div className="flex text-secondary group-hover/info:scale-110 transition-transform">
              {[1,2,3,4,5].map(s => <Star key={s} className={cn("w-2.5 h-2.5 fill-current", s > Math.floor(product.rating) && "opacity-30")} />)}
           </div>
           <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">({product.reviews})</span>
        </div>
        
        <div className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground/60 mb-2 font-sans font-bold italic text-center">
          {product.category}
        </div>
        
        <Link href={`/product/${product.id}`} className="block px-4 text-center">
          <h3 className="font-serif text-lg font-bold text-primary group-hover:text-secondary transition-colors mb-2 line-clamp-1 italic text-center">
            {product.name}
          </h3>
        </Link>
        
        <div className="mb-1 text-center px-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-secondary">
            Contact for Price
          </p>
          <p className="text-[10px] text-primary mt-1">{getInventoryLabel(product)}</p>
          <Link
            href="/contact"
            className="text-[10px] text-muted-foreground hover:text-primary transition-colors"
          >
            Email or call our concierge
          </Link>
        </div>
      </div>
      <QuickView product={product} isOpen={isQuickViewOpen} onClose={() => setIsQuickViewOpen(false)} />
    </motion.div>
  );
};

export default ProductCard;

