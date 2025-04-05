import "./ProductInCart.css"
import { useCart } from "../../utils/hooks/useContext"
import { Fragment } from "react/jsx-runtime";
import { calculateTotalPrice } from "../../utils/calculateTotalPrice";
import { useModal } from "../../utils/hooks/useModal";
import { Modal } from "../Modal/Modal";

interface Props {
  isInCart: boolean
}

export const ProductInCart = ({isInCart = true}: Props) => {
  const { state, handleRemoveFromCart } = useCart();
  const { openModal, closeModal, isOpen } = useModal();

  const calculateTotalItemPrice = (price: number, quantity:number): string => {
    return (price * quantity).toFixed(2);
  }
 
  return (
    <>
      <div className={`${isInCart ? '' : 'modal__list'}`}>
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
        <div className={`${isInCart ? `cart__total` : 'modal__total'}`}>
          <p>Order Total</p>
          <p className="cart__total-price modal__total-price">${calculateTotalPrice(state)}</p>
        </div>
      </div>
      {isInCart && (
        <>
          <div className="cart__vision">
            <img src="/src/assets/images/icon-carbon-neutral.svg" alt="" />
            <p>This is a <span className="bold">carbon-neutral</span> delivery</p>
          </div>
        </>
      )}
      <button onClick={openModal} className="cart__confirm">Confirm Order</button>
      <Modal isOpen={ isOpen } closeModal={closeModal} />
    </>
  )
}