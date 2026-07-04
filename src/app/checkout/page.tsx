"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE_CONFIG, SUPPORT_LINKS } from "@/lib/site-config";
import TrackedContactLink from "@/components/shared/TrackedContactLink";

const CheckoutPage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="pt-36 pb-24 px-4">
        <div className="max-w-xl mx-auto bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-primary/5 space-y-8">
          <div className="text-center space-y-4">
            <div className="w-14 h-14 md:w-16 md:h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
              <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-primary" />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold italic text-primary">Contact Us for Pricing</h1>
            <p className="text-muted-foreground text-sm md:text-base">
              We do not display prices online. Please contact our concierge for exact pricing, sizing help, and availability.
            </p>
          </div>
          <div className="grid gap-4">
            <TrackedContactLink href={SUPPORT_LINKS.phone} channel="phone" location="checkout_contact" className="block">
              <Button className="w-full h-12 text-[11px] uppercase tracking-[0.12em]">
                <Phone className="w-4 h-4 mr-2" />
                Call {SITE_CONFIG.supportPhoneDisplay}
              </Button>
            </TrackedContactLink>
            <TrackedContactLink href={SUPPORT_LINKS.email} channel="email" location="checkout_contact" className="block">
              <Button variant="outline" className="w-full h-12 text-[11px] uppercase tracking-[0.12em]">
                <Mail className="w-4 h-4 mr-2" />
                Email {SITE_CONFIG.supportEmail}
              </Button>
            </TrackedContactLink>
            <Link href="/contact" className="block">
              <Button variant="ghost" className="w-full h-11 text-[10px] uppercase tracking-[0.12em]">
                Open Contact Page
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default CheckoutPage;
