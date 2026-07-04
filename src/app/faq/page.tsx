import React from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "FAQ | Ethnic Elegance",
  description: "Frequently asked questions about Ethnic Elegance — shipping, sizing, returns, and our artisan craftsmanship.",
};

const faqs = [
  {
    category: "Orders & Shipping",
    questions: [
      { q: "How long does shipping take?", a: "Standard international shipping takes 7–14 business days. Express shipping (3–5 days) is available upon request. Contact our concierge team for shipping options." },
      { q: "Do you ship worldwide?", a: "Yes. We ship to over 80 countries. Shipping options and timelines vary by destination; our concierge team will share the details when you contact us." },
      { q: "Can I track my order?", a: "Absolutely. Once your order is dispatched, you will receive an email with a tracking link. You can also log in to your account on our site to view real-time tracking." },
    ],
  },
  {
    category: "Sizing & Fit",
    questions: [
      { q: "How do I choose the right size?", a: "We recommend measuring your chest, waist, and hips and comparing against our detailed size chart provided on each product page. Our Heritage Concierge team is also available for personalized size guidance via WhatsApp." },
      { q: "Do you offer complimentary resizing?", a: "Yes. At Ethnic Elegance, we offer one complimentary resizing within 30 days of delivery for all apparel items. Contact our concierge team to arrange." },
      { q: "What if the piece does not fit perfectly?", a: "We offer free resizing and a 14-day no-questions-asked exchange policy. Please retain original packaging and contact us within 14 days of receiving your order." },
    ],
  },
  {
    category: "Returns & Exchanges",
    questions: [
      { q: "What is your returns policy?", a: "We accept returns within 14 days of delivery for items in their original, unworn condition with tags attached. Custom or personalized orders are non-returnable." },
      { q: "How do I initiate a return?", a: "Email openrize@gmail.com or reach us via WhatsApp with your order number and reason for return. Our team will provide a prepaid return label within 24 hours." },
      { q: "When will I receive my refund?", a: "Refunds are processed within 5–7 business days of receiving the returned item. The amount will be credited back to your original payment method." },
    ],
  },
  {
    category: "Product & Craftsmanship",
    questions: [
      { q: "Are your products handmade?", a: "Every piece in our collection is either entirely hand-embroidered or features significant hand-finished detailing by artisan families across Jaipur and Surat. We do not mass-produce." },
      { q: "What fabrics do you use?", a: "We use premium Mulberry silk, silk georgette, chanderi, organza, and handloom cotton depending on the piece. All fabric details are listed in the product description." },
      { q: "How should I care for my piece?", a: "Most garments are recommended for dry cleaning only. Silk pieces should be stored in muslin cloth away from direct sunlight. Detailed care instructions are included with every order." },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-36 pb-24 container px-6 lg:px-12">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="text-secondary text-sm font-bold uppercase tracking-[0.4em] block mb-4">Support Center</span>
          <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary italic mb-6">Frequently Asked Questions</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Everything you need to know before, during, and after your heritage purchase.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-16">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="font-serif text-2xl font-bold text-primary italic mb-8 pb-4 border-b border-border flex items-center gap-3">
                <span className="text-secondary text-base">✦</span> {section.category}
              </h2>
              <div className="space-y-4">
                {section.questions.map((faq, i) => (
                  <details key={i} className="group border border-border rounded-2xl overflow-hidden">
                    <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-primary list-none hover:bg-gray-50/50 transition-colors">
                      <span className="font-serif text-lg">{faq.q}</span>
                      <ChevronDown className="w-5 h-5 text-secondary flex-shrink-0 group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed text-sm">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center bg-primary/5 rounded-[3rem] p-16 border border-primary/10 max-w-2xl mx-auto">
          <h3 className="font-serif text-3xl font-bold text-primary italic mb-4">Still Have Questions?</h3>
          <p className="text-muted-foreground mb-10 leading-relaxed">Our heritage concierge team is available Mon–Sat, 10am–7pm IST.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/12243779043" target="_blank" className="inline-flex items-center justify-center gap-3 h-14 px-10 rounded-xl bg-primary text-white font-bold uppercase tracking-widest text-xs hover:bg-secondary transition-colors shadow-xl">
              Chat on WhatsApp
            </a>
            <a href="mailto:openrize@gmail.com" className="inline-flex items-center justify-center gap-3 h-14 px-10 rounded-xl border border-border text-primary font-bold uppercase tracking-widest text-xs hover:border-secondary hover:text-secondary transition-all">
              Email Us
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
