import { CartState, CartAction } from "./cartTypes"

export const cartReducer = (state: CartState, action: CartAction): CartState => { 
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] }
    default:
      return state
  }
 }