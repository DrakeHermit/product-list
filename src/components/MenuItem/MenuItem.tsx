import { ProcessedData, transformJSON } from '../../utils/transformJSON'
import './MenuItem.css'

export const MenuItem = () => {
  const products: ProcessedData[] = transformJSON()
  
  return (
    <ul>
      {products.map((product: ProcessedData) => ( 
          <li key={product.id} className="menu__item">
            <picture>
              <source media='(min-width: 1050px)' srcSet={product.image.desktop} />
              <source media='(min-width: 375px)' srcSet={product.image.tablet} />
              <img src={product.image.mobile} alt={product.name} />
            </picture>
            <p className='menu__category'>{ product.category }</p>
            <h3 className='menu__item-header'>{product.name}</h3>
            <p className='menu__price'>${product.price.toFixed(2)}</p>
          </li>
      ))}
    </ul>
    )
}