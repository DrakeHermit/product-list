import "./ProductInCart.css"
import { useCart } from "../../utils/hooks/useContext"

export const ProductInCart = () => {
  const { state } = useCart();
 
  return (
    <>
      <ul>
        <li className="cart__product">
          <div className="cart__product-info">
            <h3>Classic Tiramisu</h3>
          <div className="product__quantity-info">
            <p>1x</p>
            <p>@ $4.99</p>
            <p>$4.99</p>
          </div>          
          </div>
          <button className="cart__product-remove">
            <img src="/src/assets/images/icon-remove-item.svg" alt="Remove an item from the cart" />
          </button>
        </li>
         <div>
      <h3>Cart Contents:</h3>
      {state.cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {state.cart.map(item => (
            <li key={item.id}>
              {item.name} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
        <hr />
      </ul>
      <div className="cart__total">
        <p>Order Total</p>
        <p className="cart__total-price">${state.cart[0]?.price.toFixed(2)}</p>
      </div>
      <div className="cart__vision">
        <img src="/src/assets/images/icon-carbon-neutral.svg" alt="" />
        <p>This is a <span className="bold">carbon-neutral</span> delivery</p>
      </div>
      <button className="cart__confirm">Confirm Order</button>
    </>
  )
}