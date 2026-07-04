import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Accessibility Statement | Ethnic Elegance",
  description: "Our commitment to making the Ethnic Elegance website accessible to all users.",
};

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-36 pb-24 container px-6 lg:px-12 max-w-3xl mx-auto">
        <div className="mb-16">
          <span className="text-secondary text-sm font-bold uppercase tracking-[0.4em] block mb-4">Legal</span>
          <h1 className="font-serif text-5xl font-bold text-primary italic mb-4">Accessibility Statement</h1>
          <p className="text-muted-foreground">Last updated: April 2026</p>
        </div>

        <div className="space-y-10 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">Our Commitment</h2>
            <p>Ethnic Elegance is committed to ensuring our website is accessible to everyone, including people with disabilities. We continually improve our site to meet WCAG 2.1 Level AA accessibility standards.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">Measures We Have Taken</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All images have descriptive alternative text.</li>
              <li>Interactive elements are keyboard navigable.</li>
              <li>Color contrast meets WCAG 2.1 AA requirements.</li>
              <li>Forms have clear labels and error messages.</li>
              <li>Our site works with screen readers including NVDA and VoiceOver.</li>
            </ul>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">Known Limitations</h2>
            <p>Some third-party content embedded on our site may not fully meet our accessibility standards. We are working with our partners to resolve these issues.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">Feedback</h2>
            <p>If you experience any accessibility barriers on our site, please contact us at <a href="mailto:openrize@gmail.com" className="text-secondary hover:underline">openrize@gmail.com</a>. We take your feedback seriously and aim to respond within 2 business days.</p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
