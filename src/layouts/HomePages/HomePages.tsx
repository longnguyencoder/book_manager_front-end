import React from 'react'
import Banner from './components/Banner'
import Carousel from './components/Carousel'
import ListProducts from '../product/ListProducts'

interface HomePagesProps {
  tuKhoaTimKiem: string;
}


function HomePages({ tuKhoaTimKiem }: HomePagesProps) {
  return (
    <div>
      <Banner />
      <Carousel />
      <ListProducts tuKhoaTimKiem={tuKhoaTimKiem} />
    </div>
  )
}

export default HomePages
