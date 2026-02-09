import React from 'react'
import Category from '../../components/Category/Category'
import ShowProducts from '../ShowProductsPage/ShowProducts'

const Products = () => {
  return (
    <div className='mt-20'>
      <Category />
      <ShowProducts />
    </div>
  )
}

export default Products