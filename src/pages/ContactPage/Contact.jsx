import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { assets } from "../../assets/assets";

const Contact = ({ setShowContact }) => {
  return (
    <div className="absolute z-1 w-full h-full bg-[#00000090]">
      <div className="flex w-[70%] m-auto mt-[5%] bg-[#F3F0E9] p-10 rounded-2xl justify-between" >
        <div className="w-1/2 ml-10">
          <h1 className="text-7xl pb-10">Get in Touch</h1>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-0.5 ">
              <p className="text-[#5b5955] text-[16px]">Email:</p>
              <h1 className="text-[20px]">honeybee@gmail.com</h1>
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="text-#5b5955] text-[16px]">Phone:</p>
              <h1 className="text-[20px]">+44 20 7722 0088</h1>
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="text-[#5b5955] text-[16px]">Address:</p>
              <h1 className="text-[20px] w-1/2">DFO Office, Sundarbans East Forest Division, Khulna, Bangladesh</h1>
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="text-[#5b5955] text-[16px]">Follow us:</p>
              <div className="flex text-4xl gap-2 cursor-pointer mt-2">
                <FaFacebook />
                <IoLogoWhatsapp />
                <FaTelegram />
              </div>
            </div>
          </div>

        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <div className="flex gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="yourName">Your name</label>
              <input className="bg-[#afaeae57] outline-0 text-[16px] rounded-2xl py-2 px-10" type="text" id="yourName" placeholder="Your full name" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="yourEmail">Your name</label>
              <input className="bg-[#afaeae57] outline-0 text-[16px] rounded-2xl py-2 px-10" type="text" id="yourEmail" placeholder="Your email address" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="yourMsg">Message</label>
            <input className=" bg-[#afaeae57] outline-0 text-[16px] h-80 w-full rounded-2xl py-2 px-10" type="text" id="yourMsg" placeholder="Write something..." />
          </div>
          <button className="rounded-[25px] bg-black py-2 px-10 w-full text-white text-[18px] hover:bg-[#2b2929] transition duration-200">Send Message</button>
        </div>
        <img onClick={() => setShowContact(false)} className="size-5" src={assets.cross_icon} alt="cross" />
      </div>
    </div>
  )
}

export default Contact