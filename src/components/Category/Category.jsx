import { assets } from '../../assets/assets'

const Category = () => {
  return (
    <>
      <h1 className=" text-[#775050] mt-10  text-3xl">Categories</h1>
      <div className=" cursor-pointer flex justify-left gap-10 ">
        <div className='flex justify-between gap-5 bg-[#F3F0E9] border-3 border-amber-500  items-center px-10 py-2 my-5 rounded-[50px] text-black text-[20px] '>
          <img src={assets.all_category} className='-ml-7 rounded-[50px] w-15 h-15' alt="all" />
          <p>All</p>
        </div>
        <div className='flex justify-between gap-5 bg-[#F3F0E9] border-3 border-transparent items-center px-10 py-2 my-5 rounded-[50px] text-black text-[20px] '>
          <img src={assets.honey_category} className='-ml-7 rounded-[50px] w-15 h-15' alt="honey" />
          <p>Honey</p>
        </div>
        <div className='flex justify-between gap-5 bg-[#F3F0E9] border-3 border-transparent items-center px-10 py-2 my-5 rounded-[50px] text-black text-[20px] '>
          <img src={assets.nuts_category} className='-ml-7 rounded-[50px] w-15 h-15' alt="nuts" />
          <p>Nuts</p>
        </div>
        <div className='flex justify-between gap-5 bg-[#F3F0E9] border-3 border-transparent items-center px-10 py-2 my-5 rounded-[50px] text-black text-[20px] '>
          <img src={assets.dates_category} className='-ml-7 rounded-[50px] w-15 h-15' alt="dates" />
          <p>Dates</p>
        </div>
        <div className='flex justify-between gap-5 bg-[#F3F0E9] border-3 border-transparent items-center px-10 py-2 my-5 rounded-[50px] text-black text-[20px] '>
          <img src={assets.dryFruits_category} className='-ml-7 rounded-[50px] w-15 h-15' alt="dryfruits" />
          <p>Dryfruits</p>
        </div>
        <div className='flex justify-between gap-5 bg-[#F3F0E9] border-3 border-transparent  items-center px-10 py-2 my-5 rounded-[50px] text-black text-[20px] '>
          <img src={assets.combo_category} className='-ml-7 rounded-[50px] w-15 h-15' alt="combo" />
          <p>Combo</p>
        </div>
      </div>
    </>
  )
}

export default Category