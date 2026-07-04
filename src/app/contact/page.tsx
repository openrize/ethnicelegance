import React from "react";
import { Phone, Mail, Clock, MessageCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";
import { SITE_CONFIG, SUPPORT_LINKS } from "@/lib/site-config";
import TrackedContactLink from "@/components/shared/TrackedContactLink";

export const metadata = {
  title: "Contact Us | Ethnic Elegance",
  description: "Reach out to our heritage concierge team for styling advice, size guidance, and artisan consultations.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-36 pb-24 container px-6 lg:px-12">
        <div className="text-center mb-20">
          <span className="text-secondary text-sm font-bold uppercase tracking-[0.4em] block mb-4">We're Here</span>
          <h1 className="font-serif text-5xl lg:text-7xl font-bold text-primary italic mb-6">Contact Our Concierge</h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed">
            Our heritage specialists are available to assist with sizing, styling, custom orders, and artisan consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
          <div className="text-center group p-10 rounded-[2rem] border border-border hover:border-secondary/30 hover:shadow-2xl transition-all">
            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mx-auto mb-6 group-hover:bg-secondary group-hover:text-white transition-all">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-primary italic mb-3">Call Concierge</h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">Speak directly with our heritage specialists.</p>
            <TrackedContactLink href={SUPPORT_LINKS.phone} channel="phone" location="contact_page" className="font-bold text-primary hover:text-secondary transition-colors text-lg">{SITE_CONFIG.supportPhoneDisplay}</TrackedContactLink>
          </div>
          
          <div className="text-center group p-10 rounded-[2rem] border border-border hover:border-secondary/30 hover:shadow-2xl transition-all">
            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mx-auto mb-6 group-hover:bg-secondary group-hover:text-white transition-all">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-primary italic mb-3">Email Us</h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">Response within 24 hours guaranteed.</p>
            <TrackedContactLink href={SUPPORT_LINKS.email} channel="email" location="contact_page" className="font-bold text-primary hover:text-secondary transition-colors">{SITE_CONFIG.supportEmail}</TrackedContactLink>
          </div>
          
          <div className="text-center group p-10 rounded-[2rem] border border-border hover:border-secondary/30 hover:shadow-2xl transition-all">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-600 mx-auto mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-primary italic mb-3">WhatsApp</h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">Instant support for sizing and styling queries.</p>
            <TrackedContactLink href={SUPPORT_LINKS.whatsapp} channel="whatsapp" location="contact_page" className="font-bold text-emerald-600 hover:text-emerald-700 transition-colors">Start a Chat</TrackedContactLink>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-primary/5 rounded-[3rem] p-12 lg:p-16 border border-primary/10">
            <h2 className="font-serif text-4xl font-bold text-primary italic mb-2 text-center">Send a Message</h2>
            <p className="text-muted-foreground text-sm text-center mb-12">Tell us your query and our artisan specialists will respond within 24 hours.</p>
            
            <ContactForm />
          </div>
        </div>

        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-3 text-muted-foreground text-sm">
            <Clock className="w-4 h-4 text-secondary" />
            <span>Concierge hours: <strong className="text-primary">Mon–Sat, 10am–7pm IST</strong></span>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
