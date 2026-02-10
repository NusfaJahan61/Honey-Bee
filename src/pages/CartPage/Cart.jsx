import { useContext } from "react";
import { assets, item_list } from "../../assets/assets";
import { MdDelete } from "react-icons/md";
import { StoreContext } from "../../StoreContext/StoreContext";
import { IoCartOutline } from "react-icons/io5";
import EmptyCart from "../../components/EmptyCart/EmptyCart";

const Cart = () => {

  const { cartsItem, addToCart, removeFromCart, checkout, setCheckout, getTotalCartAmount } = useContext(StoreContext)

  return (
    <div>
      {getTotalCartAmount() == 0 ? <EmptyCart /> :
        <div className=" w-full h-full my-30 text-[18px] font-medium mt-40 page-out">
          <h1 className="text-5xl mb-10 flex gap-5 items-center">
            <div className="text-7xl">
              <IoCartOutline />
            </div> Shopping Cart</h1>
          <div className="flex justify-between gap-6">
            <div className="w-[70%]">
              <div className="border border-amber-950 p-10 rounded-2xl text-center">
                <div className="grid grid-cols-6 mb-5">
                  <p className="col-span-2">Products</p>
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>Total</p>
                  <p>Remove</p>
                </div>
                <hr className="text-[#c2c2be]" />
                {
                  item_list.map((item, index) => {
                    if (cartsItem[item.id] > 0) {
                      return (
                        <div className="items-center grid grid-cols-6" key={index}>
                          <div className="flex items-center col-span-2 ">
                            <img className="size-25 rounded-2xl p-3" src={item.image} alt="" />
                            <p>{item.name}</p>
                          </div>
                          <p>{item.price}/-</p>
                          <div className="flex m-auto justify-between gap-3 bg-[#f1eeeeab] p-2 rounded-[20px]">
                            <img onClick={() => removeFromCart(item.id)} className="size-6 cursor-pointer" src={assets.remove_icon_red} alt="remove" />
                            <p>{cartsItem[item.id]}</p>
                            <img onClick={() => addToCart(item.id)} className="size-6 cursor-pointer" src={assets.add_icon_green} alt="add" />
                          </div>
                          <p>{item.price * cartsItem[item.id]}/-</p>
                          <div onClick={() => removeFromCart(item.id)} className="m-auto text-[20px] cursor-pointer">
                            <MdDelete />
                          </div>
                          <hr className="col-span-6 text-[#c2c2be]" />
                        </div>
                      )
                    }
                  })
                }
              </div>
            </div>
            <div className="">
              <div className="border border-amber-950 px-10 py-5 rounded-2xl">
                <h1 className="text-[22px]">Order Summary</h1>
                <div className="flex gap-3 text-[18px] my-5">
                  <input className="w-[70%] px-5 py-2 border  rounded-[25px] outline-0" type="text" placeholder="Promocode" />
                  <button className="w-[28%] px-5 py-2 border rounded-[25px] hover:bg-[#f1eeeeab] cursor-pointer">Apply</button>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between text-[18px]">
                    <p>Sub Total</p>
                    <p>{getTotalCartAmount()}</p>
                  </div>
                  <div className="flex justify-between text-[18px]">
                    <p>Discount</p>
                    <p>3%</p>
                  </div>
                  <div className="flex justify-between text-[18px]">
                    <p>Delivery fee</p>
                    <p>{getTotalCartAmount() == 0 ? 0 : "৳ 80"}</p>
                  </div>
                  <hr className="text-[#c2c2be]" />
                  <div className="flex justify-between font-medium text-[18px] ">
                    <p>Total</p>
                    <p className="text-2xl ">{getTotalCartAmount() == 0 ? 0 : getTotalCartAmount() + 80}৳</p>
                  </div>
                </div>
                <button onClick={() => setCheckout(true)} className="w-full my-5 px-5 py-2 border rounded-[25px] bg-black text-white text-[18px]  cursor-pointer hover:bg-[#303030]">Proceed to checkout</button>
              </div>
            </div>
          </div>
        </div>}
    </div>
  )
}

export default Cart