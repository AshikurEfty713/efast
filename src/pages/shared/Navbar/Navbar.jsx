import React from "react";
import { NavLink } from "react-router";
import EfastLogo from "../EfastLogo/EfastLogo";
import { Link } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
	const { user, logOut } = useAuth();
	const handleLogout = () => {
		logOut()
			.then(() => {
				console.log("Logged out successfully");
			})
			.catch((error) => {
				console.error("Looged out failed", error);
			});
	};

	const navItems = (
		<>
			<li>
				<NavLink
					to="/"
					className={"hover:bg-transparent hover:text-orange-600 text-base"}>
					Home
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/about"
					className={"hover:bg-transparent hover:text-orange-600 text-base"}>
					About Us
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/services"
					className={"hover:bg-transparent hover:text-orange-600 text-base"}>
					Services
				</NavLink>
			</li>
			<li>
				<NavLink
					to="/coverage"
					className={"hover:bg-transparent hover:text-orange-600 text-base"}>
					Coverage
				</NavLink>
			</li>

			<li>
				<NavLink
					to="/sendParcel"
					className={"hover:bg-transparent hover:text-orange-600 text-base"}>
					Send Parcel
				</NavLink>
			</li>

			{/* {user && (
				<>
					<li>
						<NavLink
							to="/dashboard"
							className={"hover:bg-transparent hover:text-orange-600"}>
							Dashboard
						</NavLink>
					</li>
				</>
			)} */}
		</>
	);
	return (
		<div className="sticky top-0 left-0 right-0 z-50">
			<div className="navbar max-w-7xl mx-auto bg-gray-100/10 backdrop-blur-sm shadow-xl rounded-full px-6 lg:py-2 py-0 mt-4 ">
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
					<ul className="menu menu-horizontal px-1 text-xl font-regular text-orange-500  ">
						{navItems}
					</ul>
				</div>

				<div className="navbar-end ">
					{!user && (
						<Link
							to="/login"
							className="border lg:px-6 px-4 py-0 lg:text-xl tex-sm text-orange-500 rounded-full cursor-pointer">
							login
						</Link>
					)}
					{user && (
						<div className="dropdown dropdown-end">
							<div
								tabIndex={0}
								className="flex items-center lg:gap-3 gap-2 cursor-pointer text-orange-500 hover:text-orange-600 p-2 rounded-lg transition-colors">
								<div className="avatar">
									<div className="lg:w-8 w-7 rounded-full ring ring-pink-500 ring-offset-2">
										<img
											src="https://ashikurefty.netlify.app/assets/banner6-Cz5vAUPT.png"
											alt="User"
										/>
									</div>
								</div>
								<div className="text-right">
									<p className="text-sm">{user.displayName}</p>
								</div>
								<ChevronDown size={16} />
							</div>
							<div className="dropdown-content menu bg-white shadow-2xl py-4 px-6 rounded-md">
								<ul>
									<li>
										<Link to={"/dashboard"}>Profile</Link>
									</li>
									<li>
										<a>Settings</a>
									</li>
									<li>
										<Link onClick={handleLogout}>Logout</Link>
									</li>
								</ul>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
