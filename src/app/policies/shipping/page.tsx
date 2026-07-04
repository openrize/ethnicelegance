import React from "react";
import PolicyLayout from "@/components/layout/PolicyLayout";

export default function ShippingPolicy() {
  return (
    <PolicyLayout title="Shipping & Heritage Handling" lastUpdated="April 10, 2025">
      <section>
        <h3>1. Artisan Handling & Packaging</h3>
        <p>
          At Ethnic Elegance, each garment is more than just clothing—it is a piece of Indian heritage. Therefore, we dedicate high care to the packaging process. Every item is steamed, quality-checked for embroidery integrity, and wrapped in acid-free tissue paper before being placed in our signature luxury gift boxes.
        </p>
      </section>

      <section className="mt-12">
        <h3>2. Processing Timelines</h3>
        <p>
          As many of our pieces are handcrafted and hand-finished, processing times may vary:
        </p>
        <ul>
          <li><strong>Ready-to-Wear:</strong> Ships within 2-4 business days.</li>
          <li><strong>Custom Tailored / Made-to-Order:</strong> Requires 15-21 business days for master artisan completion.</li>
          <li><strong>Accessories:</strong> Ships within 1-3 business days.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h3>3. Global Express Delivery</h3>
        <p>
          We partner with premium courier services (DHL Express, FedEx) to ensure secure global transit.
        </p>
        <table className="min-w-full border-collapse border border-border mt-6">
          <thead className="bg-accent/5 font-bold uppercase text-[10px] tracking-widest text-primary">
            <tr>
              <th className="border border-border p-4 text-left">Region</th>
              <th className="border border-border p-4 text-left">Estimated Transit</th>
              <th className="border border-border p-4 text-left">Shipping Details</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr>
              <td className="border border-border p-4">India (Domestic)</td>
              <td className="border border-border p-4">2-5 Business Days</td>
              <td className="border border-border p-4">Shared by concierge</td>
            </tr>
            <tr>
              <td className="border border-border p-4">North America (US/CA)</td>
              <td className="border border-border p-4">4-7 Business Days</td>
              <td className="border border-border p-4">Contact concierge for exact rates</td>
            </tr>
            <tr>
              <td className="border border-border p-4">Europe & UK</td>
              <td className="border border-border p-4">5-8 Business Days</td>
              <td className="border border-border p-4">Contact concierge for exact rates</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mt-12">
        <h3>4. Tracking Your Heritage Piece</h3>
        <p>
          Once your order has been handed to our logistics partners, you will receive a tracking link via email and WhatsApp. You can follow your piece's journey from our artisans' hands to your doorstep.
        </p>
      </section>
    </PolicyLayout>
  );
}
