import { Star } from "lucide-react";
import { cn } from "@/utils/cn";

type StarBoxProps = {
 rate: number;
 starClassName?: string;
};

export function StarBox({ rate, starClassName }: StarBoxProps) {
 return (
  <div className="flex gap-1">
   {[...new Array(5)].map((_, idx) => (
    <Star
     key={idx}
     className={cn("size-5 fill-gray-300 stroke-gray-300", starClassName, {
      "fill-amber-500 stroke-amber-500": idx < ~~rate,
     })}
    />
   ))}
  </div>
 );
}
