import { MainPage } from "./pages/MainPage"
import { CartProvider } from "./context/cartContext"

function App() {
 
  return (
    <>
      <CartProvider>
        <MainPage />
      </CartProvider>
    </>
  )
}

export default App
