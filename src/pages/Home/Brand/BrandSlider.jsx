import React from "react";
import Marquee from "react-fast-marquee";

import logo1 from "../../../assets/brands/amazon_vector.png";
import logo2 from "../../../assets/brands/casio.png";
import logo3 from "../../../assets/brands/amazon.png";
import logo4 from "../../../assets/brands/moonstar.png";
import logo5 from "../../../assets/brands/randstad.png";
import logo6 from "../../../assets/brands/start-people 1.png";
import logo7 from "../../../assets/brands/start.png";

const BrandSlider = () => {
	const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

	return (
		<section className="py-10 max-w-7xl mx-auto">
			<div className="text-center mb-8">
				<h2 className="text-2xl font-bold text-primary">Our Clients</h2>
				<p className="text-sm text-gray-500">
					Trusted by leading companies worldwide
				</p>
			</div>

			<Marquee gradient={false} speed={50} pauseOnHover={true}>
				{logos.map((logo, index) => (
					<div key={index} className="flex-shrink-0 w-40 mx-6">
						<img
							src={logo}
							alt={`Client ${index + 1}`}
							className="w-full h-auto object-contain"
						/>
					</div>
				))}
			</Marquee>
		</section>
	);
};

export default BrandSlider;
