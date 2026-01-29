import { useContext } from "react"
import { item_list } from "../../assets/assets"
import { assets } from "../../assets/assets"
import { StoreContext } from "../../StoreContext/StoreContext"

const Description = () => {
  const { description, setDescription, setShowDesc } = useContext(StoreContext)
  return (
    <div>
      {
        item_list.map((item, index) => {
          if (description === item.name) {
            return (
              <div className="modal-overlay" key={index}>
                <div className="bg-white m-auto mt-25 w-1/2 h-5/7 p-10 rounded-2xl">
                  <img onClick={() => { setDescription(""); setShowDesc(false) }} src={assets.cross_icon} alt="close" />
                  <div className="">
                    <div className="">
                      <img className="w-100 h-100" src={item.image} alt="product image" />
                    </div>
                    <div className=""></div>
                  </div>
                  <div className=""></div>
                </div>
              </div>
            )
          }
        })
      }
    </div>
  )
}

export default Description