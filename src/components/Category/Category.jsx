import { assets } from '../../assets/assets'

const Category = () => {
  return (
    <>
      <div className="flex justify-center gap-10 ">
        <div className='flex justify-between gap-5 bg-[#D79700] items-center px-10 py-2 my-5 rounded-[50px] text-black text-[20px] '>
          <img src={assets.nuts} className='-ml-7 rounded-[50px] w-15 h-15' alt="all" />
          <p>All</p>
        </div>
        <div className='flex justify-between gap-5 bg-[#D79700] items-center px-10 py-2 my-5 rounded-[50px] text-black text-[20px] '>
          <img src={assets.nuts} className='-ml-7 rounded-[50px] w-15 h-15' alt="honey" />
          <p>Honey</p>
        </div>
        <div className='flex justify-between gap-5 bg-[#D79700] items-center px-10 py-2 my-5 rounded-[50px] text-black text-[20px] '>
          <img src={assets.nuts} className='-ml-7 rounded-[50px] w-15 h-15' alt="nuts" />
          <p>Nuts</p>
        </div>
        <div className='flex justify-between gap-5 bg-[#D79700] items-center px-10 py-2 my-5 rounded-[50px] text-black text-[20px] '>
          <img src={assets.nuts} className='-ml-7 rounded-[50px] w-15 h-15' alt="dates" />
          <p>Dates</p>
        </div>
        <div className='flex justify-between gap-5 bg-[#D79700] items-center px-10 py-2 my-5 rounded-[50px] text-black text-[20px] '>
          <img src={assets.nuts} className='-ml-7 rounded-[50px] w-15 h-15' alt="dryfruits" />
          <p>Dryfruits</p>
        </div>
        <div className='flex justify-between gap-5 bg-[#D79700] items-center px-10 py-2 my-5 rounded-[50px] text-black text-[20px] '>
          <img src={assets.nuts} className='-ml-7 rounded-[50px] w-15 h-15' alt="combo" />
          <p>Combo</p>
        </div>
      </div>
      <hr className='text-[#cac7bf] mb-5' />
    </>
  )
}

export default Category