import React from "react";
import ServiceCard from "./ServiceCard";
import {
	FaTruckFast,
	FaBoxOpen,
	FaGlobe,
	FaUserClock,
	FaCreditCard,
	FaShieldHalved,
} from "react-icons/fa6";

const services = [
	{
		icon: FaTruckFast,
		title: "Fast Delivery",
		description:
			"Get your parcels delivered swiftly and safely anywhere in the country.",
	},
	{
		icon: FaBoxOpen,
		title: "Secure Packaging",
		description:
			"We ensure your items are packed with care for maximum protection.",
	},
	{
		icon: FaGlobe,
		title: "Global Shipping",
		description:
			"Send packages internationally with reliable customs handling.",
	},
	{
		icon: FaUserClock,
		title: "Real-Time Tracking",
		description: "Track every step of your delivery process in real-time.",
	},
	{
		icon: FaShieldHalved,
		title: "Insured Shipments",
		description:
			"Your valuable packages are fully covered under our insurance policy.",
	},
	{
		icon: FaCreditCard,
		title: "Easy Payments",
		description:
			"Multiple secure payment options including cards and digital wallets.",
	},
];

const ServiceSection = () => {
	return (
		<section className="py-16 max-w-7xl mx-auto">
			<div className="container mx-auto px-6 text-center">
				<h2 className="text-3xl font-bold mb-4">Our Services</h2>
				<p className="max-w-2xl mx-auto text-base-content/70 mb-10">
					Enjoy fast, reliable parcel delivery with real-time tracking and zero
					hassle. From personal packages to business shipments — we deliver on
					time, every time.
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<ServiceCard key={index} service={service} />
					))}
				</div>
			</div>
		</section>
	);
};

export default ServiceSection;
