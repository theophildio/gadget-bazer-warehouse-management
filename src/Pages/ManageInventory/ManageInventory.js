import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
import InventoryRow from './InventoryRow';
import './ManageInventory.css';

const ManageInventory = () => {
  const [product] = useProduct();
  const navigate = useNavigate();

  const handleUpdateStock = id => {
    navigate(`/stockupdate/${id}`);
  }
  const handleDeleteBtn = id => {
    console.log(id);
  } 

  return (
    <div className='manage-inventory'>
      <div className="container">
        <h2 className="text-2xl font-semibold mb-3">Manage Inventory</h2>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Vendor</th>
                  <th>Update Item</th>
                  <th>Delete Item</th>
                </tr>
              </thead>
              <tbody>
                {
                  product.map((item, index) => <InventoryRow
                    key= {item._id}
                    item= {item}
                    index={index}
                    handleUpdateStock={handleUpdateStock}
                    handleDeleteBtn={handleDeleteBtn}
                  ></InventoryRow>)
                }
              </tbody>
            </table>
          </div> 
      </div>
    </div>
  );
};

export default ManageInventory;