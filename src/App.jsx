import { useState } from 'react'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/HomePage/Home'
import Login from './pages/LoginPage/Login'
import Cart from './pages/CartPage/Cart'
import Contact from './pages/ContactPage/Contact'
import { Routes, Route } from 'react-router-dom'


function App() {

  const [showLogin, setShowLogin] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [showContact, setShowContact] = useState(false)

  return (
    <>
      {showLogin === true
        ? <Login setShowLogin={setShowLogin} />
        : <></>
      }{showContact === true
        ? <Contact setShowContact={setShowContact} />
        : <></>
      }
      <div className="w-[80%] m-auto">
        <Navbar setShowLogin={setShowLogin} setShowCart={setShowCart} setShowContact={setShowContact} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart setShowCart={setShowCart} />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
