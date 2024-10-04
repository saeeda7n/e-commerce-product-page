import type { Metadata } from "next";
import "./globals.css";
import { PropsWithChildren } from "react";
import { lexend } from "@/utils/fonts";
import { cn } from "@/utils/cn";
import { Header } from "@/components/header";
import CartContextProvider from "@/providers/cartContextProvider";

export const metadata: Metadata = {
 title: "E-Commerce Product Page",
 description: "E-Commerce Product Page is a mini task to show my abilities!",
};

type RootLayoutProps = Readonly<PropsWithChildren>;

export default function RootLayout({ children }: RootLayoutProps) {
 return (
  <html lang="en">
   <body
    className={cn(
     "min-h-screen bg-white font-lexend antialiased selection:bg-zinc-950 selection:text-gray-50",
     lexend.variable,
    )}
   >
    <CartContextProvider>
     <Header />
     <main>{children}</main>
    </CartContextProvider>
   </body>
  </html>
 );
}
