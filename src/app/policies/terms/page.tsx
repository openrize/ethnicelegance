import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Terms of Service | Ethnic Elegance",
  description: "The terms and conditions governing your use of the Ethnic Elegance website and purchase of our heritage products.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-36 pb-24 container px-6 lg:px-12 max-w-3xl mx-auto">
        <div className="mb-16">
          <span className="text-secondary text-sm font-bold uppercase tracking-[0.4em] block mb-4">Legal</span>
          <h1 className="font-serif text-5xl font-bold text-primary italic mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: April 2026</p>
        </div>

        <div className="space-y-10 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using the Ethnic Elegance website and placing an order, you agree to be bound by these Terms of Service. Please read them carefully before making a purchase.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">2. Products & Pricing</h2>
            <p>All products are subject to availability. Prices are displayed in USD and include applicable taxes where indicated. We reserve the right to amend pricing at any time. Orders are confirmed at the price displayed at the time of checkout.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">3. Order Processing</h2>
            <p>Orders are processed within 2–3 business days. You will receive an email confirmation upon placing your order and a shipping notification once your order has been dispatched. Custom and made-to-order items may require 7–14 business days for processing.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">4. Intellectual Property</h2>
            <p>All content on this website — including images, text, logos, and design — is the intellectual property of Ethnic Elegance and may not be reproduced, distributed, or used commercially without express written permission.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">5. Limitation of Liability</h2>
            <p>Ethnic Elegance is not liable for any indirect, incidental, or consequential damages arising from the use of our website or products. Our maximum liability is limited to the value of the order placed.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">6. Governing Law</h2>
            <p>These terms are governed by the laws of the State of Illinois, USA. Any disputes shall be resolved through binding arbitration in Chicago, IL.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">7. Contact</h2>
            <p>For questions about these terms, contact us at <a href="mailto:openrize@gmail.com" className="text-secondary hover:underline">openrize@gmail.com</a>.</p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
