import "./AddToCart.css"
import { useCart } from "../../utils/hooks/useContext"
import { CartItem } from "../../context/cartTypes"

export interface AddToCartProps {
  id: string,
  name: string,
  price: number,
  quantity?: number
}

export const AddToCart = ({ id, name, price }:  AddToCartProps) => {
  const { dispatch, state } = useCart()

  const cartItem = state.cart.find(item => item.id === id)
  const isInCart = Boolean(cartItem)

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
    <div className="menu__add-to-cart">
      {
        isInCart?(
          <div className="menu__add-subtract">
            <button className="add"><img src="/src/assets/images/icon-decrement-quantity.svg" alt="Decrement product" /></button>
            <p>{ state.cart[0].quantity }</p>
            <button className="subtract"><img src="/src/assets/images/icon-increment-quantity.svg" alt="Increment product" /></button>
          </div>
        ) : (
             <button className="menu__add"
      onClick={handleAddToCart}>
      <img src="/src/assets/images/icon-add-to-cart.svg" alt="" />
      Add to cart
    </button>
      )}
    </div>
  )
}