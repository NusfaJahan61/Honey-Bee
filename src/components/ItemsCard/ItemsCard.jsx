import { item_list } from "../../assets/assets"

const ItemsCard = () => {
  return (
    <div>
      <h1 className="text-5xl text-amber-950">Our Products</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vel veniam eligendi temporibus expedita corporis fuga asperiores debitis omnis soluta, a maxime corrupti. Amet reprehenderit quasi nihil totam facilis aliquid dicta cupiditate, recusandae architecto, quisquam fugiat obcaecati? Commodi sunt ipsa velit, officia, autem nisi vitae, nesciunt totam quidem rerum soluta debitis distinctio libero doloremque. Sit necessitatibus cumque maxime minima atque!</p>
      <div className="flex flex-wrap justify-between ">
        {
          item_list.map((item, index) => {
            return (
              <div key={index} className="flex flex-col bg-[#F3F0E9] p-10 mb-20 ">
                <img className="w-60 h-60" src={item.image} alt="image" />
                <h2>{item.name}</h2>
                <p>{item.weight}ml</p>
                <p>{item.price}/-</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ItemsCard