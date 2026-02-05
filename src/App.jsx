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
import AboutPage from './pages/AboutPage/AboutPage'
import { item_list } from './assets/assets'
import AlertMsg from './components/AlertMsg/AlertMsg'
import Products from './pages/Products/Products'
import Account from './pages/Account/Account'

function App() {

  const { checkout } = useContext(StoreContext)

  const [showLogin, setShowLogin] = useState(false)
  const [showContact, setShowContact] = useState(false)
  return (
    <>
      {showLogin === true
        ? <Login setShowLogin={setShowLogin} />
        : <></>
      }
      {/* {showContact === true
        ? <Contact setShowContact={setShowContact} />
        : <></>
      } */}
      {
        checkout === true ?
          <Checkout /> : <></>
      }
      <div className="w-[80%] m-auto mb-10">
        <Navbar setShowLogin={setShowLogin} setShowContact={setShowContact} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/about_us' element={<AboutPage />} />
          <Route path='/contact_us' element={<Contact setShowContact={setShowContact} />} />
          <Route path='/products' element={<Products />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </div>

      <Footer />
    </>
  )
}

export default App
