import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../../StoreContext/StoreContext";

const Footer = () => {
  const { setNav } = useContext(StoreContext)
  return (
    <div id="footer" className=" capitalize bg-[#D69604] flex flex-col  h-120 *:text-black ">
      <div className="w-3/4 m-auto mb-10 mt-20 flex justify-between">
        <div className="">
          <Link to='/'><img onClick={() => setNav("Home")} className="w-40 " src={assets.logo} alt="" /></Link>
          <Link to='/contact_us'><button onClick={() => setNav("Contact us")} className=" px-9 py-2 text-zinc-900 rounded-md my-4 border border-black hover:border-transparent hover:bg-amber-300 active:bg-[#f5df1d] bg-transparent  duration-400 hover:cursor-pointer">send email</button></Link>
          <div className="flex pt-5 gap-5 *:text-4xl *:hover:cursor-pointer">
            <a target="_blank" href="https://www.facebook.com/"><FaFacebook /></a>
            <a target="_blank" href="https://whatsapp.com/"><IoLogoWhatsapp /></a>
            <a target="_blank" href="https://telegram.com/"><FaTelegram /></a>
          </div>
        </div>
        <div className="flex gap-10 mt-5">
          <div className="w-60 flex flex-col gap-5 ">
            <Link to='/contact_us' ><h1 onClick={() => setNav("Contact us")} className="font-bold uppercase text-[18px] tracking-widest hover:cursor-pointer">contact us</h1></Link>
            <p className="text-[15px]">DFO Office, Sundarbans East Forest Division, Khulna, Bangladesh
            </p>
            <p>+44 20 7722 0088</p>
            <p className="lowercase">honeybee@gmail.com</p>
          </div>
          <div className="w-50 flex flex-col gap-3">
            <h1 className="font-bold uppercase text-[18px] tracking-widest mb-2">category</h1>
            <p>Honey</p>
            <p>Nuts</p>
            <p>Dates</p>
            <p>Dryfruits</p>
            <p>Combo</p>
          </div>
          <Link to='/about_us'><div onClick={() => setNav("About")} className="w-40 flex flex-col gap-3 *:hover:cursor-pointer">
            <h1 className="font-bold uppercase text-[18px] tracking-widest mb-2">company</h1>
            <p>about us</p>
            <p>services</p>
            <p>contact us</p>
            <p>delivery</p>
          </div></Link>
        </div>
      </div>
      <hr className="w-5/6 m-auto my-0" />
      <div className="w-3/4 m-auto my-5 text-center">
        <p>Copyright © 2025 TermsFeed®. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer