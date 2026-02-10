import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../StoreContext/StoreContext'

const EmptyCart = () => {

  const { setNav } = useContext(StoreContext)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 page-out">
      <img className='size-100' src={assets.emptyCart} alt="emptycart" />
      <h1 className='text-3xl text-gray-700 font-semibold mb-5 ' >Seems like your Cart is Empty! </h1>
      <p className="text-gray-600 text-lg leading-relaxed mb-8 px-2">
        Let’s fill it up with some
        <span className="text-amber-500 font-semibold"> golden honey</span>
      </p>
      <Link to="/products">
        <button onClick={() => setNav("Products")} className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-3 rounded-full text-lg font-medium shadow-md transition-all duration-300 hover:scale-105">
          Shop Now
        </button>
      </Link>
    </div>
  )
}

export default EmptyCart