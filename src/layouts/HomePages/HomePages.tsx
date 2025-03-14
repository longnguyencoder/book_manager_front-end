import React from 'react'
import Banner from './components/Banner'
import Carousel from './components/Carousel'
import ListProduct from '../product/ListProduct'

const HomePages = () => {
  return (
    <div>
      <Banner />
      <Carousel />
      <ListProduct />
    </div>
  )
}

export default HomePages
