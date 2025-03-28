import "./AddToCart.css"
import { useCart } from "../../utils/hooks/useContext"
import { CartItem } from "../../context/cartTypes"

interface AddToCartProps {
  id: string,
  name: string,
  price: number,
}

export const AddToCart = ({ id, name, price }:  AddToCartProps) => {
  const { dispatch, state } = useCart()

  const isInCart = state.cart.findIndex(item => item.id === id) !== -1

  const handleAddToCart = () => {
    const product: CartItem = {
      id,
      name,
      price,
      quantity: 1
    }

    dispatch({ type: 'ADD_TO_CART', payload: product })
  }

  return (
    <button
      onClick={handleAddToCart}
      className="menu__add-to-cart">
      <img src="/src/assets/images/icon-add-to-cart.svg" alt="" />
      {isInCart ? 'In Cart' : 'Add to Cart'}
    </button>
  )
}