import React from 'react';

const MyItemRow = ({product, index, handleDeleteBtn}) => {
  const {_id, image, name, price, quantity, vendor} = product;
  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="" />
            </div>
          </div>
        </td>
        <td>{name}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>{vendor}</td>
        <td>
          <button onClick={() => handleDeleteBtn(_id)} className="btn btn-xs bg-red-500 border-0">Delete</button>
        </td>
      </tr>
    </>
  );
};

export default MyItemRow;