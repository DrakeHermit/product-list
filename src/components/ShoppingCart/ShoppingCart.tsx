import { ProductInCart } from '../ProductInCart/ProductInCart';
import './ShoppingCart.css';

export const ShoppingCart = () => {
  return (
    <section className='shopping__cart'>
      <h2 className='shopping__cart-header'>Your Cart (0)</h2>
      {/* <img className="empty" src="/src/assets/images/illustration-empty-cart.svg" alt="" />
      <p>Your added items will appear here</p> */}
      <ProductInCart />
    </section>
  )
}