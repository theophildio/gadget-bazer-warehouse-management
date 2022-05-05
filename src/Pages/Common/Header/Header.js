import React from "react";
import "./Header.css";
import Nav from "./Navigation/Nav";

const Header = () => {
	return (
		<header className="header">
			<div className="header-container">
				<Nav></Nav>
			</div>
		</header>
	);
};

export default Header;
