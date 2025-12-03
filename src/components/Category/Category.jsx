import { assets } from '../../assets/assets'

const Category = () => {
  return (
    <>
      <div className=" text-amber-950 mt-15 mb-5">
        <h1 className="text-5xl">Explore Our Products</h1>
        <p className=" w-[75%] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vel veniam eligendi temporibus expedita corporis fuga asperiores debitis omnis soluta, a maxime corrupti. Amet reprehenderit quasi nihil totam facilis aliquid dicta cupiditate, recusandae architecto, quisquam fugiat obcaecati? Commodi sunt ipsa velit!</p>
      </div>
      <div className="flex justify-left gap-10 ">
        <div className='flex justify-between gap-5 bg-[#eddb83]  items-center px-10 py-2 my-5 rounded-[50px] text-black text-[20px] '>
          <img src={assets.nuts} className='-ml-7 rounded-[50px] w-15 h-15' alt="all" />
          <p>All</p>
        </div>
        <div className='flex justify-between gap-5 bg-[#F3F0E9] items-center px-10 py-2 my-5 rounded-[50px] text-black text-[20px] '>
          <img src={assets.nuts} className='-ml-7 rounded-[50px] w-15 h-15' alt="honey" />
          <p>Honey</p>
        </div>
        <div className='flex justify-between gap-5 bg-[#F3F0E9] items-center px-10 py-2 my-5 rounded-[50px] text-black text-[20px] '>
          <img src={assets.nuts} className='-ml-7 rounded-[50px] w-15 h-15' alt="nuts" />
          <p>Nuts</p>
        </div>
        <div className='flex justify-between gap-5 bg-[#F3F0E9] items-center px-10 py-2 my-5 rounded-[50px] text-black text-[20px] '>
          <img src={assets.nuts} className='-ml-7 rounded-[50px] w-15 h-15' alt="dates" />
          <p>Dates</p>
        </div>
        <div className='flex justify-between gap-5 bg-[#F3F0E9] items-center px-10 py-2 my-5 rounded-[50px] text-black text-[20px] '>
          <img src={assets.nuts} className='-ml-7 rounded-[50px] w-15 h-15' alt="dryfruits" />
          <p>Dryfruits</p>
        </div>
        <div className='flex justify-between gap-5 bg-[#F3F0E9] items-center px-10 py-2 my-5 rounded-[50px] text-black text-[20px] '>
          <img src={assets.nuts} className='-ml-7 rounded-[50px] w-15 h-15' alt="combo" />
          <p>Combo</p>
        </div>
      </div>
      <hr className='text-[#e9e7e4] mt-5 mb-10' />
    </>
  )
}

export default Category