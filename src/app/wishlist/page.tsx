import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ALL_PRODUCTS } from "@/data/products";
import WishlistClientHeader from "@/components/wishlist/WishlistClientHeader";

export default function WishlistPage() {
  const allById = new Map(ALL_PRODUCTS.map((p) => [p.id, p]));

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-36 pb-24 container px-6 lg:px-12">
        <WishlistClientHeader allById={Array.from(allById.entries())} />
      </section>
      <Footer />
    </main>
  );
}
