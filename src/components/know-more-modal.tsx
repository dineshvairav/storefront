"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Store,
  CalendarClock,
  Home,
  GlassWater,
  Presentation,
  Package,
  Layers3,
  Gem,
  Blend,
  UtensilsCrossed,
  Utensils,
  CookingPot,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type KnowMoreModalProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

const features: { title: string; icon: LucideIcon }[] = [
  { title: "Wholesale & Retail", icon: Store },
  { title: "Since 1960", icon: CalendarClock },
  { title: "Housewares", icon: Home },
  { title: "Crockery", icon: UtensilsCrossed },
  { title: "Presentation article", icon: Presentation },
  { title: "Aluminum Vessels", icon: Package },
  { title: "Steel Vessels", icon: Layers3 },
  { title: "Brass Articles", icon: Gem },
  { title: "Glassware", icon: GlassWater },
  { title: "Small appliances", icon: Blend },
  { title: "Traditional Utensils", icon: Utensils },
  { title: "Cast Iron", icon: CookingPot },
];

export function KnowMoreModal({ isOpen, onOpenChange }: KnowMoreModalProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent
        side="bottom"
        className="rounded-t-lg max-h-[80vh] overflow-y-auto"
      >
        <SheetHeader className="text-center mb-6">
          <SheetTitle className="text-2xl font-bold">What We Offer</SheetTitle>
          <SheetDescription>
            A wide range of quality products for your every need.
          </SheetDescription>
        </SheetHeader>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="text-center flex flex-col items-center justify-center p-4 aspect-square"
            >
              <CardHeader className="p-0 mb-2">
                <feature.icon className="h-8 w-8 text-primary" />
              </CardHeader>
              <CardContent className="p-0">
                <p className="font-semibold text-sm">{feature.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
