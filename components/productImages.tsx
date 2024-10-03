import { HTMLAttributes, useMemo } from "react";
import { cn } from "@/utils/cn";
import Image from "next/image";

type ProductImagesProps = {
 images: TImage[];
} & HTMLAttributes<HTMLDivElement>;

export function ProductImages({
 images,
 className,
 ...props
}: ProductImagesProps) {
 const selected = useMemo(() => images.slice(0, 3), [images]);
 return (
  <div
   className={cn(
    "flex h-[clamp(22rem,calc(100vh),28rem)] sm:h-[34rem] xl:h-[42rem]",
    className,
   )}
   {...props}
  >
   <div
    className={"grid flex-1 grid-cols-5 grid-rows-2 gap-0.5 sm:gap-1 lg:gap-2"}
   >
    {selected.map((image) => (
     <div
      key={image.id}
      className="group col-span-2 overflow-hidden bg-gray-100 first:col-span-3 first:row-span-2"
     >
      <Image
       draggable={false}
       src={image.src}
       alt={image.alt}
       width={780}
       height={780}
       className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
      />
     </div>
    ))}
   </div>
  </div>
 );
}
