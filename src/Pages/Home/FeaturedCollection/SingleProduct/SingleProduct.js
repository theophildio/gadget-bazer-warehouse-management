import React from "react";
import "./SingleProduct.css";

const SingleProduct = ({ item }) => {
	const { image, title, details, fee } = item;
	return (
		<div className="single-product">
			<div className="img">
				<img src={image} alt="" />
			</div>
      <div className="item-detail">
        <h4>{title}</h4>
        <p>{details}</p>
        <p>${fee}</p>
      </div>
		</div>
	);
};

export default SingleProduct;
