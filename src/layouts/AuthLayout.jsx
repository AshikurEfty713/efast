import React from "react";
import { Outlet } from "react-router";
import authImg from "../../src/assets/others/authImage.png";
import EfastLogo from "../pages/shared/EfastLogo/EfastLogo";

const AuthLayout = () => {
	return (
		<div className="max-w-7xl mx-auto">
			<div className="p-12">
				<EfastLogo></EfastLogo>
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="flex-1">
						<img src={authImg} className=" rounded-lg shadow-2xl" />
					</div>
					<div className="flex-1">
						<Outlet></Outlet>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuthLayout;
