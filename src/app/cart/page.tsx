"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Trash2, 
  Minus, 
  Plus, 
  ShoppingBag, 
  ArrowRight, 
  ShieldCheck,
  Phone,
  Mail
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/store/useCart";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SITE_CONFIG, SUPPORT_LINKS } from "@/lib/site-config";
import TrackedContactLink from "@/components/shared/TrackedContactLink";

const CartPage = () => {
  const items = useCart((state) => state.items);
  const updateQuantity = useCart((state) => state.updateQuantity);
  const removeItem = useCart((state) => state.removeItem);
  const totalItems = useCart((state) => state.totalItems());

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-48 pb-32 flex flex-col items-center justify-center container px-6 text-center">
          <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center text-secondary mb-8">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h1 className="font-serif text-4xl font-bold text-primary mb-4 italic">Your Collection is Waiting</h1>
          <p className="text-muted-foreground mb-12 max-w-md">Your heritage cart is currently empty. Explore our latest arrivals to find your next statement piece.</p>
          <Link href="/shop">
            <Button size="lg" className="rounded-full px-12 h-14 font-bold uppercase tracking-widest bg-primary hover:bg-secondary transition-colors transition-transform scale-100 hover:scale-105 active:scale-95 shadow-xl shadow-primary/20">
              Start Shopping
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50/50">
      <Navbar />
      
      <div className="pt-32 pb-24 px-6 lg:px-12 container">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="flex-1">
             <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-border">
                <div className="flex justify-between items-end mb-10 pb-6 border-b border-border">
                   <h1 className="font-serif text-3xl lg:text-5xl font-bold text-primary italic">Heritage Cart</h1>
                   <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">({totalItems} Masterpieces)</span>
                </div>

                <div className="space-y-8">
                  {items.map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row gap-6 lg:gap-8 pb-8 border-b border-border last:border-0 last:pb-0">
                       <div className="relative w-full sm:w-32 lg:w-40 aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0 shadow-md">
                          <Image src={`/${item.image}`} alt={item.name} fill sizes="(max-width: 640px) 100vw, 160px" className="object-cover" />
                       </div>
                       
                       <div className="flex-1 flex flex-col justify-between">
                          <div className="flex justify-between items-start gap-4">
                             <div>
                                <Link href={`/product/${item.id}`} className="font-serif text-xl lg:text-2xl font-bold text-primary hover:text-secondary transition-colors mb-2 block leading-snug">
                                   {item.name}
                                </Link>
                                <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-4">Category: {item.category}</span>
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-[10px] font-bold text-secondary uppercase tracking-[0.2em]">
                                   Genuine Heritage Piece
                                </div>
                             </div>
                             <div className="text-right">
                                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest block">Contact for price</span>
                                <button 
                                  onClick={() => removeItem(item.id)}
                                  className="text-muted-foreground/40 hover:text-destructive transition-colors mt-2 p-2"
                                >
                                   <Trash2 className="w-4 h-4" />
                                </button>
                             </div>
                          </div>

                          <div className="flex justify-between items-center mt-6">
                             <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-full border border-border">
                                <button 
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-full transition-colors"
                                >
                                   <Minus className="w-3 h-3" />
                                </button>
                                <span className="w-10 text-center font-bold text-sm tracking-widest">{item.quantity}</span>
                                <button 
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-full transition-colors"
                                >
                                   <Plus className="w-3 h-3" />
                                </button>
                             </div>
                             <div className="text-right">
                                <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest block mb-1">Pricing</span>
                                <span className="font-bold text-primary text-sm">Shared by concierge</span>
                             </div>
                          </div>
                       </div>
                    </div>
                  ))}
                </div>
             </div>
          </div>

          {/* Sidebar / Summary */}
          <div className="w-full lg:w-[400px] flex-shrink-0">
             <div className="bg-primary text-white rounded-3xl p-8 lg:p-10 shadow-2xl sticky top-32">
                <h4 className="font-serif text-2xl font-bold mb-8 italic">Reservation Support</h4>
                
                <div className="space-y-4 mb-8">
                   <div className="flex justify-between items-center text-sm font-medium text-white/70 tracking-wide uppercase">
                      <span>Selected Pieces</span>
                      <span>{totalItems}</span>
                   </div>
                   <div className="flex justify-between items-center text-sm font-medium text-white/70 tracking-wide uppercase">
                      <span>Pricing</span>
                      <span>On Request</span>
                   </div>
                   <div className="flex justify-between items-center text-sm font-medium text-white/70 tracking-wide uppercase">
                      <span>Shipping</span>
                      <span>On Request</span>
                   </div>
                   <Separator className="bg-white/10" />
                   <div className="flex justify-between items-center text-2xl font-bold">
                      <span className="font-serif italic">Next Step</span>
                      <span className="text-secondary">Contact Us</span>
                   </div>
                </div>

                <TrackedContactLink href={SUPPORT_LINKS.phone} channel="phone" location="cart_page_summary" className="block w-full group">
                   <Button size="lg" className="w-full h-16 bg-secondary hover:bg-secondary/90 text-white font-bold text-base uppercase tracking-[0.2em] rounded-xl shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3">
                      <Phone className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                      Call Concierge
                   </Button>
                </TrackedContactLink>
                <TrackedContactLink href={SUPPORT_LINKS.email} channel="email" location="cart_page_summary" className="block w-full mt-4">
                  <Button variant="outline" size="lg" className="w-full h-12 border-white/30 text-white bg-transparent hover:bg-white hover:text-primary font-bold text-xs uppercase tracking-[0.14em] rounded-xl">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Pricing Request
                  </Button>
                </TrackedContactLink>
                <p className="mt-3 text-center text-[10px] text-white/70">
                  {SITE_CONFIG.supportPhoneDisplay} · {SITE_CONFIG.supportEmail}
                </p>

                <div className="mt-12 space-y-6">
                   <div className="flex items-center gap-4 text-white/60">
                      <ShieldCheck className="w-5 h-5 text-secondary" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Guaranteed Artisan Quality</span>
                   </div>
                   <div className="flex items-center gap-4 text-white/60">
                      <Phone className="w-5 h-5 text-secondary" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Direct Concierge Assistance</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default CartPage;
