import React from 'react'
import { item_list } from '../../assets/assets'
import ItemsCard from '../../components/ItemsCard/ItemsCard'
import { useState } from 'react'

const ShowProducts = () => {

  const [category, setCategory] = useState("All")

  return (
    <>
      <h1 className=" text-[#775050] mb-5 text-3xl mt-3">All Products</h1>
      <div className="flex flex-wrap justify-between gap-2 ">
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
      <hr className="mb-10 text-[#c7c4be]" />

    </>
  )
}

export default ShowProducts