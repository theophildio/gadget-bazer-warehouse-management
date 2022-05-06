import React from 'react'
import Banner from './Banner/Banner';
import FeaturedCollection from './FeaturedCollection/FeaturedCollection';
import './Home.css';

const Home = () => {
  
  return (
    <main>
      <Banner></Banner>
      <FeaturedCollection></FeaturedCollection>
    </main>
  )
}

export default Home;