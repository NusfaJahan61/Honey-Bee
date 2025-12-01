import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className=" capitalize bg-[#D69604] flex flex-col  h-120 *:text-black ">
      <div className="w-3/4 m-auto mb-10 mt-20 flex justify-between">
        <div className="">
          <img className="w-60 -ml-6" src={assets.logo} alt="" />
          <button className=" px-9 py-2 text-zinc-900 rounded-md my-4 border border-black hover:border-transparent hover:bg-amber-300 active:bg-[#f5df1d] bg-transparent  duration-400 hover:cursor-pointer">send email</button>
          <div className="flex pt-5 gap-5 *:text-4xl *:hover:cursor-pointer">
            <FaFacebook />
            <IoLogoWhatsapp />
            <FaTelegram />
          </div>
        </div>
        <div className="flex gap-10 mt-5">
          <div className="w-60 flex flex-col gap-5 *:hover:cursor-pointer">
            <h1 className="font-bold uppercase text-[18px] tracking-widest ">contact us</h1>
            <p className="text-[15px]">DFO Office, Sundarbans East Forest Division, Khulna, Bangladesh
            </p>
            <p>+44 20 7722 0088</p>
            <p className="lowercase">honeybee@gmail.com</p>
          </div>
          <div className="w-50 flex flex-col gap-3 *:hover:cursor-pointer">
            <h1 className="font-bold uppercase text-[18px] tracking-widest mb-2">category</h1>
            <p>Litchi Flower Honey</p>
            <p>Mustard Flower Honey</p>
            <p>Sundarban Honey</p>
            <p>Black Seed Honey </p>
          </div>
          <div className="w-40 flex flex-col gap-3 *:hover:cursor-pointer">
            <h1 className="font-bold uppercase text-[18px] tracking-widest mb-2">company</h1>
            <p>about us</p>
            <p>services</p>
            <p>contact us</p>
            <p>delivery</p>
          </div>
        </div>
      </div>
      <hr className="w-3/4 m-auto my-0" />
      <div className="w-3/4 m-auto my-5  justify-center">
        <p>Privacy policy All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer