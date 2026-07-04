"use client";

import React from "react";

interface TrackedContactLinkProps {
  href: string;
  channel: "phone" | "email" | "whatsapp";
  location: string;
  productId?: number;
  className?: string;
  children: React.ReactNode;
}

export default function TrackedContactLink({
  href,
  channel,
  location,
  productId,
  className,
  children,
}: TrackedContactLinkProps) {
  const track = () => {
    const payload = JSON.stringify({
      eventType: "contact_click",
      channel,
      location,
      productId,
    });

    if (typeof navigator !== "undefined" && navigator.sendBeacon) {
      const blob = new Blob([payload], { type: "application/json" });
      navigator.sendBeacon("/api/engagement", blob);
      return;
    }

    void fetch("/api/engagement", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
      keepalive: true,
    });
  };

  return (
    <a href={href} onClick={track} className={className}>
      {children}
    </a>
  );
}
