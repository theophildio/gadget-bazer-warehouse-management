import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useProduct from '../../../hooks/useProduct';
import './FeaturedCollection.css';
import SingleProduct from './SingleProduct/SingleProduct';

const FeaturedCollection = () => {
  const [product] = useProduct();
  const productOnHome = product.slice(0, 6);
  const navigate = useNavigate();

  const handleUpdateStock = id => {
    navigate(`/stockupdate/${id}`);
  }

  return (
    <section className='featured-collection'>
      <div className="container">
        <h3>Featured collection</h3>
        <div className="featured-collections">
          {
            productOnHome.map(item => <SingleProduct
              key={item._id}
              item={item}
              handleUpdateStock={handleUpdateStock}
            ></SingleProduct>)
          }
        </div>
        <div className='mt-6 mx-auto w-1/5'>
          <Link to="/inventory">
            <button className="btn btn-wide bg-cyan-500 border-0">Manage Inventories</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;