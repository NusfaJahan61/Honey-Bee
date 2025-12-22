import { useContext } from "react"
import { StoreContext } from "../../StoreContext/StoreContext"

const ItemsCard = ({ id, name, img, price }) => {

  const { cartsItem, addToCart, removeFromCart, setDescription, setShowDesc } = useContext(StoreContext)

  return (
    <div>
      <div className="bg-white flex flex-col border border-[#f2e8ce] p-5 mb-5 rounded-[10px]">
        <img onClick={() => { setDescription(name); setShowDesc(true) }} className="w-60 h-60 rounded-[10px]" src={img} alt="image" />
        <h2 className="text-[18px] text-center py-2 text-amber-950">{name}</h2>
        <div className="px-1 flex justify-between items-center ">
          <p className="text-[19px] text-[#62625e]">Tk  {price}.00</p>
          {
            !cartsItem[id]
              ? <button onClick={() => addToCart(id)} className="cursor-pointer bg-[#f7d31e] text-[20px] text-center px-3.5 py-1 rounded-[50px]">+</button>
              : <div className=" bg-[#f7d31e] flex justify-between text-[20px] text-center gap-5 items-center px-5 py-1 rounded-[50px]">
                <button className="cursor-pointer " onClick={() => removeFromCart(id)}>-</button>
                <p className="text-[16px]">{cartsItem[id]}</p>
                <button className="cursor-pointer" onClick={() => addToCart(id)}>+</button>
              </div>
          }

        </div>
      </div>
    </div>
  )
}

export default ItemsCard