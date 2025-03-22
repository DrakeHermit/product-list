import "./MainPage.css"
import { MenuList } from "../components/MenuList/MenuList"
import { ShoppingCart } from "../components/ShoppingCart/ShoppingCart"

export const MainPage = () => {
  return (
    <>
      <div className="main__content">
        <MenuList />
        <ShoppingCart />
      </div>
    </>
  )
}