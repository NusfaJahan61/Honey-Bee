import { createContext, useState } from "react"
import { item_list } from '../assets/assets'

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

  const [nav, setNav] = useState("Home")
  const [cartsItem, setCartsItem] = useState({})

  const addToCart = (itemId) => {
    if (!cartsItem[itemId]) {
      setCartsItem((prev) => ({ ...prev, [itemId]: 1 }))
    }
    if (cartsItem[itemId]) {
      setCartsItem((prev) => ({ ...prev, [itemId]: prev[itemId] += 1 }))
    }
  }

  const removeFromCart = (itemId) => {
    setCartsItem((prev) => ({ ...prev, [itemId]: prev[itemId] -= 1 }))
  }

  const totalCartAmount = () => {

  }



  const ContextValue = {
    nav,
    setNav,
    cartsItem,
    setCartsItem,
    addToCart,
    removeFromCart,
  }
  return (
    <StoreContext.Provider value={ContextValue} >{
      props.children
    }</StoreContext.Provider>
  )

}

export default StoreContextProvider;