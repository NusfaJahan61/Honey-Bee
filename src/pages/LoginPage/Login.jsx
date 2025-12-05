import { useState } from "react"
import { assets } from "../../assets/assets"

const Login = ({ setShowLogin }) => {

  const [currState, setCurrState] = useState("Sign up")

  return (
    <div className="absolute z-1 h-full w-full bg-[#00000090]">
      <form className="bg-[#F3F0E9] w-[30%] h-[55%] m-auto mt-[10%] p-10 rounded-2xl" action="">
        <img className="ml-[95%] cursor-pointer" onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="cross" />
        <h1 className="text-3xl text-amber-950 text-center">{currState}</h1>
        <div className="flex flex-col gap-5 py-5">
          {currState === "Sign up"
            ? <input className="w-full p-2.5 text-[18px] outline-0 border border-[#797874] rounded-[25px]" type="text" placeholder="Your name" required />
            : <></>
          }
          <input className="w-full p-2.5 text-[18px] outline-0 border border-[#797874] rounded-[25px]" type="email" placeholder="Email address" required />
          <input className="w-full p-2.5 text-[18px] outline-0 border border-[#797874] rounded-[25px]" type="password" placeholder="Password" required />
        </div>
        <div className="flex gap-3 mb-2">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        <button className="w-full p-2.5 text-[20px] outline-0 bg-amber-400 rounded-[25px]">{currState}</button>
        <p className="text-[#797874] mt-3">Already have an account?
          {currState === "Sign up"
            ? <span className="text-amber-950 hover:border-b-2 cursor-pointer" onClick={() => setCurrState("Login")}> Login </span>
            : <span className="text-amber-950 hover:border-b-2 cursor-pointer" onClick={() => setCurrState("Sign in")}> Sign up </span>
          }
          here</p>
      </form>
    </div>
  )
}

export default Login