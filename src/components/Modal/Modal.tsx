import "./Modal.css"

interface ModalProps {
  isOpen: boolean,
  closeModal: () => void
}

export const Modal = ({ isOpen, closeModal }: ModalProps) => {

  return (
    <>
      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src="/src/assets/images/icon-order-confirmed.svg" alt="Confirm Order Icon" />
            <h2>Order Confirmed</h2>
            <p>We hope you enjoy your food</p>
            <button onClick={closeModal}>Start New Order</button>
          </div>
        </div>
      )
}
    </>
  )
}