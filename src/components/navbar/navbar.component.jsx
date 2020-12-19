import React from "react";
import "./navbar.styles.scss";
import "../../styles/colors.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<header className="header ">
			<div className="cont flex justify-end items-center">
				<nav className="resume-link flex justify-start items-center">
					<NavLink className="navbar-item resume py-4 px-2" exact to="/resume">
						Resume
					</NavLink>
				</nav>
				<nav className="home-link ">
					<NavLink className="navbar-item logo " exact to="/">
						KOAD
					</NavLink>
				</nav>
				<nav className="navbar flex justify-end items-center">
					<NavLink className="navbar-item py-4 px-2" exact to="/posts">
						Blog
					</NavLink>
					<NavLink className="navbar-item py-4 px-2" exact to="/projects">
						Projects
					</NavLink>
					<NavLink className="navbar-item py-4 px-2" exact to="/about">
						About
					</NavLink>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
