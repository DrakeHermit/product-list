import { createContext, ReactNode, useReducer } from "react";
import { CartItem } from "./cartTypes";
import { cartReducer } from "./cartReducer";
import { CartContextType } from "../utils/hooks/useContext";

export const CartContext = createContext<CartContextType | null>(null) 

const initialState = {
  cart: [] as CartItem[],
}

export const CartProvider = ({ children }: {children: ReactNode}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  
  const value = { state, dispatch }
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
