"use client";

import { Mail, Phone } from "lucide-react";
import { SUPPORT_LINKS } from "@/lib/site-config";
import TrackedContactLink from "@/components/shared/TrackedContactLink";

export default function ContactStickyBar() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      <TrackedContactLink
        href={SUPPORT_LINKS.phone}
        channel="phone"
        location="sticky_bar"
        className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-xl transition-colors hover:bg-secondary"
      >
        <Phone className="h-4 w-4" />
        Call
      </TrackedContactLink>
      <TrackedContactLink
        href={SUPPORT_LINKS.email}
        channel="email"
        location="sticky_bar"
        className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-primary shadow-xl transition-colors hover:bg-primary hover:text-white"
      >
        <Mail className="h-4 w-4" />
        Email
      </TrackedContactLink>
    </div>
  );
}
