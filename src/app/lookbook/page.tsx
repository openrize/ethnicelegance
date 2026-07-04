import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Lookbook | Ethnic Elegance",
  description: "Editorial styling inspiration for weddings, festivals, and every celebration.",
};

const looks = [
  { title: "Bridal Elegance", subtitle: "Wedding Collection", href: "/shop?collection=wedding", image: "/images/WhatsApp Image 2026-04-08 at 1.04.01 PM (2).jpeg" },
  { title: "Festive Glow", subtitle: "Diwali & Celebrations", href: "/shop?occasion=diwali", image: "/images/WhatsApp Image 2026-04-08 at 12.58.32 PM.jpeg" },
  { title: "Evening Glamour", subtitle: "Party Wear", href: "/shop?collection=party", image: "/images/WhatsApp Image 2026-04-08 at 12.58.57 PM.jpeg" },
  { title: "Navratri Nights", subtitle: "Festive Collection", href: "/shop?occasion=navratri", image: "/images/WhatsApp Image 2026-03-19 at 12.15.22 PM (2).jpeg" },
  { title: "Everyday Grace", subtitle: "Casual Collection", href: "/shop?collection=casual", image: "/images/WhatsApp Image 2026-03-19 at 12.15.21 PM (1).jpeg" },
  { title: "Reception Ready", subtitle: "Evening Occasions", href: "/shop?occasion=reception", image: "/images/WhatsApp Image 2026-04-08 at 12.58.29 PM.jpeg" },
];

export default function LookbookPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-36 pb-16 bg-accent/20 text-center border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <span className="text-secondary text-sm font-bold uppercase tracking-[0.3em] block mb-3">Style Inspiration</span>
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-primary italic">The Lookbook</h1>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4 leading-relaxed">
            Editorial inspiration for weddings, festivals, and every celebration in between.
          </p>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {looks.map((look) => (
              <Link key={look.title} href={look.href} className="group relative overflow-hidden rounded-3xl aspect-[3/4] shadow-lg">
                <Image src={look.image} alt={look.title} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-2xl font-bold italic">{look.title}</h3>
                  <p className="text-white/80 text-sm mt-1">{look.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link href="/shop">
              <Button className="rounded-full px-10 h-12 uppercase tracking-widest text-xs font-bold">
                Shop the Lookbook <ArrowRight className="w-3 h-3 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
