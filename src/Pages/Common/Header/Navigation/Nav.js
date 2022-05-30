import React from "react";
import CustomLink from "./CustomLink/CustomLink";
import "./Nav.css";
import Logo from '../../../../images/logo-gb.png';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { signOut } from "firebase/auth";

const Nav = () => {
	const [user] = useAuthState(auth);

  const handelLogOut = () => {
    signOut(auth);
  }
	return (
		<nav className="menu-container">
			<div className="brand-logo">
				<img src={Logo} alt="" />
			</div>
			<div className="menu-items">
				<CustomLink to="/">Home</CustomLink>
				<CustomLink to="/inventory">Manage Inventory</CustomLink>
				{
					user && 
					<CustomLink to="/myitems">My Items</CustomLink>
				}
				{
					user && 
					<CustomLink to="/additem">Add Item</CustomLink>
				}
				{
					user && 
					<span className="text-md font-semibold mr-5 text-white">{user?.displayName}</span>
				}
				{
            user ?
            <button onClick={handelLogOut} style={{border: '0', backgroundColor: 'red', color: '#fff', padding: '6px 15px', borderRadius: '8px', cursor: 'pointer'}}>Log out</button>
            :
            <CustomLink to="/login">Login</CustomLink>
            }
			</div>
		</nav>
	);
};

export default Nav;
