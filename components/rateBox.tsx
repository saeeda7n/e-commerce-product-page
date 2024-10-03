"use client";
import { Star } from "lucide-react";
import { cn } from "@/utils/cn";
import { useState } from "react";

type RateCardProp = {
 starsClassName?: string;
 onChange?: (rate: number) => void;
 className?: string;
 activeStarClassName?: string;
 name?: string;
 defaultRate?: number;
};

export function RateBox({
 starsClassName,
 onChange,
 className,
 activeStarClassName,
 name,
 defaultRate,
}: RateCardProp) {
 const [rate, setRate] = useState(defaultRate || 1);

 return (
  <div className={cn("flex", className)}>
   <input
    hidden
    name={name}
    value={rate}
    type="number"
    onChange={() => onChange && onChange(rate)}
   />
   {[...new Array(5)].map((_, idx) => (
    <Star
     onClick={() => setRate(idx + 1)}
     role="button"
     key={idx}
     className={cn("fill-gray-300 stroke-gray-300", starsClassName, {
      [activeStarClassName || "fill-yellow-500 stroke-yellow-500"]: idx < rate,
     })}
    />
   ))}
   <label className="ms-2 w-7 text-right font-medium">
    {rate}/<sub>5</sub>
   </label>
  </div>
 );
}
