import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../StoreContext/StoreContext'

const NotFound = () => {
  const { setNav } = useContext(StoreContext)
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 page-out">

      <div className="max-w-2xl w-full bg-[#F3F0E9] text-center  rounded-[2.5rem] shadow-xl p-10 md:p-16">

        <h1 className="text-7xl md:text-8xl font-serif font-bold text-amber-500 mb-4">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto mb-8">
          Looks like the page you’re looking for doesn’t exist,
          but don’t worry — sweet honey awaits you 🍯
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <button onClick={() => setNav("Home")} className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-md transition-all duration-300 hover:scale-105">
              Go Home
            </button>
          </Link>
          <Link to="/products">
            <button onClick={() => setNav("Products")} className="bg-white border border-amber-500 text-amber-500 hover:bg-amber-50 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105">
              Shop Honey
            </button>
          </Link>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-amber-500 opacity-70">
          <span className="w-12 h-px bg-amber-400"></span>
          <span>🧡 </span>
          <span className="w-12 h-px bg-amber-400"></span>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          HoneyBee
        </p>
      </div>
    </div>
  )
}

export default NotFound