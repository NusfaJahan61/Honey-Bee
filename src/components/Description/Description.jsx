import { useContext } from "react"
import { item_list } from "../../assets/assets"
import { assets } from "../../assets/assets"
import { StoreContext } from "../../StoreContext/StoreContext"

const Description = () => {
  const { description, setDescription } = useContext(StoreContext)
  return (
    <div>
      {
        item_list.map((item, index) => {
          if (description === item.name) {
            return (
              <div className="" key={index}>
                <img onClick={() => setDescription("")} src={assets.cross_icon} alt="close" />
                <div className="">
                  <div className="">
                    <img src={item.image} alt="product image" />
                  </div>
                  <div className=""></div>
                </div>
                <div className=""></div>
              </div>
            )
          }
        })
      }
    </div>
  )
}

export default Description