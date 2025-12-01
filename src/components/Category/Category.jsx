import { assets } from '../../assets/assets'

const Category = () => {
  return (
    <div >
      <ul className="flex justify-evenly">
        <li className=''><img src={assets.nuts} className='w-20 h-20' alt="all" /><p>All</p></li>
        <li><img src={assets.nuts} className='w-20 h-20' alt="honey" /><p>Honey</p></li>
        <li><img src={assets.nuts} className='w-20 h-20' alt="nuts" /><p>Nuts</p></li>
        <li><img src={assets.nuts} className='w-20 h-20' alt="dates" /><p>Dates</p></li>
        <li><img src={assets.nuts} className='w-20 h-20' alt="dryfruits" /><p>Dryfruits</p></li>
        <li><img src={assets.nuts} className='w-20 h-20' alt="combo" /><p>Combo</p></li>
      </ul>
    </div>
  )
}

export default Category