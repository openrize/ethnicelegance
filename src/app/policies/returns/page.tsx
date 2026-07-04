import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Returns & Exchanges | Ethnic Elegance",
  description: "Our 14-day hassle-free return and complimentary resizing policy for all heritage purchases.",
};

export default function ReturnsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-36 pb-24 container px-6 lg:px-12 max-w-3xl mx-auto">
        <div className="mb-16">
          <span className="text-secondary text-sm font-bold uppercase tracking-[0.4em] block mb-4">Policy</span>
          <h1 className="font-serif text-5xl font-bold text-primary italic mb-4">Returns & Exchanges</h1>
          <p className="text-muted-foreground">Last updated: April 2026</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-10 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">14-Day Return Policy</h2>
            <p>We accept returns on all standard items within 14 days of delivery. Items must be in their original, unworn condition with all tags attached and original packaging intact.</p>
            <p>Custom-tailored, personalized, or monogrammed pieces are not eligible for returns as they are made specifically for you.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">Complimentary Resizing</h2>
            <p>Ethnic Elegance offers one complimentary resizing on all apparel items within 30 days of your delivery date. Our master tailors will ensure your heritage piece fits you perfectly.</p>
            <p>To request a resizing, contact us at <a href="mailto:openrize@gmail.com" className="text-secondary hover:underline">openrize@gmail.com</a> with your order details and measurements.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">How to Initiate a Return</h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li>Email <a href="mailto:openrize@gmail.com" className="text-secondary hover:underline">openrize@gmail.com</a> with your order number and reason for return.</li>
              <li>Our team will respond within 24 hours with a prepaid return shipping label.</li>
              <li>Pack the item securely in its original packaging and attach the label.</li>
              <li>Drop off at your nearest courier point within 5 days of receiving the label.</li>
              <li>Refunds are processed within 5–7 business days of us receiving the item.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">Exchanges</h2>
            <p>For size exchanges, we recommend initiating a return and placing a new order for the correct size. This ensures the fastest processing and restocks the item for other customers.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">Damaged or Incorrect Items</h2>
            <p>In the rare event you receive a damaged or incorrect item, please contact us immediately with photographs. We will arrange a priority replacement at no cost to you.</p>
          </section>

          <section className="bg-primary/5 rounded-2xl p-8 border border-primary/10 not-prose">
            <h3 className="font-serif text-xl font-bold text-primary italic mb-3">Need Help?</h3>
            <p className="text-muted-foreground text-sm mb-4">Our concierge team is available Mon–Sat, 10am–7pm IST.</p>
            <div className="flex gap-4">
              <a href="mailto:openrize@gmail.com" className="text-secondary font-bold text-sm hover:underline">openrize@gmail.com</a>
              <span className="text-border">|</span>
              <a href="tel:+12243779043" className="text-secondary font-bold text-sm hover:underline">+1 (224) 377-9043</a>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
