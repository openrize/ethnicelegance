"use client";

import React, { useState, useEffect } from "react";
import { Search, X, ArrowRight } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ALL_PRODUCTS } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const SearchOverlay = ({ children }: { children: React.ReactElement }) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const results = query.length > 2 
    ? ALL_PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.category.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 4)
    : [];

  useEffect(() => {
    if (!isOpen && query) {
      const timer = window.setTimeout(() => setQuery(""), 0);
      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, [isOpen, query]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger render={children} />
      <DialogContent className="max-w-4xl p-0 border-none bg-transparent shadow-none top-[15%]">
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-primary/10">
          <div className="p-8 border-b border-border bg-gray-50/50">
            <div className="relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground group-focus-within:text-secondary transition-colors" />
              <Input 
                autoFocus
                placeholder="Search our heritage collection..." 
                className="w-full h-16 pl-16 pr-16 bg-white border-2 border-border focus:border-secondary rounded-2xl text-xl font-serif italic text-primary placeholder:text-muted-foreground/40 shadow-sm focus:ring-0 transition-all"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {query && (
                <button 
                  onClick={() => setQuery("")}
                  className="absolute right-6 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              )}
            </div>
            <div className="mt-4 flex gap-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              <span>Trending:</span>
              {["Lehenga", "Saree", "Jewelry", "New Arrivals"].map(tag => (
                <button key={tag} onClick={() => setQuery(tag)} className="hover:text-secondary transition-colors underline decoration-secondary/30 underline-offset-4">
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="p-8 min-h-[400px]">
            <AnimatePresence mode="wait">
              {query.length > 0 ? (
                results.length > 0 ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    key="results"
                  >
                    <div className="flex justify-between items-end mb-8">
                       <h3 className="font-serif text-2xl font-bold text-primary italic">Handcrafted Matches</h3>
                       <Link href="/shop" onClick={() => setIsOpen(false)} className="text-xs font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors flex items-center gap-2">
                         Explore Full Collection <ArrowRight className="w-3 h-3" />
                       </Link>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {results.map(product => (
                        <div key={product.id} onClick={() => setIsOpen(false)}>
                           <ProductCard product={product} />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  query.length > 2 && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      key="no-results"
                      className="h-[300px] flex flex-col items-center justify-center text-center space-y-4"
                    >
                       <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center text-secondary">
                          <Search className="w-8 h-8" />
                       </div>
                       <div>
                          <p className="font-serif text-xl font-bold text-primary italic">The heritage continues...</p>
                          <p className="text-sm text-muted-foreground">We couldn't find a direct match for "{query}". Try a different term or browse our main collections.</p>
                       </div>
                    </motion.div>
                  )
                )
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  key="initial"
                  className="h-[300px] flex flex-col items-center justify-center text-center space-y-8"
                >
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-2xl px-8">
                      <div className="text-left space-y-4">
                         <h4 className="font-serif text-xl font-bold text-primary">Popular Categories</h4>
                         <div className="flex flex-col gap-2">
                            {[
                              { label: "Womenswear", href: "/shop?cat=womens" },
                              { label: "Menswear", href: "/shop?cat=mens" },
                              { label: "Accessories", href: "/shop?cat=accessories" },
                              { label: "New Arrivals", href: "/shop?cat=new" },
                            ].map((c) => (
                              <Link key={c.label} href={c.href} onClick={() => setIsOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-secondary hover:translate-x-1 transition-all">
                                {c.label}
                              </Link>
                            ))}
                         </div>
                      </div>
                      <div className="text-left space-y-6">
                         <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                            <h4 className="font-serif text-lg font-bold text-primary mb-2 italic">Artisan Discovery</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">Search for specific artisan techniques like 'Embroidery', 'Silk', or 'Handcrafted' pieces.</p>
                         </div>
                      </div>
                   </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchOverlay;
