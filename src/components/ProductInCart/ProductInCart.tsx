import "./ProductInCart.css"

export const ProductInCart = () => {
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
        <hr />
      </ul>
      <div className="cart__total">
        <p>Order Total</p>
        <p className="cart__total-price">$46.50</p>
      </div>
      <div className="cart__vision">
        <img src="/src/assets/images/icon-carbon-neutral.svg" alt="" />
        <p>This is a <span className="bold">carbon-neutral</span> delivery</p>
      </div>
      <button className="cart__confirm">Confirm Order</button>
    </>
  )
}