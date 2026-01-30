import rawProducts from "@/constants/products.json";
import { notFound } from "next/navigation";

import ProductBanner from "@/components/product/ProductBanner";
import ProductOverview from "@/components/product/ProductOverview";
import ProductFeatures from "@/components/product/ProductFeatures";
import ProductBenefits from "@/components/product/ProductBenefits";

export interface Product {
  slug: string;
  title: string;
  shortDescription: string;
  bannerImage: string;
  solution: string;
  features: string[];
  benefits: string[];
}

const products: Product[] = rawProducts as Product[];

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ProductDetailPage({ params }: PageProps) {
  const { slug } = params;

  const product = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  return (
    <>
      <ProductBanner
        title={product.title}
        description={product.shortDescription}
        image={product.bannerImage}
      />

      <ProductOverview
        solution={product.solution}
        image={product.bannerImage}
        title={product.title}
      />

      <ProductFeatures items={product.features} />

      <ProductBenefits title="Benefits" items={product.benefits} />
    </>
  );
}
