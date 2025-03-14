import React from 'react'
import Banner from './components/Banner'
import Carousel from './components/Carousel'
import ListProducts from '../product/ListProducts'

const HomePages = () => {
  return (
    <div>
      <Banner />
      <Carousel />
      <ListProducts />
    </div>
  )
}

export default HomePages
