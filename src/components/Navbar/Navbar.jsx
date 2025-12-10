import { useState } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { assets } from '../../assets/assets';

const Navbar = ({ setShowLogin, setShowCart }) => {

  const [nav, setNav] = useState("Home")
  const [icons, setIcons] = useState("")

  return (
    <div className='h-20 flex items-center justify-between p-8'>
      <div className="w-40 px-5">
        <img src={assets.logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul className='flex items-center gap-10 text-[18px] text-gray-600 *:cursor-pointer '>
          <li onClick={() => { setNav("Home"); setIcons("") }}
            className={nav === "Home" ?
              "border-b-2 text-amber-500 transition duration-300" : ""}>Home</li>

          <li onClick={() => { setNav("Products"); setIcons("") }}
            className={nav === "Products" ?
              "border-b-2 text-amber-500 transition duration-300" : ""}>Products</li>

          <li onClick={() => { setNav("About"); setIcons("") }}
            className={nav === "About" ?
              "border-b-2 text-amber-500 transition duration-300" : ""}>About</li>

          <li onClick={() => { setNav("Contact us"); setIcons("") }} className={nav === "Contact us" ?
            " border-b-2 text-amber-500 transition duration-300" : ""}>Contact us</li>
        </ul>
      </div>
      <div className="login flex items-center gap-5 align-center justify-center *:cursor-pointer">
        <div
          onClick={() => { setIcons("Cart"); setNav(""); setShowCart(true) }}
          className={`text-4xl transition duration-300 
          ${icons === "Cart" ? "text-amber-500 " : "text-gray-600"}`} >
          <IoCartOutline />
        </div>
        <div
          onClick={() => { setIcons("Account"); setNav("") }}
          className={`text-3xl transition duration-300 
          ${icons === "Account" ? "text-amber-500 " : "text-gray-600"}`} >
          <VscAccount />
        </div>
        <button onClick={() => setShowLogin(true)}
          className='bg-amber-400 text-amber-950 border border-amber-400 px-5 py-1.5 rounded-[25px] text-[18px] cursor-pointer hover:bg-transparent transition duration-200'
        >Sign in</button>
      </div>
    </div>
  )
}

export default Navbar