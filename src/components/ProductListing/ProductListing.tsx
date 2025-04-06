import { useCart } from "../../utils/hooks/useContext"
import { Fragment } from "react/jsx-runtime";

interface Props {
  isInCart: boolean
}

export const ProductListing = ({isInCart}: Props) => {
  const { state, handleRemoveFromCart } = useCart();

  const calculateTotalItemPrice = (price: number, quantity:number): string => {
    return (price * quantity).toFixed(2);
  }
 

  return (
    <ul>
          {state.cart.map(product => (
            <Fragment key={product.id}>
              <li className="cart__product">
                <div className="cart__product-info">
                  <h3>{product.name}</h3>
                <div className="product__quantity-info">
                  <p>{product.quantity}x</p>
                  <p>@ ${product.price.toFixed(2)}</p>
                  {isInCart && (<p className="product__total-price">${calculateTotalItemPrice(product.price, product.quantity)}</p>)}
                </div>
                </div>
                {isInCart && (<button onClick={() => handleRemoveFromCart(product.id)} className="cart__product-remove">
                  <img src="/src/assets/images/icon-remove-item.svg" alt="Remove an item from the cart" />
                </button>)}
                {!isInCart && (<p className="modal__product-price">${calculateTotalItemPrice(product.price, product.quantity)}</p>)}
              </li>
              <hr />
            </Fragment>
          ))}
        </ul>
  )
}