"use client";

import { useState, useMemo } from "react";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/data";
import { X } from "lucide-react";

type CategoryClientProps = {
  initialProducts: Product[];
  categorySlug: string;
  materials: string[];
};

export default function CategoryClient({ initialProducts, categorySlug, materials }: CategoryClientProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const isMaterialCategory = ['brass', 'aluminum', 'stainless-steel', 'cast-iron'].includes(categorySlug);

  const filteredProducts = useMemo(() => {
    if (!activeFilter) {
      return initialProducts;
    }
    return initialProducts.filter((p) => p.material === activeFilter);
  }, [activeFilter, initialProducts]);

  return (
    <div className="p-4 md:p-6 lg:p-8">
      {!isMaterialCategory && (
        <div className="mb-8">
          <h3 className="font-headline text-lg font-semibold mb-4 text-center">Filter by Material</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {materials.map((material) => (
              <Button
                key={material}
                variant={activeFilter === material ? "default" : "secondary"}
                onClick={() => setActiveFilter(activeFilter === material ? null : material)}
                className="capitalize"
              >
                {material}
                {activeFilter === material && <X className="ml-2 h-4 w-4" />}
              </Button>
            ))}
          </div>
        </div>
      )}
      
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-muted-foreground text-lg">No products found for this filter.</p>
        </div>
      )}
    </div>
  );
}
