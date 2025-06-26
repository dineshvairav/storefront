import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChefHat,
  CookingPot,
  Flame,
  Gauge,
  Layers3,
  Package,
  Presentation,
  Blend,
  Gem,
} from "lucide-react";
import MainLayout from "@/components/main-layout";
import { Header } from "@/components/header";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { products, categories } from "@/lib/data";

const serviceOptions = [
  {
    title: "Pressure Cooker Service",
    description: "Expert repairs and maintenance for your pressure cookers.",
    icon: Gauge,
  },
  {
    title: "LPG Stove Service",
    description: "Ensuring your LPG stoves are safe and efficient.",
    icon: Flame,
  },
  {
    title: "Mixer Service",
    description: "Servicing for mixers purchased from our shop.",
    icon: Blend,
    link: {
      text: "Verify Purchase",
      href: "#",
    },
  },
];

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <MainLayout>
      <Header title="Storefront Showcase" />
      <div className="flex-1 space-y-16 py-8 px-4 md:px-6 lg:px-8">
        <section className="text-center bg-card p-8 md:p-16 rounded-lg shadow-md">
          <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary">
            Storefront Showcase
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover a curated collection of high-quality goods, from timeless
            cookware to elegant presentation pieces.
          </p>
        </section>

        <section>
          <h2 className="font-headline text-3xl font-bold mb-8 text-center">
            Our Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link href={`/category/${category.slug}`} key={category.slug}>
                  <Card className="text-center p-4 hover:bg-secondary transition-colors duration-300 group">
                    <Icon className="h-12 w-12 mx-auto text-primary group-hover:scale-110 transition-transform" />
                    <p className="mt-2 font-semibold">{category.name}</p>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="font-headline text-3xl font-bold mb-8 text-center">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-headline text-3xl font-bold mb-8 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {serviceOptions.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="text-center p-6">
                  <Icon className="h-12 w-12 mx-auto text-accent mb-4" />
                  <CardHeader className="p-0">
                    <CardTitle className="font-headline text-xl">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 mt-2">
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                    {service.link && (
                      <Button asChild className="mt-4" variant="secondary">
                        <a
                          href={service.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {service.link.text}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </div>
      <footer className="bg-secondary text-secondary-foreground py-6 px-4 md:px-8 mt-16">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Storefront Showcase. All rights reserved.</p>
          </div>
      </footer>
    </MainLayout>
  );
}
