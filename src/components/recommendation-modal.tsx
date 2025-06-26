"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  getProductRecommendations,
  GetProductRecommendationsOutput,
} from "@/ai/flows/product-recommendation";
import type { Product } from "@/lib/data";
import { Loader2, Wand2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Badge } from "./ui/badge";

type RecommendationModalProps = {
  product: Product;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

export default function RecommendationModal({
  product,
  isOpen,
  onOpenChange,
}: RecommendationModalProps) {
  const [recommendations, setRecommendations] =
    useState<GetProductRecommendationsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGetRecommendations = async () => {
    setIsLoading(true);
    setError(null);
    setRecommendations(null);
    try {
      const result = await getProductRecommendations({
        productName: product.name,
        productDescription: product.description,
        category: product.category,
      });
      setRecommendations(result);
    } catch (e) {
      setError("Failed to get recommendations. Please try again.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline flex items-center gap-2">
            <Wand2 className="text-accent" />
            AI Product Recommendations
          </DialogTitle>
          <DialogDescription>
            Discover products that pair well with the "{product.name}".
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          {isLoading && (
            <div className="flex flex-col items-center justify-center gap-4 text-muted-foreground">
              <Loader2 className="h-8 w-8 animate-spin" />
              <p>Our AI is thinking...</p>
            </div>
          )}
          {error && <Alert variant="destructive">{error}</Alert>}
          {recommendations && (
            <div className="space-y-4">
              <Alert>
                <AlertTitle className="font-headline">Reasoning</AlertTitle>
                <AlertDescription>
                  {recommendations.reasoning}
                </AlertDescription>
              </Alert>
              <div>
                <h4 className="font-semibold mb-2">Suggested Products:</h4>
                <div className="flex flex-wrap gap-2">
                  {recommendations.recommendedProducts.map((name, index) => (
                    <Badge key={index} variant="secondary">
                      {name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <DialogFooter>
          <Button
            onClick={handleGetRecommendations}
            disabled={isLoading}
            variant="default"
          >
            {isLoading ? "Generating..." : "Generate Suggestions"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
