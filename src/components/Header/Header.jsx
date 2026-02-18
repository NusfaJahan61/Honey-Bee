import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../StoreContext/StoreContext'

const Header = () => {

  const { setNav } = useContext(StoreContext)

  return (
    <div className='bg-[#F3F0E9] w-full min-h-175 text-amber-950 rounded-2xl flex justify-around mt-24 shadow-sm flex-col-reverse '>

      <div className="mt-[10%] ml-[7%]">
        <h1 className='w-[90%] text-8xl mb-5'>Buy the Best & Fresh Honey</h1>
        <p className='w-[82%] text-[18px] mb-5'>We invite you into our world with complete transparency. From sharing our beekeeping practices to providing insights into our sourcing and production, we want you to feel connected to the journey of your honey.
          Our commitment to honesty means you can trust that what’s on the label is exactly what’s in the jar.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-start">
          <Link to="/cart">
            <button onClick={() => setNav("Home")} className="bg-amber-900 hover:bg-amber-800 text-white px-8 py-3 rounded-full text-lg font-medium shadow-md transition-all duration-300 hover:scale-105">
              Order Now
            </button>
          </Link>
          <Link to="/products">
            <button onClick={() => setNav("Products")} className="bg-transparent border border-amber-900 text-amber-900 hover:bg-amber-50 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105">
              Shop Honey
            </button>
          </Link>
        </div>

      </div>

      <div className="lg:w-full m-auto mr-[7%] transition duration-1000 cursor-pointer">
        <img src={assets.header} alt="" />
      </div>
    </div>
  )
}

export default Header