import FeaturedCategory from '@/components/layouts/FeaturedCategory'
import FeaturedProducts from '@/components/layouts/FeaturedProducts'
import Hero from '@/components/layouts/Hero'
import Reviews from '@/components/layouts/Reviews'
import React from 'react'

const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <FeaturedCategory />
      <Reviews />
    </main>
  )
}

export default Home