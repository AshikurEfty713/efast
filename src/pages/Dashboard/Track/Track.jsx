import {
	Search,
	Package,
	Truck,
	MapPin,
	CheckCircle,
	Clock,
	AlertCircle,
	Navigation,
	Home,
	ShieldCheck,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Track() {
	const [trackId, setTrackId] = useState("");
	const [trackingData, setTrackingData] = useState(null);
	const [isSearching, setIsSearching] = useState(false);
	const [currentStep, setCurrentStep] = useState(0);

	const mockTrackingData = {
		TRK123456: {
			trackId: "TRK123456789",
			currentStatus: "in-transit",
			estimatedDelivery: "Dec 5, 2025",
			carrier: "Express Shipping",
			origin: "New York, USA",
			destination: "Brooklyn, NY",
			weight: "2.5 kg",
			dimensions: "30 × 20 × 15 cm",
			steps: [
				{
					status: "Order Placed",
					location: "New York, USA",
					date: "Dec 1, 2025",
					time: "10:30 AM",
					description: "Your order has been placed successfully",
					completed: true,
					icon: "📝",
				},
				{
					status: "Processing",
					location: "Warehouse, New York",
					date: "Dec 1, 2025",
					time: "2:15 PM",
					description: "Order is being prepared for shipment",
					completed: true,
					icon: "🏭",
				},
				{
					status: "Shipped",
					location: "Distribution Center, New York",
					date: "Dec 2, 2025",
					time: "8:00 AM",
					description: "Package has been shipped from facility",
					completed: true,
					icon: "📦",
				},
				{
					status: "In Transit",
					location: "Philadelphia, PA",
					date: "Dec 3, 2025",
					time: "11:45 AM",
					description: "Package is moving between cities",
					completed: true,
					icon: "🚚",
				},
				{
					status: "Arrived at Hub",
					location: "Brooklyn Hub, NY",
					date: "Dec 4, 2025",
					time: "3:20 PM",
					description: "Package arrived at local distribution center",
					completed: true,
					icon: "🏢",
				},
				{
					status: "Out for Delivery",
					location: "Brooklyn, NY",
					date: "Dec 5, 2025",
					time: "Expected 9:00 AM - 12:00 PM",
					description: "Package is with delivery agent",
					completed: false,
					icon: "🚗",
				},
				{
					status: "Delivered",
					location: "Your Address",
					date: "Dec 5, 2025",
					time: "Expected",
					description: "Package will be delivered to your doorstep",
					completed: false,
					icon: "🏠",
				},
			],
		},

		TRK789012: {
			trackId: "TRK789012345",
			currentStatus: "delivered",
			estimatedDelivery: "Dec 2, 2025",
			carrier: "Standard Delivery",
			origin: "Los Angeles, CA",
			destination: "San Francisco, CA",
			weight: "1.8 kg",
			dimensions: "25 × 18 × 12 cm",
			steps: [
				{
					status: "Order Placed",
					location: "Los Angeles, CA",
					date: "Nov 28, 2025",
					time: "3:20 PM",
					description: "Your order has been placed successfully",
					completed: true,
					icon: "📝",
				},
				{
					status: "Processing",
					location: "Warehouse, Los Angeles",
					date: "Nov 29, 2025",
					time: "9:00 AM",
					description: "Order is being prepared for shipment",
					completed: true,
					icon: "🏭",
				},
				{
					status: "Shipped",
					location: "Distribution Center, CA",
					date: "Nov 30, 2025",
					time: "7:30 AM",
					description: "Package has been shipped",
					completed: true,
					icon: "📦",
				},
				{
					status: "In Transit",
					location: "San Francisco, CA",
					date: "Dec 1, 2025",
					time: "10:00 AM",
					description: "Package is on the way to destination",
					completed: true,
					icon: "🚚",
				},
				{
					status: "Arrived at Hub",
					location: "SF Distribution Hub",
					date: "Dec 2, 2025",
					time: "8:00 AM",
					description: "Package arrived at local hub",
					completed: true,
					icon: "🏢",
				},
				{
					status: "Out for Delivery",
					location: "San Francisco, CA",
					date: "Dec 2, 2025",
					time: "8:30 AM",
					description: "Package is out for delivery",
					completed: true,
					icon: "🚗",
				},
				{
					status: "Delivered",
					location: "Your Address",
					date: "Dec 2, 2025",
					time: "2:45 PM",
					description: "Package has been delivered successfully",
					completed: true,
					icon: "🏠",
				},
			],
		},
	};

	const handleSearch = () => {
		if (!trackId.trim()) return;

		setIsSearching(true);
		setCurrentStep(0);

		// Simulate searching animation
		const searchInterval = setInterval(() => {
			setCurrentStep((prev) => (prev < 4 ? prev + 1 : 0));
		}, 200);

		setTimeout(() => {
			clearInterval(searchInterval);
			const data = mockTrackingData[trackId.toUpperCase()];
			setTrackingData(data || null);
			setIsSearching(false);
		}, 1500);
	};

	const getStatusColor = (status) => {
		switch (status.toLowerCase()) {
			case "delivered":
				return "from-emerald-400 to-green-500";
			case "in-transit":
				return "from-blue-400 to-cyan-500";
			case "processing":
				return "from-amber-400 to-orange-500";
			default:
				return "from-gray-400 to-gray-500";
		}
	};

	const getStatusIcon = (status) => {
		switch (status.toLowerCase()) {
			case "delivered":
				return <CheckCircle className="text-white" size={28} />;
			case "in-transit":
				return <Truck className="text-white" size={28} />;
			case "processing":
				return <Clock className="text-white" size={28} />;
			default:
				return <Package className="text-white" size={28} />;
		}
	};

	const getStatusMessage = (status) => {
		switch (status.toLowerCase()) {
			case "delivered":
				return "Package has been delivered successfully!";
			case "in-transit":
				return "Your package is on the way!";
			case "processing":
				return "Package is being prepared for shipment";
			default:
				return "Tracking your package...";
		}
	};

	return (
		<div className="min-h-screen bg-linear-to-br from-gray-50 to-purple-50 p-4 md:p-6">
			{/* Header */}
			<motion.div
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				className="max-w-6xl mx-auto">
				<div className="mb-8">
					<h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
						Track Your Package
					</h1>
					<p className="text-gray-600 text-lg">
						Enter your tracking number to get real-time updates
					</p>
				</div>

				{/* Search Card */}
				<motion.div
					initial={{ scale: 0.95, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ delay: 0.1 }}
					className="card bg-linear-to-br from-white to-purple-50 border border-purple-100 shadow-2xl shadow-purple-200/50 mb-8">
					<div className="card-body p-6 md:p-8">
						<div className="flex flex-col md:flex-row gap-4 items-center">
							<div className="form-control flex-1 w-full">
								<div className="relative">
									<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
										<Search size={22} className="text-purple-500" />
									</div>
									<input
										type="text"
										placeholder="Enter your 12-digit tracking number"
										className="input input-lg pl-12 w-full bg-white border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300"
										value={trackId}
										onChange={(e) => setTrackId(e.target.value)}
										onKeyPress={(e) => e.key === "Enter" && handleSearch()}
									/>
									<div className="absolute inset-y-0 right-0 pr-4 flex items-center">
										<span className="text-sm text-gray-400 font-mono">
											{trackId.length}/12
										</span>
									</div>
								</div>
								<div className="text-sm text-gray-500 mt-2 ml-1">
									Try:{" "}
									<span
										className="font-mono text-purple-600 cursor-pointer hover:underline"
										onClick={() => setTrackId("TRK123456")}>
										TRK123456
									</span>{" "}
									or{" "}
									<span
										className="font-mono text-purple-600 cursor-pointer hover:underline"
										onClick={() => setTrackId("TRK789012")}>
										TRK789012
									</span>
								</div>
							</div>

							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="btn btn-lg bg-linear-to-r from-purple-600 to-pink-600 text-white border-0 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40 transition-all duration-300 min-w-[160px]"
								onClick={handleSearch}
								disabled={isSearching || !trackId}>
								{isSearching ? (
									<>
										<span className="loading loading-spinner"></span>
										Searching...
									</>
								) : (
									<>
										<Search size={20} />
										Track Now
									</>
								)}
							</motion.button>
						</div>
					</div>
				</motion.div>

				<AnimatePresence mode="wait">
					{isSearching && (
						<motion.div
							key="searching"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							className="card bg-white shadow-xl border-0 mb-8">
							<div className="card-body items-center py-16">
								<div className="relative">
									<motion.div
										animate={{ rotate: 360 }}
										transition={{
											duration: 2,
											repeat: Infinity,
											ease: "linear",
										}}
										className="w-24 h-24 rounded-full border-4 border-purple-200 border-t-purple-600"
									/>
									<div className="absolute inset-0 flex items-center justify-center">
										<Package size={40} className="text-purple-600" />
									</div>
								</div>
								<motion.p
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									className="text-gray-600 mt-6 text-lg font-medium">
									Searching for package{" "}
									<span className="font-mono bg-purple-100 text-purple-700 px-3 py-1 rounded-lg">
										{trackId}
									</span>
								</motion.p>
								<div className="flex gap-2 mt-4">
									{[1, 2, 3, 4].map((step) => (
										<motion.div
											key={step}
											animate={{ scale: currentStep === step ? 1.2 : 1 }}
											className={`w-2 h-2 rounded-full ${
												currentStep >= step ? "bg-purple-600" : "bg-purple-200"
											}`}
										/>
									))}
								</div>
							</div>
						</motion.div>
					)}

					{!isSearching && trackingData && (
						<motion.div
							key="tracking"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							className="space-y-8">
							{/* Main Status Card */}
							<motion.div
								initial={{ y: 30, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.2 }}
								className="card bg-linear-to-br from-white to-gray-50 border-0 shadow-2xl overflow-hidden">
								<div className="card-body p-8">
									<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
										<div>
											<div className="flex items-center gap-3 mb-3">
												<div className="p-3 rounded-xl bg-linear-to-br from-purple-500 to-pink-500 shadow-lg">
													<Package className="text-white" size={24} />
												</div>
												<div>
													<h2 className="text-2xl font-bold text-gray-800">
														Tracking ID:{" "}
														<span className="font-mono bg-purple-100 text-purple-700 px-3 py-1 rounded-lg">
															{trackingData.trackId}
														</span>
													</h2>
													<div className="flex items-center gap-2 text-gray-600 mt-1">
														<ShieldCheck size={16} />
														<span>
															Secure Tracking • {trackingData.carrier}
														</span>
													</div>
												</div>
											</div>

											<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
												<div className="p-4 bg-linear-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
													<div className="flex items-center gap-3">
														<Navigation size={20} className="text-blue-600" />
														<div>
															<p className="text-sm text-gray-600">Origin</p>
															<p className="font-medium">
																{trackingData.origin}
															</p>
														</div>
													</div>
												</div>
												<div className="p-4 bg-linear-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
													<div className="flex items-center gap-3">
														<Home size={20} className="text-green-600" />
														<div>
															<p className="text-sm text-gray-600">
																Destination
															</p>
															<p className="font-medium">
																{trackingData.destination}
															</p>
														</div>
													</div>
												</div>
												<div className="p-4 bg-linear-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
													<div className="flex items-center gap-3">
														<Clock size={20} className="text-purple-600" />
														<div>
															<p className="text-sm text-gray-600">
																Estimated Delivery
															</p>
															<p className="font-medium">
																{trackingData.estimatedDelivery}
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>

										<motion.div
											whileHover={{ scale: 1.05 }}
											className={`p-6 rounded-2xl bg-linear-to-br ${getStatusColor(
												trackingData.currentStatus
											)} text-white shadow-lg`}>
											<div className="text-center">
												{getStatusIcon(trackingData.currentStatus)}
												<p className="text-sm opacity-90 mt-2">
													Current Status
												</p>
												<p className="text-2xl font-bold capitalize mt-1">
													{trackingData.currentStatus.replace("-", " ")}
												</p>
												<p className="text-sm opacity-90 mt-2">
													{getStatusMessage(trackingData.currentStatus)}
												</p>
											</div>
										</motion.div>
									</div>
								</div>
							</motion.div>

							{/* Animated Timeline */}
							<motion.div
								initial={{ y: 30, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.4 }}
								className="card bg-white border-0 shadow-2xl">
								<div className="card-body p-8">
									<div className="flex items-center justify-between mb-8">
										<h2 className="text-2xl font-bold text-gray-800">
											Tracking Timeline
										</h2>
										<div className="flex items-center gap-2">
											<div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
											<span className="text-sm text-gray-600">
												Live Updates
											</span>
										</div>
									</div>

									<div className="relative">
										{/* Progress Line */}
										<div className="absolute left-9 top-0 bottom-0 w-1 bg-linear-to-b from-green-500 via-blue-500 to-gray-200" />

										{trackingData.steps.map((step, index) => (
											<motion.div
												key={index}
												initial={{ x: -50, opacity: 0 }}
												animate={{ x: 0, opacity: 1 }}
												transition={{ delay: index * 0.1 }}
												className="flex gap-6 mb-8 last:mb-0">
												{/* Timeline Dot */}
												<div className="relative z-10">
													<motion.div
														animate={
															step.completed
																? {
																		scale: [1, 1.2, 1],
																		boxShadow: [
																			"0 0 0 0 rgba(34, 197, 94, 0.7)",
																			"0 0 0 10px rgba(34, 197, 94, 0)",
																			"0 0 0 0 rgba(34, 197, 94, 0)",
																		],
																  }
																: {}
														}
														transition={{
															duration: 2,
															repeat: step.completed ? Infinity : 0,
															delay: index * 0.3,
														}}
														className={`w-16 h-16 rounded-xl flex items-center justify-center text-2xl ${
															step.completed
																? "bg-linear-to-br from-green-500 to-emerald-600 shadow-lg shadow-green-200"
																: "bg-linear-to-br from-gray-200 to-gray-300"
														}`}>
														{step.icon}
													</motion.div>

													{/* Status Indicator */}
													{step.completed && (
														<motion.div
															initial={{ scale: 0 }}
															animate={{ scale: 1 }}
															className="absolute -top-1 -right-1">
															<div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
																<CheckCircle size={14} className="text-white" />
															</div>
														</motion.div>
													)}
												</div>

												{/* Step Content */}
												<motion.div
													whileHover={{ scale: 1.02 }}
													className={`flex-1 p-6 rounded-xl transition-all duration-300 ${
														step.completed
															? "bg-linear-to-r from-green-50 to-emerald-50 border border-green-100 shadow-sm"
															: "bg-gray-50 border border-gray-100"
													}`}>
													<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
														<div>
															<div className="flex items-center gap-3 mb-2">
																<h3
																	className={`text-lg font-semibold ${
																		step.completed
																			? "text-green-700"
																			: "text-gray-700"
																	}`}>
																	{step.status}
																</h3>
																{step.time === "Expected" && (
																	<span className="px-3 py-1 bg-linear-to-r from-amber-500 to-orange-500 text-white text-xs rounded-full">
																		Upcoming
																	</span>
																)}
															</div>
															<p className="text-gray-600 mb-3">
																{step.description}
															</p>
															<div className="flex items-center gap-4 text-sm text-gray-500">
																<div className="flex items-center gap-2">
																	<MapPin size={14} />
																	<span>{step.location}</span>
																</div>
																<div className="flex items-center gap-2">
																	<Clock size={14} />
																	<span>
																		{step.date} • {step.time}
																	</span>
																</div>
															</div>
														</div>

														<div
															className={`px-4 py-2 rounded-lg text-sm font-medium ${
																step.completed
																	? "bg-green-100 text-green-700"
																	: "bg-gray-100 text-gray-600"
															}`}>
															{step.completed ? "Completed" : "Pending"}
														</div>
													</div>
												</motion.div>
											</motion.div>
										))}
									</div>
								</div>
							</motion.div>

							{/* Package Details */}
							<motion.div
								initial={{ y: 30, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.6 }}
								className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="card bg-linear-to-br from-white to-blue-50 border-0 shadow-xl">
									<div className="card-body">
										<h3 className="card-title text-gray-800 mb-4">
											Package Details
										</h3>
										<div className="space-y-4">
											<div className="flex justify-between items-center p-3 bg-white rounded-lg border">
												<span className="text-gray-600">Weight</span>
												<span className="font-medium">
													{trackingData.weight}
												</span>
											</div>
											<div className="flex justify-between items-center p-3 bg-white rounded-lg border">
												<span className="text-gray-600">Dimensions</span>
												<span className="font-medium">
													{trackingData.dimensions}
												</span>
											</div>
											<div className="flex justify-between items-center p-3 bg-white rounded-lg border">
												<span className="text-gray-600">Carrier</span>
												<span className="font-medium">
													{trackingData.carrier}
												</span>
											</div>
										</div>
									</div>
								</div>

								<div className="card bg-linear-to-br from-white to-purple-50 border-0 shadow-xl">
									<div className="card-body">
										<h3 className="card-title text-gray-800 mb-4">
											Delivery Information
										</h3>
										<div className="space-y-4">
											<div className="p-4 bg-linear-to-r from-purple-50 to-pink-50 rounded-xl">
												<div className="flex items-center gap-3">
													<div className="p-2 bg-white rounded-lg">
														<Clock size={20} className="text-purple-600" />
													</div>
													<div>
														<p className="text-sm text-gray-600">
															Delivery Hours
														</p>
														<p className="font-medium">9:00 AM - 6:00 PM</p>
													</div>
												</div>
											</div>
											<div className="p-4 bg-linear-to-r from-blue-50 to-cyan-50 rounded-xl">
												<div className="flex items-center gap-3">
													<div className="p-2 bg-white rounded-lg">
														<Truck size={20} className="text-blue-600" />
													</div>
													<div>
														<p className="text-sm text-gray-600">
															Delivery Agent
														</p>
														<p className="font-medium">Express Delivery Team</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</motion.div>
						</motion.div>
					)}

					{!isSearching && trackId && !trackingData && (
						<motion.div
							key="not-found"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.9 }}
							className="card bg-white border-0 shadow-2xl">
							<div className="card-body items-center py-16">
								<motion.div
									animate={{ y: [0, -10, 0] }}
									transition={{ duration: 2, repeat: Infinity }}>
									<AlertCircle size={80} className="text-red-400 mb-6" />
								</motion.div>
								<h3 className="text-2xl font-bold text-gray-800 mb-3">
									Package Not Found
								</h3>
								<p className="text-gray-600 text-center mb-6">
									No tracking information found for{" "}
									<span className="font-mono bg-red-50 text-red-600 px-3 py-1 rounded-lg">
										{trackId}
									</span>
								</p>
								<div className="text-sm text-gray-500">
									Please check your tracking number and try again
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>

				{!trackingData && !isSearching && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="mt-12">
						<h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
							Try Example Tracking IDs
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<motion.div
								whileHover={{ y: -5 }}
								className="card bg-linear-to-br from-blue-500 to-cyan-600 text-white border-0 shadow-2xl shadow-blue-500/30 overflow-hidden">
								<div className="card-body p-8">
									<div className="flex items-center justify-between">
										<div>
											<div className="flex items-center gap-3 mb-3">
												<Truck size={32} />
												<h3 className="card-title text-white">In Transit</h3>
											</div>
											<p className="opacity-90 mb-4">
												Track a package that's currently on the move
											</p>
										</div>
										<motion.button
											whileHover={{ scale: 1.1 }}
											whileTap={{ scale: 0.95 }}
											onClick={() => setTrackId("TRK123456")}
											className="btn btn-lg bg-white text-blue-600 border-0 shadow-lg">
											Try It
										</motion.button>
									</div>
									<div className="text-sm opacity-90 font-mono bg-white/20 px-3 py-2 rounded-lg">
										TRK123456
									</div>
								</div>
							</motion.div>

							<motion.div
								whileHover={{ y: -5 }}
								className="card bg-linear-to-br from-emerald-500 to-green-600 text-white border-0 shadow-2xl shadow-emerald-500/30 overflow-hidden">
								<div className="card-body p-8">
									<div className="flex items-center justify-between">
										<div>
											<div className="flex items-center gap-3 mb-3">
												<CheckCircle size={32} />
												<h3 className="card-title text-white">Delivered</h3>
											</div>
											<p className="opacity-90 mb-4">
												View a completed delivery timeline
											</p>
										</div>
										<motion.button
											whileHover={{ scale: 1.1 }}
											whileTap={{ scale: 0.95 }}
											onClick={() => setTrackId("TRK789012")}
											className="btn btn-lg bg-white text-emerald-600 border-0 shadow-lg">
											Try It
										</motion.button>
									</div>
									<div className="text-sm opacity-90 font-mono bg-white/20 px-3 py-2 rounded-lg">
										TRK789012
									</div>
								</div>
							</motion.div>
						</div>
					</motion.div>
				)}
			</motion.div>
		</div>
	);
}
