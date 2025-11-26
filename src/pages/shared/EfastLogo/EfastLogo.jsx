import React from "react";
import logoImg from "../../../assets/others/logo.png";
import { Link } from "react-router";
const EfastLogo = () => {
	return (
		<Link to="/" className="flex gap-1 items-center">
			<img className="h-6 lg:h-full" src={logoImg} alt="" />
			<h5 className="lg:text-2xl text-base font-semibold text-orange-500">
				Efast
			</h5>
		</Link>
	);
};

export default EfastLogo;
