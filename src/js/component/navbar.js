import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<button className="navbar-brand mb-0 h1">Add New Contact</button>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Contact list</button>
				</Link>
			</div>
		</nav>
	);
};
