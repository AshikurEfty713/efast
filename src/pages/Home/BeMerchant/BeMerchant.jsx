import React from "react";
import truckImg3 from "../../../assets/couriers/truckimg3.png";

const BeMerchant = () => {
	return (
		<div className="hero bg-orange-400 lg:p-20 p-5 mb-15 rounded-4xl lg:max-w-7xl mx-auto">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<img src={truckImg3} className="lg:max-w-sm w-52 rounded-lg " />
				<div>
					<h1 className="text-5xl font-bold text-white">Box Office News!</h1>
					<p className="py-6 text-gray-50">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>
					<button className="btn bg-amber-200 mr-5 rounded-4xl mb-3 lg:mb-0">
						Become a Merchant
					</button>
					<button className="btn bg-transparent border-amber-300 text-white rounded-4xl">
						Earn with Profast Courier
					</button>
				</div>
			</div>
		</div>
	);
};

export default BeMerchant;
