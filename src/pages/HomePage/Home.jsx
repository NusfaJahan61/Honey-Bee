import Category from '../../components/Category/Category'
import Header from '../../components/Header/Header'
import ShowProducts from '../ShowProductsPage/ShowProducts'

const Home = () => {
  return (
    <div className='page-out'>
      <Header />
      <Category />
      <ShowProducts />
    </div>
  )
}

export default Home