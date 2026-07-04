import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy | Ethnic Elegance",
  description: "How Ethnic Elegance collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-36 pb-24 container px-6 lg:px-12 max-w-3xl mx-auto">
        <div className="mb-16">
          <span className="text-secondary text-sm font-bold uppercase tracking-[0.4em] block mb-4">Legal</span>
          <h1 className="font-serif text-5xl font-bold text-primary italic mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: April 2026</p>
        </div>

        <div className="space-y-10 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">Information We Collect</h2>
            <p>We collect information you provide when placing an order, creating an account, or contacting us. This includes your name, email address, shipping address, and payment details. Payment information is processed securely through our payment partners and is never stored on our servers.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">How We Use Your Information</h2>
            <p>We use your information to process orders, provide customer support, send order confirmations and shipping updates, and — with your consent — share news about new collections and exclusive offers.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">Data Sharing</h2>
            <p>We do not sell, rent, or trade your personal information with third parties. We share information only with our logistics partners and payment processors who require it to fulfill your order, and only to the extent necessary.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">Cookies</h2>
            <p>Our website uses cookies to enhance your browsing experience, remember your preferences, and analyze site traffic. You can control cookie settings through your browser.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal data at any time. To exercise these rights, contact us at <a href="mailto:openrize@gmail.com" className="text-secondary hover:underline">openrize@gmail.com</a>.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">Contact</h2>
            <p>For any privacy-related questions, please contact our Data Privacy Officer at <a href="mailto:openrize@gmail.com" className="text-secondary hover:underline">openrize@gmail.com</a>.</p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
