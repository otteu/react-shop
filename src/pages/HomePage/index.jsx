import React from 'react'
import FiltersCategory from './filter-category/FiltersCategory';
import CartList from './card-list/CartList';
import CountProducts from './count-products/CountProducts';

const HomePage = () => {
  return (
    <div className='page'>
      <div className='container'>
        <h1>Products</h1>
        <FiltersCategory />
        <CountProducts />
        <CartList/>
      </div>
    </div>
  )
}

export default HomePage;