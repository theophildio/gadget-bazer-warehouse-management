import React from 'react'
import useProduct from '../../hooks/useProdect';
import './Home.css';

const Home = () => {
  const [product] = useProduct();
  
  return (
    <main>
      <h1>this is home page</h1>
      <h3>Total products: {product.length}</h3>
    </main>
  )
}

export default Home;