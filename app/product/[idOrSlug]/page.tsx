import React from "react";
import { PRODUCTS } from "@/data/products";
import { ProductImages } from "@/components/productImages";
import { ProductCustomizer } from "@/components/productCustomizer";
import { ProductReviews } from "@/components/productReviews";
import { notFound } from "next/navigation";
import { Star } from "lucide-react";

type SingleProductPageProps = { params: { idOrSlug: string } };
const SingleProductPage = ({
 params: { idOrSlug },
}: SingleProductPageProps) => {
 const product = PRODUCTS.find(({ id, slug }) => [id, slug].includes(idOrSlug));
 if (!product) notFound();
 const { comments } = product;

 return (
  <div className="flex min-h-[calc(100vh-theme(spacing.20))]">
   <div className="container flex flex-1 flex-col gap-5 pb-12 pt-5 xl:gap-16">
    <div className="flex flex-1 gap-5 max-lg:flex-col xl:gap-8">
     <ProductImages images={product.images} />

     <div className="flex w-full flex-shrink-0 flex-col gap-3 lg:max-w-md">
      <h2 className="border-b pb-4 text-3xl font-medium text-gray-900 lg:text-4xl">
       {product.name}
      </h2>
      <div className="flex items-center justify-between">
       <span className="text-2xl font-semibold">
        {product.price.formattedPrice}
       </span>
       <div className="flex items-center gap-1">
        <Star className="size-6 fill-amber-500 stroke-amber-500" />
        <span className="text-xl font-semibold">{product.rate.current}/5</span>
       </div>
      </div>

      <ProductCustomizer product={product}>
       <p className="mt-3 whitespace-pre-wrap text-gray-700">{product.body}</p>
      </ProductCustomizer>
     </div>
    </div>
    <ProductReviews comments={comments} />
   </div>
  </div>
 );
};

export default SingleProductPage;
