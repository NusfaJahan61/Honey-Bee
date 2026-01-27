import { useContext, useState } from "react"
import { assets } from "../../assets/assets"
import { StoreContext } from "../../StoreContext/StoreContext";


const Login = ({ setShowLogin }) => {

  const [currState, setCurrState] = useState("Sign up")
  const { setNav } = useContext(StoreContext)

  return (
    <div className="absolute z-1 h-full w-full bg-[#00000090]">
      <form className={`bg-[#F3F0E9] w-[30%] ${currState === "Sign up" ? 'h-[55%]' : "h-[50%]"} m-auto mt-[10%] p-10 rounded-2xl`} action="">
        <img className="ml-[95%] cursor-pointer" onClick={() => { setShowLogin(false); setNav("Home") }} src={assets.cross_icon} alt="cross" />
        <h1 className="text-3xl text-amber-950 text-center">{currState}</h1>
        <div className="flex flex-col gap-5 py-5">
          {currState === "Sign up"
            ? <input className="login-inp" type="text" placeholder="Your name" required />
            : <></>
          }
          <input className="login-inp" type="email" placeholder="Email address" required />
          <input className="login-inp" type="password" placeholder="Password" required />
        </div>
        <div className=" flex gap-3 mb-3 text-[#484847]">
          <input className="cursor-pointer" type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        <button className="login-btn">{currState}</button>
        <p className="text-[#797874] mt-3">Already have an account?
          {currState === "Sign up"
            ? <span className="text-amber-950 hover:border-b-2 cursor-pointer" onClick={() => setCurrState("Login")}> Login </span>
            : <span className="text-amber-950 hover:border-b-2 cursor-pointer" onClick={() => setCurrState("Sign up")}> Sign up </span>
          }
          here</p>
      </form>
    </div>
  )
}

export default Login