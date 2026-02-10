import { useContext } from "react";
import { item_list } from "../../assets/assets";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../StoreContext/StoreContext";
import { BsTruck } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { MdVerified } from "react-icons/md";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const Description = () => {

  const { description, setDescription, setShowDesc, enableScroll, disableScroll, addToCart, removeFromCart, cartsItem } = useContext(StoreContext)
  disableScroll();

  return (
    <div className="page-out">
      {
        item_list.map((item, index) => {
          if (description === item.name) {
            return (
              <div className="modal-overlay backdrop-blur-sm" key={index}>
                <div className="modal-content mt-45">
                  <img className="flex ml-[97%] justify-end cursor-pointer" onClick={() => { setDescription(""); setShowDesc(false); enableScroll() }} src={assets.cross_icon} alt="close" />
                  <div className="flex gap-5 justify-between">
                    <div className="flex-col w-1/2 gap-5">
                      <div className="">
                        <img className=" h-110 w-120 rounded-2xl" src={item.image} alt="product image" />
                      </div>
                      <p className="text-[18px] mt-5 mb-2 ml-1">Select Quantity</p>
                      <div className="flex justify-between gap-2">
                        <div className="amount-btn">250g</div>
                        <div className="amount-btn">350g</div>
                        <div className="amount-btn">500g</div>
                        <div className="amount-btn">1000g</div>
                      </div>
                    </div>
                    {/* Product descriptions */}
                    <div className="w-[45%] flex-col">
                      <h1 className="text-3xl font-bold">{item.name}</h1>
                      <div className="flex-col gap-5">
                        <div className="">
                          <p className="flex items-center gap-2 my-3 font-bold text-3xl text-amber-500">
                            <FaBangladeshiTakaSign />{item.price}
                          </p>
                        </div>
                        <div className="mt-2">
                          <h2 className="flex items-center gap-2 text-[18px]">
                            <p className="text-2xl text-amber-900">
                              <BsTruck />
                            </p>Delivery charge   ৳80</h2>
                        </div>
                        <div className="mt-2">
                          <h2 className="flex items-center gap-2 text-[18px]">
                            <p className="text-2xl text-amber-900">
                              <SlCalender />
                            </p>Delivery in 2-4 days</h2>
                        </div>
                        <div className="mt-2">
                          <h2 className="flex items-center gap-2 text-[18px]">
                            <p className="text-2xl text-green-600">
                              <MdVerified />
                            </p>Available in Stock</h2>
                        </div>
                      </div>
                      <button className="bg-[#FFB900] text-[18px] text-black px-10 py-3 rounded-full my-5 w-full hover:bg-[#febc05d5]">Add to Cart</button>
                      <p className="font-bold text-[20px] mb-3">Product Descriptions: </p>
                      <p className="text-[16px] h-1/5  text-lg scrollbar ">{item.description}</p>
                      <hr className="text-[#c7c4c4] my-5" />
                      <div className="flex gap-3 mt-5">
                        <a className="text-5xl text-green-500" target="_blank" href='https://whatsapp.com/'>
                          <IoLogoWhatsapp />
                        </a>
                        <div className="flex-col ">
                          <p>Contact us in WhatsApp</p>
                          <a className="text-green-600 text-[20px] cursor-pointer">+44 20 7722 0088</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        })
      }
    </div>
  )
}

export default Description