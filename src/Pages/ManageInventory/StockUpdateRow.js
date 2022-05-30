import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const StockUpdateRow = ({item, refetch}) => {
  const { id } = useParams();
  const {image, name, price, vendor, quantity} = item;

  const handleDeliverd = async (e) => {
    if (!quantity <= 0) {
        const deliverdProduct = quantity - 1;
        const updateStock = { quantity: deliverdProduct }
        const { data } = await axios.put(`http://localhost:5000/product/${id}`, updateStock)
        if (data.modifiedCount) {
          toast.success('Successfully Deliverd Product');
          refetch();
        }
    } else {
        toast.warning('Your Stock is Empty');
    }
}
  

  return (
    <>
      <tr>
        <th></th>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle w-16 h-16 border-2">
              <img src={image} alt={image} />
            </div>
          </div>
        </td>
        <td>{name}</td>
        <td>{quantity}</td>
        <td>{price}</td>
        <td>{vendor}</td>
        <td>
          {
            quantity ? <button onClick={handleDeliverd} className="btn btn-xs bg-green-500 border-0">Delivery</button> 
            :
            <button className="btn btn-xs bg-red-500 border-0">Sold</button>
            }
        </td>
      </tr>
    </>
  );
};

export default StockUpdateRow;