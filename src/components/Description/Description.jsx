import { useContext } from "react"
import { item_list } from "../../assets/assets"
import { assets } from "../../assets/assets"
import { StoreContext } from "../../StoreContext/StoreContext"

const Description = () => {

  const { description, setDescription, setShowDesc, enableScroll, disableScroll, addToCart, removeFromCart, cartsItem } = useContext(StoreContext)
  disableScroll();

  return (
    <div>
      {
        item_list.map((item, index) => {
          if (description === item.name) {
            return (
              <div className="modal-overlay" key={index}>
                <div className="bg-white m-auto mt-25 w-1/2 h-5/7 p-10 rounded-2xl">
                  <img onClick={() => { setDescription(""); setShowDesc(false); enableScroll() }} src={assets.cross_icon} alt="close" />
                  <div className="flex">
                    <div className="flex-col">
                      <div className="">
                        <img className="w-100 h-100 rounded-2xl" src={item.image} alt="product image" />
                      </div>
                      <div className="flex justify-between mt-10">
                        <div className="h-20 w-20 border-2 border-[#494846] rounded-2xl ">250g</div>
                        <div className="h-20 w-20 border-2 border-[#494846] rounded-2xl ">350g</div>
                        <div className="h-20 w-20 border-2 border-[#494846] rounded-2xl ">500g</div>
                        <div className="h-20 w-20 border-2 border-[#494846] rounded-2xl ">1000g</div>
                      </div>
                    </div>
                    {/* Product descriptions */}
                    <div className="flex-col ml-10">
                      <h1 className="text-3xl font-bold">{item.name}</h1>
                      <p className="mt-5 text-lg">{item.description}</p>
                      <h2 className="text-2xl font-semibold mt-5">₹ {item.price}</h2>
                      <button className="bg-black text-white px-10 py-3 rounded-full mt-10 hover:bg-gray-800">Add to Cart</button>
                      {/* {
                        !cartsItem[id]
                          ? <button onClick={() => addToCart(id)} className="cursor-pointer bg-[#f7d31e] text-[20px] text-center px-3.5 py-1 rounded-[50px]">+</button>
                          : <div className=" bg-[#f7d31e] flex justify-between text-[20px] text-center gap-5 items-center px-5 py-1 rounded-[50px]">
                            <button className="cursor-pointer " onClick={() => removeFromCart(id)}>-</button>
                            <p className="text-[16px]">{cartsItem[id]}</p>
                            <button className="cursor-pointer" onClick={() => addToCart(id)}>+</button>
                          </div>
                      } */}
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