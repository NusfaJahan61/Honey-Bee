import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../StoreContext/StoreContext'

const Header = () => {

  const { setNav } = useContext(StoreContext)

  return (
    <div className='bg-[#F3F0E9] w-full h-175 text-amber-950 rounded-2xl flex justify-around mt-24 shadow-sm'>
      <div className="mt-[14%] ml-[7%]">
        <h1 className='w-[90%] text-8xl mb-5'>Buy the Best & Fresh Honey</h1>
        <p className='w-[80%] text-[18px] mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum sapiente ad nihil fugiat reiciendis consequuntur illum iusto ab dolor. Rerum, eligendi quae, laboriosam asperiores doloribus delectus cupiditate quod adipisci dicta exercitationem mollitia ratione magnam.</p>
        <Link to='/cart' >
          <button onClick={() => setNav("Cart")} className='header-btn'>Order now
          </button>
        </Link>
      </div>
      <div className="w-full m-auto mr-[7%] transition duration-1000 cursor-pointer">
        <img src={assets.header} alt="" />
      </div>
    </div>
  )
}

export default Header