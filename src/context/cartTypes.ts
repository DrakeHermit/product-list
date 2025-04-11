export interface CartItem {
  id: string,
  name: string,
  price: number,
  quantity: number
  image: {
    thumbnail: string,
  }
}
 
export interface CartState {
  cart: CartItem[],
}

export type CartAction =
  | { type: 'ADD_TO_CART', payload: CartItem }
  | { type: 'ADD_QUANTITY', payload: { id: string, quantity: number } }
  | { type: 'REDUCE_QUANTITY', payload: { id: string, quantity: number } }
  | { type: 'REMOVE_FROM_CART', payload: string }
  | { type: 'CLEAR_CART' }
