"use client";
import React, {
 createContext,
 type PropsWithChildren,
 useContext,
 useMemo,
 useState,
} from "react";

type CartProps = PropsWithChildren;

const cartContext = createContext<null | TCartContext>(null);
const CartContextProvider = ({ children }: CartProps) => {
 const [cart, setCart] = useState<Array<TCartItem>>([]);
 const totalOrders = useMemo(
  () => cart.reduce((total, item) => total + item.qty, 0),
  [cart],
 );
 return (
  <cartContext.Provider value={{ cart, addItem, removeItem, totalOrders }}>
   {children}
  </cartContext.Provider>
 );

 function addItem(item: TCartItem) {
  setCart((p) => [...p, item]);
 }

 function removeItem(id: ID) {
  setCart((p) => [...p.filter((v) => v.id !== id)]);
 }
};

export default CartContextProvider;

export const useCart = () => {
 const context = useContext(cartContext);
 if (!context) throw new Error("a proper error message.");
 return context;
};
