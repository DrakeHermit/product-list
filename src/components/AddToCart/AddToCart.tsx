import "./AddToCart.css"
import { ProcessedData } from "../../utils/transformJSON"

interface AddToCartProps {
  product: ProcessedData
}

export const AddToCart= ({product}:AddToCartProps) => {
  return (
    <button
      onClick={() => console.log(`Added ${product.name} to cart`)}
      className="menu__add-to-cart">
      <img src="/src/assets/images/icon-add-to-cart.svg" alt="" />
      Add to Cart
    </button>
  )
}