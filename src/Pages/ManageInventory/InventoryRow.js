import React from 'react';

const InventoryRow = ({item, index, handleUpdateStock, handleDeleteBtn}) => {
  const {_id, image, name, price, vendor, quantity, } = item;
  
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt={image} />
            </div>
          </div>
        </td>
        <td>{name}</td>
        <td>{price}</td>
        <td>{vendor}</td>
        <td>{quantity}</td>
        <td>
          <button onClick={() => handleUpdateStock(_id)} className="btn btn-xs bg-green-500 border-0">Update</button>
        </td>
        <td>
          <button onClick={() => handleDeleteBtn(_id)} className="btn btn-xs bg-red-500 border-0">Delete</button>
        </td>
      </tr>
    </>
  );
};

export default InventoryRow;