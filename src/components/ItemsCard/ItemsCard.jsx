const ItemsCard = ({ id, name, img, weight, price, category, description }) => {
  return (
    <div>
      <div className="flex flex-col border-2 border-[#eaddbe] p-3 mb-10 rounded-[10px]">
        <img className="w-60 h-60 rounded-[10px]" src={img} alt="image" />
        <h2 className="text-[18px] text-center pt-2 text-amber-950">{name}</h2>
        <p className="text-center my-2" >Tk {price}/-</p>
        <button className="bg-[#E4B202] px-10 py-3 rounded-[10px]">Add to cart</button>
      </div>
    </div>
  )
}

export default ItemsCard