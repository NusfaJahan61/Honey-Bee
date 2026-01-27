import { assets } from '../../assets/assets'

const Header = () => {
  return (
    <div className='bg-[#F3F0E9] w-full h-[700px] text-amber-950 rounded-2xl flex justify-around'>
      <div className="mt-[14%] ml-[7%]">
        <h1 className='w-[90%] text-8xl mb-5'>Buy the Best & Fresh Honey</h1>
        <p className='w-[80%] text-[18px] mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum sapiente ad nihil fugiat reiciendis consequuntur illum iusto ab dolor. Rerum, eligendi quae, laboriosam asperiores doloribus delectus cupiditate quod adipisci dicta exercitationem mollitia ratione magnam.</p>
        <button className=' cursor-pointer rounded-[25px] border border-amber-950 bg-amber-950 outline-0 text-[#F3F0E9] py-2 px-5 text-[20px] transition duration-400
         hover:text-amber-950 hover:bg-transparent '>Order now</button>
      </div>
      <div className="w-full m-auto mr-[7%] transition duration-1000 cursor-pointer">
        <img src={assets.header} alt="" />
      </div>
    </div>
  )
}

export default Header