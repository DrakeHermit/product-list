import { ProcessedData } from "../utils/transformJSON";

export interface CartItem extends ProcessedData { 
  quantity: number
}
 
export interface CartState {
  cart: CartItem[],
}

export type CartAction =
  | { type: 'ADD_TO_CART', payload: ProcessedData }
