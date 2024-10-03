"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

type SizePickerProps = {
 sizes: Array<TVariant>;
 onChange?: (value: TVariant) => void;
};
const SizePicker = ({ sizes, onChange }: SizePickerProps) => {
 const [value, setValue] = useState(sizes[0]);
 useEffect(() => {
  onChange && onChange(value);
 }, [value]);
 return (
  <div className="flex flex-wrap gap-2">
   {sizes.map((size) => (
    <button
     onClick={() => setValue(size)}
     key={size.id}
     className={cn(
      "flex h-7 items-center rounded-md border-2 px-3 text-sm font-medium ring-black",
      {
       "ring-2": size.value === value.value,
      },
     )}
    >
     {size.name}
    </button>
   ))}
  </div>
 );
};

export default SizePicker;
