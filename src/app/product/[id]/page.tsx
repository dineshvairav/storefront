import { products, Product } from "@/lib/data";
import MainLayout from "@/components/main-layout";
import { Header } from "@/components/header";
import ProductClient from "./product-client";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id);

  if (!product) {
    notFound();
  }

  return (
    <MainLayout>
      <Header title="Product Details" />
      <ProductClient product={product} />
    </MainLayout>
  );
}
