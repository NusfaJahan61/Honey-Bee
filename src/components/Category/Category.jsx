import { useContext } from 'react'
import { category_list } from '../../assets/assets'
import { StoreContext } from '../../StoreContext/StoreContext'

const Category = () => {

  const { category, setCategory } = useContext(StoreContext)

  return (
    <>
      <div className=" cursor-pointer flex justify-center gap-10 py-5 ">
        {
          category_list.map((catItem, index) => {
            return (
              <div onClick={() => setCategory(catItem.category_name)} key={index} className={`category shadow-2xl ${category === catItem.category_name ? "border-amber-400" : "border-transparent"}`} >
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

