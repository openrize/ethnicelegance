"use client";

import React, { useState, useMemo, Suspense, useEffect, useRef } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/product/ProductCard";
import { ALL_PRODUCTS } from "@/data/products";
import { Category } from "@/types/product";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ShopSkeleton } from "@/components/product/ProductSkeleton";
import { SUPPORT_LINKS } from "@/lib/site-config";
import TrackedContactLink from "@/components/shared/TrackedContactLink";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const ShopPageContent = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const initialCat = (searchParams.get("cat") as Category) || "all";
  const initialSort = searchParams.get("sort") || "featured";
  
  const [activeCategory, setActiveCategory] = useState<Category | "all">(initialCat);
  const [sortOrder, setSortOrder] = useState(initialSort);
  const [isReady, setIsReady] = useState(false);
  
  // Track whether user triggered the state change (vs URL update)
  const isUserInteraction = useRef(false);

  // Only push URL when user changes filters (not on mount or URL-driven renders)
  useEffect(() => {
    if (!isUserInteraction.current) return;
    isUserInteraction.current = false;
    
    const params = new URLSearchParams();
    if (activeCategory !== "all") params.set("cat", activeCategory);
    if (sortOrder !== "featured") params.set("sort", sortOrder);
    const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname;
    router.push(newUrl, { scroll: false });
  }, [activeCategory, sortOrder, pathname, router]);

  const setCategory = (val: Category | "all") => {
    isUserInteraction.current = true;
    setActiveCategory(val);
  };
  const setSort = (val: string) => {
    isUserInteraction.current = true;
    setSortOrder(val);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const categories: { label: string; value: Category | "all" }[] = [
    { label: "All Heritage", value: "all" },
    { label: "Royal Womenswear", value: "womens" },
    { label: "Noble Menswear", value: "mens" },
    { label: "Artisan Accessories", value: "accessories" },
    { label: "New Arrivals", value: "new" },
    { label: "Bestsellers", value: "bestseller" },
  ];

  const filteredProducts = useMemo(() => {
    let result = [...ALL_PRODUCTS];

    if (activeCategory !== "all") {
      if (activeCategory === "new") {
        result = result.filter(p => p.badge === "New");
      } else if (activeCategory === "bestseller") {
        result = result.filter(p => p.badge === "Bestseller");
      } else {
        result = result.filter(p => p.category === activeCategory);
      }
    }

    if (sortOrder === "rating") result.sort((a, b) => b.rating - a.rating);
    if (sortOrder === "newest") result.sort((a, b) => b.id - a.id);

    return result;
  }, [activeCategory, sortOrder]);

  const FilterSidebar = () => (
    <div className="space-y-12">
      <div>
        <h4 className="font-serif text-[10px] font-bold mb-8 text-muted-foreground uppercase tracking-[0.4em] border-b border-border pb-4 flex items-center justify-between">
           Categories <ChevronDown className="w-3 h-3 opacity-30" />
        </h4>
        <div className="space-y-4">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setCategory(cat.value)}
              className={cn(
                "flex items-center justify-between w-full text-xs font-bold uppercase tracking-widest transition-all group",
                activeCategory === cat.value ? "text-secondary translate-x-1" : "text-muted-foreground hover:text-primary"
              )}
            >
              <span className="italic">{cat.label}</span>
              {activeCategory === cat.value && <div className="w-1.5 h-1.5 rounded-full bg-secondary shadow-lg shadow-secondary/50" />}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-primary/5 rounded-[2rem] p-8 border border-primary/10 relative overflow-hidden group shadow-sm transition-all hover:bg-primary/10">
         <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
         <h5 className="font-serif font-bold text-primary mb-3 italic text-xl">Artisan Concierge</h5>
         <p className="text-[10px] text-muted-foreground leading-relaxed mb-6 font-medium">Connect with our master tailors for a personalized fit appraisal via WhatsApp.</p>
         <TrackedContactLink href={SUPPORT_LINKS.phone} channel="phone" location="shop_sidebar_concierge" className="block">
           <Button className="w-full bg-primary hover:bg-secondary text-white text-[9px] uppercase tracking-[0.3em] font-bold h-12 rounded-xl shadow-2xl transition-all active:scale-95">Book Consultation</Button>
         </TrackedContactLink>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-white pt-32 md:pt-40 pb-20 md:pb-24">
      <div className="container px-6 lg:px-12">
        {/* Header Section - More Premium */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 md:gap-10 mb-14 md:mb-20 pb-10 md:pb-12 border-b border-border">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-8xl font-bold text-primary mb-5 md:mb-6 leading-tight italic">Heritage <span className="text-secondary">Curation</span></h1>
            <p className="text-muted-foreground/60 text-[10px] font-bold uppercase tracking-[0.24em] md:tracking-[0.4em] flex items-center gap-3 md:gap-4">
              <span className="w-12 h-px bg-border" />
              Revealing <span className="text-primary font-bold">{filteredProducts.length}</span> Masterpieces
            </p>
          </div>

          <div className="flex items-center gap-5 w-full md:w-auto">
             <Sheet>
               <SheetTrigger render={
                 <Button variant="outline" className="lg:hidden flex-1 h-14 rounded-2xl flex items-center gap-4 font-bold uppercase tracking-[0.2em] text-[10px] border-primary/10 text-primary bg-gray-50/50 hover:bg-white transition-all shadow-sm">
                    <SlidersHorizontal className="w-4 h-4 text-secondary" /> Curation Filters
                 </Button>
               } />
               <SheetContent side="right" className="w-[85%] sm:max-w-md p-10 border-l border-primary/10 bg-white">
                  <SheetHeader className="mb-16">
                     <SheetTitle className="font-serif text-4xl font-bold italic text-primary">Refine Curation</SheetTitle>
                  </SheetHeader>
                  <FilterSidebar />
                  <div className="absolute bottom-10 left-10 right-10">
                     <SheetClose render={
                        <Button className="w-full h-16 bg-primary text-white font-bold uppercase tracking-[0.3em] text-[10px] rounded-2xl shadow-2xl hover:bg-secondary transition-colors">Show Masterpieces</Button>
                     } />
                  </div>
               </SheetContent>
             </Sheet>
             
             <div className="relative group flex-1 md:flex-none">
                <select 
                  value={sortOrder}
                  onChange={(e) => setSort(e.target.value)}
                  className="w-full md:w-72 appearance-none bg-gray-50/50 border border-primary/10 rounded-2xl px-8 py-4 pr-14 text-[10px] font-bold uppercase tracking-[0.2em] focus:outline-none focus:border-secondary transition-all cursor-pointer shadow-sm hover:bg-white"
                >
                  <option value="featured">Featured First</option>
                  <option value="newest">Newest Arrivals</option>
                  <option value="rating">Customer Appraisals</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-secondary">
                  <ChevronDown className="w-4 h-4 opacity-50" />
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-24">
          {/* Sidebar (Desktop) */}
          <aside className="hidden lg:block">
            <div className="sticky top-40">
              <FilterSidebar />
            </div>
          </aside>

          {/* Grid Area */}
          <div className="lg:col-span-3">
            {!isReady ? (
               <ShopSkeleton />
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-14 md:gap-y-24">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="relative group/card">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-48 border border-dashed border-primary/10 rounded-[4rem] bg-gray-50/30">
                <div className="text-6xl mb-8 opacity-10 font-serif italic text-primary">✦</div>
                <h3 className="font-serif text-4xl font-bold text-primary mb-6 italic leading-snug">The Curation eludes us...</h3>
                <p className="text-muted-foreground mb-12 max-w-sm mx-auto leading-relaxed text-sm font-medium">No masterpieces match your current refinement. Perhaps a different category will reveal your heritage piece?</p>
                <Button 
                  onClick={() => { setCategory("all"); setSort("featured"); }} 
                  className="rounded-2xl px-14 h-16 bg-primary text-white font-bold uppercase tracking-[0.3em] text-[10px] shadow-2xl hover:bg-secondary transition-all"
                >
                  Reset All Filters
                </Button>
              </div>
            )}

            {/* Pagination Improvements */}
            {isReady && filteredProducts.length > 0 && (
              <div className="mt-40 pt-20 border-t border-border flex flex-col items-center gap-10">
                <p className="text-[9px] font-bold uppercase tracking-[0.5em] text-muted-foreground/40 italic">End of Current Selection</p>
                <div className="flex items-center gap-6">
                  <Button variant="outline" className="w-14 h-14 rounded-2xl font-bold bg-primary text-white border-primary shadow-2xl shadow-primary/20 hover:bg-secondary hover:border-secondary transition-all">1</Button>
                  {[2, 3].map(i => (
                    <Button key={i} variant="outline" className="w-14 h-14 rounded-2xl font-bold hover:bg-primary/5 hover:text-primary transition-all border-border text-muted-foreground">{i}</Button>
                  ))}
                  <div className="px-4 text-muted-foreground font-serif italic text-2xl opacity-20">...</div>
                  <Button variant="outline" className="w-14 h-14 rounded-2xl font-bold hover:bg-primary/5 hover:text-primary transition-all border-border text-xs text-muted-foreground">12</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="h-screen flex items-center justify-center font-serif text-4xl italic text-primary animate-pulse">Ethnic Elegance...</div>}>
        <ShopPageContent />
      </Suspense>
      <Footer />
    </>
  );
}

