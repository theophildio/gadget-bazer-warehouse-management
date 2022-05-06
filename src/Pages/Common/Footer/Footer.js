import React from "react";
import "./Footer.css";

const Footer = () => {
	const getDate = new Date();
	const getCurrentYear = getDate.getFullYear();
	return (
		<footer className="footer">
			<div className="container">
				<p>
					&copy; Copyright - {getCurrentYear} | All rights reserved by Theophil
					Dio
				</p>
			</div>
		</footer>
	);
};

export default Footer;
