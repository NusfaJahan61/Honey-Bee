import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { StoreContext } from "../../StoreContext/StoreContext";

const Contact = ({ setShowContact }) => {

  const { setNav } = useContext(StoreContext)

  return (
    <div className="modal-overlay">
      <div className="flex w-[70%] m-auto mt-[5%] bg-[#F3F0E9] p-10 rounded-2xl justify-between" >
        <div className="w-1/2 ml-10 my-10">
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
            <div className="
            flex flex-col gap-0.5">
              <p className="text-[#5b5955] text-[16px]">Follow us:</p>
              <div className="flex text-4xl gap-2 cursor-pointer mt-2">
                <a target="_blank" href="https://www.facebook.com/">
                  <FaFacebook />
                </a>
                <a target="_blank" href='https://whatsapp.com/'>
                  <IoLogoWhatsapp />
                </a>
                <a target="_blank" href="https://telegram.com/">
                  <FaTelegram />
                </a>
              </div>
            </div>
          </div>

        </div>
        <form className="w-1/2 flex flex-col gap-4 mr-10 my-10">
          <div className="flex gap-5">
            <div className="flex flex-col gap-2">
              <label className="ml-2" htmlFor="yourName">Your name</label>
              <input className="bg-[#afaeae57] outline-0 text-[18px] rounded-[25px] py-2 px-5" type="text" id="yourName" placeholder="Your full name" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="ml-2" htmlFor="yourEmail">Your name</label>
              <input className="bg-[#afaeae57] outline-0 text-[18px] rounded-[25px]  py-2 px-5" type="text" id="yourEmail" placeholder="Your email address" required />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-5 mb-3">
            <label className="ml-2" htmlFor="yourMsg">Message</label>
            <textarea className=" bg-[#afaeae57] outline-0  text-[18px] h-80 w-full rounded-[25px] py-7 px-9" type="text" id="yourMsg" placeholder="Write something..." required />
          </div>
          <button className="rounded-[25px] bg-black py-3 px-10 w-full text-white text-[18px] hover:bg-[#2b2929] transition duration-200 cursor-pointer">Send Message</button>
        </form>
        <img src={assets.cross_icon}
          onClick={() => { setShowContact(false); setNav("Home") }}
          className="-mr-2 -mt-2 size-8 bg-[#afaeae57] rounded-[25px] p-2 cursor-pointer"
          alt="cross" />
      </div>
    </div>
  )
}

export default Contact