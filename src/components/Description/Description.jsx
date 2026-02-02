import { useContext } from "react";
import { item_list } from "../../assets/assets";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../StoreContext/StoreContext";
import { FaTruck } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { MdVerified } from "react-icons/md";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const Description = () => {

  const { description, setDescription, setShowDesc, enableScroll, disableScroll, addToCart, removeFromCart, cartsItem } = useContext(StoreContext)
  disableScroll();

  return (
    <div>
      {
        item_list.map((item, index) => {
          if (description === item.name) {
            return (
              <div className="modal-overlay backdrop-blur-sm" key={index}>
                <div className="modal-content">
                  <img className="flex ml-[97%] justify-end cursor-pointer" onClick={() => { setDescription(""); setShowDesc(false); enableScroll() }} src={assets.cross_icon} alt="close" />
                  <div className="flex gap-5 justify-between">
                    <div className="flex-col w-1/2 gap-5">
                      <div className="">
                        <img className=" rounded-2xl" src={item.image} alt="product image" />
                      </div>
                      <p className="text-[18px] mt-5">Select Quantity</p>
                      <div className="flex justify-between mt-5 w-4/5">
                        <div className="amount-btn">250g</div>
                        <div className="amount-btn">350g</div>
                        <div className="amount-btn">500g</div>
                        <div className="amount-btn">1000g</div>
                      </div>
                    </div>
                    {/* Product descriptions */}
                    <div className="w-[45%] flex-col">
                      <h1 className="text-3xl font-bold">{item.name}</h1>
                      <div className="flex-col">
                        <div className="">
                          <p className="flex items-center gap-2 mt-5"><FaBangladeshiTakaSign />{item.price}</p>
                        </div>
                        <div className="">
                          <p className="flex items-center gap-2 mt-5"><FaTruck />Delivery charge 80/-</p>
                        </div>
                        <div className="">
                          <p className="flex items-center gap-2 mt-5"><SlCalender /> Free Delivery</p>
                        </div>
                        <div className="">
                          <p className="flex items-center gap-2 mt-5"><MdVerified /> Free Delivery</p>
                        </div>
                      </div>
                      <p>Quantity</p>
                      <button className="bg-[#FFB900] text-black px-10 py-3 rounded-full my-5 w-full hover:bg-[#febc05d5]">Add to Cart</button>
                      <p className="font-bold text-[18px]">Product Descriptions: </p>
                      <p className=" ">{item.description}</p>
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