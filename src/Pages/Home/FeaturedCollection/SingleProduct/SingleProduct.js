import React from "react";
import "./SingleProduct.css";

const SingleProduct = ({ item, handleUpdateStock }) => {
	const { _id, image, name, details, price, vendor, quantity } = item;
	return (
		<div className="single-product">
			<div className="img">
				<img src={image} alt="" />
			</div>
      <div className="item-detail">
        <h4 className="product-title">{name}</h4>
				<h4>Vendor: {vendor}</h4>
				{
					quantity ? <h5>Quantity: {quantity}</h5> : <h5>Quantity: <span className="text-red-500">Out of Stock</span></h5>
				}
        <p>{details}</p>
        <h5>${price}</h5>
      </div>
			<button onClick={() => handleUpdateStock(_id)} className="gadget-btn">Update</button>
		</div>
	);
};

export default SingleProduct;
