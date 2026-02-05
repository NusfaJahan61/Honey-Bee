import { useContext } from "react"
import { assets } from "../../assets/assets"
import { StoreContext } from "../../StoreContext/StoreContext"

const Checkout = () => {

  const { setCheckout, enableScroll, disableScroll } = useContext(StoreContext)
  disableScroll();

  return (
    <div className='modal-overlay'>
      <div className="w-full  max-w-6xl mx-auto bg-white rounded-[2.5rem] p-10 md:p-14">
        <img className="ml-[97%]" onClick={() => { setCheckout(false); enableScroll() }} src={assets.cross_icon} alt="cut" />
        <div className="mb-10 text-center">
          <p className="text-amber-500 uppercase tracking-[0.3em] text-xs mb-4">
            Secure Checkout
          </p>

          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-3">
            Complete Your Order
          </h2>

          <p className="text-gray-600 text-sm">
            A few more details and your honey will be on its way 🍯
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+880..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Delivery Address
              </label>
              <textarea
                rows="3"
                placeholder="Street, City, Area"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
              />
            </div>
          </div>

          <div className="bg-[#F3F0E9] rounded-3xl p-8 flex flex-col">

            <h3 className="text-xl font-serif text-gray-900 mb-6">
              Order Summary
            </h3>
            <div className="flex justify-between text-sm mb-4">
              <span className="text-gray-700">
                Wildflower Honey (500g)
              </span>
              <span className="font-medium text-gray-900">
                ৳450
              </span>
            </div>

            <div className="flex justify-between text-sm mb-4">
              <span className="text-gray-700">
                Delivery Fee
              </span>
              <span className="font-medium text-gray-900">
                ৳80
              </span>
            </div>

            <div className="border-t border-gray-300 my-5"></div>
            <div className="flex justify-between items-center mb-8">
              <span className="text-lg font-medium text-gray-900">
                Total
              </span>
              <span className="text-2xl font-semibold text-amber-500">
                ৳530
              </span>
            </div>

            <div className="mb-8">
              <p className="text-sm text-gray-700 mb-3">
                Payment Method
              </p>

              <div className="space-y-3">

                <label className="flex items-center gap-3 bg-white rounded-xl p-4 cursor-pointer border hover:border-amber-500 transition">
                  <input
                    type="radio"
                    name="payment"
                    className="accent-amber-500"
                    defaultChecked
                  />
                  <span className="text-sm text-gray-800">
                    Cash on Delivery
                  </span>
                </label>

                <label className="flex items-center gap-3 bg-white rounded-xl p-4 cursor-pointer border hover:border-amber-500 transition">
                  <input
                    type="radio"
                    name="payment"
                    className="accent-amber-500"
                  />
                  <span className="text-sm text-gray-800">
                    Online Payment
                  </span>
                </label>

              </div>
            </div>

            <button
              className="mt-auto w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-xl font-medium transition shadow-md"
            >
              Place Order
            </button>

            <p className="mt-4 text-xs text-center text-gray-600">
              🔒 Your information is safe & encrypted
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Checkout