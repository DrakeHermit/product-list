import { createContext, ReactNode, useEffect, useReducer } from "react";
import { CartItem } from "./cartTypes";
import { cartReducer } from "./cartReducer";
import { CartContextType } from "../utils/hooks/useContext";
import { useLocalStorage } from "../utils/hooks/useLocalStorage";

export const CartContext = createContext<CartContextType | null>(null) 

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const { getStorageValue, setStorageValue } = useLocalStorage('cart')
  const storedCart = getStorageValue() || []
  const initialState = {
    cart: storedCart as CartItem[],
  }

  const [state, dispatch] = useReducer(cartReducer, initialState)

  useEffect(() => {
    setStorageValue(state.cart)
  }, [state.cart, setStorageValue])

  // Handler functions
  const handleAddToCart = (id: string, name: string, price: number) => {
    const product: CartItem = {
      id,
      name,
      price,
      quantity: 1,
      image: {
        thumbnail: `/images/${id}-thumbnail.jpg`
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
