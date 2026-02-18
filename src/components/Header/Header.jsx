import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../StoreContext/StoreContext'

const Header = () => {

  const { setNav } = useContext(StoreContext)

  return (
    <div className='bg-[#F3F0E9] w-full min-h-[70vh] text-amber-950 lg:rounded-2xl shadow-sm flex flex-col-reverse lg:mt-24 lg:flex-row lg:justify-between lg:items-center  p-5'>

      <div className="text-center lg:ml-[5%] lg:text-left w-full lg:w-[50%] m-auto p-5 flex flex-col gap-5 justify-center">
        <h1 className=' m-auto lg:m-0 text-[min(5rem,10dvw)] w-[95%] leading-none'>Buy the Best & Fresh Honey</h1>
        <p className='hidden xl:block xl:w-[85%] mt-2'>We invite you into our world with complete transparency. From sharing our beekeeping practices to providing insights into our sourcing and production, we want you to feel connected to the journey of your honey.
          Our commitment to honesty means you can trust that what’s on the label is exactly what’s in the jar.</p>

        <div className="flex sm:flex-row gap-4 justify-center lg:justify-start xl:mt-5">
          <Link to="/cart">
            <button onClick={() => setNav("Home")} className="bg-amber-900 hover:bg-amber-800 text-white px-3 py-2 md:px-8 md:py-3 rounded-full text-lg font-medium shadow-md transition-all duration-300 hover:scale-105">
              Order Now
            </button>
          </Link>
          <Link to="/products">
            <button onClick={() => setNav("Products")} className="bg-transparent border border-amber-900 text-amber-900 hover:bg-amber-50 px-3 py-2 md:px-8 md:py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105">
              Shop Honey
            </button>
          </Link>
        </div>

      </div>

      <div className="lg:w-[40%] m-auto ">
        <img src={assets.header} alt="" />
      </div>
    </div>
  )
}

export default Header