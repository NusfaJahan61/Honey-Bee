
const Cart = () => {
  return (
    <div className="w-full h-full my-15">
      <h1 className="text-5xl text-amber-950 mb-15">Shopping Cart</h1>
      <div className="flex justify-between">
        <div className="w-[70%]">
          <div className="border border-amber-950 p-10 rounded-2xl">
            <p>Products</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
            <hr />
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