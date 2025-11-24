import React from "react";
import { Outlet } from "react-router";
import authImg from "../../src/assets/others/authImage.png";
import logoImg from "../../src/assets/others/logo.png";

const AuthLayout = () => {
	return (
		<div>
			<div className="p-12">
				<img src={logoImg} alt="" />
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
