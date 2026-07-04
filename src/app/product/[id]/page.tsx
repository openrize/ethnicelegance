"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { 
  ShoppingBag, 
  Heart, 
  ChevronRight, 
  Truck, 
  RotateCcw,
  Star,
  MessageCircle,
  Scissors,
  Droplets,
  Award,
  Clock,
  CheckCircle2,
  Plus,
  Minus
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/product/ProductCard";
import { ALL_PRODUCTS } from "@/data/products";
import { useCart } from "@/store/useCart";
import { useWishlist } from "@/store/useWishlist";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { getInventoryLabel, getInventoryStatus } from "@/lib/inventory";
import { SITE_CONFIG, SUPPORT_LINKS } from "@/lib/site-config";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CartDrawer from "@/components/cart/CartDrawer";

const ProductDetailPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const product = ALL_PRODUCTS.find(p => p.id === Number(id));
  const addItem = useCart((state) => state.addItem);
  const toggleWishlist = useWishlist((state) => state.toggleWishlist);
  const isInWishlist = useWishlist((state) => (product ? state.isInWishlist(product.id) : false));
  
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [showSticky, setShowSticky] = useState(false);
  const inventoryStatus = product ? getInventoryStatus(product.stockLeft) : "in-stock";
  const isOutOfStock = inventoryStatus === "out-of-stock";
  
  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-gray-50">
        <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center text-primary mb-8">
           <RotateCcw className="w-10 h-10 animate-spin-reverse" />
        </div>
        <h2 className="font-serif text-4xl font-bold mb-4 italic">Curation Lost</h2>
        <p className="text-muted-foreground mb-12 max-w-sm">The heritage piece you are looking for may have moved or is no longer part of our active collection.</p>
        <Button onClick={() => router.push("/shop")} className="h-14 px-12 rounded-xl bg-primary hover:bg-secondary font-bold uppercase tracking-widest text-xs shadow-2xl">Return to Collection</Button>
      </div>
    );
  }

  const relatedProducts = ALL_PRODUCTS
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if(!selectedSize && product.sizes[0] !== "One Size") {
      toast.error("Size Required", {
        description: "Please select a professional fit to continue.",
        duration: 3000,
      });
      return;
    }
    addItem(product, selectedSize || product.sizes[0]);
    toast.success("Added to Collection", {
      description: `${product.name} (Size: ${selectedSize || product.sizes[0]}) is now reserved for you.`,
    });
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Sticky Mobile Add to Cart */}
      <div className={cn(
        "fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-border px-3 py-3 z-[40] md:hidden transition-all duration-500 flex items-center justify-between gap-3 shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.1)]",
        showSticky ? "translate-y-0" : "translate-y-full"
      )}>
        <div className="flex flex-col">
            <span className="text-[9px] uppercase font-bold text-muted-foreground tracking-[0.2em]">Reserved for you</span>
            <span className="font-bold text-primary text-sm">Contact for price</span>
        </div>
        <CartDrawer>
          <Button onClick={handleAddToCart} disabled={isOutOfStock} className="flex-1 h-12 bg-primary text-white font-bold uppercase tracking-[0.12em] text-[10px] rounded-xl shadow-xl">
            <ShoppingBag className="w-4 h-4 mr-2" /> {isOutOfStock ? "Sold Out" : "Add to Cart"}
          </Button>
        </CartDrawer>
      </div>
      
      <div className="pt-28 md:pt-32 pb-24 px-4 sm:px-6 lg:px-12 container mx-auto">
        {/* Breadcrumbs */}
        <div className="hidden sm:flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60 mb-12 overflow-hidden whitespace-nowrap">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 opacity-30" />
          <Link href="/shop" className="hover:text-primary transition-colors">Collections</Link>
          <ChevronRight className="w-3 h-3 opacity-30" />
          <span className="text-primary font-bold truncate">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 mb-20 md:mb-32">
          {/* Gallery */}
          <div className="space-y-4 md:space-y-8">
             <div className="relative aspect-[3/4] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-gray-50 shadow-2xl group border border-primary/5">
                <Image 
                  src={`/${product.image}`}
                  alt={`${product.name} - Full View`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4 md:top-8 md:left-8 z-10">
                    <span className="bg-primary/95 backdrop-blur-md text-white text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] px-4 md:px-5 py-2 md:py-2.5 rounded-full shadow-2xl border border-white/10">
                      {product.badge}
                    </span>
                  </div>
                )}
             </div>
             
             {/* Thumbnail Row */}
             <div className="grid grid-cols-4 gap-3 md:gap-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="relative aspect-square rounded-[1.25rem] overflow-hidden bg-gray-50 border-2 border-transparent hover:border-secondary cursor-pointer transition-all group scale-95 hover:scale-100 shadow-sm hover:shadow-lg">
                    <Image src={`/${product.image}`} alt={`view-${i}`} fill sizes="25vw" className="object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
             </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="mb-8 md:mb-10 border-b border-border pb-8 md:pb-10">
               <div className="flex items-center gap-3 mb-6">
                 <div className="flex text-secondary gap-0.5">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-current" />)}
                 </div>
                 <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest bg-gray-50 px-3 py-1 rounded-full border border-border">
                    {product.reviews} Verified Appraisals
                 </span>
               </div>
               
               <h1 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-bold text-primary mb-5 md:mb-6 leading-[1.1] italic">{product.name}</h1>
               
              <div className="mb-6 md:mb-8 rounded-2xl border border-secondary/20 bg-secondary/5 px-5 py-4">
                <p className="text-[11px] uppercase tracking-[0.16em] font-bold text-secondary">Contact for Price</p>
                <p className="text-sm text-muted-foreground mt-1">Call {SITE_CONFIG.supportPhoneDisplay} or email {SITE_CONFIG.supportEmail}</p>
                <p className="text-sm text-primary mt-2">{getInventoryLabel(product)}</p>
               </div>
               
               <p className="text-muted-foreground leading-relaxed text-lg font-medium opacity-80">
                 {product.description}
               </p>
            </div>

            {/* Size Selector */}
            <div className="mb-10 md:mb-12">
              <div className="flex justify-between items-center mb-5 md:mb-6">
                <label className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary flex items-center gap-2 md:gap-3">
                  <Scissors className="w-4 h-4 text-secondary" />
                  Select Professional Fit
                </label>
                <button className="text-[9px] md:text-[10px] font-bold text-secondary border-b border-secondary/30 pb-0.5 hover:text-primary hover:border-primary transition-all uppercase tracking-[0.12em] md:tracking-widest">
                  Size Masterclass
                </button>
              </div>
              <div className="flex flex-wrap gap-2.5 md:gap-4">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "min-w-[60px] md:min-w-[72px] h-11 md:h-14 px-3 md:px-4 flex items-center justify-center rounded-xl border-2 font-bold transition-all uppercase tracking-[0.12em] md:tracking-widest text-[10px] md:text-xs relative",
                      selectedSize === size 
                        ? "border-primary bg-primary text-white shadow-2xl scale-105 z-10" 
                        : "border-border hover:border-secondary text-primary bg-white"
                    )}
                  >
                    {size}
                    {selectedSize === size && (
                      <motion.div layoutId="size-check" className="absolute -top-1.5 -right-1.5 bg-secondary text-white w-5 h-5 rounded-full flex items-center justify-center shadow-lg">
                        <CheckCircle2 className="w-3 h-3" />
                      </motion.div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-10 md:mb-12 pb-10 md:pb-12 border-b border-border">
              <div className="flex items-center bg-gray-50 border border-border rounded-xl p-1 h-14 md:h-16 w-full sm:w-40 shadow-inner">
                 <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="flex-1 flex items-center justify-center hover:bg-white h-full rounded-lg transition-all"><Minus className="w-4 h-4" /></button>
                 <span className="flex-1 text-center font-bold text-lg">{quantity}</span>
                 <button onClick={() => setQuantity(quantity + 1)} className="flex-1 flex items-center justify-center hover:bg-white h-full rounded-lg transition-all"><Plus className="w-4 h-4" /></button>
              </div>
              
              <CartDrawer>
                <Button 
                  size="lg" 
                  disabled={isOutOfStock}
                  className="flex-1 h-14 md:h-16 bg-primary text-white font-bold text-sm md:text-base uppercase tracking-[0.14em] md:tracking-[0.2em] rounded-xl hover:bg-secondary shadow-[0_20px_40px_-15px_rgba(0,0,0,0.2)] transition-all active:scale-95 group"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  {isOutOfStock ? "Sold Out" : "Reserve Piece"}
                </Button>
              </CartDrawer>
              
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => {
                  if (!product) return;
                  toggleWishlist(product.id);
                  toast.success(isInWishlist ? "Removed from wishlist" : "Added to wishlist");
                }}
                className="w-full sm:w-16 h-12 sm:h-16 rounded-xl border-border text-primary hover:bg-white hover:border-secondary hover:text-secondary shadow-sm transition-all"
              >
                <Heart className={cn("w-5 h-5 sm:w-6 sm:h-6", isInWishlist && "fill-current text-secondary")} />
              </Button>
            </div>

            {/* Trust Reassurance */}
            <div className="flex flex-col gap-6 mb-12">
               <div className="grid grid-cols-2 gap-6">
                 <div className="flex items-center gap-5 p-5 bg-gray-50 border border-border rounded-2xl shadow-sm">
                   <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm"><Truck className="w-6 h-6 text-secondary" /></div>
                   <div>
                     <span className="block text-[10px] font-bold uppercase tracking-widest text-primary">Priority Shipping</span>
                     <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-tight">3-5 Day Global Delivery</span>
                   </div>
                 </div>
                 <div className="flex items-center gap-5 p-5 bg-gray-50 border border-border rounded-2xl shadow-sm">
                   <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm"><Award className="w-6 h-6 text-secondary" /></div>
                   <div>
                     <span className="block text-[10px] font-bold uppercase tracking-widest text-primary">Hallmark Quality</span>
                     <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-tight">Artisan Authenticity</span>
                   </div>
                 </div>
               </div>
               
               <div className="bg-emerald-50/50 rounded-[2rem] p-8 border border-emerald-100 flex items-center justify-between group cursor-pointer hover:bg-emerald-50 transition-colors">
                 <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-emerald-200 group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-7 h-7" />
                    </div>
                    <div>
                      <span className="block font-bold text-emerald-900 text-base italic">Stylist Concierge</span>
                      <span className="text-xs text-emerald-700/80 font-medium">Available on WhatsApp for sizing & styling aid</span>
                    </div>
                 </div>
                 <a 
                   href={`${SUPPORT_LINKS.whatsapp}?text=${encodeURIComponent(`Hi, I am interested in ${product.name}`)}`}
                   target="_blank"
                   className="bg-emerald-500 text-white px-8 py-3 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-200"
                 >
                   Chat
                 </a>
               </div>
            </div>

            {/* Heritage Specifications */}
            <Accordion className="w-full">
              <AccordionItem value="details" className="border-border">
                <AccordionTrigger className="text-[11px] font-bold uppercase tracking-[0.3em] py-6 hover:text-secondary group">
                  <span className="flex items-center gap-3">
                    <Droplets className="w-4 h-4 text-muted-foreground group-hover:text-secondary" />
                    Fabric & Composition
                  </span>
                </AccordionTrigger>

                <AccordionContent className="text-muted-foreground leading-relaxed pb-8">
                  Crafted using 100% pure Mulberry Silk blends with hand-woven zari borders. Each thread is dyed using eco-friendly natural pigments to ensure depth of color and long-term durability.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="craft" className="border-border">
                <AccordionTrigger className="text-[11px] font-bold uppercase tracking-[0.3em] py-6 hover:text-secondary group">
                  <span className="flex items-center gap-3">
                    <Scissors className="w-4 h-4 text-muted-foreground group-hover:text-secondary" />
                    Artisan Journey
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-8">
                  This piece represents over 48 hours of manual embroidery (Zardosi & Gota Patti) by multi-generational artisan families in Jaipur. No two pieces are exactly identical, marking their true heritage status.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="care" className="border-border">
                <AccordionTrigger className="text-[11px] font-bold uppercase tracking-[0.3em] py-6 hover:text-secondary group">
                  <span className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-muted-foreground group-hover:text-secondary" />
                    Care for Heritage
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-8">
                  Dry clean only. Store in a muslin cloth to allow the fabric to breathe. Keep away from direct sunlight for extended periods to preserve the natural silk luster.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Social Proof & Reviews */}
        <div className="mb-32">
          <Tabs defaultValue="story" className="w-full">
            <div className="flex justify-center mb-16">
              <TabsList className="bg-transparent border-b border-border w-full justify-center gap-12 h-16 rounded-none p-0">
                <TabsTrigger value="story" className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-secondary data-[state=active]:text-primary rounded-none h-full text-xs font-bold uppercase tracking-widest px-0">The Heritage Story</TabsTrigger>
                <TabsTrigger value="reviews" className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-secondary data-[state=active]:text-primary rounded-none h-full text-xs font-bold uppercase tracking-widest px-0">Verified Appraisals ({product.reviews})</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="story" className="focus-visible:ring-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 bg-accent/5 p-12 lg:p-24 rounded-[3rem] border border-accent/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 blur-3xl -z-10" />
                <div className="space-y-6">
                   <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-secondary mb-8 shadow-sm">
                      <Award className="w-7 h-7" />
                   </div>
                   <h4 className="font-serif text-3xl font-bold text-primary italic leading-tight">Authentic Masterpiece</h4>
                   <p className="text-base text-muted-foreground leading-relaxed opacity-80">
                      We ensure every garment carries the hallmark of authentic Indian craftsmanship, sourced directly from master art clusters.
                   </p>
                </div>
                <div className="space-y-6">
                   <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-secondary mb-8 shadow-sm">
                      <Droplets className="w-7 h-7" />
                   </div>
                   <h4 className="font-serif text-3xl font-bold text-primary italic leading-tight">Eco-Heritage Silk</h4>
                   <p className="text-base text-muted-foreground leading-relaxed opacity-80">
                      Woven with sustainable silk blends that provide a regal drape while ensuring total comfort for your special moments.
                   </p>
                </div>
                <div className="space-y-6">
                   <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-secondary mb-8 shadow-sm">
                      <RotateCcw className="w-7 h-7" />
                   </div>
                   <h4 className="font-serif text-3xl font-bold text-primary italic leading-tight">Lifetime Legacy</h4>
                   <p className="text-base text-muted-foreground leading-relaxed opacity-80">
                      Our pieces are designed as heirlooms. We offer lifetime resizing services to ensure your favorite piece journeys with you.
                   </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="focus-visible:ring-0">
               <div className="max-w-4xl mx-auto">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16 pb-12 border-b border-border">
                     <div className="text-center md:text-left">
                        <div className="text-6xl font-serif font-bold text-primary mb-2 italic">{product.rating.toFixed(1)}</div>
                        <div className="flex text-secondary mb-3 justify-center md:justify-start">
                           {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-current" />)}
                        </div>
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Based on {product.reviews} artisan reviews</p>
                     </div>
                     
                     <Dialog>
                        <DialogTrigger render={
                           <Button className="h-14 px-12 bg-primary hover:bg-secondary text-white font-bold uppercase tracking-widest text-xs rounded-xl shadow-xl">Write an Appraisal</Button>
                        } />
                        <DialogContent className="max-w-xl p-0 overflow-hidden border-none rounded-[2rem]">
                           <div className="bg-primary p-10 text-white relative">
                              <div className="absolute top-10 right-10 opacity-20"><Award className="w-12 h-12" /></div>
                              <h3 className="font-serif text-3xl font-bold italic mb-2 text-white">Share Your Story</h3>
                              <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">Your appraisal helps us preserve the legacy of our master artisans.</p>
                           </div>
                           <div className="p-10 space-y-6 bg-white">
                              <div className="space-y-2">
                                 <label className="text-[10px] font-bold uppercase tracking-widest text-primary">Your Experience</label>
                                 <div className="flex text-secondary gap-2">
                                    {[1,2,3,4,5].map(s => <Star key={s} className="w-6 h-6 fill-current cursor-pointer hover:scale-110 transition-transform" />)}
                                 </div>
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                 <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary">Full Name</label>
                                    <Input placeholder="Artisan Enthusiast" className="h-12 rounded-xl focus:border-secondary transition-all" />
                                 </div>
                                 <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary">Email Address</label>
                                    <Input placeholder="heritage@example.com" className="h-12 rounded-xl focus:border-secondary transition-all" />
                                 </div>
                              </div>
                              <div className="space-y-2">
                                 <label className="text-[10px] font-bold uppercase tracking-widest text-primary">Your Review</label>
                                 <Textarea placeholder="Tell us about the fit, the fabric, and the artisan details..." className="min-h-[120px] rounded-xl focus:border-secondary transition-all" />
                              </div>
                              <Button className="w-full h-14 bg-primary text-white font-bold uppercase tracking-widest text-xs rounded-xl shadow-2xl mt-4" onClick={() => toast.success("Review Submitted", { description: "Our curators will verify your appraisal shortly." })}>Submit for Verification</Button>
                           </div>
                        </DialogContent>
                     </Dialog>
                  </div>

                  {/* Sample Reviews */}
                  <div className="space-y-12">
                     {[...Array(3)].map((_, i) => (
                        <div key={i} className="flex gap-8 group">
                           <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-primary font-serif italic font-bold text-2xl border border-border group-hover:bg-primary group-hover:text-white transition-colors">
                              {["M", "P", "S"][i]}
                           </div>
                           <div className="flex-1 space-y-3">
                              <div className="flex justify-between items-center">
                                 <h5 className="font-bold text-primary italic">Verified Enthusiast</h5>
                                 <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Oct 2023</span>
                              </div>
                              <div className="flex text-secondary mb-2">
                                 {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-current" />)}
                              </div>
                              <p className="text-muted-foreground leading-relaxed text-sm">
                                 {i === 0 ? "The mulberry silk has a truly regal shimmer that photographs beautifully. The artisanal embroidery is even more detailed in person." : 
                                  i === 1 ? "Absolutely stunning fit. The master tailors clearly understand heritage silhouettes. Delivery was surprisingly fast even for international shipping." :
                                  "A perfect heirloom piece. I wore this for a gala and received countless compliments on the craftsmanship. Highly recommend!"}
                              </p>
                              <div className="flex gap-4 pt-2">
                                 <div className="relative w-16 h-20 rounded-lg overflow-hidden border border-border opacity-60 hover:opacity-100 transition-opacity cursor-zoom-in">
                                    <Image src={`/${product.image}`} fill sizes="64px" alt="user-photo" className="object-cover" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <section className="pb-24">
           <div className="flex justify-between items-end mb-16">
              <div>
                 <h2 className="font-serif text-5xl font-bold text-primary italic mb-2">Complete the Look</h2>
                 <p className="text-muted-foreground text-[10px] uppercase tracking-widest">Curated additions for your heritage collection</p>
              </div>
              <Link href="/shop" className="text-secondary font-bold border-b border-secondary/30 hover:text-primary hover:border-primary transition-all text-sm uppercase tracking-widest pb-1">View Collection</Link>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
           </div>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default ProductDetailPage;

