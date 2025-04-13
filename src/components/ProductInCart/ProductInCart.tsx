import "./ProductInCart.css"
import { useCart } from "../../utils/hooks/useContext"
import { calculateTotalPrice } from "../../utils/calculateTotalPrice";
import { useModal } from "../../utils/hooks/useModal";
import { Modal } from "../Modal/Modal";
import { ActionButton } from "../ActionButton/ActionButton";
import { ProductListing } from "../ProductListing/ProductListing";

interface Props {
  isInCart: boolean
}

export const ProductInCart = ({isInCart = true}: Props) => {
  const { state, dispatch } = useCart();
  const { openModal, closeModal, isOpen } = useModal();

 const handleFinishOrder = () => {
  closeModal();
  dispatch({ type: 'CLEAR_CART' });
};

  return (
    <>
        <ProductListing isInCart={isInCart} />
        <div className={`${isInCart ? `cart__total` : 'modal__total'}`}>
          <p>Order Total</p>
          <p className="cart__total-price modal__total-price">${calculateTotalPrice(state)}</p>
      </div>
          <div className="cart__vision">
            <img src="/images/icon-carbon-neutral.svg" alt="" />
            <p>This is a <span className="bold">carbon-neutral</span> delivery</p>
          </div>
      <ActionButton text={isInCart ? 'Confirm Order' : 'Start New Order'} action={isInCart ? openModal : handleFinishOrder} />
      <Modal isOpen={ isOpen } onClose={closeModal} onAction={handleFinishOrder} />
    </>
  )
}