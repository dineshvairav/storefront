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
import { Separator } from "./ui/separator";

type KnowMoreModalProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
};

type Feature = {
  title: string;
  icon: LucideIcon;
  href: string;
};

const features: Feature[] = [
  { title: "Wholesale & Retail", icon: Store, href: "https://shop.usha1960.trade/shop" },
  { title: "Since 1960", icon: CalendarClock, href: "https://shop.usha1960.trade/about" },
  { title: "Housewares", icon: Home, href: "https://shop.usha1960.trade/shop?category=preethi" },
  { title: "Crockery", icon: UtensilsCrossed, href: "https://shop.usha1960.trade/shop?category=crockery" },
  { title: "Presentation article", icon: Presentation, href: "https://shop.usha1960.trade/shop?category=gift" },
  { title: "Aluminum Vessels", icon: Package, href: "https://shop.usha1960.trade/shop?category=aluminium" },
  { title: "Steel Vessels", icon: Layers3, href: "https://shop.usha1960.trade/shop?category=steel" },
  { title: "Brass Articles", icon: Gem, href: "https://shop.usha1960.trade/shop?category=brass" },
  { title: "Glassware", icon: GlassWater, href: "https://shop.usha1960.trade/shop?category=glassware" },
  { title: "Small appliances", icon: Blend, href: "https://shop.usha1960.trade/shop?category=sujata" },
  { title: "Traditional Utensils", icon: Utensils, href: "https://shop.usha1960.trade/shop?category=traditional" },
  { title: "Cast Iron", icon: CookingPot, href: "https://shop.usha1960.trade/shop?category=cast-iron" },
];

export function KnowMoreModal({ isOpen, onOpenChange }: KnowMoreModalProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent
        side="bottom"
        className="rounded-t-lg max-h-[90vh] overflow-y-auto p-0"
      >
        <SheetHeader className="text-center p-6">
          <SheetTitle className="text-3xl font-bold">About Usha</SheetTitle>
          <SheetDescription>
            A legacy of quality and trust, serving you since 1960.
          </SheetDescription>
        </SheetHeader>
        <div className="px-6 pb-6 space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-center text-primary">
              Our Story
            </h3>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto">
              Founded in 1960, Usha has been a cornerstone of households for
              generations. We started as a humble store with a simple mission: to
              provide high-quality, durable household goods to our community.
              Over the decades, we've grown and adapted, expanding our offerings
              from traditional vessels to modern appliances, but our commitment
              to quality and customer satisfaction has never wavered. We are
              proud to be a part of your home.
            </p>
          </div>

          <Separator />

          <div>
            <h3 className="text-xl font-semibold mb-4 text-center text-primary">
              What We Offer
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {features.map((feature) => (
                <a
                  key={feature.title}
                  href={feature.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="text-center flex flex-col items-center justify-center p-4 aspect-square h-full transition-all duration-200 group-hover:shadow-xl group-hover:-translate-y-1 group-hover:bg-white/5">
                    <CardHeader className="p-0 mb-2">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="font-semibold text-sm">{feature.title}</p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>

          <div className="pt-4 text-center text-sm text-muted-foreground">
            <p>
              <strong>Note:</strong> Service available for mixers, cookers, and
              LPG stoves bought from our ushª
              <span className="text-primary font-sans">O</span>ªpp store.
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
