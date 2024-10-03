import React, { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/utils/cn";

type InputAreaProps = PropsWithChildren & HTMLAttributes<HTMLDivElement>;
type InputErrorMessageProps = PropsWithChildren &
 HTMLAttributes<HTMLParagraphElement>;
const Input = ({ children, className, ...props }: InputAreaProps) => {
 return (
  <div className={cn("w-full", className)} {...props}>
   {children}
  </div>
 );
};

export default Input;

export function InputErrorMessage({
 children,
 className,
 ...props
}: InputErrorMessageProps) {
 return (
  children && (
   <p className={cn("text-xs text-red-600", className)} {...props}>
    {children}
   </p>
  )
 );
}
