
import React from 'react'
import Categories from '../../components/categories/Categories'
import Contact from '../../components/contact/Contact'
import FeaturedProducts from '../../components/featuredproduct/FeaturedProduct'

import Slider from '../../components/slider/Slider'
import "./home.scss"

function Home() {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type="featured"/>
      <Categories/>
      <Contact/>
      <FeaturedProducts type="trending"/>

    </div>
  )
}

export default Home