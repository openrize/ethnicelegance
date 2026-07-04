import React from "react";
import Link from "next/link";
import { Instagram, Facebook, MessageCircle, ShieldCheck, Truck, RotateCcw } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Features Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-20 border-b border-white/5 mb-20 text-center">
          <div className="flex flex-col items-center gap-6 group">
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-secondary/20 transition-all duration-700 shadow-2xl relative">
              <div className="absolute inset-0 rounded-full border border-white/10 group-hover:scale-110 transition-transform" />
              <Truck className="w-8 h-8 text-secondary" />
            </div>
            <div>
              <h4 className="font-serif text-xl font-bold mb-2 italic">Global Shipping</h4>
              <p className="text-[10px] text-primary-foreground/40 uppercase tracking-widest leading-relaxed max-w-[240px] font-bold">Contact concierge for pricing and delivery details</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 group">
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-secondary/20 transition-all duration-700 shadow-2xl relative">
              <div className="absolute inset-0 rounded-full border border-white/10 group-hover:scale-110 transition-transform" />
              <RotateCcw className="w-8 h-8 text-secondary" />
            </div>
            <div>
              <h4 className="font-serif text-xl font-bold mb-2 italic">Artisan Returns</h4>
              <p className="text-[10px] text-primary-foreground/40 uppercase tracking-widest leading-relaxed max-w-[240px] font-bold">14-Day hassle-free exchanges & resizing</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 group">
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-secondary/20 transition-all duration-700 shadow-2xl relative">
              <div className="absolute inset-0 rounded-full border border-white/10 group-hover:scale-110 transition-transform" />
              <ShieldCheck className="w-8 h-8 text-secondary" />
            </div>
            <div>
              <h4 className="font-serif text-xl font-bold mb-2 italic">Verified Trust</h4>
              <p className="text-[10px] text-primary-foreground/40 uppercase tracking-widest leading-relaxed max-w-[240px] font-bold">100% Encrypted Transactions with verified partners</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-1">
                <span className="text-secondary text-2xl">✦</span>
                <span className="font-serif text-2xl font-bold tracking-tight">
                  Ethnic<span className="text-secondary italic">Elegance</span>
                </span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/60 leading-relaxed max-w-xs">
              Celebrating India's rich cultural heritage through beautifully crafted traditional wear and accessories for every festive occasion. Crafted with heart, worn with heritage.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-white uppercase tracking-widest text-sm">Shop Collections</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/60">
              <li><Link href="/shop" className="hover:text-secondary transition-colors">New Arrivals</Link></li>
              <li><Link href="/shop?cat=womens" className="hover:text-secondary transition-colors">Women's Apparel</Link></li>
              <li><Link href="/shop?cat=mens" className="hover:text-secondary transition-colors">Men's Apparel</Link></li>
              <li><Link href="/shop?cat=accessories" className="hover:text-secondary transition-colors">Handcrafted Accessories</Link></li>
              <li><Link href="/shop?cat=sale" className="hover:text-secondary transition-colors">Festive Sale</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-white uppercase tracking-widest text-sm">Customer Care</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/60">
              <li><Link href="/about" className="hover:text-secondary transition-colors">Our Craftsmanship</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact Support</Link></li>
              <li><Link href="/policies/shipping" className="hover:text-secondary transition-colors">Shipping Policy</Link></li>
              <li><Link href="/policies/returns" className="hover:text-secondary transition-colors">Returns & Exchanges</Link></li>
              <li><Link href="/faq" className="hover:text-secondary transition-colors">Frequently Asked Questions</Link></li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-white uppercase tracking-widest text-sm">Inner Circle</h4>
            <p className="text-sm text-primary-foreground/60 mb-6">Join our newsletter for exclusive previews and heritage stories.</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-secondary transition-colors"
              />
              <button 
                type="submit" 
                className="w-full bg-secondary text-white font-bold py-3 rounded-md hover:bg-secondary/90 transition-colors uppercase tracking-widest text-[10px]"
              >
                Join the Circle
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-primary-foreground/40">
            © {currentYear} Ethnic Elegance. All rights reserved. Registered Office: Artisan Hub, Jaipur, RJ.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-primary-foreground/40">
            <Link href="/policies/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/policies/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/policies/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
