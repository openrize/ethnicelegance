"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ShoppingBag, 
  X, 
  Plus, 
  Minus, 
  Phone,
  Mail
} from "lucide-react";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/store/useCart";
import { SITE_CONFIG, SUPPORT_LINKS } from "@/lib/site-config";
import TrackedContactLink from "@/components/shared/TrackedContactLink";

const CartDrawer = ({ children }: { children: React.ReactElement }) => {
  const { items, totalItems, updateQuantity, removeItem } = useCart();
  const itemCount = totalItems();

  return (
    <Sheet>
      <SheetTrigger render={children} />
      <SheetContent className="w-full sm:max-w-md p-0 overflow-hidden flex flex-col border-l border-primary/10 bg-white">
        <SheetHeader className="p-8 border-b border-border bg-white sticky top-0 z-10 shadow-sm">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-serif text-3xl font-bold flex items-center gap-2 italic text-primary">
              Your Curation <span className="text-sm font-sans not-italic font-bold text-muted-foreground ml-2">({itemCount})</span>
            </SheetTitle>
          </div>
        </SheetHeader>

        <div className="px-8 py-6 bg-accent/5 border-b border-border">
          <p className="text-[10px] font-bold uppercase tracking-widest text-primary/70">
            Pricing is shared by our concierge team
          </p>
          <p className="text-[10px] text-muted-foreground mt-2 italic">
            Contact us for exact pricing, availability, and customization support.
          </p>
        </div>

        <div className="flex-1 overflow-y-auto px-8 py-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-muted-foreground/30">
                <ShoppingBag className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-primary italic">Empty Curation</h3>
                <p className="text-sm text-muted-foreground px-8 leading-relaxed">
                  Your heritage journey awaits. Discover our master clusters and find your next heirloom.
                </p>
              </div>
              <SheetClose render={
                <Button className="rounded-xl px-10 bg-primary hover:bg-secondary font-bold uppercase tracking-widest text-[10px] h-12 shadow-2xl transition-all">
                  Browse Collections
                </Button>
              } />
            </div>
          ) : (
            <div className="space-y-10 py-6">
              {items.map((item) => (
                <div key={`${item.id}-${item.selectedSize}`} className="flex gap-6 group">
                  <div className="relative w-24 aspect-[3/4] rounded-[1.5rem] overflow-hidden bg-gray-50 flex-shrink-0 border border-primary/5 shadow-sm group-hover:shadow-xl transition-all duration-500">
                    <Image src={`/${item.image}`} alt={item.name} fill sizes="96px" className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-start gap-4">
                        <Link href={`/product/${item.id}`} className="block">
                          <h4 className="font-serif text-base font-bold text-primary group-hover:text-secondary transition-colors line-clamp-1 italic leading-tight">{item.name}</h4>
                        </Link>
                        <button 
                          onClick={() => removeItem(item.id, item.selectedSize)}
                          className="text-muted-foreground/40 hover:text-destructive transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 italic">
                        <span>{item.category}</span>
                        <span className="w-1 h-1 bg-muted-foreground/20 rounded-full" />
                        <span className="text-secondary px-2 py-0.5 bg-secondary/5 rounded-md">Size: {item.selectedSize || "N/A"}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-6">
                       <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-xl border border-border h-10 shadow-inner">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1, item.selectedSize)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-lg transition-all"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedSize)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-lg transition-all"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                       </div>
                       <div className="text-right">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-secondary block">Contact for price</span>
                       </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-8 bg-white border-t border-border space-y-6 shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.05)]">
            <div className="space-y-4">
              <TrackedContactLink href={SUPPORT_LINKS.phone} channel="phone" location="cart_drawer" className="block w-full">
                <Button className="w-full h-16 bg-primary hover:bg-secondary text-white font-bold uppercase tracking-[0.2em] text-[11px] rounded-2xl shadow-2xl transition-all active:scale-95 group">
                  <Phone className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform text-secondary-foreground" />
                  Call for Pricing
                </Button>
              </TrackedContactLink>
              <TrackedContactLink href={SUPPORT_LINKS.email} channel="email" location="cart_drawer" className="block w-full">
                <Button variant="outline" className="w-full h-12 border-primary/20 text-primary hover:bg-primary hover:text-white font-bold uppercase tracking-[0.14em] text-[10px] rounded-xl">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Concierge
                </Button>
              </TrackedContactLink>
              <p className="text-center text-[10px] text-muted-foreground">
                {SITE_CONFIG.supportPhoneDisplay} · {SITE_CONFIG.supportEmail}
              </p>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
