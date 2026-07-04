import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface PolicyLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

const PolicyLayout = ({ title, lastUpdated, children }: PolicyLayoutProps) => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-48 pb-32 container px-6 lg:px-12 max-w-4xl mx-auto">
        <div className="mb-16 pb-8 border-b border-border">
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-primary mb-4 italic">{title}</h1>
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">Effective Date: {lastUpdated}</p>
        </div>
        <div className="prose prose-stone max-w-none prose-headings:font-serif prose-headings:text-primary prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground">
          {children}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default PolicyLayout;
