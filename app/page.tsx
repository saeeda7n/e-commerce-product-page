"use client";
import { PRODUCTS } from "@/data/products";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
 return (
  <div className="flex min-h-[calc(100vh-theme(spacing.20))] items-center">
   <div className="container flex flex-1 flex-wrap gap-3 pb-12 xl:gap-8">
    {PRODUCTS.map((value) => (
     <ProductCard product={value} key={value.id} />
    ))}
   </div>
  </div>
 );
}

function ProductCard({ product }: { product: TProduct }) {
 return (
  <Link
   className="flex w-72 flex-col overflow-hidden rounded-lg border-2"
   href={`/product/${product.slug}`}
  >
   <Image
    src={product.images.at(0)!.src}
    alt={product.name}
    className="h-44 object-cover object-center"
    width={450}
    height={450}
   />
   <div className="p-4">
    <span className="text-2xl font-bold text-gray-700">
     {product.price.formattedPrice}
    </span>
    <h2 className="font-medium">{product.name}</h2>
   </div>
  </Link>
 );
}
