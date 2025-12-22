import { createContext, useState } from "react"
import { item_list } from '../assets/assets'

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

  const [nav, setNav] = useState("Home")
  const [category, setCategory] = useState("All")
  const [checkout, setCheckout] = useState(false)
  const [description, setDescription] = useState("")
  const [showDesc, setShowDesc] = useState(false)

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
    const total = 0

  }



  const ContextValue = {
    // Functions
    addToCart,
    removeFromCart,

    // States
    nav,
    setNav,
    category,
    setCategory,
    cartsItem,
    setCartsItem,
    checkout,
    setCheckout,
    description,
    setDescription,
    showDesc,
    setShowDesc,
  }
  return (
    <StoreContext.Provider value={ContextValue} >{
      props.children
    }</StoreContext.Provider>
  )

}

export default StoreContextProvider;