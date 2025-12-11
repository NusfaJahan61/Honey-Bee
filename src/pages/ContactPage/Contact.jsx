import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div className="">
        <h1>Get in Touch</h1>
        <div className="flex flex-col">
          <p>Email:</p>
          <h1>honeybee@gmail.com</h1>
        </div>
        <div className="flex flex-col">
          <p>Phone:</p>
          <h1>+44 20 7722 0088</h1>
        </div>
        <div className="flex flex-col">
          <p>Address</p>
          <h1>DFO Office, Sundarbans East Forest Division, Khulna, Bangladesh</h1>
        </div>
        <div className="flex flex-col">
          <p>Follow us:</p>
          <div>
            <FaFacebook />
            <IoLogoWhatsapp />
            <FaTelegram />
          </div>
        </div>
      </div>
      <div className="">
        <div className="">
          <div className="">
            <label htmlFor="yourName">Your name</label>
            <input type="text" id="yourName" placeholder="Your full name" />
          </div>
          <div className="">
            <label htmlFor="yourEmail">Your name</label>
            <input type="text" id="yourEmail" placeholder="Your email address" />
          </div>
        </div>
        <div className="">
          <label htmlFor="yourMsg">Message</label>
          <input type="text" id="yourMsg" placeholder="Write something..." />
        </div>
        <button>Send Message</button>
      </div>
    </div>
  )
}

export default Contact