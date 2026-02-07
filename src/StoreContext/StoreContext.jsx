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

  const addToCart = (itemId) => {               // addToCart
    if (!cartsItem[itemId]) {
      setCartsItem((prev) => ({ ...prev, [itemId]: 1 }))
    }
    if (cartsItem[itemId]) {
      setCartsItem((prev) => ({ ...prev, [itemId]: prev[itemId] += 1 }))
    }
  }

  const removeFromCart = (itemId) => {        // removeFromCart
    setCartsItem((prev) => ({ ...prev, [itemId]: prev[itemId] -= 1 }))
  }

  const getTotalCartAmount = () => {          // getTotalCartAmount
    let totalAmount = 0;
    for (const item in cartsItem) {
      if (cartsItem[item] > 0) {
        let itemInfo = item_list.find((product) => product.id === item)
        totalAmount += itemInfo.price * cartsItem[item]
      }
    }
    return totalAmount;
  }

  function disableScroll() {
    document.body.classList.add("no-scroll");
  }
  function enableScroll() {
    document.body.classList.remove("no-scroll");
  }





  const ContextValue = {
    // Functions
    addToCart,
    removeFromCart,
    disableScroll,
    enableScroll,
    getTotalCartAmount,

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