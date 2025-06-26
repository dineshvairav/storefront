"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import RecommendationModal from "@/components/recommendation-modal";
import { Sparkles } from "lucide-react";

type ProductClientProps = {
  product: Product;
};

export default function ProductClient({ product }: ProductClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-card p-4 rounded-lg">
            <div className="relative aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain rounded-md"
                data-ai-hint={product.aiHint}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <Badge variant="outline" className="capitalize w-fit mb-2">{product.material}</Badge>
            <h1 className="font-headline text-3xl md:text-4xl font-bold">{product.name}</h1>
            <p className="text-2xl font-semibold text-primary mt-4">{product.price}</p>
            <p className="text-muted-foreground mt-4 text-lg">{product.description}</p>
            <div className="mt-8">
              <Button onClick={() => setIsModalOpen(true)}>
                <Sparkles className="mr-2 h-4 w-4" />
                Get AI Recommendations
              </Button>
            </div>
          </div>
        </div>
      </div>
      <RecommendationModal
        product={product}
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </>
  );
}
