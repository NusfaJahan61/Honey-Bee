import React, { useState } from 'react'

const Navbar = () => {

  const [nav, setNav] = useState("Home")

  return (
    <div className='h-15 flex items-center justify-between p-8'>
      <div className="logo">
        <h1>LOGO</h1>
      </div>
      <div className="nav-items">
        <ul className='flex items-center gap-10 text-[16px] font-bold text-gray-800 '>
          <li onClick={() => setNav("Home")} className={nav === "Home" ?
            "underline text-amber-500 " : ""}>Home</li>

          <li onClick={() => setNav("Order now")} className={nav === "Order now" ?
            "underline text-amber-500" : ""}>Order now</li>

          <li onClick={() => setNav("About")} className={nav === "About" ?
            "underline text-amber-500" : ""}>About</li>

          <li onClick={() => setNav("Contact us")} className={nav === "Contact us" ?
            "underline text-amber-500 gap-0.5" : ""}>Contact us</li>
        </ul>
      </div>
      <div className="login">
        <button className='border-gray-600 border px-5 py-2 rounded-[25px] text-[18px]'>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar