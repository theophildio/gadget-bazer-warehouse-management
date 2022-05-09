import React from "react";
import "./SingleProduct.css";

const SingleProduct = ({ item }) => {
	const { image, name, details, price, Vendor, Quantity } = item;
	return (
		<div className="single-product">
			<div className="img">
				<img src={image} alt="" />
			</div>
      <div className="item-detail">
        <h4 className="product-title">{name}</h4>
				<h4>Vendor: {Vendor}</h4>
				<h5>Quantity: {Quantity}</h5>
        <p>{details}</p>
        <h5>${price}</h5>
      </div>
			<button className="gadget-btn">Update</button>
		</div>
	);
};

export default SingleProduct;
