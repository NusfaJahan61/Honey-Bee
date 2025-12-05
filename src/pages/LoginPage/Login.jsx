import { useState } from "react"
import { assets } from "../../assets/assets"

const Login = ({ setShowLogin }) => {

  const [currState, setCurrState] = useState("Sign up")

  return (
    <div>
      <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="cross" />
      <h1>{currState}</h1>
      <form action="">
        {currState === "Sign up"
          ? <input type="text" placeholder="Your name" required />
          : <></>
        }
        <input type="email" placeholder="email address" required />
        <input type="password" placeholder="password" required />
        <div className="flex">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        <button>{currState}</button>
        <p>Already have an account?
          {currState === "Sign up"
            ? <span onClick={() => setCurrState("Login")}>Login</span>
            : <span onClick={() => setCurrState("Sign in")}>Sign up</span>
          }
          here</p>
      </form>
    </div>
  )
}

export default Login