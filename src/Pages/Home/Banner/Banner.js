import React from "react";
import "./Banner.css";
import BackgroundImg from "../../../images/gadgets-bg.jpg";

const Banner = () => {
	return (
		<section
			className="banner"
			style={{
				backgroundImage: `url(${BackgroundImg})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className="container">
				<div className="banner-content">
					<h2>
						introducing the <span>gadget bazer</span> collections
					</h2>
					<p>
						The best performing products in the world.We choose to only sell the best performing gadgets in the world, learning them inside and out to ensure your experience with our organization and the products we supply are second to none. 
					</p>
				</div>
			</div>
		</section>
	);
};

export default Banner;
