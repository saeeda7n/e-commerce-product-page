"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

type ColorPickerProps = {
 colors: Array<TVariant>;
 onChange?: (value: TVariant) => void;
};
const ColorPicker = ({ colors, onChange }: ColorPickerProps) => {
 const [value, setValue] = useState(colors[0]);
 useEffect(() => {
  onChange && onChange(value);
 }, [value]);
 return (
  <div className="flex flex-wrap gap-1">
   {colors.map((color, index) => (
    <button
     onClick={() => setValue(color)}
     key={color.id}
     className={cn("size-7 rounded-full border-2 bg-red-600 ring-black", {
      "ring-2": color.value === value.value,
     })}
     style={{ backgroundColor: color.value }}
    />
   ))}
  </div>
 );
};

export default ColorPicker;
