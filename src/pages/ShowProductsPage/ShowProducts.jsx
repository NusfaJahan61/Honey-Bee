import { item_list } from '../../assets/assets'
import ItemsCard from '../../components/ItemsCard/ItemsCard'
import { useContext, useState } from 'react'
import { StoreContext } from '../../StoreContext/StoreContext'

const ShowProducts = () => {

  const { category } = useContext(StoreContext)

  return (
    <div className='bg-[#F3F0E9] rounded-2xl pb-10'>
      <h1 className=" text-[#775050] text-center py-8 text-3xl">{category === "All" ? "All Products" : <>{category}</>}</h1>
      <div className={`flex flex-wrap  ${category === item_list.category ? "justify-start" : "justify-evenly"}`}>
        {item_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <ItemsCard
                key={index}
                id={item.id}
                name={item.name}
                img={item.image}
                category={item.category}
                price={item.price}
                weight={item.weight}
                description={item.description} />
            )
          }
        })}
      </div >
    </div>
  )
}

export default ShowProducts