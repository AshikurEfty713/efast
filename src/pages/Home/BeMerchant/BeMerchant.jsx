import React from "react";
import merchantImg from "../../../assets/others/location-merchant.png";

const BeMerchant = () => {
	return (
		<div className="hero bg-cyan-800 p-20 mb-15 rounded-4xl">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<img src={merchantImg} className="max-w-sm rounded-lg " />
				<div>
					<h1 className="text-5xl font-bold text-white">Box Office News!</h1>
					<p className="py-6 text-gray-50">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>
					<button className="btn bg-amber-200 mr-5 rounded-4xl">
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
