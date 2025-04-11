import { useEffect, useRef } from "react"
import { useCart } from "../../utils/hooks/useContext"
import "./Modal.css"
import { ProductListing } from "../ProductListing/ProductListing"
import { ActionButton } from "../ActionButton/ActionButton"
import { calculateTotalPrice } from "../../utils/calculateTotalPrice"

interface Props {
  isOpen: boolean
  onClose: () => void
  onAction: () => void
}

export const Modal = ({isOpen, onClose, onAction}: Props) => {
  const wasOpenRef = useRef(false)
  const {state} = useCart()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      wasOpenRef.current = true
    } else if (wasOpenRef.current) {
      document.body.style.overflow = 'unset';
      wasOpenRef.current = false
    }
    
    return () => {
      if (wasOpenRef.current) {
        document.body.style.overflow = 'unset';
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
          <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src="/src/assets/images/icon-order-confirmed.svg" alt="Confirm Order Icon" />
              <h2>Order Confirmed</h2>
              <p>We hope you enjoy your food</p>
            <div className="modal__list">
              <ProductListing isInCart={false} />
              <div className='modal__total'>
                <p>Order Total</p>
                <p className="modal__total-price">${calculateTotalPrice(state)}</p>
              </div>
            </div>
            <ActionButton text="Start New Order" action={onAction} />
            </div>
          </div>
    </>
  )
}