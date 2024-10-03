"use client";
import React from "react";
import { MinusIcon, PlusIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type NumberInputProps = {
 onChange?: (value: number) => void;
 value: number;
};
const NumberInput = ({ onChange, value: count }: NumberInputProps) => {
 return (
  <div className="flex h-10 select-none items-center gap-3 rounded-md bg-gray-100 px-5">
   <button
    disabled={count <= 1}
    className="disabled:opacity-50"
    onClick={() => onChange && onChange(count - 1)}
   >
    <MinusIcon strokeWidth={3} className="size-5" />
   </button>
   <AnimatePresence mode={"popLayout"}>
    <motion.span
     key={count}
     animate={{ opacity: 1, y: 0 }}
     exit={{ opacity: 0, y: 5 }}
     initial={{ opacity: 0, y: -5 }}
     className="min-w-6 text-center text-lg font-medium"
    >
     {count}
    </motion.span>
   </AnimatePresence>
   <button
    disabled={count >= 20}
    className="disabled:opacity-50"
    onClick={() => onChange && onChange(count + 1)}
   >
    <PlusIcon strokeWidth={3} className="size-5" />
   </button>
  </div>
 );
};

export default NumberInput;
