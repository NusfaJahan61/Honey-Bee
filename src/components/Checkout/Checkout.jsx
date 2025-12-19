import { useContext } from "react"
import { assets } from "../../assets/assets"
import { StoreContext } from "../../StoreContext/StoreContext"

const Checkout = () => {

  const { setCheckout } = useContext(StoreContext)

  return (
    <div className=''>
      <img onClick={() => setCheckout(false)} src={assets.cross_icon} alt="cut" />
      <h1>Checkout</h1>
      <p>Please enter your information and delivery details to help us reach you!</p>
    </div>
  )
}

export default Checkout