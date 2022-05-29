import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
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

  return (
    <div className='px-4 lg:px-28 py-8'>
      <h2 className='text-xl font-semibold mb-5'>Update stock of: </h2>
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
    </div>
  );
};

export default StockUpdate;