import { useState } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { assets } from '../../assets/assets';

const Navbar = () => {

  const [nav, setNav] = useState("Home")
  const [icons, setIcons] = useState("")

  return (
    <div className='h-20 flex items-center justify-between p-8'>
      <div className="w-60 px-5">
        <img src={assets.logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul className='flex items-center gap-10 text-[18px] font-bold text-gray-600 '>
          <li onClick={() => { setNav("Home"); setIcons("") }}
            className={nav === "Home" ?
              "border-b-2 text-amber-400 transition duration-300" : ""}>Home</li>

          <li onClick={() => { setNav("Order now"); setIcons("") }}
            className={nav === "Order now" ?
              "border-b-2 text-amber-400 transition duration-300" : ""}>Order now</li>

          <li onClick={() => { setNav("About"); setIcons("") }}
            className={nav === "About" ?
              "border-b-2 text-amber-400 transition duration-300" : ""}>About</li>

          <li onClick={() => { setNav("Contact us"); setIcons("") }} className={nav === "Contact us" ?
            " border-b-2 text-amber-400 transition duration-300" : ""}>Contact us</li>
        </ul>
      </div>
      <div className="login flex items-center gap-4 align-center justify-center">
        <div
          onClick={() => { setIcons("Cart"); setNav("") }}
          className={`text-4xl transition duration-300 
          ${icons === "Cart" ? "text-amber-400 " : "text-gray-600"}`} >
          <IoCartOutline />
        </div>
        <div
          onClick={() => { setIcons("Account"); setNav("") }}
          className={`text-3xl transition duration-300 
          ${icons === "Account" ? "text-amber-400 " : "text-gray-600"}`} >
          <VscAccount />
        </div>
        <div className="account"></div>
        <button className='bg-amber-300 text-gray-800 font-bold px-5 py-1.5 rounded-[25px] text-[18px]
        hover:bg-amber-400 transition duration-200'>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar