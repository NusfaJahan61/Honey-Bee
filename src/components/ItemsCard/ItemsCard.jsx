const ItemsCard = ({ id, name, img, weight, price, category, description }) => {
  return (
    <div>
      <div className="bg-[beige] flex flex-col border border-[#f2e8ce] p-5 mb-10 rounded-[10px]">
        <img className="w-60 h-60 rounded-[10px]" src={img} alt="image" />
        <h2 className="text-[18px] text-center py-2 text-amber-950">{name}</h2>
        <div className="px-1 flex justify-between items-center ">
          <p className="text-[19px] text-[#62625e]">Tk  {price}.00</p>
          <button className="bg-[#f7d31e] text-[20px] text-center px-3 py-1 rounded-[50px]">+</button>
        </div>
      </div>
    </div>
  )
}

export default ItemsCard