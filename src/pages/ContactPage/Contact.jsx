import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";

const Contact = ({ setShowContact }) => {

  return (
    <div className="flex m-auto mt-26 bg-[#FFFFFF] p-10 rounded-2xl justify-between page-out" >
      <div className="w-1/2 ml-10 my-10">
        <h1 className="text-7xl pb-5">Get in Touch</h1>
        <p className="text-gray-600 leading-relaxed mb-10 max-w-md">
          Have a question, feedback, or special request?
          We’d love to hear from you and help you find
          the perfect honey.🍯
        </p>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-0.5 ">
            <p className="text-[#5b5955] text-[16px] font-600">Email:</p>
            <h1 className="text-[20px]">honeybee@gmail.com</h1>
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-[#5b5955] text-[16px] font-600">Phone:</p>
            <h1 className="text-[20px]">+44 20 7722 0088</h1>
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-[#5b5955] text-[16px] font-600">Address:</p>
            <h1 className="text-[20px] w-1/2">DFO Office, Sundarbans East Forest Division, Khulna, Bangladesh</h1>
          </div>
          <div className="
            flex flex-col gap-0.5">
            <p className="text-[#5b5955] text-[16px] font-600">Follow us:</p>
            <div className="flex text-4xl gap-2 cursor-pointer mt-2">
              <a className="text-[#1877F2]" target="_blank" href="https://www.facebook.com/">
                <FaFacebook />
              </a>
              <a className="text-[#25D366]" target="_blank" href='https://whatsapp.com/'>
                <IoLogoWhatsapp />
              </a>
              <a className="text-[#0088CC]" target="_blank" href="https://telegram.com/">
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --------Right side-------- */}

      <div className="bg-[#F3F0E9] w-[55%] rounded-3xl p-10 mr-5">

        <h3 className="text-2xl font-serif text-gray-900 mb-8">
          Send Us a Message
        </h3>

        <div className="space-y-6">

          <div>
            <label className="block text-sm text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full bg-white border border-transparent rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full bg-white border border-transparent rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full bg-white border border-transparent rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
            />
          </div>

          <button
            className="w-full mt-4 bg-amber-500 hover:bg-[#f6aa38] text-white py-3 rounded-xl font-medium transition shadow-md"
          >
            Send Message
          </button>

          <p className="text-xs text-center text-gray-600 mt-3">
            🧡 We’ll reply within 24 hours
          </p>

        </div>

      </div>

    </div>
  )
}

export default Contact