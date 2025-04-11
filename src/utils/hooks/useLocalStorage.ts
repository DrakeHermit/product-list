import { CartItem } from "../../context/cartTypes";

export const useLocalStorage = (key: string) => { 
  const getStorageValue = (): CartItem[] | null => { 
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.log('Eror getting localStorage value:', error);
      return null;
    }
  }
  
  const setStorageValue = (value: CartItem[]): void => { 
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log('Error setting localStorage value:', error);
      
    }
  }

  return { getStorageValue, setStorageValue };
}