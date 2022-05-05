import React from "react";
import CustomLink from "./CustomLink/CustomLink";
import "./Nav.css";
import Logo from '../../../../images/logo-gb.png';

const Nav = () => {
	return (
		<nav className="menu-container">
			<div className="brand-logo">
				<img src={Logo} alt="" />
			</div>
			<div className="menu-items">
				<CustomLink to="/">Home</CustomLink>
				<CustomLink to="/inventory">Manage Inventory</CustomLink>
				<CustomLink to="/login">Login</CustomLink>
			</div>
		</nav>
	);
};

export default Nav;
