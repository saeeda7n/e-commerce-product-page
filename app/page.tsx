import { PRODUCTS } from "@/data/products";
import Link from "next/link";

export default function Home() {
 return (
  <div className="flex min-h-[calc(100vh-theme(spacing.20))] items-center">
   <div className="container flex flex-1 flex-wrap gap-3 pb-12 xl:gap-8">
    {PRODUCTS.map((value) => (
     <Link
      className="rounded-md border-2 px-5 py-2"
      key={value.id}
      href={`/product/${value.slug}`}
     >
      Page to {value.name}
     </Link>
    ))}
   </div>
  </div>
 );
}
