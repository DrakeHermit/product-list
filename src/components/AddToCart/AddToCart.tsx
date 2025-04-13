import "./AddToCart.css"
import { useCart } from "../../utils/hooks/useContext"

export interface AddToCartProps {
  id: string,
  name: string,
  price: number,
  quantity?: number
}

export const AddToCart = ({ id, name, price }:  AddToCartProps) => {
  const { handleAddToCart, handleDecrement, handleIncrement, state } = useCart()

  const cartItem = state.cart.find(item => item.id === id)
  const isInCart = Boolean(cartItem)

  return (
    <div className="menu__add-to-cart">
      {
        isInCart?(
          <div className="menu__add-subtract">
            <button onClick={ () => handleDecrement(id)} className="subtract quantity"><img src="/images/icon-decrement-quantity.svg" alt="Decrement product" /></button>
            <p>{ cartItem?.quantity }</p>
            <button onClick={() => handleIncrement(id)} className="add quantity"><img src="/images/icon-increment-quantity.svg" alt="Increment product" /></button>
          </div>
        ) : (
             <button className="menu__add"
      onClick={() => handleAddToCart(id, name, price)}>
      <img src="/images/icon-add-to-cart.svg" alt="Add to cart button" />
      Add to cart
    </button>
      )}
    </div>
  )
}