"use client";
import Button from "@/components/ui/button";
import ColorPicker from "@/components/ui/colorPicker";
import SizePicker from "@/components/ui/sizePicker";
import React, { PropsWithChildren, useRef, useState } from "react";
import { ShoppingCart } from "lucide-react";
import NumberInput from "@/components/ui/numberInput";
import { useCart } from "@/providers/cartProvider";

type ProductCustomizerProps = {
 product: TProduct;
} & PropsWithChildren;

export function ProductCustomizer({
 product,
 children,
}: ProductCustomizerProps) {
 const { variants, name, id, images, price } = product;
 const [options, setOptions] = useState<{ [key: string]: TVariant }>({});
 const [qty, setQty] = useState(1);
 const { addItem } = useCart();
 return (
  <React.Fragment>
   <div className="space-y-3">
    {Object.keys(variants).map((name) => {
     switch (name) {
      case "colors": {
       return (
        <div className="space-y-1" key={name}>
         <span className="text-sm font-medium capitalize">{name}:</span>
         <ColorPicker
          colors={variants[name]}
          onChange={(value) => setOptions((p) => ({ ...p, [name]: value }))}
         />
        </div>
       );
      }
      case "sizes": {
       return (
        <div className="space-y-1" key={name}>
         <span className="text-sm font-medium capitalize">{name}:</span>
         <SizePicker
          sizes={variants[name]}
          onChange={(value) => setOptions((p) => ({ ...p, [name]: value }))}
         />
        </div>
       );
      }
     }
    })}
   </div>
   {children}
   <div className="mt-auto flex gap-5 pt-8">
    <NumberInput value={qty} onChange={setQty} />
    <Button className="flex-1" onClick={() => _addItem()}>
     <ShoppingCart className="size-5" />
     Add To Cart
    </Button>
   </div>
  </React.Fragment>
 );

 function _addItem() {
  addItem({
   id: Math.random().toString(32),
   product: {
    name,
    id,
    price,
    image: images[0],
    variants: options,
   },
   qty,
  });
  setQty(1);
 }
}
