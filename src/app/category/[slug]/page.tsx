import { categories, products, type Product, type Category } from "@/lib/data";
import MainLayout from "@/components/main-layout";
import { Header } from "@/components/header";
import CategoryClient from "./category-client";

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

function getCategoryData(slug: string): { category: Category | undefined, categoryProducts: Product[] } {
  const category = categories.find((c) => c.slug === slug);
  if (!category) {
    return { category: undefined, categoryProducts: [] };
  }

  // Check if category name is a material
  const isMaterialCategory = ['brass', 'aluminum', 'stainless-steel', 'cast-iron'].includes(category.slug);

  const categoryProducts = products.filter((product) => {
    if (isMaterialCategory) {
      return product.material === category.name.toLowerCase();
    }
    return product.category === category.slug;
  });

  return { category, categoryProducts };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const { category, categoryProducts } = getCategoryData(params.slug);

  if (!category) {
    return (
      <MainLayout>
        <Header title="Category Not Found" />
        <div className="p-8 text-center">
          <p>Sorry, we could not find the category you were looking for.</p>
        </div>
      </MainLayout>
    );
  }

  const materials = Array.from(new Set(products.map(p => p.material))).filter(m => m !== 'other');
  
  return (
    <MainLayout>
      <Header title={category.name} />
      <CategoryClient 
        initialProducts={categoryProducts} 
        allProducts={products}
        category={category}
        materials={materials} 
      />
    </MainLayout>
  );
}
