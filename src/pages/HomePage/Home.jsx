import Category from '../../components/Category/Category'
import Header from '../../components/Header/Header'
import AboutPage from '../AboutPage/AboutPage'
import ShowProducts from '../ShowProductsPage/ShowProducts'

const Home = () => {
  return (
    <>
      <Header />
      <Category />
      <ShowProducts />
      <AboutPage />
    </>
  )
}

export default Home