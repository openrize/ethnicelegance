import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Quote, ShieldCheck, Truck, RotateCcw, Gem } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/product/ProductCard";
import { ALL_PRODUCTS } from "@/data/products";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG, SUPPORT_LINKS } from "@/lib/site-config";
import TrackedContactLink from "@/components/shared/TrackedContactLink";

export default function Home() {
  const featuredProducts = ALL_PRODUCTS.filter(p => p.id <= 4);
  const newArrivals = ALL_PRODUCTS.filter(p => p.badge === "New").slice(0, 4);

  const testimonials = [
    {
      quote: "The quality of the embroidery and the drape of the silk are absolutely regal. I wore the Magenta Lehenga for my sister's wedding and felt like royalty.",
      name: "Priya Kapoor",
      title: "Verified Collector",
      initials: "PK",
    },
    {
      quote: "I was blown away by the attention to detail in the Green Lehenga Choli. The hand-stitching is museum-quality. Complimentary resizing made it perfect.",
      name: "Ananya Singh",
      title: "Heritage Enthusiast",
      initials: "AS",
    },
    {
      quote: "Ordered the Mustard Yellow Ghagra for Diwali. It arrived in beautiful packaging with a handwritten artisan note. Absolutely exceptional experience.",
      name: "Kavita Mehra",
      title: "Loyal Customer",
      initials: "KM",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[88vh] md:h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-banner.png"
            alt="Heritage Collection — Premium Indian Ethnic Wear"
            fill
            priority
            className="object-cover object-bottom scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
        </div>

        <div className="container relative z-10 px-6 lg:px-12 text-center text-white">
          <div className="inline-block px-4 md:px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6 md:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.24em] md:tracking-[0.4em] text-secondary">✦ Celebrate Every Occasion ✦</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-8xl font-bold mb-6 md:mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Elegance That Celebrates <br />
            <span className="text-secondary italic">Every Tradition</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto mb-8 md:mb-10 font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
            Discover thoughtfully curated ethnic fashion designed for weddings, festivals, celebrations, and everyday elegance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
            <Link href="/shop">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold h-14 px-10 rounded-full text-sm uppercase tracking-widest shadow-2xl">
                Shop Collection
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/shop?cat=new">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm h-14 px-10 rounded-full text-sm uppercase tracking-widest font-bold bg-transparent">
                New Arrivals
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60">
          <div className="w-[1px] h-16 bg-white animate-pulse" />
          <span className="text-white text-[9px] uppercase tracking-[0.4em] font-bold">Scroll</span>
        </div>
      </section>

      <section className="py-8 bg-accent/10 border-y border-border">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-secondary">Concierge First Experience</p>
            <p className="text-sm text-primary font-medium">
              Talk to our team for pricing, styling, and inventory guidance before you reserve.
            </p>
          </div>
          <div className="flex gap-3">
            <TrackedContactLink href={SUPPORT_LINKS.phone} channel="phone" location="home_concierge_section">
              <Button className="h-11 px-6 rounded-full text-[10px] uppercase tracking-[0.12em] font-bold">
                Call {SITE_CONFIG.supportPhoneDisplay}
              </Button>
            </TrackedContactLink>
            <TrackedContactLink href={SUPPORT_LINKS.email} channel="email" location="home_concierge_section">
              <Button variant="outline" className="h-11 px-6 rounded-full text-[10px] uppercase tracking-[0.12em] font-bold">
                Email Us
              </Button>
            </TrackedContactLink>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-y border-border bg-white py-5 md:py-6">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-4 sm:gap-6 lg:gap-10 text-center">
            {[
              { icon: <Truck className="w-4 h-4" />, text: "Pricing & shipping shared by concierge" },
              { icon: <RotateCcw className="w-4 h-4" />, text: "Complimentary Resizing" },
              { icon: <ShieldCheck className="w-4 h-4" />, text: "Authenticated Artisan Pieces" },
              { icon: <Gem className="w-4 h-4" />, text: "Premium Heritage Fabrics" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-2.5 text-primary">
                <div className="text-secondary">{item.icon}</div>
                <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.14em] md:tracking-[0.2em]">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections Grid */}
      <section className="py-24 bg-background text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <span className="text-secondary text-sm font-bold uppercase tracking-[0.3em] block mb-3">Discover</span>
            <h2 className="font-serif text-4xl lg:text-6xl font-bold text-primary italic">Our Collections</h2>
          </div>
          
          <div className="flex justify-center">
            <div className="w-full max-w-5xl flex flex-col md:flex-row border border-border overflow-hidden rounded-3xl h-auto md:h-[600px] shadow-2xl mb-8">
              {/* Women Col */}
              <div className="relative flex-1 group cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-border h-64 sm:h-72 md:h-auto">
                <Image 
                  src="/images/ghagra_mustard_yellow.png"
                  alt="Womenswear Collection"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                <Link href="/shop?cat=womens" className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8">
                  <span className="text-xs uppercase tracking-[0.4em] mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">Handcrafted</span>
                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">Womenswear</h3>
                  <span className="border border-white text-white hover:bg-white hover:text-primary rounded-full px-8 py-2.5 font-bold uppercase tracking-widest text-[10px] transition-colors">Shop Collection</span>
                </Link>
              </div>
              {/* Right Column — split */}
              <div className="flex-1 flex flex-col">
                {/* Menswear */}
              <div className="relative flex-1 group cursor-pointer overflow-hidden border-b border-border h-44 sm:h-48 md:h-auto">
                  <Image 
                    src="/images/lehenga_royal_blue.png"
                    alt="Menswear Collection"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors" />
                  <Link href="/shop?cat=mens" className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
                    <h3 className="font-serif text-3xl font-bold mb-4">Menswear</h3>
                    <span className="border border-white text-white hover:bg-white hover:text-primary rounded-full px-6 py-2 font-bold uppercase tracking-widest text-[9px] transition-colors">Explore</span>
                  </Link>
                </div>
                {/* Accessories */}
                <div className="relative flex-1 group cursor-pointer overflow-hidden h-44 sm:h-48 md:h-auto">
                  <Image 
                    src="/images/jewelry_gold_set.png"
                    alt="Accessories Collection"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors" />
                  <Link href="/shop?cat=accessories" className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
                    <h3 className="font-serif text-3xl font-bold mb-4">Accessories</h3>
                    <span className="border border-white text-white hover:bg-white hover:text-primary rounded-full px-6 py-2 font-bold uppercase tracking-widest text-[9px] transition-colors">Discover</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <div>
              <span className="text-secondary text-sm font-bold uppercase tracking-[0.3em] block mb-2">Editor&apos;s Choice</span>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary">Signature Pieces</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/shop">
              <Button variant="outline" className="rounded-full px-8 h-12 font-bold uppercase tracking-widest text-xs border-primary text-primary hover:bg-primary hover:text-white transition-all">
                View All Collection <ArrowRight className="w-3 h-3 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals Strip */}
      {newArrivals.length > 0 && (
        <section className="py-24 bg-accent/5 text-center">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <div>
                <span className="text-secondary text-sm font-bold uppercase tracking-[0.3em] block mb-2">Just In</span>
                <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary">New Arrivals</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {newArrivals.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/shop?cat=new">
                <Button variant="outline" className="rounded-full px-8 h-12 font-bold uppercase tracking-widest text-xs border-primary text-primary hover:bg-primary hover:text-white transition-all">
                  See All New <ArrowRight className="w-3 h-3 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="py-24 overflow-hidden bg-white text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-secondary text-sm font-bold uppercase tracking-[0.3em] block mb-3">Heritage Circle Reviews</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary">What Our Collectors Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-primary/5 rounded-3xl p-10 border border-primary/10 relative group hover:bg-primary/10 transition-colors text-center">
                <Quote className="w-8 h-8 text-secondary/30 mb-6 mx-auto" />
                <div className="flex justify-center gap-1 text-secondary mb-6">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="font-serif text-lg text-primary/80 italic leading-relaxed mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">{t.initials}</div>
                  <div>
                    <span className="block font-bold text-primary">{t.name}</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest">{t.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA / Newsletter */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-primary rounded-3xl p-12 lg:p-24 text-center text-white overflow-hidden relative">
             {/* Background Pattern */}
             <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
                <div className="grid grid-cols-8 gap-4 p-8">
                  {[...Array(64)].map((_, i) => (
                    <div key={i} className="flex items-center justify-center">
                      <span className="text-4xl">✦</span>
                    </div>
                  ))}
                </div>
             </div>
             
             <div className="relative z-10">
                <span className="text-secondary text-sm font-bold uppercase tracking-[0.3em] block mb-6">Exclusive Access</span>
                <h2 className="font-serif text-4xl lg:text-6xl font-bold mb-8">Join the Heritage Circle</h2>
                <p className="text-white/70 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
                  Sign up for early access to our limited edition wedding collection and stories from the artisans. No spam — only heritage.
                </p>
                <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="your-email@heritage.com" 
                    className="flex-1 bg-white/10 border border-white/20 rounded-full px-8 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                  />
                  <Button type="submit" size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full px-10 h-14 uppercase tracking-widest text-[10px]">
                    Subscribe
                  </Button>
                </form>
                <p className="text-white/30 text-xs mt-4">We never share your data. Unsubscribe at any time.</p>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
