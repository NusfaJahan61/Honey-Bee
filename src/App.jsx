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
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import NotFound from './components/NotFound/NotFound'

function App() {

  const { checkout } = useContext(StoreContext)

  const [showLogin, setShowLogin] = useState(false)
  const [showContact, setShowContact] = useState(false)
  return (
    <>
      {showLogin === true
        ? <Login setShowLogin={setShowLogin} />
        : <></>
      }{
        checkout === true ?
          <Checkout /> : <></>
      }
      <Navbar setShowLogin={setShowLogin} setShowContact={setShowContact} />
      <div className="w-full md:w-[90%] xl:w-[80%] m-auto mb-10">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about_us' element={<AboutPage />} />
          <Route path='/contact_us' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/account' element={<Account />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <ScrollToTop />
      <Footer />
    </>
  )
}

export default App
