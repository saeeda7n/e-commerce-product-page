import React, { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/utils/cn";

type ButtonProps = PropsWithChildren & HTMLAttributes<HTMLButtonElement>;
const Button = ({ className, children, ...props }: ButtonProps) => {
 return (
  <button
   className={cn(
    "flex h-10 select-none items-center justify-center gap-2 rounded-md border-2 border-black px-5 transition duration-300 hover:bg-black hover:text-gray-50",
    className,
   )}
   {...props}
  >
   {children}
  </button>
 );
};

export default Button;
