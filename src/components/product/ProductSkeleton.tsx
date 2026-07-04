import React from "react";
import { cn } from "@/lib/utils";

interface ProductSkeletonProps {
  className?: string;
}

export const ProductSkeleton = ({ className }: ProductSkeletonProps) => {
  return (
    <div className={cn("flex flex-col space-y-4 animate-pulse", className)}>
      <div className="relative aspect-[3/4] bg-gray-200 rounded-2xl w-full" />
      <div className="space-y-2 flex flex-col items-center">
        <div className="h-2 w-20 bg-gray-200 rounded-full" />
        <div className="h-4 w-40 bg-gray-200 rounded-full" />
        <div className="h-5 w-24 bg-gray-200 rounded-full" />
      </div>
    </div>
  );
};

export const ShopSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
      {[...Array(6)].map((_, i) => (
        <ProductSkeleton key={i} />
      ))}
    </div>
  );
};
