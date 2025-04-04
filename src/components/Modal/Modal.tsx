import { useEffect } from "react"
import { ProductInCart } from "../ProductInCart/ProductInCart"
import "./Modal.css"

interface Props {
  isOpen: boolean
  closeModal: () => void
}

export const Modal = ({isOpen, closeModal}: Props) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src="/src/assets/images/icon-order-confirmed.svg" alt="Confirm Order Icon" />
            <h2>Order Confirmed</h2>
            <p>We hope you enjoy your food</p>
            <ProductInCart isInCart={false} />
            {/* <button onClick={closeModal}>Start New Order</button> */}
          </div>
        </div>
      )
}
    </>
  )
}