import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProduct from '../../hooks/useProduct';
import InventoryRow from './InventoryRow';
import './ManageInventory.css';

const ManageInventory = () => {
  const [products, setProducts] = useProduct();
  const [isRefresh, setIsRefresh] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://gadget-bazer.herokuapp.com/product')
        .then((response) => {
          setProducts(response.data)
        });
}, [isRefresh])

  const handleUpdateStock = id => {
    navigate(`/stockupdate/${id}`);
  }
  const handleDeleteBtn = async (id) => {
    const confirm = window.confirm('Are You Sure to Delete the Item?')
    if (confirm) {
      const { data } = await axios.delete(`https://gadget-bazer.herokuapp.com/product/${id}`)
        if (data.acknowledged) {
          setIsRefresh(!isRefresh);
          toast.success('Successfully Deleted')
      }
    }
  } 

  return (
    <div className='manage-inventory'>
      <div className="container">
        <div className='flex lg:flex-row justify-between'>
          <h2 className="text-2xl font-semibold mb-3">Manage Inventory</h2>
          <Link to="/additem">
            <button className="btn btn-sm bg-cyan-500 border-0">Add New Item</button>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Vendor</th>
                <th>Quantity</th>
                <th>Update Item</th>
                <th>Delete Item</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map((item, index) => <InventoryRow
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