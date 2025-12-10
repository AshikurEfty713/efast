import { useParams } from "react-router";
import { useEffect, useState } from "react";

const ParcelDetails = () => {
	const { id } = useParams();
	const [parcel, setParcel] = useState(null);

	useEffect(() => {
		fetch(`/api/parcels/${id}`)
			.then((res) => res.json())
			.then((data) => setParcel(data))
			.catch((err) => console.error(err));
	}, [id]);

	if (!parcel)
		return <p className="p-6 text-center">Loading parcel details...</p>;

	return (
		<div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-4 border border-gray-200">
			<div className="flex justify-center">
				<div className="w-16 h-16 flex items-center justify-center rounded-full border-4 border-sky-400 text-sky-400 text-3xl font-bold">
					i
				</div>
			</div>

			<h2 className="text-center text-xl font-semibold text-gray-800">
				Delivery Cost Breakdown
			</h2>

			<div className="space-y-2">
				<p>
					<span className="font-semibold">Parcel Type:</span>{" "}
					{parcel.type || "N/A"}
				</p>
				<p>
					<span className="font-semibold">Weight:</span>{" "}
					{parcel.weight || "N/A"}
				</p>
				<p>
					<span className="font-semibold">Delivery Zone:</span>{" "}
					{parcel.receiverRegion || "N/A"}
				</p>
			</div>

			<hr />

			<div className="space-y-2">
				<p className="flex justify-between">
					<span>Base Cost:</span> <span>৳{parcel.totalCost || 0}</span>
				</p>
				<p className="flex justify-between">
					<span>Extra Charges:</span> <span>৳{parcel.extraCharges || 0}</span>
				</p>
			</div>

			<hr />

			<p className="text-green-600 font-bold text-lg flex justify-between">
				<span>Total Cost:</span>{" "}
				<span>৳{parcel.totalCost + (parcel.extraCharges || 0)}</span>
			</p>

			<div className="mt-4 space-y-3">
				<div className="p-3 border rounded-lg bg-gray-50">
					<h3 className="font-semibold text-gray-700">Sender Details</h3>
					<p>
						<span className="font-semibold">Name:</span> {parcel.senderName}
					</p>
					<p>
						<span className="font-semibold">Contact:</span>{" "}
						{parcel.senderContact}
					</p>
					<p>
						<span className="font-semibold">Region:</span> {parcel.senderRegion}
					</p>
					<p>
						<span className="font-semibold">Center:</span> {parcel.senderCenter}
					</p>
					<p>
						<span className="font-semibold">Address:</span>{" "}
						{parcel.senderAddress}
					</p>
				</div>

				<div className="p-3 border rounded-lg bg-gray-50">
					<h3 className="font-semibold text-gray-700">Receiver Details</h3>
					<p>
						<span className="font-semibold">Name:</span> {parcel.receiverName}
					</p>
					<p>
						<span className="font-semibold">Contact:</span>{" "}
						{parcel.receiverContact}
					</p>
					<p>
						<span className="font-semibold">Region:</span>{" "}
						{parcel.receiverRegion}
					</p>
					<p>
						<span className="font-semibold">Center:</span>{" "}
						{parcel.receiverCenter}
					</p>
					<p>
						<span className="font-semibold">Address:</span>{" "}
						{parcel.receiverAddress}
					</p>
				</div>
			</div>

			<div className="mt-4 flex justify-between items-center">
				<span
					className={`badge ${
						parcel.paymentStatus === "paid" ? "badge-success" : "badge-warning"
					}`}>
					Payment: {parcel.paymentStatus}
				</span>
				<span
					className={`badge ${
						parcel.deliveryStatus === "delivered"
							? "badge-success"
							: "badge-info"
					}`}>
					Status: {parcel.deliveryStatus}
				</span>
			</div>

			<p className="mt-2 text-center text-gray-500 text-sm">
				Tracking ID: {parcel.trackingId}
			</p>
		</div>
	);
};

export default ParcelDetails;
