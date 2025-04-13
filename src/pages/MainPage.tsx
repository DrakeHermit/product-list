import "./MainPage.css"
import { MenuList } from "../components/MenuList/MenuList"
import { ShoppingCart } from "../components/ShoppingCart/ShoppingCart"
import { Title } from "../components/Title/Title"

export const MainPage = () => {
  return (
    <>
      <Title />
      <div className="main__content">
        <MenuList />
        <ShoppingCart isInCart={ true } />
      </div>
    </>
  )
}