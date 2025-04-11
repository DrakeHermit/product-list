import { ProcessedData, transformJSON } from '../../utils/transformJSON'
import { AddToCart } from '../AddToCart/AddToCart'
import { useCart } from '../../utils/hooks/useContext'
import './MenuItem.css'

export const MenuItem = () => {
  const products: ProcessedData[] = transformJSON()

  const { state } = useCart()
  
  const isInCart = (id: string): boolean => {
    return Boolean(state.cart.find(item => item.id === id))
  }
 
  return (
    <ul className='menu'>
      {products.map((product: ProcessedData) => ( 
          <li key={product.id} className="menu__item">
            <picture className={isInCart(product.id) ? 'menu__item--border' : ''}>
              <source media='(min-width: 1050px)' srcSet={product.image.desktop} />
              <source media='(min-width: 375px)' srcSet={product.image.tablet} />
              <img src={product.image.mobile} alt={product.name} />
          </picture>
          <AddToCart id={product.id} name={product.name} price={product.price} />
            <p className='menu__category'>{ product.category }</p>
            <h3 className='menu__item-header'>{product.name}</h3>
            <p className='menu__price'>${product.price.toFixed(2)}</p>
          </li>
      ))}
    </ul>
    )
}