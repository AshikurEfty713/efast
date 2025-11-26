import React from "react";

import truckImg from "../../../assets/others/delivery-van.png";
import shieldImg from "../../../assets/others/big-deliveryman.png";
import headsetImg from "../../../assets/others/safe-delivery.png";

const features = [
	{
		img: truckImg,
		title: "Fast Delivery Updates",
		description:
			"Stay updated in real-time with our parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant updates for complete peace of mind.",
	},
	{
		img: shieldImg,
		title: "Secure Shipments",
		description:
			"We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe exchange for every delivery item.",
	},
	{
		img: headsetImg,
		title: "Customer Care Anytime",
		description:
			"Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
	},
];

const Bubble = ({ size, left, top, delay }) => {
	return (
		<div
			className="absolute rounded-full bg-orange-500/10 animate-float blur-xl"
			style={{
				width: `clamp(${size * 0.4}px, ${size * 0.6}px, ${size}px)`,
				height: `clamp(${size * 0.4}px, ${size * 0.6}px, ${size}px)`,
				left,
				top,
				animationDelay: `${delay}s`,
				animationDuration: `clamp(6s, 10s, ${10 + Math.random() * 4}s)`,
			}}
		/>
	);
};
const Features = () => {
	return (
		<section className="py-16 relative lg:max-w-7xl mx-auto">
			<Bubble size={300} left="5%" top="10%" delay={0} />
			<Bubble size={200} left="54%" top="20%" delay={2} />
			<Bubble size={250} left="15%" top="70%" delay={4} />
			<Bubble size={180} left="65%" top="75%" delay={1} />
			<Bubble size={220} left="50%" top="50%" delay={3} />
			<Bubble size={150} left="70%" top="5%" delay={5} />

			<div className="container relative z-10 mx-auto px-4 max-w-7xl">
				<div className="text-center mb-16 space-y-4">
					<h2 className="text-5xl md:text-6xl font-bold text-orange-500">
						Why Choose Us
					</h2>
					<p className="text-lg text-muted-bg-lime-700/50 max-w-2xl mx-auto text-balance">
						Experience seamless delivery with our premium features designed to
						give you peace of mind
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8 lg:gap-10">
					{features.map((feature, index) => {
						const Img = feature.img;
						return (
							<div
								key={index}
								className="group relative bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/30 hover:-translate-y-2">
								<div className="mb-6 relative">
									<div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
										<img
											src={Img}
											alt={feature.title}
											className="w-10 h-10 text-primary-bg-lime-700/50"
										/>
									</div>
									<div className="absolute -top-2 -right-2 w-16 h-16 rounded-full bg-orange-500/20 blur-xl group-hover:scale-150 transition-transform duration-500" />
								</div>

								<h3 className="text-2xl font-bold mb-4 text-bg-lime-700/50 group-hover:text-orange-500 transition-colors duration-300">
									{feature.title}
								</h3>
								<p className="text-muted-bg-lime-700/50 leading-relaxed">
									{feature.description}
								</p>

								<div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
							</div>
						);
					})}
				</div>
			</div>
			<style jsx>{`
				@keyframes float {
					0%,
					100% {
						transform: translate(0, 0) scale(1);
					}
					50% {
						transform: translate(-10px, -25px) scale(1.05);
					}
				}

				/* mobile-friendly */
				@media (max-width: 640px) {
					.animate-float {
						animation-duration: 7s !important;
					}
				}

				/* tablet */
				@media (min-width: 641px) and (max-width: 1024px) {
					.animate-float {
						animation-duration: 9s !important;
					}
				}

				/* desktop */
				@media (min-width: 1025px) {
					.animate-float {
						animation-duration: 12s !important;
					}
				}
			`}</style>
		</section>
	);
};

export default Features;
