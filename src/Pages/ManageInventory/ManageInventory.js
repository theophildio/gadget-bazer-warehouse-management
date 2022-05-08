import React from 'react';
import useProduct from '../../hooks/useProduct';
import SingleProduct from '../Home/FeaturedCollection/SingleProduct/SingleProduct';
import './ManageInventory.css';

const ManageInventory = () => {
  const [product] = useProduct();
  return (
    <div className='manage-inventory'>
      <div className="container">
        <h2>Manage Inventory</h2>
        <div className="all-products">
          {
            product.map(item => <SingleProduct
              key= {product._id}
              item= {item}
            ></SingleProduct>)
          }
        </div>
      </div>
    </div>
  );
};

export default ManageInventory;