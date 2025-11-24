// featuresSection.jsx
import React from "react";

// Import your images
import truckImg from "../../../assets/others/delivery-van.png";
import shieldImg from "../../../assets/others/big-deliveryman.png";
import headsetImg from "../../../assets/others/safe-delivery.png";

const features = [
	{
		img: truckImg,
		title: "Fast Delivery Updates", // changed from "Live Parcel Tracking"
		description:
			"Stay updated in real-time with our parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant updates for complete peace of mind.",
	},
	{
		img: shieldImg,
		title: "Secure Shipments", // changed from "100% Safe Delivery"
		description:
			"We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe exchange for every delivery item.",
	},
	{
		img: headsetImg,
		title: "Customer Care Anytime", // changed from "24/7 Call Center Support"
		description:
			"Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
	},
];

const Features = () => {
	return (
		<section className="py-16 bg-base-100">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
				<div className="">
					{features.map((feature, index) => (
						<div
							key={index}
							className="card shadow-lg border border-gray-200 p-6 mb-10 hover:shadow-xl transition">
							<div className="flex gap-10">
								<div className="mb-4">
									<img
										src={feature.img}
										alt={feature.title}
										className="w-36 h-36 mx-auto"
									/>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-2 ">
										{feature.title}
									</h3>
									<p className="text-gray-600 ">{feature.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
