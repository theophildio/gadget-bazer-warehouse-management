import React from 'react';
import useProduct from '../../../hooks/useProduct';
import './FeaturedCollection.css';
import SingleProduct from './SingleProduct/SingleProduct';

const FeaturedCollection = () => {
  const [product] = useProduct();
  return (
    <section className='featured-collection'>
      <div className="container">
        <h3>Featured collection</h3>
        <div className="featured-collections">
          {
            product.map(item => <SingleProduct
              key={product._id}
              item={item}
            ></SingleProduct>)
          }
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;