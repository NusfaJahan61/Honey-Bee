import { useContext } from "react";
import { assets, item_list } from "../../assets/assets";
import { MdDelete } from "react-icons/md";
import { StoreContext } from "../../StoreContext/StoreContext";
import { item_list } from "../../assets/assets";

const Cart = () => {

  const { cartsItem, addToCart, removeFromCart } = useContext(StoreContext)

  return (
    <div className="w-full h-full my-15">
      <h1 className="text-5xl text-amber-950 mb-15">Shopping Cart</h1>
      <div className="flex justify-between">
        <div className="w-[70%]">
          <div className="border border-amber-950 p-10 rounded-2xl text-center">
            <div className="grid grid-cols-6">
              <p className="col-span-2">Products</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <hr />
            {
              item_list.map((item, index) => {
                if (cartsItem[item.id] > 0) {
                  return (
                    <div className="items-center grid grid-cols-6" key={index}>
                      <div className="flex items-center col-span-2">
                        <img className="size-30" src={item.image} alt="" />
                        <p>{item.name}</p>
                      </div>
                      <p>{item.price}/-</p>
                      <div className="flex m-auto justify-between gap-3 bg-[#f1eeeeab] p-2 rounded-[20px]">
                        <img onClick={() => removeFromCart(item_list.id)} className="size-6 cursor-pointer" src={assets.remove_icon_red} alt="remove" />
                        <p>{cartsItem[item.id]}</p>
                        <img onClick={() => addToCart(id)} className="size-6 cursor-pointer" src={assets.add_icon_green} alt="add" />
                      </div>
                      <p>{item.price * cartsItem[item.id]}/-</p>
                      <div onClick={() => removeFromCart(item.id)} className="m-auto text-[#e80a0a] text-[20px] cursor-pointer">
                        <MdDelete />
                      </div>
                    </div>
                  )
                }
              })
            }
          </div>
        </div>
        <div className="w-[20%]">
          <div className="border border-amber-950 p-10 rounded-2xl">
            <h1>Order Summary</h1>
            <div className="promocode">
              <input type="text" />
              <input type="text" />
            </div>
            <div className="">
              <p>Sub Total</p>
              <p></p>
            </div>
            <div className="">
              <p>Discount</p>
              <p></p>
            </div>
            <div className="">
              <p>Delivery fee</p>
              <p></p>
            </div>
            <hr />
            <div className="">
              <p>Total</p>
              <p></p>
            </div>
            <button>Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart