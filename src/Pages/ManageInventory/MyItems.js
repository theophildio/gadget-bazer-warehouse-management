import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import MyItemRow from './MyItemRow';

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [products, setProducts] = useState([]);
  const [isRefresh, setIsRefresh] = useState(false)

  useEffect(() => {
    axios.get(`https://gadget-bazer.herokuapp.com/myitems/${user?.email}`, {
      headers: {
        'content-type': 'application/json'
      }
    })
    .then((response => {
      setProducts(response.data)
    }))
  }, [user, isRefresh]);

  const handleDeleteBtn = async (id) => {
    const confirm = window.confirm('Are You Sure to Delete the Item?')
    if (confirm) {
      const { data } = await axios.delete(`https://gadget-bazer.herokuapp.com/myitem/${id}`)
        if (data.acknowledged) {
          setIsRefresh(!isRefresh);
          toast.success('Successfully Deleted');
      }
    }
  }  
    
  return (
    <div className='container py-8 min-h-screen'>
      <div className='flex lg:flex-row justify-between'>
        <h2 className="text-2xl font-semibold mb-3">My Items</h2>
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
              <th>Quantity</th>
              <th>Vendor</th>
              <th>Delete Item</th>
            </tr>
          </thead>
          <tbody> 
            {
              products.map((product, index) => <MyItemRow 
                key={product._id}
                index={index}
                product={product}
                handleDeleteBtn={handleDeleteBtn}
              />)
            }
          </tbody>
        </table>
      </div>
    </div>
  );  
}

export default MyItems;