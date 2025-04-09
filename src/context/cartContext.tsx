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

  // Handler functions
  const handleAddToCart = (id: string, name: string, price: number) => {
    const product: CartItem = {
      id,
      name,
      price,
      quantity: 1,
      image: {
        thumbnail: `/src/assets/images/${id}-thumnail.jpg`
      }
    }

    dispatch({ type: 'ADD_TO_CART', payload: product })
  }

  const handleIncrement = (id: string) => {
    const cartItem = state.cart.find(item => item.id === id)
    if (cartItem) {
      const newQuantity = cartItem.quantity + 1;
    
      dispatch({
        type: 'ADD_QUANTITY',
        payload: { id: id, quantity: newQuantity }
      });
    }
  }
  
  const handleDecrement = (id: string) => {
    const cartItem = state.cart.find(item => item.id === id)
    if (cartItem) {
      const newQuantity = cartItem.quantity - 1;

      if (newQuantity <= 0) {
        handleRemoveFromCart(id)
      } else {
        dispatch({
          type: 'REDUCE_QUANTITY',
          payload: { id: id, quantity: newQuantity }
        });
      }
    }
  }

  const handleRemoveFromCart = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id })
  }
  
  const value = { state, dispatch, handleAddToCart, handleIncrement, handleDecrement, handleRemoveFromCart }
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
