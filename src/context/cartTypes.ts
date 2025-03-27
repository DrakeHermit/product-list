export interface CartItem {
  id: string,
  name: string,
  price: number,
  quantity: number
}
 
export interface CartState {
  cart: CartItem[],
}

export type CartAction =
  | { type: 'ADD_TO_CART', payload: CartItem }
