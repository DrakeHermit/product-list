import { CartState } from "../context/cartTypes"

export const calculateTotalPrice = (state: CartState) => { 
  return state.cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
 }