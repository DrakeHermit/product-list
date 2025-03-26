import "./AddToCart.css"
import { useCart } from "../../utils/hooks/useContext"
import { CartItem } from "../../context/cartTypes"

interface AddToCartProps {
  id: string,
  name: string,
  price: number,
  image: string
}

export const AddToCart = ({ id, name, price, image }:  AddToCartProps) => {
  const { dispatch } = useCart()

  const handleAddToCart = () => {
    const product: CartItem = {
      id,
      name,
      price,
      image,
      quantity: 1
    }

    dispatch({ type: 'ADD_TO_CART', payload: product })
  }

  return (
    <button
      onClick={handleAddToCart}
      className="menu__add-to-cart">
      <img src="/src/assets/images/icon-add-to-cart.svg" alt="" />
      Add to Cart
    </button>
  )
}