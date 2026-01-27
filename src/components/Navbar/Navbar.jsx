import { useContext, useState } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { assets } from '../../assets/assets';
import { StoreContext } from '../../StoreContext/StoreContext';
import { Link } from 'react-router-dom';

const Navbar = ({ setShowLogin, setShowContact }) => {

  const { nav, setNav } = useContext(StoreContext)

  return (
    <div className='h-20 flex items-center justify-between p-8'>
      <div className="w-40 px-5">
        <Link to='/'><img src={assets.logo} alt="logo" /></Link>
      </div>
      <div className="nav-items">
        <ul className='flex items-center gap-10 text-[18px] text-gray-600 *:cursor-pointer '>
          <Link to='/'><li onClick={() => setNav("Home")}
            className={nav === "Home" ?
              "border-b-2 text-amber-500 transition duration-300" : ""}>Home</li></Link>

          <a href='#showProducts'><li onClick={() => { setNav("Products"); setNav("Home") }}
          >Products</li></a>

          <a href='#footer'><li onClick={() => { setNav("About"); setNav("Home") }}
          >About</li></a>

          <Link to='/'><li onClick={() => { setNav("Contact us"); setShowContact(true) }} className={nav === "Contact us" ?
            " border-b-2 text-amber-500 transition duration-300" : ""}>Contact us</li></Link>
        </ul>
      </div>
      <div className="login flex items-center gap-5 align-center justify-center *:cursor-pointer">
        <Link to='/cart'><div
          onClick={() => { setNav("Cart") }}
          className={`text-4xl transition duration-300 
          ${nav === "Cart" ? "text-amber-500 " : "text-gray-600"}`} >
          <IoCartOutline />
        </div></Link>
        <Link to='/'><div
          onClick={() => { setNav("Account"); setShowLogin(true) }}
          className={`text-3xl transition duration-300 
          ${nav === "Account" ? "text-amber-500 " : "text-gray-600"}`} >
          <VscAccount />
        </div></Link>
        <button onClick={() => setShowLogin(true)}
          className='bg-amber-400 text-amber-950 border border-amber-400 px-5 py-1.5 rounded-[25px] text-[18px] cursor-pointer hover:bg-transparent transition duration-200'
        >Sign in</button>
      </div>
    </div>
  )
}

export default Navbar