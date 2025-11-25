import React from "react";
import { NavLink } from "react-router";
import logoImg from "../../../assets/others/logo.png";
import EfastLogo from "../EfastLogo/EfastLogo";
import { Link } from "react-router";

const Navbar = () => {
	const navItems = (
		<>
			<li>
				<NavLink
					to="/"
					className={"hover:bg-transparent hover:text-orange-600"}>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/about"
					className={"hover:bg-transparent hover:text-orange-600"}>
					About Us
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/coverage"
					className={"hover:bg-transparent hover:text-orange-600"}>
					Coverage
				</NavLink>
			</li>
		</>
	);
	return (
		<div className="sticky top-0 left-0 right-0 z-50">
			<div className="navbar max-w-7xl mx-auto bg-gray-100/10 backdrop-blur-sm shadow-xl rounded-full px-6 py-4 mt-4">
				<div className="navbar-start">
					<div className="dropdown">
						<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>
						<ul
							tabIndex="-1"
							className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
							{navItems}
						</ul>
					</div>
					<EfastLogo />
				</div>

				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1 text-xl font-semibold text-orange-500  ">
						{navItems}
					</ul>
				</div>

				<div className="navbar-end ">
					<Link
						to="login"
						className="border px-6 py-1 text-xl text-gray-700 rounded-full cursor-pointer">
						login
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
