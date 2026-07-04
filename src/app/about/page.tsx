import React from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative h-[60vh] flex items-center justify-center pt-20">
        <Image 
          src="/images/hero-banner.png" 
          alt="Our Craft" 
          fill 
          className="object-cover brightness-[0.4]"
        />
        <div className="container relative z-10 px-6 lg:px-12 text-center text-white">
          <h1 className="font-serif text-5xl lg:text-7xl font-bold mb-6 italic">Our Heritage Story</h1>
          <p className="text-xl max-w-2xl mx-auto text-white/80 font-medium">Preserving the soul of Indian craftsmanship through timeless luxury fashion.</p>
        </div>
      </section>

      {/* Story Sections */}
      <section className="py-24 container px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <span className="text-secondary font-bold uppercase tracking-[0.3em] text-xs">Our Beginning</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary italic">Born in the Heart of Jaipur</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ethnic Elegance was founded on a simple yet profound realization: that true luxury lies in the preservation of tradition. Starting as a small atelier in the Pink City of Jaipur, we set out to connect the world with the unparalleled skill of master artisans who have kept heritage techniques alive for centuries.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, we are a global family of designers, weavers, and embroiderers, all united by a single vision—to create garments that feel like history, reimagined for today's regal moments.
            </p>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/images/ghagra_mustard_yellow.png" alt="Crafting" fill className="object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
            <Image src="/images/lehenga_magenta_pink.png" alt="Detail" fill className="object-cover" />
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <span className="text-secondary font-bold uppercase tracking-[0.3em] text-xs">Our Commitment</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary italic">Artisan-First Philosophy</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in "Slow Fashion" that honors the hands that create it. Every piece in our collection is handcrafted, ensuring that the human touch remains at the center of the luxury experience. 
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
               <div>
                 <span className="block text-3xl font-bold text-primary mb-1">120+</span>
                 <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Artisan Families</span>
               </div>
               <div>
                 <span className="block text-3xl font-bold text-primary mb-1">40hr+</span>
                 <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Embroidery Per Piece</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Banner */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
         <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--accent)_1px,_transparent_1px)] bg-[size:24px_24px]" />
         <div className="container relative z-10 px-6 lg:px-12 text-center">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-16 italic text-secondary">Why We Choose Heritage</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               <div>
                  <h4 className="font-serif text-xl font-bold mb-4">Timeless Drape</h4>
                  <p className="text-sm text-white/60 leading-relaxed">Our silhouettes are designed to transcend seasons, focused on elegance that remains relevant for decades.</p>
               </div>
               <div>
                  <h4 className="font-serif text-xl font-bold mb-4">Ethical Luxury</h4>
                  <p className="text-sm text-white/60 leading-relaxed">Direct-to-artisan partnerships ensure fair wages and sustainable growth for rural crafting communities.</p>
               </div>
               <div>
                  <h4 className="font-serif text-xl font-bold mb-4">Cultural Legacy</h4>
                  <p className="text-sm text-white/60 leading-relaxed">Each pattern and embroidery style tells a story of a specific Indian region and its royal history.</p>
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
