import { item_list } from "../../assets/assets"

const ItemsCard = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-evenly ">
        {
          item_list.map((item, index) => {
            return (
              <div key={index} className="flex flex-col bg-[#F3F0E9] p-8 mb-10 rounded-[10px]">
                <img className="w-70 h-70 rounded-[10px]" src={item.image} alt="image" />
                <h2 className="text-[20px] text-center py-2 text-amber-950">{item.name}</h2>
                <div className="flex justify-between">
                  <p>{item.weight}ml</p>
                  <p>{item.price}/-</p>
                </div>
                <button className="bg-[#E4B202] px-10 py-3 rounded-[25px]">Add to cart</button>
              </div>
            )
          })
        }
      </div>
      <hr className="mb-10 text-[#c7c4be]" />
    </div>
  )
}

export default ItemsCard