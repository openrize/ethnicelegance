"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const subjects = [
  "Sizing Consultation",
  "Custom Order Enquiry",
  "Return / Exchange",
  "Shipping Query",
  "General Enquiry",
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setMessage(null);
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const productIdParam =
      typeof window !== "undefined"
        ? new URLSearchParams(window.location.search).get("productId")
        : null;

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
      preferredContact: String(formData.get("preferredContact") ?? "email"),
      sourcePage: typeof window !== "undefined" ? window.location.pathname : "/contact",
      productId:
        productIdParam && !Number.isNaN(Number(productIdParam))
          ? Number(productIdParam)
          : undefined,
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    setIsSubmitting(false);

    if (!response.ok) {
      setError(String(data.error ?? "Unable to submit your message."));
      return;
    }

    event.currentTarget.reset();
    setMessage("Thanks! Our team will get back to you within 24 hours.");
  }

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-primary">Full Name</label>
          <input
            required
            name="name"
            type="text"
            placeholder="Priya Sharma"
            className="w-full h-14 rounded-2xl border border-border bg-white px-6 text-sm focus:outline-none focus:border-secondary transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-primary">Email Address</label>
          <input
            required
            name="email"
            type="email"
            placeholder="priya@example.com"
            className="w-full h-14 rounded-2xl border border-border bg-white px-6 text-sm focus:outline-none focus:border-secondary transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest font-bold text-primary">Phone Number (optional)</label>
          <input
            name="phone"
            type="tel"
            placeholder="+1 224 377 9043"
            className="w-full h-14 rounded-2xl border border-border bg-white px-6 text-sm focus:outline-none focus:border-secondary transition-colors"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-widest font-bold text-primary">Preferred Contact</label>
        <select
          name="preferredContact"
          className="w-full h-14 rounded-2xl border border-border bg-white px-6 text-sm focus:outline-none focus:border-secondary transition-colors appearance-none"
          defaultValue="email"
        >
          <option value="email">Email</option>
          <option value="phone">Phone Call</option>
          <option value="whatsapp">WhatsApp</option>
        </select>
      </div>
      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-widest font-bold text-primary">Subject</label>
        <select
          name="subject"
          className="w-full h-14 rounded-2xl border border-border bg-white px-6 text-sm focus:outline-none focus:border-secondary transition-colors appearance-none"
          defaultValue={subjects[0]}
        >
          {subjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-widest font-bold text-primary">Your Message</label>
        <textarea
          required
          minLength={10}
          name="message"
          rows={5}
          placeholder="Tell us how we can assist you..."
          className="w-full rounded-2xl border border-border bg-white px-6 py-4 text-sm focus:outline-none focus:border-secondary transition-colors resize-none"
        />
      </div>

      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      {message ? <p className="text-sm text-emerald-600">{message}</p> : null}

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full h-16 bg-primary hover:bg-secondary text-white font-bold uppercase tracking-widest text-xs rounded-2xl shadow-2xl transition-all active:scale-95"
      >
        <Send className="w-4 h-4 mr-3" />
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
