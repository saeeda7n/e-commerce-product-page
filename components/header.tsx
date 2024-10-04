"use client";
import { ShoppingCart, Trash } from "lucide-react";
import { useState } from "react";
import { cn } from "@/utils/cn";
import { useCart } from "@/providers/cartContextProvider";
import Link from "next/link";

type ShoppingCartCardProps = {
 item: TCartItem;
};

export function Header() {
 return (
  <header className="sticky top-0 z-50 bg-white/50 backdrop-blur">
   <div className="container flex h-20 items-center">
    <h1 className="font-black uppercase">
     <Link href={"/"}>E-Commerce Product Page</Link>
    </h1>

    <div className="ms-auto">
     <ShoppingCartPopover />
    </div>
   </div>
  </header>
 );
}

function ShoppingCartPopover() {
 const [open, setOpen] = useState(false);
 const { totalOrders, cart } = useCart();
 return (
  <div className={cn("group relative select-none", { open: open })}>
   <button onClick={() => setOpen((p) => !p)}>
    <span
     key={totalOrders}
     className="absolute -end-2 -top-1 flex animate-pulse items-center rounded-full bg-black px-1 text-xs text-gray-50 transition duration-200 [animation-iteration-count:2] empty:opacity-0"
     children={totalOrders ? totalOrders : ""}
    />
    <ShoppingCart />
   </button>
   <div className="group pointer-events-none absolute start-8 top-5 z-10 flex max-h-96 min-h-16 w-72 -translate-x-full -translate-y-5 flex-col gap-2 overflow-y-auto overflow-x-hidden rounded-md border border-gray-100 bg-white p-2 opacity-0 shadow-xl transition duration-300 [scrollbar-width:thin] group-[.open]:pointer-events-auto group-[.open]:translate-y-0 group-[.open]:opacity-100">
    {cart.map((item) => (
     <ShoppingCartCard item={item} key={item.id} />
    ))}
    {+totalOrders <= 0 && (
     <div className="flex flex-1 items-center justify-center text-sm text-gray-500">
      Your cart is empty!
     </div>
    )}
   </div>
  </div>
 );
}

function ShoppingCartCard({ item }: ShoppingCartCardProps) {
 const { removeItem } = useCart();
 const {
  id,
  qty,
  product: { image, name, price, variants },
 } = item;

 return (
  <div className="flex gap-2">
   <img
    src={image.src}
    alt={image.alt}
    className="h-24 w-20 rounded-md object-cover object-center"
   />

   <div className="flex flex-col">
    <h3 className="text-sm font-medium">
     {name} x{qty}
    </h3>
    <span className="text-xs font-semibold text-red-500">
     {price.formattedPrice}
    </span>

    <div className="mt-auto flex flex-wrap items-center gap-2">
     {Object.keys(variants).map((name) => {
      switch (name) {
       case "colors": {
        return (
         <div
          key={name}
          className="size-4 rounded-md shadow-md"
          style={{ backgroundColor: variants[name].value }}
         />
        );
       }
       case "sizes": {
        return (
         <div
          key={name}
          className="rounded-md border px-2 text-xs font-semibold shadow-md"
         >
          {variants[name].name}
         </div>
        );
       }
      }
     })}

     <button className="ms-auto" onClick={() => removeItem(id)}>
      <Trash className="size-4 text-red-600" />
     </button>
    </div>
   </div>
  </div>
 );
}
