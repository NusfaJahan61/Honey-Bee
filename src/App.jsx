import { useState } from 'react'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/HomePage/Home'
import Login from './pages/LoginPage/Login'

function App() {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin === true ? <Login setShowLogin={setShowLogin} /> : <></>}
      <div className="w-[80%] m-auto">
        <Navbar setShowLogin={setShowLogin} />
        <Home />
        <Footer />
      </div>
    </>
  )
}

export default App
