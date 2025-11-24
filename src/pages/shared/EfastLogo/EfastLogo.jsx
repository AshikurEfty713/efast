import React from "react";
import logoImg from "../../../assets/others/logo.png";
import { Link } from "react-router";
const EfastLogo = () => {
	return (
		<Link to="/" className="flex gap-1 items-center">
			<img src={logoImg} alt="" />
			<h5 className="text-2xl font-semibold text-lime-500">Efast</h5>
		</Link>
	);
};

export default EfastLogo;
