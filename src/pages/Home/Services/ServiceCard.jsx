import React from "react";

const ServiceCard = ({ service }) => {
	const { title, description, icon: Icon } = service;
	return (
		<div className="card bg-base-100 shadow-lg hover:shadow-xl transition duration-300 border border-base-200">
			<div className="card-body items-center text-center p-6">
				<div className="text-lime-500 text-5xl mb-3">
					<Icon />
				</div>
				<h3 className="card-title text-lg font-semibold">{title}</h3>
				<p className="text-sm text-base-content/70">{description}</p>
			</div>
		</div>
	);
};

export default ServiceCard;
