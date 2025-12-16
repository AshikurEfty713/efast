import { useEffect, useState } from "react";
import {
	Package,
	MapPin,
	User,
	Phone,
	Home,
	CreditCard,
	Truck,
	Clock,
	CheckCircle2,
	AlertCircle,
} from "lucide-react";
import { useParams } from "react-router";

export default function ParcelDetails() {
	const [parcel, setParcel] = useState(null);
	const [loading, setLoading] = useState(true);
	const { id } = useParams();

	const apiUrl = import.meta.env.VITE_apiUrl || "";

	useEffect(() => {
		if (!id) return;

		fetch(`${apiUrl}/parcels/${id}`)
			.then((res) => {
				if (!res.ok) throw new Error("Parcel not found");
				return res.json();
			})
			.then((data) => {
				setParcel(data);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setLoading(false);
			});
	}, [id, apiUrl]);

	if (loading)
		return (
			<div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center">
				<div className="flex flex-col items-center gap-4">
					<div className="animate-spin rounded-full h-16 w-16 border-4 border-orange-500 border-t-transparent"></div>
					<p className="text-slate-600 font-medium">
						Loading parcel details...
					</p>
				</div>
			</div>
		);

	if (!parcel) return null;

	const getStatusStep = (status) => {
		const steps = ["processing", "in-transit", "out-for-delivery", "delivered"];
		return steps.indexOf(status) + 1;
	};

	const currentStep = getStatusStep(parcel.deliveryStatus);

	return (
		<div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 py-8 px-4">
			<div className="max-w-5xl mx-auto space-y-6">
				{/* Header Card */}
				<div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
					<div className="bg-linear-to-r from-orange-500 to-orange-600 p-6 text-white">
						<div className="flex items-center justify-between">
							<div>
								<h1 className="text-3xl font-bold mb-2">Parcel Details</h1>
								<p className="text-orange-100 text-sm">
									Track your delivery in real-time
								</p>
							</div>
							<div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
								<Package className="w-12 h-12" />
							</div>
						</div>
					</div>
					<div className="p-6">
						<div className="flex items-center justify-between mb-4 flex-wrap gap-4">
							<div>
								<p className="text-sm text-slate-500 mb-1">Tracking ID</p>
								<p className="text-2xl font-bold text-slate-800">
									{parcel.trackingId}
								</p>
							</div>
							<div className="text-right">
								<p className="text-sm text-slate-500 mb-1">Parcel Type</p>
								<span className="inline-block bg-slate-100 text-slate-800 px-4 py-2 rounded-lg font-semibold capitalize">
									{parcel.type || "N/A"}
								</span>
							</div>
						</div>
					</div>
				</div>

				{/* Status Timeline */}
				<div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
					<h2 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-2">
						<Truck className="w-6 h-6 text-orange-500" />
						Delivery Status
					</h2>
					<div className="relative">
						<div className="flex justify-between mb-12 flex-wrap gap-6">
							{[
								{ name: "Processing", icon: Clock, step: 1 },
								{ name: "In Transit", icon: Truck, step: 2 },
								{ name: "Out for Delivery", icon: MapPin, step: 3 },
								{ name: "Delivered", icon: CheckCircle2, step: 4 },
							].map((status, index) => {
								const isActive = currentStep >= status.step;
								const isCurrent = currentStep === status.step;
								const Icon = status.icon;

								return (
									<div
										key={index}
										className="flex flex-col items-center flex-1 relative min-w-[80px]">
										<div
											className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 transition-all duration-500 z-20 ${
												isActive
													? "bg-linear-to-br from-orange-500 to-orange-600 text-white shadow-lg scale-110"
													: "bg-slate-200 text-slate-400"
											} ${
												isCurrent ? "animate-pulse ring-4 ring-orange-200" : ""
											}`}>
											<Icon className="w-8 h-8" />
										</div>
										<p
											className={`text-sm font-medium text-center transition-colors ${
												isActive ? "text-slate-800" : "text-slate-400"
											}`}>
											{status.name}
										</p>
										{index < 3 && (
											<div className="absolute top-8 left-2/2 z-10 w-full h-1 hidden md:block">
												<div className="h-full bg-slate-200 absolute inset-0 -translate-x-1/2"></div>
												<div
													className={`h-full bg-linear-to-r from-orange-500 to-orange-600 absolute inset-0 -translate-x-1/2 transition-all duration-1000 ${
														currentStep > status.step ? "w-full" : "w-0"
													}`}></div>
											</div>
										)}
									</div>
								);
							})}
						</div>
					</div>
				</div>
				{/* Status Badges */}
				<div className="grid md:grid-cols-2 gap-6">
					<div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-sm text-slate-500 mb-2">Payment Status</p>
								<div className="flex items-center gap-2">
									{parcel.paymentStatus === "paid" ? (
										<>
											<CheckCircle2 className="w-6 h-6 text-emerald-500" />
											<span className="text-xl font-bold text-emerald-600 capitalize">
												{parcel.paymentStatus}
											</span>
										</>
									) : (
										<>
											<AlertCircle className="w-6 h-6 text-amber-500" />
											<span className="text-xl font-bold text-amber-600 capitalize">
												{parcel.paymentStatus}
											</span>
										</>
									)}
								</div>
							</div>
							<div
								className={`w-16 h-16 rounded-full flex items-center justify-center ${
									parcel.paymentStatus === "paid"
										? "bg-emerald-100 animate-pulse"
										: "bg-amber-100"
								}`}>
								<CreditCard
									className={`w-8 h-8 ${
										parcel.paymentStatus === "paid"
											? "text-emerald-500"
											: "text-amber-500"
									}`}
								/>
							</div>
						</div>
					</div>

					<div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-sm text-slate-500 mb-2">Delivery Status</p>
								<div className="flex items-center gap-2">
									<Truck className="w-6 h-6 text-orange-500" />
									<span className="text-xl font-bold text-orange-600 capitalize">
										{parcel.deliveryStatus}
									</span>
								</div>
							</div>
							<div className="w-16 h-16 rounded-full flex items-center justify-center bg-orange-100 animate-pulse">
								<Package className="w-8 h-8 text-orange-500" />
							</div>
						</div>
					</div>
				</div>

				<div className="grid md:grid-cols-2 gap-6">
					{/* Sender Details Card */}
					<div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-shadow">
						<div className="flex items-center gap-3 mb-6">
							<div className="bg-blue-100 rounded-xl p-3">
								<User className="w-6 h-6 text-blue-600" />
							</div>
							<h3 className="text-xl font-bold text-slate-800">
								Sender Details
							</h3>
						</div>
						<div className="space-y-4">
							<div className="flex items-start gap-3">
								<User className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
								<div>
									<p className="text-xs text-slate-500 mb-1">Name</p>
									<p className="font-semibold text-slate-800">
										{parcel.senderName}
									</p>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<Phone className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
								<div>
									<p className="text-xs text-slate-500 mb-1">Contact</p>
									<p className="font-semibold text-slate-800">
										{parcel.senderContact}
									</p>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<MapPin className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
								<div>
									<p className="text-xs text-slate-500 mb-1">Location</p>
									<p className="font-semibold text-slate-800">
										{parcel.senderCenter}, {parcel.senderRegion}
									</p>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<Home className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
								<div>
									<p className="text-xs text-slate-500 mb-1">Address</p>
									<p className="font-semibold text-slate-800">
										{parcel.senderAddress}
									</p>
								</div>
							</div>
							{parcel.pickupInstruction && (
								<div className="bg-blue-50 rounded-lg p-3 mt-4">
									<p className="text-xs text-blue-600 font-medium mb-1">
										Pickup Instructions
									</p>
									<p className="text-sm text-slate-700">
										{parcel.pickupInstruction}
									</p>
								</div>
							)}
						</div>
					</div>

					{/* Receiver Details Card */}
					<div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-shadow">
						<div className="flex items-center gap-3 mb-6">
							<div className="bg-emerald-100 rounded-xl p-3">
								<MapPin className="w-6 h-6 text-emerald-600" />
							</div>
							<h3 className="text-xl font-bold text-slate-800">
								Receiver Details
							</h3>
						</div>
						<div className="space-y-4">
							<div className="flex items-start gap-3">
								<User className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
								<div>
									<p className="text-xs text-slate-500 mb-1">Name</p>
									<p className="font-semibold text-slate-800">
										{parcel.receiverName}
									</p>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<Phone className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
								<div>
									<p className="text-xs text-slate-500 mb-1">Contact</p>
									<p className="font-semibold text-slate-800">
										{parcel.receiverContact}
									</p>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<MapPin className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
								<div>
									<p className="text-xs text-slate-500 mb-1">Location</p>
									<p className="font-semibold text-slate-800">
										{parcel.receiverCenter}, {parcel.receiverRegion}
									</p>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<Home className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
								<div>
									<p className="text-xs text-slate-500 mb-1">Address</p>
									<p className="font-semibold text-slate-800">
										{parcel.receiverAddress}
									</p>
								</div>
							</div>
							{parcel.deliveryInstruction && (
								<div className="bg-emerald-50 rounded-lg p-3 mt-4">
									<p className="text-xs text-emerald-600 font-medium mb-1">
										Delivery Instructions
									</p>
									<p className="text-sm text-slate-700">
										{parcel.deliveryInstruction}
									</p>
								</div>
							)}
						</div>
					</div>
				</div>

				{/* Cost Breakdown Card */}
				<div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
					<div className="flex items-center gap-3 mb-6">
						<div className="bg-amber-100 rounded-xl p-3">
							<CreditCard className="w-6 h-6 text-amber-600" />
						</div>
						<h3 className="text-xl font-bold text-slate-800">Cost Breakdown</h3>
					</div>
					<div className="space-y-4">
						<div className="flex justify-between items-center py-3 border-b border-slate-200">
							<span className="text-slate-600">Base Cost</span>
							<span className="font-semibold text-slate-800 text-lg">
								৳{parcel.totalCost || 0}
							</span>
						</div>
						<div className="flex justify-between items-center py-3 border-b border-slate-200">
							<span className="text-slate-600">Extra Charges</span>
							<span className="font-semibold text-slate-800 text-lg">
								৳{parcel.extraCharges || 0}
							</span>
						</div>
						<div className="flex justify-between items-center py-4 bg-linear-to-r from-emerald-50 to-emerald-100 rounded-xl px-4 mt-4">
							<span className="text-emerald-900 font-bold text-lg">
								Total Cost
							</span>
							<span className="font-bold text-emerald-600 text-2xl">
								৳{parcel.totalCost + (parcel.extraCharges || 0)}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
