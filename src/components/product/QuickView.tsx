"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Star, Scissors, Truck, Award, ShieldCheck } from "lucide-react";
import { Product } from "@/types/product";
import { useCart } from "@/store/useCart";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { getInventoryLabel, getInventoryStatus } from "@/lib/inventory";
import { SITE_CONFIG } from "@/lib/site-config";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

interface QuickViewProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const QuickView = ({ product, isOpen, onClose }: QuickViewProps) => {
  const addItem = useCart((state) => state.addItem);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const defaultSize = product.sizes.length === 1 ? product.sizes[0] : null;
  const inventoryStatus = getInventoryStatus(product.stockLeft);
  const isOutOfStock = inventoryStatus === "out-of-stock";

  useEffect(() => {
    if (isOpen) {
      setSelectedSize(defaultSize);
    }
  }, [defaultSize, isOpen]);

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes.length > 1) {
      toast.error("Please select a fit", {
        description: "A professional fit is required for reservation.",
      });
      return;
    }
    
    addItem(product, selectedSize || product.sizes[0]);
    toast.success("Added to Collection", {
      description: `${product.name} is now reserved.`,
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-[95vw] sm:max-w-3xl lg:max-w-5xl h-[90vh] p-0 overflow-hidden overflow-x-hidden border-none rounded-[2rem] bg-white shadow-2xl">
        <DialogTitle className="sr-only">{product.name} Quick View</DialogTitle>
        <div className="flex flex-col lg:flex-row h-full min-w-0">
          {/* Image Side */}
          <div className="relative h-[40vh] sm:h-[46vh] lg:h-full lg:w-[46%] flex-shrink-0 bg-gray-50">
            <Image
              src={`/${product.image}`}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover"
            />
            {product.badge && (
              <div className="absolute top-8 left-8">
                <span className="bg-primary/95 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-[0.3em] px-5 py-2.5 rounded-full shadow-2xl border border-white/10">
                  {product.badge}
                </span>
              </div>
            )}
          </div>

          {/* Details Side */}
          <div className="flex-1 min-w-0 p-6 sm:p-8 lg:p-10 flex flex-col justify-between overflow-y-auto overflow-x-hidden">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4 opacity-60">
                  <div className="flex text-secondary scale-75 origin-left">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className={cn("w-4 h-4 fill-current", s > Math.floor(product.rating) && "opacity-30")} />
                    ))}
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-widest">({product.reviews} Appraisals)</span>
                </div>
                <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary italic leading-tight mb-4">{product.name}</h2>
                <div className="rounded-xl border border-secondary/20 bg-secondary/5 px-4 py-3">
                  <p className="text-[10px] uppercase tracking-[0.14em] font-bold text-secondary">Contact for Price</p>
                  <p className="text-xs text-muted-foreground mt-1">Call {SITE_CONFIG.supportPhoneDisplay} or email {SITE_CONFIG.supportEmail}</p>
                  <p className="text-[11px] text-primary mt-1">{getInventoryLabel(product)}</p>
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                {product.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-xl border border-border bg-gray-50 px-4 py-3">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Fabric</p>
                  <p className="text-xs font-semibold text-primary">Premium Heritage Weave</p>
                </div>
                <div className="rounded-xl border border-border bg-gray-50 px-4 py-3">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Stock</p>
                  <p className="text-xs font-semibold text-primary">{product.stockLeft} pieces left</p>
                </div>
              </div>

              {/* Selection */}
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                    <Scissors className="w-3.5 h-3.5 text-secondary" />
                    Select Your Fit
                  </label>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      type="button"
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "min-w-[52px] h-11 px-3 flex items-center justify-center rounded-xl border-2 font-bold transition-all duration-200 uppercase tracking-[0.12em] text-[10px]",
                        selectedSize === size
                          ? "border-primary bg-primary text-white shadow-xl scale-105"
                          : "border-border hover:border-secondary text-primary bg-white"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 space-y-6">
              <div className="space-y-3">
                <Button
                  type="button"
                  onClick={handleAddToCart}
                  disabled={isOutOfStock}
                  className="w-full h-14 bg-primary text-white font-bold uppercase tracking-[0.14em] text-xs rounded-xl shadow-2xl hover:bg-secondary transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-3"
                >
                  <ShoppingBag className="w-4 h-4" />
                  {isOutOfStock ? "Sold Out" : "Reserve Piece"}
                </Button>
                <Link href={`/product/${product.id}`} className="block">
                  <Button 
                    variant="ghost" 
                    className="w-full h-10 text-[9px] font-bold uppercase tracking-[0.18em] text-muted-foreground hover:text-primary hover:bg-transparent"
                  >
                    View Heritage Details <ArrowRight className="w-3 h-3 ml-2" />
                  </Button>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-3 p-3 bg-gray-50 border border-border rounded-xl">
                  <Truck className="w-4 h-4 text-secondary" />
                  <span className="text-[9px] font-bold uppercase text-primary tracking-tight">Express Delivery</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 border border-border rounded-xl">
                  <Award className="w-4 h-4 text-secondary" />
                  <span className="text-[9px] font-bold uppercase text-primary tracking-tight">Artisan Certified</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 border border-border rounded-xl">
                  <ShieldCheck className="w-4 h-4 text-secondary" />
                  <span className="text-[9px] font-bold uppercase text-primary tracking-tight">Secure Checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickView;
