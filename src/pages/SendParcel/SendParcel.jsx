import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import BranchesHooks from "../../hooks/branchesHooks";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const generateTrackingID = () => {
	const date = new Date();
	const datePart = date.toISOString().split("T")[0].replace(/-/g, "");
	const rand = Math.random().toString(36).substring(2, 7).toUpperCase();
	return `PCL-${datePart}-${rand}`;
};

export default function SendParcel() {
	const branches = BranchesHooks();
	const { user } = useAuth();
	const { register, handleSubmit, watch, reset } = useForm({
		defaultValues: {
			type: "document",
		},
	});

	const parcelType = watch("type");
	const [finalData, setFinalData] = useState(null);

	// Unique Regions
	const uniqueRegions = [...new Set(branches.map((b) => b.region))];

	// Get District by Region
	const getDistrictByRegion = (region) => {
		return branches.filter((b) => b.region === region).map((b) => b.district);
	};

	const senderRegionItem = watch("senderRegion");
	const receiverRegionItem = watch("receiverRegion");

	// ======================
	// ⭐ PRICE CALCULATION
	// ======================
	const calculateCost = (type, senderCenter, receiverCenter, weight = 0) => {
		const isWithinDistrict = senderCenter === receiverCenter;

		if (type === "document") {
			return isWithinDistrict ? 60 : 80;
		}

		let base = isWithinDistrict ? 110 : 150;
		let extra = weight > 3 ? (weight - 3) * 40 : 0;
		let districtExtra = isWithinDistrict ? 0 : 40;

		return base + extra + districtExtra;
	};

	// ======================
	// FORM SUBMIT
	// ======================
	const onSubmit = (data) => {
		const { type, senderCenter, receiverCenter, weight } = data;

		const isWithinDistrict = senderCenter === receiverCenter;
		const cost = calculateCost(type, senderCenter, receiverCenter, weight);

		// Breakdown Values
		const baseCost =
			type === "document"
				? isWithinDistrict
					? 60
					: 80
				: isWithinDistrict
				? 110
				: 150;

		const extraKg = type === "non-document" && weight > 3 ? weight - 3 : 0;
		const extraCost = extraKg > 0 ? extraKg * 40 : 0;

		const districtCharge =
			type === "non-document" && !isWithinDistrict ? 40 : 0;

		// SweetAlert2 Breakdown
		Swal.fire({
			title: "Delivery Cost Breakdown",
			icon: "info",
			html: `
				<div style="text-align:left; font-size:15px; line-height:1.6; margin-top:10px;">
					
					<b>Parcel Type:</b> ${type}<br/>
					<b>Weight:</b> ${weight ? weight + " kg" : "N/A"}<br/>
					<b>Delivery Zone:</b> ${
						isWithinDistrict ? "Inside District" : "Outside District"
					}<br/>

					<hr style="margin:10px 0;" />

					<b>Base Cost:</b> ৳${baseCost}

					<hr style="margin:10px 0;" />

					<b>Extra Charges:</b> ৳${extraCost + districtCharge}

					<div style="font-size:14px; color:#555; margin-top:6px;">
						${
							type === "non-document" && extraKg > 0
								? `
							Non-document over 3kg ${
								isWithinDistrict ? "inside" : "outside"
							} the district.<br/>
							Extra charge: ৳40 × ${extraKg}kg = ৳${extraCost}<br/>
							${districtCharge ? "+ ৳40 extra for outside district delivery" : ""}
						  `
								: "No extra weight charge."
						}
					</div>

					<hr style="margin:12px 0;" />

					<b style="font-size:20px; color:#0f9d58;">
						Total Cost: ৳${cost}
					</b>
				</div>
			`,
			showCancelButton: true,
			confirmButtonText: "Proceed to Payment",
			cancelButtonText: "Continue Editing",
			confirmButtonColor: "#2ecc71",
			cancelButtonColor: "#ff6900",
			width: 550,
			padding: "1.5rem 1rem",
		}).then((result) => {
			if (result.isConfirmed) {
				confirmParcel(data, cost);
			}
		});
	};

	// ======================
	// CONFIRM PARCEL
	// ======================
	const API_URL = import.meta.env.VITE_apiUrl;
	const confirmParcel = async (data, cost) => {
		if (!user || !user.email) {
			Swal.fire({
				icon: "warning",
				title: "Login required",
				text: "Please log in to create a parcel.",
			});
			return;
		}

		const parcelData = {
			...data,
			totalCost: cost,
			createdBy: user.email, // typo: "cretatedBy" → "createdBy"
			paymentStatus: "unpaid", // typo: "peymentStatus" → "paymentStatus"
			deliveryStatus: "not_collected",
			creationDate: new Date().toISOString(),
			trackingId: generateTrackingID(),
		};

		try {
			const response = await axios.post(
				`${API_URL}/parcel`, // তোমার API URL
				parcelData
			);

			if (response.data.success) {
				toast.success("Parcel Created Successfully!");
				reset();
			} else {
				toast.error("Failed to create parcel!");
			}
		} catch (error) {
			console.error("API error:", error);
			toast.error(error.response?.data?.message || "Server error!");
		}
	};
	// ======================
	// MAIN UI
	// ======================
	return (
		<div className="max-w-7xl mx-auto p-6">
			<h1 className="text-3xl font-bold mb-1">Add Parcel</h1>
			<p className="text-gray-600 mb-6">
				Door to Door Delivery – Provide pickup and delivery details
			</p>

			<form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
				{/* PARCEL INFO */}
				<div className="rounded-xl p-5 shadow-md">
					<h2 className="text-xl font-semibold mb-4">Parcel Info</h2>

					<div className="grid md:grid-cols-3 gap-5">
						{/* Parcel Name */}
						<div className="form-control">
							<label className="label block">Parcel Name</label>
							<input
								type="text"
								{...register("parcelName", { required: true })}
								className="input input-bordered"
							/>
						</div>

						{/* Parcel Type */}
						<div className="form-control">
							<label className="label">Parcel Type</label>
							<div className="flex flex-wrap items-center gap-4 mt-1">
								<label className="flex items-center gap-2 cursor-pointer">
									<input
										type="radio"
										value="document"
										{...register("type")}
										className="radio radio-warning"
									/>
									<span>Document</span>
								</label>

								<label className="flex items-center gap-2 cursor-pointer">
									<input
										type="radio"
										value="non-document"
										{...register("type")}
										className="radio radio-warning"
									/>
									<span>Non-Document</span>
								</label>
							</div>
						</div>

						{/* Weight */}
						<div className="form-control">
							<label className="label">Weight (kg)</label>
							<input
								type="number"
								min="0"
								step="0.1"
								{...register("weight")}
								disabled={parcelType !== "non-document"}
								className="input input-bordered"
							/>
						</div>
					</div>
				</div>

				{/* SENDER + RECEIVER */}
				<div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
					{/* SENDER */}
					<div className="rounded-xl p-5 shadow-xl">
						<h2 className="text-xl font-semibold mb-4">Sender Information</h2>

						<div className="grid md:grid-cols-2 gap-5">
							<div className="form-control">
								<label className="label">Sender Name</label>
								<input
									type="text"
									{...register("senderName", { required: true })}
									className="input input-bordered"
								/>
							</div>

							<div className="form-control">
								<label className="label block">Contact Number</label>
								<input
									type="text"
									{...register("senderContact", { required: true })}
									className="input input-bordered"
								/>
							</div>

							{/* Sender Region */}
							<div className="form-control">
								<label className="label">Select Region</label>
								<select
									{...register("senderRegion", { required: true })}
									className="select select-bordered cursor-pointer">
									<option value="">Choose Region</option>
									{uniqueRegions.map((regionData, i) => (
										<option key={i} value={regionData}>
											{regionData}
										</option>
									))}
								</select>
							</div>

							{/* Sender Center */}
							<div className="form-control">
								<label className="label">Select Service Center</label>
								<select
									{...register("senderCenter", { required: true })}
									className="select select-bordered cursor-pointer">
									<option value="">Choose center</option>
									{senderRegionItem &&
										getDistrictByRegion(senderRegionItem).map((district, i) => (
											<option key={i} value={district}>
												{district}
											</option>
										))}
								</select>
							</div>

							{/* Sender Address */}
							<div className="form-control md:col-span-2">
								<label className="label block">Address</label>
								<textarea
									{...register("senderAddress", { required: true })}
									className="textarea textarea-bordered w-full"
								/>
							</div>

							{/* Pickup Instruction */}
							<div className="form-control md:col-span-2">
								<label className="label block">Pick Up Instruction</label>
								<textarea
									{...register("pickupInstruction")}
									className="textarea textarea-bordered w-full"
								/>
							</div>
						</div>
					</div>

					{/* RECEIVER */}
					<div className="rounded-xl p-5 shadow-xl">
						<h2 className="text-xl font-semibold mb-4">Receiver Information</h2>

						<div className="grid md:grid-cols-2 gap-5">
							<div className="form-control">
								<label className="label">Receiver Name</label>
								<input
									type="text"
									{...register("receiverName", { required: true })}
									className="input input-bordered"
								/>
							</div>

							<div className="form-control">
								<label className="label block">Contact Number</label>
								<input
									type="text"
									{...register("receiverContact", { required: true })}
									className="input input-bordered"
								/>
							</div>

							{/* Receiver Region */}
							<div className="form-control">
								<label className="label">Select Region</label>
								<select
									{...register("receiverRegion", { required: true })}
									className="select select-bordered cursor-pointer">
									<option value="">Choose Region</option>
									{uniqueRegions.map((regionData, i) => (
										<option key={i} value={regionData}>
											{regionData}
										</option>
									))}
								</select>
							</div>

							{/* Receiver Center */}
							<div className="form-control">
								<label className="label">Select Service Center</label>
								<select
									{...register("receiverCenter", { required: true })}
									className="select select-bordered cursor-pointer">
									<option value="">Choose center</option>
									{receiverRegionItem &&
										getDistrictByRegion(receiverRegionItem).map(
											(district, i) => (
												<option key={i} value={district}>
													{district}
												</option>
											)
										)}
								</select>
							</div>

							{/* Receiver Address */}
							<div className="form-control md:col-span-2">
								<label className="label block">Address</label>
								<textarea
									{...register("receiverAddress", { required: true })}
									className="textarea textarea-bordered w-full"
								/>
							</div>

							{/* Delivery Instruction */}
							<div className="form-control md:col-span-2">
								<label className="label block">Delivery Instruction</label>
								<textarea
									{...register("deliveryInstruction")}
									className="textarea textarea-bordered w-full"
								/>
							</div>
						</div>
					</div>
				</div>

				<button className="btn bg-orange-500 text-white rounded-md w-full">
					Submit Parcel
				</button>
			</form>
		</div>
	);
}
