import { ProcessedData, transformJSON } from '../../utils/transformJSON'
import './MenuItem.css'

export const MenuItem = () => {
  const products: ProcessedData[] = transformJSON()
  console.log(products)
  
  return (
    <article>
      {products.map((product: ProcessedData) => {
        return (
          <div key={product.id} className="menu-item">
            <img src={product.image.mobile} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        )
      })}
    </article>
    )
}