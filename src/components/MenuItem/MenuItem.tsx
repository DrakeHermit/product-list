import { ProcessedData, transformJSON } from '../../utils/transformJSON'
import './MenuItem.css'

export const MenuItem = () => {
  const products: ProcessedData[] = transformJSON()
  
  return (
    <article>
      {products.map((product: ProcessedData) => {
        return (
          <div key={product.id} className="menu__item">
            <img src={product.image.mobile} alt={product.name} />
            <p className='menu__category'>{ product.category }</p>
            <h3 className='menu__item-header'>{product.name}</h3>
            <p className='menu__price'>${product.price.toFixed(2)}</p>
          </div>
        )
      })}
    </article>
    )
}