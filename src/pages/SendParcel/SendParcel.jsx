import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import BranchesHooks from "../../hooks/branchesHooks";
import { data } from "react-router";

export default function SendParcel() {
	const branches = BranchesHooks();
	console.log(branches);
	const { register, handleSubmit, watch, reset } = useForm({
		defaultValues: {
			type: "document",
		},
	});

	const parcelType = watch("type");
	const [showConfirm, setShowConfirm] = useState(false);
	const [calculatedCost, setCalculatedCost] = useState(0);
	const [finalData, setFinalData] = useState(null);

	const serviceCenterPrice = {
		dhaka: 60,
		chattogram: 80,
		rajshahi: 70,
		barishal: 75,
		sylhet: 85,
		khulna: 70,
		rangpur: 65,
	};

	const calculateCost = (type, region, weight) => {
		let base = serviceCenterPrice[region] || 50;

		if (type === "non-document") {
			const extra = weight ? weight * 10 : 0;
			return base + extra;
		}
		return base;
	};

	const uniqueRegions = [...new Set(branches.map((data) => data.region))];

	const getDistrictByRegion = (region) => {
		return branches
			.filter((data) => data.region === region)
			.map((data) => data.district);
	};

	const senderRegionItem = watch("senderRegion");
	const receiverRegionItem = watch("receiverRegion");

	const onSubmit = (data) => {
		const { type, receiverRegion, weight } = data;

		const cost = calculateCost(type, receiverRegion, weight);
		setCalculatedCost(cost);
		setFinalData(data);

		setShowConfirm(true);
		toast.success(`Estimated Delivery Cost: ৳${cost}`);
	};

	const confirmParcel = () => {
		const parcelData = {
			...finalData,
			creation_date: new Date().toISOString(),
		};

		console.log("Saving to DB:", parcelData);

		toast.success("Parcel Created Successfully!");
		setShowConfirm(false);
		reset();
	};

	return (
		<div className="max-w-7xl mx-auto p-6">
			<h1 className="text-3xl font-bold mb-1">Add Parcel</h1>
			<p className="text-gray-600 mb-6">
				Door to Door Delivery – Provide pickup and delivery details
			</p>

			<form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
				{/* PARCEL INFO */}
				{/* <div className="border rounded-xl p-5 shadow-sm">
					<h2 className="text-xl font-semibold mb-4">Parcel Info</h2>

					<div className="grid md:grid-cols-3 gap-5">
						<div className="form-control">
							<label className="label">Parcel Type</label>
							<select
								{...register("type")}
								className="select select-bordered"
								required>
								<option value="document">Document</option>
								<option value="non-document">Non-Document</option>
							</select>
						</div>

						<div className="form-control">
							<label className="label block">Title</label>
							<input
								type="text"
								{...register("title", { required: true })}
								className="input input-bordered"
							/>
						</div>

						{parcelType === "non-document" && (
							<div className="form-control">
								<label className="label">Weight (kg)</label>
								<input
									type="number"
									min="0"
									step="0.1"
									{...register("weight")}
									className="input input-bordered"
								/>
							</div>
						)}
					</div>
				</div> */}
				<div className="border rounded-xl p-5 shadow-sm">
					<h2 className="text-xl font-semibold mb-4">Parcel Info</h2>

					<div className="grid md:grid-cols-3 gap-5">
						{/* RADIO BUTTONS */}
						<div className="form-control">
							<label className="label">Parcel Type</label>

							<div className="flex items-center gap-4 mt-1">
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

						{/* TITLE */}
						<div className="form-control">
							<label className="label block">Parcel Name</label>
							<input
								type="text"
								{...register("parcelName", { required: true })}
								className="input input-bordered"
							/>
						</div>

						{/* SHOW WEIGHT ONLY IF NON-DOCUMENT */}
						{watch("type") === "non-document" && (
							<div className="form-control">
								<label className="label">Weight (kg)</label>
								<input
									type="number"
									min="0"
									step="0.1"
									{...register("weight")}
									className="input input-bordered"
								/>
							</div>
						)}
					</div>
				</div>

				{/* SENDER + RECEIVER */}
				<div className="grid grid-cols-2 gap-5">
					{/* SENDER */}
					<div className="border rounded-xl p-5 shadow-sm">
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

							<div className="form-control">
								<label className="label">Select Region</label>
								<select
									{...register("senderRegion", { required: true })}
									className="select select-bordered">
									<option value="">Choose Region</option>
									{uniqueRegions.map((regionData, index) => (
										<option key={index} value={regionData}>
											{regionData}
										</option>
									))}
								</select>
							</div>

							<div className="form-control">
								<label className="label">Select Service Center</label>
								<select
									{...register("senderCenter", { required: true })}
									className="select select-bordered">
									<option value="">Choose center</option>
									{senderRegionItem &&
										getDistrictByRegion(senderRegionItem).map(
											(district, index) => (
												<option key={index} value={district}>
													{district}
												</option>
											)
										)}
								</select>
							</div>

							<div className="form-control md:col-span-2">
								<label className="label block">Address</label>
								<textarea
									{...register("senderAddress", { required: true })}
									className="textarea textarea-bordered w-full"
								/>
							</div>

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
					<div className="border rounded-xl p-5 shadow-sm">
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
								<label className="label block">Contact Nunber</label>
								<input
									type="text"
									{...register("receiverContact", { required: true })}
									className="input input-bordered"
								/>
							</div>

							<div className="form-control">
								<label className="label">Select Region</label>
								<select
									{...register("receiverRegion", { required: true })}
									className="select select-bordered">
									<option value="">Choose Region</option>
									{uniqueRegions.map((regionData, index) => (
										<option key={index} value={regionData}>
											{regionData}
										</option>
									))}
								</select>
							</div>

							<div className="form-control">
								<label className="label">Select Service Center</label>
								<select
									{...register("receiverCenter", { required: true })}
									className="select select-bordered">
									<option value="">Choose center</option>
									{receiverRegionItem &&
										getDistrictByRegion(receiverRegionItem).map(
											(district, index) => (
												<option key={index} value={district}>
													{district}
												</option>
											)
										)}
								</select>
							</div>

							<div className="form-control md:col-span-2">
								<label className="label block">Address</label>
								<textarea
									{...register("receiverAddress", { required: true })}
									className="textarea textarea-bordered w-full"
								/>
							</div>

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

			{/* Confirm Modal */}
			{showConfirm && (
				<div className="modal modal-open">
					<div className="modal-box">
						<h3 className="font-bold text-lg mb-3">Confirm Parcel</h3>
						<p className="mb-4">
							Delivery Cost:{" "}
							<span className="font-semibold">৳{calculatedCost}</span>
						</p>

						<div className="modal-action">
							<button className="btn" onClick={() => setShowConfirm(false)}>
								Cancel
							</button>
							<button className="btn btn-primary" onClick={confirmParcel}>
								Confirm
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
