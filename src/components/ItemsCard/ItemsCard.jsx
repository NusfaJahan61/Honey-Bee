import { useContext } from "react"
import { StoreContext } from "../../StoreContext/StoreContext"
import { IoCartOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

const ItemsCard = ({ id, name, img, price }) => {

  const { cartsItem, addToCart, removeFromCart, setDescription, setShowDesc } = useContext(StoreContext)

  return (
    <div>
      <div className="bg-white shadow-xl flex flex-col border border-[#f2e8ce] p-5 mb-5 rounded-[10px]">
        <img onClick={() => { setDescription(name); setShowDesc(true) }} className="w-60 h-60 rounded-[10px]" src={img} alt="image" />
        <h2 className="text-[18px] py-2 text-amber-950">{name}</h2>
        <div className="flex">
          <FaStar className="text-[#FFB900]" />
          <FaStar className="text-[#FFB900]" />
          <FaStar className="text-[#FFB900]" />
          <FaStar className="text-[#FFB900]" />
          <FaRegStar className="text-[#FFB900]" />
        </div>
        <div className="px-1 flex justify-between items-center ">
          <p className="text-[19px] text-[#62625e]">৳  {price}.00</p>
          {
            !cartsItem[id]
              ? <button onClick={() => addToCart(id)} className="cursor-pointer bg-[#f7d31e] text-[20px] text-center p-3 rounded-[50px]"><IoCartOutline /></button>
              : <div className=" bg-[#F3F0E9] flex justify-between text-[20px] text-center gap-5 items-center p-2.5 rounded-[50px]">
                <button className="cursor-pointer text-[14px] pl-2 " onClick={() => removeFromCart(id)}><FaMinus /></button>
                <p className="text-[16px]">{cartsItem[id]}</p>
                <button className="cursor-pointer text-[14px] pr-2" onClick={() => addToCart(id)}><FaPlus /></button>
              </div>
          }

        </div>
      </div>
    </div>
  )
}
export default ItemsCard