import React from "react";
import { BsTruck } from "react-icons/bs";
import { CgAddR } from "react-icons/cg";
import { FaDollarSign } from "react-icons/fa6";
import { LuHandHeart } from "react-icons/lu";
// import { HandHeart, Truck, Car, DollarSign } from 'lucide-react';
// import deliveryImage from 'figma:asset/f2f7fee0831bd1fc9c02f3168b95df47238eede2.png';

export default function WorkProcess() {
	return (
		<div className="min-h-screen bg-white max-w-7xl mx-auto">
			{/* Hero Section */}
			<div className="relative overflow-hidden bg-linear-to-br from-yellow-50 to-orange-50 py-16">
				<div className="container mx-auto px-4">
					<div className="flex items-center justify-between">
						<div className="flex-1">
							<h1 className="text-center mb-6">Join Our Fleet!!!</h1>
							<div className="flex justify-center">
								<button className="btn btn-warning bg-orange-500 border-none hover:bg-yellow-500 text-gray-800 px-8">
									Register Now
								</button>
							</div>
						</div>
						<div className="flex-1 flex justify-end">
							<img
								// src={deliveryImage}
								alt="Delivery person on scooter"
								className="w-64 h-auto object-contain"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* How We Work Section */}
			<div className="container mx-auto px-4 py-16">
				<h2 className="text-center mb-16">How We Work</h2>

				{/* Process Steps */}
				<div className="relative">
					{/* Dotted Line Connection */}
					<svg
						className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 pointer-events-none hidden lg:block"
						style={{ zIndex: 0 }}>
						<line
							x1="15%"
							y1="50%"
							x2="85%"
							y2="50%"
							stroke="#FCD34D"
							strokeWidth="2"
							strokeDasharray="10,10"
						/>
					</svg>

					<div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
						style={{ zIndex: 1 }}>
						{/* Step 1: Pickup */}
						<div className="flex flex-col items-center text-center">
							<div className="w-24 h-24 rounded-full  bg-orange-500 flex items-center justify-center mb-4 shadow-lg">
								<LuHandHeart className="w-12 h-12 text-white" />
							</div>
							<h3 className="mb-3">
								<span className="text-gray-500">01. </span>
								<span className="text-orange-400">Pickup</span>
							</h3>
							<p className="text-gray-600 text-sm max-w-xs">
								Once your order is entered, we ensure fast pickup from the
								merchant, readying the item for the next step.
							</p>
						</div>

						{/* Step 2: Order Processing */}
						<div className="flex flex-col items-center text-center lg:mt-20">
							<div className="w-24 h-24 rounded-full bg-orange-500 flex items-center justify-center mb-4 shadow-lg">
								<BsTruck className="w-12 h-12 text-white" />
							</div>
							<h3 className="mb-3">
								<span className="text-gray-500">02. </span>
								<span className="text-orange-400">Order Processing</span>
							</h3>
							<p className="text-gray-600 text-sm max-w-xs">
								At our central hub, the parcel is processed and checked to
								ensure everything is set for transportation.
							</p>
						</div>

						{/* Step 3: Transportation */}
						<div className="flex flex-col items-center text-center">
							<div className="w-24 h-24 rounded-full bg-orange-500 flex items-center justify-center mb-4 shadow-lg">
								<CgAddR className="w-12 h-12 text-white" />
							</div>
							<h3 className="mb-3">
								<span className="text-gray-500">03. </span>
								<span className="text-orange-400">Transportation</span>
							</h3>
							<p className="text-gray-600 text-sm max-w-xs">
								The parcel is transferred to our fleet for secure and timely
								delivery, moving it safely to the next hub.
							</p>
						</div>

						{/* Step 4: Delivery */}
						<div className="flex flex-col items-center text-center lg:mt-20">
							<div className="w-24 h-24 rounded-full bg-orange-500 flex items-center justify-center mb-4 shadow-lg">
								<FaDollarSign className="w-12 h-12 text-white" />
							</div>
							<h3 className="mb-3">
								<span className="text-gray-500">04. </span>
								<span className="text-orange-400">Delivery</span>
							</h3>
							<p className="text-gray-600 text-sm max-w-xs">
								Upon reaching the delivery hub, the parcel is processed and
								promptly delivered to the recipient's address.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
