import { useContext } from 'react'
import { category_list } from '../../assets/assets'
import { StoreContext } from '../../StoreContext/StoreContext'

const Category = () => {

  const { category, setCategory } = useContext(StoreContext)

  return (
    <>
      <h1 className=" text-[#775050] mt-10  text-3xl">Categories</h1>
      <div className=" cursor-pointer flex justify-left gap-10 ">
        {
          category_list.map((catItem, index) => {
            return (
              <div onClick={() => setCategory(catItem.category_name)} key={index} className={`flex justify-between gap-5 bg-[#F3F0E9] border-4 items-center px-10 py-2 my-5 rounded-[50px] text-black text-[20px] ${category === catItem.category_name ? "border-amber-400" : "border-transparent"}`} >
                <img src={catItem.icon} className='-ml-7 rounded-[50px] w-15 h-15' alt="combo" />
                <p>{catItem.category_name}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Category

