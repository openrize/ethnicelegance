import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Collections | Ethnic Elegance",
  description: "Explore curated ethnic fashion collections for weddings, festivals, party wear, and everyday elegance.",
};

const collections = [
  {
    title: "Wedding",
    description: "Bridal lehengas, groom ensembles, and guest-worthy elegance for the most important day.",
    href: "/shop?collection=wedding",
    image: "/images/WhatsApp Image 2026-04-08 at 1.04.01 PM (2).jpeg",
  },
  {
    title: "Festive",
    description: "Vibrant colors and celebratory silhouettes for Diwali, Navratri, Eid, and more.",
    href: "/shop?collection=festive",
    image: "/images/WhatsApp Image 2026-04-08 at 12.58.32 PM.jpeg",
  },
  {
    title: "Party Wear",
    description: "Statement pieces for receptions, engagements, and evening soirées.",
    href: "/shop?collection=party",
    image: "/images/WhatsApp Image 2026-04-08 at 12.58.57 PM.jpeg",
  },
  {
    title: "Casual",
    description: "Effortless everyday elegance for gatherings, brunches, and relaxed celebrations.",
    href: "/shop?collection=casual",
    image: "/images/WhatsApp Image 2026-03-19 at 12.15.21 PM (1).jpeg",
  },
];

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-36 pb-16 bg-accent/20 text-center border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <span className="text-secondary text-sm font-bold uppercase tracking-[0.3em] block mb-3">Curated Edits</span>
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-primary italic">Our Collections</h1>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4 leading-relaxed">
            Timeless pieces crafted for life&apos;s most memorable celebrations.
          </p>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((col) => (
              <Link key={col.title} href={col.href} className="group relative overflow-hidden rounded-3xl aspect-[16/10] shadow-xl">
                <Image src={col.image} alt={col.title} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex flex-col justify-end p-10 text-white">
                  <h2 className="font-serif text-3xl font-bold italic mb-2">{col.title}</h2>
                  <p className="text-white/85 text-sm mb-6 max-w-md">{col.description}</p>
                  <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-secondary">
                    Shop Collection <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link href="/shop">
              <Button className="rounded-full px-10 h-12 uppercase tracking-widest text-xs font-bold">
                View All Pieces <ArrowRight className="w-3 h-3 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
