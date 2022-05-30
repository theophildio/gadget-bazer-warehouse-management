import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../Common/LoadingSpinner/LoadingSpinner';
import StockUpdateRow from './StockUpdateRow';

const StockUpdate = () => {
  const {id} = useParams();
  const {data: item, isLoading, refetch} = useQuery('item', () => fetch(`http://localhost:5000/product/${id}`, {
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json())
  );
  if(isLoading) {
    return <Loading />
  }

  const handleStockUpdate = async (e) => {
    e.preventDefault();
    const inputStock = e.target.quantity.value;
    const setStock = parseInt(inputStock)
    if(inputStock === "") {
      return toast.error('Input valid stock value');
    }
    else if(setStock > 0) {
      const getQnty = item.quantity;
      const totalStock = getQnty + setStock;
      const stockQnty = {quantity: totalStock}
      const { data } = await axios.put(`http://localhost:5000/product/${id}`, stockQnty)
        if (data.modifiedCount) {
          e.target.reset()
          toast.success('Successfully Added Stock');
          refetch();
      } 
    }
  }

  return (
    <div className='px-4 lg:px-28 py-8'>
      <div>
        <h2 className='text-xl font-semibold mb-5'>Update stock of: {item.name} </h2>
      </div>
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
              <th></th>
            </tr>
          </thead>
          <tbody>
             <StockUpdateRow item={item} refetch={refetch}/>
          </tbody>
        </table>
      </div>
      <div className='pt-12 w-1/3 mx-auto'>
        <form onSubmit={handleStockUpdate} className='flex flex-col'>
          <input type="text" name='quantity'  placeholder="Enter Quantity" className="input input-bordered w-full" />
          <input type="submit" value="Update Stock" className="btn border-0 bg-cyan-400 w-full mt-6" />
        </form>
      </div>  
    </div>
  );
};

export default StockUpdate;