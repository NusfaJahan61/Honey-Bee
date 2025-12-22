import { useContext, useState } from 'react'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/HomePage/Home'
import Login from './pages/LoginPage/Login'
import Cart from './pages/CartPage/Cart'
import Contact from './pages/ContactPage/Contact'
import { Routes, Route } from 'react-router-dom'
import { StoreContext } from './StoreContext/StoreContext'
import Checkout from './components/Checkout/Checkout'
import Description from './components/Description/Description'


function App() {

  const [showLogin, setShowLogin] = useState(false)
  const [showContact, setShowContact] = useState(false)
  const { checkout } = useContext(StoreContext)
  return (
    <>
      {showLogin === true
        ? <Login setShowLogin={setShowLogin} />
        : <></>
      }{showContact === true
        ? <Contact setShowContact={setShowContact} />
        : <></>
      }{
        checkout === true ?
          <Checkout /> : <></>
      }
      <div className="w-[80%] m-auto mb-10">
        <Navbar setShowLogin={setShowLogin} setShowContact={setShowContact} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
      <Description />
      <Footer />
    </>
  )
}

export default App
