import "./ProductInCart.css"
import { useCart } from "../../utils/hooks/useContext"
import { Fragment } from "react/jsx-runtime";
import { calculateTotalPrice } from "../../utils/calculateTotalPrice";

export const ProductInCart = () => {
  const { state } = useCart();
 
  return (
    <>
      <ul>
        {state.cart.map(product => (
          <Fragment key={product.id} >
            <li className="cart__product">
              <div className="cart__product-info">
                <h3>{product.name}</h3>
              <div className="product__quantity-info">
                <p>{product.quantity}x</p>
                <p>@ ${product.price.toFixed(2)}</p>
                <p>${product.price.toFixed(2)}</p>
              </div>          
              </div>
              <button className="cart__product-remove">
                <img src="/src/assets/images/icon-remove-item.svg" alt="Remove an item from the cart" />
              </button>
            </li>
            <hr />
          </Fragment>
        ))}
      </ul>
      <div className="cart__total">
        <p>Order Total</p>
        <p className="cart__total-price">${calculateTotalPrice(state)}</p>
      </div>
      <div className="cart__vision">
        <img src="/src/assets/images/icon-carbon-neutral.svg" alt="" />
        <p>This is a <span className="bold">carbon-neutral</span> delivery</p>
      </div>
      <button className="cart__confirm">Confirm Order</button>
    </>
  )
}