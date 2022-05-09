import React from "react";
import "./SingleProduct.css";

const SingleProduct = ({ item }) => {
	const { image, name, details, price, vendor, quantity } = item;
	return (
		<div className="single-product">
			<div className="img">
				<img src={image} alt="" />
			</div>
      <div className="item-detail">
        <h4>{name}</h4>
				<h4>{vendor}</h4>
        <p>{details}</p>
				<p>{quantity}</p>
        <p>${price}</p>
      </div>
		</div>
	);
};

export default SingleProduct;
