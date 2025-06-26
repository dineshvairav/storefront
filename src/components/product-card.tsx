import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Product } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { Badge } from "./ui/badge";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="group">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={product.aiHint}
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <Badge variant="secondary" className="mb-2">{product.material}</Badge>
          <CardTitle className="font-headline text-lg mb-2 truncate group-hover:text-primary transition-colors">
            {product.name}
          </CardTitle>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {product.description}
          </p>
          <div className="flex justify-between items-center mt-4">
            <p className="font-semibold text-lg text-primary">{product.price}</p>
            <div className="flex items-center text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View
              <ArrowRight className="ml-1 h-4 w-4" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
