import React from "react";
import CustomLink from "./CustomLink/CustomLink";
import "./Nav.css";
import Logo from '../../../../images/logo-gb.png';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { signOut } from "firebase/auth";
import { NavLink } from "react-router-dom";

const Nav = () => {
	const [user] = useAuthState(auth);

  const handelLogOut = () => {
    signOut(auth);
  }

	const menuItems = (
		<>
			<li className="mr-1 text-accent text-xl"><NavLink to="/">Home</NavLink></li>
			<li className="mr-1 text-accent text-xl"><NavLink to="/inventory">Manage Inventory</NavLink></li>
			{
				user && 
				<li className="text-accent text-xl"><NavLink to="/myitems">My Items</NavLink></li>
			}
			{
				user && 
				<li className="text-accent text-xl"><CustomLink to="/additem">Add Item</CustomLink></li>
			}
			{
				user && 
				<li><span className="text-md font-semibold mr-5 text-accent">{user?.displayName}</span></li>
			}
			{
				user ?
				<li><button onClick={handelLogOut} style={{fontWeight: 'bold', border: '0', backgroundColor: 'red', color: '#fff', padding: '6px 15px', borderRadius: '8px', cursor: 'pointer'}}>Log out</button></li>
				:
				<li><CustomLink to="/login" className="text-accent text-xl">Login</CustomLink></li>
			}
		</>
	);

	return (
		<div className="navbar justify-between">
			<div className="brand-logo">
				<img src={Logo} alt="Logo"/>
			</div>
			<div className="navbar-end">
				<div className="dropdown">
					<label tabIndex="0" className="btn bg-yellow-400 lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex="0"
						className="menu menu-compact right-0 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						{menuItems}
					</ul>
				</div>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal p-0">{menuItems}</ul>
			</div>
		</div>
	);
};

export default Nav;
