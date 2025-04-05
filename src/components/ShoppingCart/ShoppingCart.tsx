import { ProductInCart } from '../ProductInCart/ProductInCart';
import './ShoppingCart.css';
import { useCart } from '../../utils/hooks/useContext';

interface Props {
  isInCart: boolean
}

export const ShoppingCart = ({isInCart}: Props) => {
  const {state} = useCart();

  return (
    <section className='shopping__cart'>
      <h2 className='shopping__cart-header'>Your Cart ({state.cart.length})</h2>
      {state.cart.length === 0 ? (
        <>
          <img className="empty" src="/src/assets/images/illustration-empty-cart.svg" alt="" />
          <p>Your added items will appear here</p>
        </>
      ) : <ProductInCart isInCart={isInCart} />}
      
    </section>
  )
}