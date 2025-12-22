import { useContext } from "react"
import { assets } from "../../assets/assets"
import { StoreContext } from "../../StoreContext/StoreContext"

const Checkout = () => {

  const { setCheckout } = useContext(StoreContext)

  return (
    <div className='absolute z-1 bg-[#00000086] w-full h-full'>
      <div className="bg-white m-auto mt-25 w-3/6 h-5/7 p-10 rounded-2xl">
        <img onClick={() => setCheckout(false)} src={assets.cross_icon} alt="cut" />
        <div className="text-center">
          <h1 className="text-3xl font-bold m-3">Checkout!</h1>
          <p className="text-[20px]">Please enter your information and delivery details to help us reach you!</p>
        </div>
      </div>
    </div>
  )
}

export default Checkout