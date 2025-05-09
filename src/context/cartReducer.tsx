import { CartState, CartAction } from "./cartTypes"

export const cartReducer = (state: CartState, action: CartAction): CartState => { 
  switch (action.type) {
    case 'ADD_TO_CART':
      const newState = {
      ...state,
      cart: [...state.cart, action.payload]
      };
      return newState;
    case 'ADD_QUANTITY':
  const updatedCart = state.cart.map(item => 
    item.id === action.payload.id 
      ? { ...item, quantity: action.payload.quantity } 
      : item
  );
  return { ...state, cart: updatedCart };
    case 'REDUCE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        )
      }
    case 'REMOVE_FROM_CART':
      const filteredCart = state.cart.filter(item => item.id !== action.payload);
      return {
        ...state,
        cart: filteredCart
      }
    case 'CLEAR_CART':
      return {
        ...state,
        cart: []
      }
    default:
      return state
  }
 }