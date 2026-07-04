"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Heart, Search, Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/store/useCart";
import { useWishlist } from "@/store/useWishlist";
import { cn } from "@/lib/utils";
import CartDrawer from "@/components/cart/CartDrawer";
import SearchOverlay from "@/components/layout/SearchOverlay";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const totalItems = useCart((state) => state.totalItems());
  const wishlistCount = useWishlist((state) => state.totalItems());

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Collections", href: "/collections" },
    { name: "Lookbook", href: "/lookbook" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-[10px] md:text-xs font-semibold tracking-[0.14em] md:tracking-[0.2em] uppercase overflow-hidden border-b border-primary-foreground/10 relative">
        <div className="flex justify-center items-center gap-12">
           <AnimatePresence mode="wait">
             <motion.p
               key="announcement"
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               className="italic"
             >
               ✨ Contact us for pricing, shipping, and bespoke support
             </motion.p>
           </AnimatePresence>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={cn(
          "transition-all duration-500 px-4 sm:px-6 lg:px-12 py-4 md:py-5 flex items-center justify-between border-b",
          (scrolled || pathname !== "/")
            ? "bg-white/90 backdrop-blur-xl border-border py-4 shadow-sm" 
            : "bg-transparent border-transparent"
        )}
      >
        {/* Mobile Menu Toggle */}
        <button 
          aria-label="Open Mobile Menu"
          className={cn(
            "lg:hidden p-2 rounded-full transition-colors order-1",
            (scrolled || pathname !== "/") ? "hover:bg-black/5 text-primary" : "hover:bg-white/10 text-white"
          )}
          onClick={() => setIsOpen(true)}
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Logo */}
        <Link href="/" className="group order-2 lg:order-none absolute left-1/2 -translate-x-1/2 lg:relative lg:left-0 lg:translate-x-0">
          <div className="flex flex-col items-center lg:items-start translate-x-0 lg:translate-x-0">
            <div className="flex items-center gap-1">
              <span className="text-secondary text-xl font-serif">✦</span>
              <span className={cn(
                "font-serif text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight transition-colors duration-500",
                (scrolled || pathname !== "/") ? "text-primary" : "text-white"
              )}>
                Ethnic<span className="text-secondary italic ml-0.5">Elegance</span>
              </span>
            </div>
            <span className={cn(
              "hidden sm:block text-[9px] uppercase tracking-[0.28em] lg:tracking-[0.4em] font-medium transition-colors duration-500 -mt-1 opacity-70 group-hover:opacity-100",
              (scrolled || pathname !== "/") ? "text-muted-foreground" : "text-white/60"
            )}>
              Royal Indian Heritage
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-[10px] uppercase font-bold tracking-[0.3em] transition-all hover:text-secondary relative group py-2",
                pathname === link.href 
                  ? ((scrolled || pathname !== "/") ? "text-primary" : "text-white") 
                  : ((scrolled || pathname !== "/") ? "text-muted-foreground/50" : "text-white/70")
              )}
            >
              <span className="italic">{link.name}</span>
              <span className={cn(
                "absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-secondary transition-all duration-500 group-hover:w-full",
                pathname === link.href && "w-full"
              )} />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1 lg:gap-3 order-3">
          <SearchOverlay>
            <button 
              aria-label="Search Collection"
              className={cn(
                "p-2 rounded-full transition-colors hidden sm:block",
                (scrolled || pathname !== "/") ? "text-muted-foreground hover:text-primary hover:bg-black/5" : "text-white/70 hover:text-white hover:bg-white/10"
              )}
            >
              <Search className="w-5 h-5" />
            </button>
          </SearchOverlay>
          
          <Link
            href="/wishlist"
            aria-label={`View Wishlist (${wishlistCount} items)`}
            className={cn(
              "p-2 rounded-full transition-colors hidden sm:block relative",
              (scrolled || pathname !== "/")
                ? "text-muted-foreground hover:text-primary hover:bg-black/5"
                : "text-white/70 hover:text-white hover:bg-white/10"
            )}
          >
            <Heart className="w-5 h-5" />
            {mounted && wishlistCount > 0 ? (
              <span className="absolute top-0.5 right-0.5 bg-secondary text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full ring-2 ring-white">
                {wishlistCount}
              </span>
            ) : null}
          </Link>

          <CartDrawer>
            <button 
              aria-label={`View Cart (${totalItems} items)`}
              className={cn(
                "p-2 rounded-full transition-colors relative group",
                (scrolled || pathname !== "/") ? "text-muted-foreground hover:bg-black/5" : "text-white/70 hover:bg-white/10"
              )}
            >
              <ShoppingBag className={cn(
                "w-5 h-5 transition-colors",
                (scrolled || pathname !== "/") ? "group-hover:text-primary" : "group-hover:text-white"
              )} />
              {mounted && totalItems > 0 && (
                <span className="absolute top-0.5 right-0.5 bg-secondary text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full animate-in zoom-in ring-2 ring-white">
                  {totalItems}
                </span>
              )}
            </button>
          </CartDrawer>
          
          <div className={cn("h-6 w-[1px] mx-2 hidden lg:block", (scrolled || pathname !== "/") ? "bg-border" : "bg-white/20")} />
          
          <a 
            href="tel:+12243779043" 
            aria-label="Call Support"
            className={cn(
              "hidden lg:flex items-center gap-3 px-5 py-2.5 rounded-full transition-all text-[10px] font-bold uppercase tracking-widest shadow-lg",
              (scrolled || pathname !== "/") ? "bg-primary text-white hover:bg-secondary shadow-primary/10" : "bg-white text-primary hover:bg-white/90 shadow-black/10"
            )}
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Concierge</span>
          </a>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 150 }}
              className="fixed top-0 left-0 h-full w-[85%] max-w-sm bg-white z-[70] shadow-2xl p-0 flex flex-col"
            >
              <div className="flex justify-between items-center p-8 border-b border-border">
                <div className="font-serif text-xl font-bold text-primary italic">
                  Heritage Menu
                </div>
                <button 
                  aria-label="Close Menu"
                  onClick={() => setIsOpen(false)} 
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-8">
                <div className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-2xl font-serif italic font-bold tracking-tight",
                        pathname === link.href ? "text-secondary pl-2 border-l-4 border-secondary transition-all" : "text-primary"
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                <div className="pt-8 border-t border-border mt-8">
                   <h5 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-6">Discovery</h5>
                   <div className="grid grid-cols-2 gap-4">
                      {["New", "Trending", "Bestsellers", "Limited"].map(tag => (
                        <Link key={tag} href="/shop" onClick={() => setIsOpen(false)} className="text-sm font-medium text-primary hover:text-secondary">
                          {tag} Items
                        </Link>
                      ))}
                   </div>
                </div>
              </div>

              <div className="p-8 border-t border-border bg-gray-50 space-y-6">
                <a href="tel:+12243779043" className="flex items-center gap-4 text-primary font-bold text-sm">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <span>Support: +1 2243779043</span>
                </a>
                <div className="flex gap-4">
                    <SearchOverlay>
                      <button className="flex-1 bg-white border border-border rounded-xl p-4 flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-widest">
                        <Search className="w-4 h-4" /> Search
                      </button>
                    </SearchOverlay>
                  <Link href="/wishlist" onClick={() => setIsOpen(false)} className="flex-1 bg-white border border-border rounded-xl p-4 flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-widest">
                    <Heart className="w-4 h-4" /> Wishlist
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

