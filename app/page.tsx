import FeaturedCategory from '@/components/layouts/FeaturedCategory'
import FeaturedProducts from '@/components/layouts/FeaturedProducts'
import Hero from '@/components/layouts/Hero'
import Newsletter from '@/components/layouts/Newsletter'
import Reviews from '@/components/layouts/Reviews'
import React from 'react'

const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <FeaturedCategory />
      <Reviews />
      <Newsletter />
    </main>
  )
}

export default Home