import { CartState, CartAction } from "./cartTypes"

export const cartReducer = (state: CartState, action: CartAction): CartState => { 
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] }
    case 'ADD_QUANTITY':
      console.log('Updating quantity')
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        )
      }
    case 'REDUCE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        )
      }
    default:
      return state
  }
 }