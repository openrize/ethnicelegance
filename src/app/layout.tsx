import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import ContactStickyBar from "@/components/layout/ContactStickyBar";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ethnic Elegance | Premium Ethnic Fashion for Every Celebration",
  description: "Shop premium ethnic fashion for weddings, festivals, and special occasions. Discover elegant styles crafted for timeless celebrations.",
  keywords: "ethnic fashion, wedding outfits, festive wear, designer ethnic clothing, traditional fashion, lehenga, saree, heritage wear",
  metadataBase: new URL("https://ethnicelegance.co"),
  openGraph: {
    title: "Ethnic Elegance | Premium Indian Heritage Fashion",
    description: "Experience the elegance of Indian heritage with our curated collection of luxury handcrafted ethnic wear.",
    type: "website",
    locale: "en_US",
    url: "https://ethnicelegance.co",
    siteName: "Ethnic Elegance",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Ethnic Elegance Collection" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethnic Elegance | Premium Indian Heritage Fashion",
    description: "Luxury handcrafted Indian ethnic wear delivered worldwide.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ethnic Elegance",
    "url": "https://ethnicelegance.co",
    "logo": "https://ethnicelegance.co/logo.png",
    "sameAs": [
      "https://instagram.com/ethnicelegance",
      "https://facebook.com/ethnicelegance"
    ],
    "description": "Premium eCommerce store for high-end Indian heritage fashion including lehengas, sarees, and groomsmenswear."
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable} h-full antialiased light`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans transition-colors selection:bg-primary/20 selection:text-primary">
        {children}
        <ContactStickyBar />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}

