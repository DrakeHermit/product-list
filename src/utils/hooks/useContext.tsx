import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { CartState, CartAction } from '../../context/cartTypes';

export interface CartContextType {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  
  return context;
};