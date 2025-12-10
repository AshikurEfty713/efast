import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
	Filter,
	Search,
	Calendar,
	Package,
	CheckCircle,
	Clock,
	XCircle,
	Truck,
	Download,
	Eye,
	MapPin,
	TrendingUp,
	MoreVertical,
	ChevronRight,
	Trash2,
	Pencil,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { toast } from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router";

export default function MyParcel() {
	const [searchTerm, setSearchTerm] = useState("");
	const [filterStatus, setFilterStatus] = useState("all");
	const [dateFilter, setDateFilter] = useState("all");
	const [selectedOrder, setSelectedOrder] = useState(null);
	const [data, setData] = useState([]);
	const { user } = useAuth();
	const [openId, setOpenId] = useState(null);
	const menuRefs = useRef({});

	const axiosSecure = useAxiosSecure();
	const queryClient = useQueryClient();
	const { data: parcelList = [] } = useQuery({
		queryKey: ["my-parcel", user.email],
		queryFn: async () => {
			const res = await axiosSecure.get(`/parcels?email=${user.email}`);
			return res.data;
		},
	});
	console.log(parcelList);

	// toggle menu for a specific parcel id
	const toggleOpen = (id) => {
		setOpenId((prev) => (prev === id ? null : id));
	};

	// delete parcel and remove from UI by updating react-query cache
	const handleDelete = async (id) => {
		if (!id) return;
		const confirm = await Swal.fire({
			title: "Are you sure?",
			text: "This parcel will be permanently deleted!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonText: "Yes, delete it",
			cancelButtonText: "Cancel",
			confirmButtonColor: "#e11d48",
			cancelButtonColor: "#6b7280",
		});
		if (!confirm) return;
		try {
			const res = await axiosSecure.delete(`/parcels/${id}`);
			// optimistic removal from cache
			queryClient.setQueryData(["my-parcel", user.email], (old) => {
				if (!old) return old;
				if (Array.isArray(old)) return old.filter((o) => o._id !== id);
				if (Array.isArray(old.data))
					return { ...old, data: old.data.filter((o) => o._id !== id) };
				if (Array.isArray(old.parcels))
					return { ...old, parcels: old.parcels.filter((o) => o._id !== id) };
				return old;
			});
			Swal.fire({
				title: "Deleted!",
				text: "Parcel has been deleted.",
				icon: "success",
				timer: 1000,
				showConfirmButton: false,
			});
			setOpenId(null);
		} catch (error) {
			console.error("Delete error:", error);
			toast.error(error.response?.data?.message || "Failed to delete parcel");
		}
	};
	// close open menu when clicking outside
	useEffect(() => {
		const handleDocClick = (e) => {
			if (openId == null) return;
			const node = menuRefs.current[openId];
			if (node && node.contains(e.target)) return;
			setOpenId(null);
		};

		document.addEventListener("click", handleDocClick);

		return () => {
			document.removeEventListener("click", handleDocClick);
		};
	}, [openId]);

	// Normalize API response to an array. Backend may return an array directly
	// or an object like { data: [...] } or { parcels: [...] }.
	const parcelsArray = Array.isArray(parcelList)
		? parcelList
		: Array.isArray(parcelList?.data)
		? parcelList.data
		: Array.isArray(parcelList?.parcels)
		? parcelList.parcels
		: [];

	const getStatusConfig = (status) => {
		const configs = {
			delivered: {
				icon: <CheckCircle size={18} />,
				linear: "from-green-400 to-emerald-500",
				bgColor: "bg-linear-to-r from-green-400 to-emerald-500",
				textColor: "text-green-600",
				bgLight: "bg-green-50",
				borderColor: "border-green-100",
				progress: 100,
				label: "Delivered",
			},
			"in-transit": {
				icon: <Truck size={18} />,
				linear: "from-blue-400 to-cyan-500",
				bgColor: "bg-linear-to-r from-blue-400 to-cyan-500",
				textColor: "text-blue-600",
				bgLight: "bg-blue-50",
				borderColor: "border-blue-100",
				progress: 65,
				label: "In Transit",
			},
			processing: {
				icon: <Clock size={18} />,
				linear: "from-amber-400 to-orange-500",
				bgColor: "bg-linear-to-r from-amber-400 to-orange-500",
				textColor: "text-amber-600",
				bgLight: "bg-amber-50",
				borderColor: "border-amber-100",
				progress: 30,
				label: "Processing",
			},
			cancelled: {
				icon: <XCircle size={18} />,
				linear: "from-rose-400 to-pink-500",
				bgColor: "bg-linear-to-r from-rose-400 to-pink-500",
				textColor: "text-rose-600",
				bgLight: "bg-rose-50",
				borderColor: "border-rose-100",
				progress: 0,
				label: "Cancelled",
			},
		};
		return configs[status] || configs.processing;
	};

	const StatusPill = ({ status, showProgress = false }) => {
		const config = getStatusConfig(status);
		return (
			<div className="flex items-center gap-2">
				<div
					className={`px-3 py-1 rounded-full ${config.bgLight} ${config.borderColor} border flex items-center gap-2`}>
					<span className={config.textColor}>{config.icon}</span>
					<span className={`font-medium ${config.textColor}`}>
						{config.label}
					</span>
				</div>
				{showProgress && status !== "cancelled" && status !== "delivered" && (
					<div className="w-16 h-2 bg-gray-100 rounded-full overflow-hidden">
						<div
							className={`h-full ${config.bgColor} rounded-full`}
							style={{ width: `${config.progress}%` }}></div>
					</div>
				)}
			</div>
		);
	};

	const StatusBadge = ({ status }) => {
		const config = getStatusConfig(status);
		return (
			<div
				className={`px-3 py-1.5 rounded-full ${config.bgColor} text-white flex items-center gap-2 shadow-sm`}>
				{config.icon}
				<span className="font-medium text-sm">{config.label}</span>
			</div>
		);
	};

	const filteredParcels = parcelsArray.filter((o) => {
		const search = searchTerm.toLowerCase();

		const matchesSearch =
			o.parcelName.toLowerCase().includes(search) ||
			o.receiverName.toLowerCase().includes(search) ||
			o.trackingId.toLowerCase().includes(search);

		const matchesStatus =
			filterStatus === "all" || o.deliveryStatus === filterStatus;

		let matchesDate = true;
		if (dateFilter !== "all") {
			const orderDate = new Date(o.creationDate);
			const today = new Date();
			const daysDiff = Math.floor((today - orderDate) / (1000 * 60 * 60 * 24));

			if (dateFilter === "today") matchesDate = daysDiff === 0;
			else if (dateFilter === "week") matchesDate = daysDiff <= 7;
			else if (dateFilter === "month") matchesDate = daysDiff <= 30;
		}

		return matchesSearch && matchesStatus && matchesDate;
	});

	const stats = {
		total: parcelsArray.length,
		delivered: parcelsArray.filter((o) => o.deliveryStatus === "delivered")
			.length,
		inTransit: parcelsArray.filter((o) => o.deliveryStatus === "in-transit")
			.length,
		processing: parcelsArray.filter((o) => o.deliveryStatus === "processing")
			.length,
		cancelled: parcelsArray.filter((o) => o.deliveryStatus === "cancelled")
			.length,
		revenue: parcelsArray
			.filter((o) => o.deliveryStatus !== "cancelled")
			.reduce((sum, o) => sum + (Number(o.totalCost) || 0), 0)
			.toFixed(2),
	};
	console.log(stats);

	const getStatusCount = (status) => {
		return parcelsArray.filter((o) => o.deliveryStatus === status).length;
	};

	return (
		<div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-4 md:p-6">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="mb-8">
					<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-2">
						<div>
							<h1 className="text-3xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
								Parcel Dashboard
							</h1>
							<p className="text-gray-600 mt-1">
								Track and manage all your shipments
							</p>
						</div>
						<button className="btn bg-linear-to-r from-purple-500 to-pink-500 text-white border-0 hover:from-purple-600 hover:to-pink-600 shadow-lg">
							<Download size={18} />
							Export Report
						</button>
					</div>
				</div>

				{/* Stats Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
					<div className="card bg-linear-to-br from-purple-500 to-pink-500 text-white shadow-xl overflow-hidden">
						<div className="card-body p-5">
							<div className="flex justify-between items-start">
								<div>
									<p className="text-white/80 text-sm font-medium">
										Total Parcels
									</p>
									<h3 className="text-2xl font-bold mt-1">{stats.total}</h3>
								</div>
								<div className="p-2 bg-white/20 rounded-lg">
									<Package size={24} />
								</div>
							</div>
							<div className="mt-4">
								<div className="flex items-center gap-1 text-white/80 text-sm">
									<TrendingUp size={16} />
									<span>+12% from last month</span>
								</div>
							</div>
						</div>
					</div>
					<div className="card bg-white shadow-xl border border-gray-100">
						<div className="card-body p-5">
							<div className="flex justify-between items-start">
								<div>
									<p className="text-gray-600 text-sm font-medium">
										Processing
									</p>
									<h3 className="text-2xl font-bold text-amber-600 mt-1">
										{stats.processing}
									</h3>
								</div>
								<div className="p-2 bg-amber-50 rounded-lg text-amber-600">
									<Clock size={24} />
								</div>
							</div>
							<div className="mt-4">
								<div className="w-full bg-gray-100 rounded-full h-2">
									<div
										className="bg-linear-to-r from-amber-400 to-orange-500 h-2 rounded-full"
										style={{
											width: `${(stats.processing / stats.total) * 100}%`,
										}}></div>
								</div>
							</div>
						</div>
					</div>
					<div className="card bg-white shadow-xl border border-gray-100">
						<div className="card-body p-5">
							<div className="flex justify-between items-start">
								<div>
									<p className="text-gray-600 text-sm font-medium">
										In Transit
									</p>
									<h3 className="text-2xl font-bold text-blue-600 mt-1">
										{stats.inTransit}
									</h3>
								</div>
								<div className="p-2 bg-blue-50 rounded-lg text-blue-600">
									<Truck size={24} />
								</div>
							</div>
							<div className="mt-4">
								<div className="w-full bg-gray-100 rounded-full h-2">
									<div
										className="bg-linear-to-r from-blue-400 to-cyan-500 h-2 rounded-full"
										style={{
											width: `${(stats.inTransit / stats.total) * 100}%`,
										}}></div>
								</div>
							</div>
						</div>
					</div>

					<div className="card bg-white shadow-xl border border-gray-100">
						<div className="card-body p-5">
							<div className="flex justify-between items-start">
								<div>
									<p className="text-gray-600 text-sm font-medium">Delivered</p>
									<h3 className="text-2xl font-bold text-green-600 mt-1">
										{stats.delivered}
									</h3>
								</div>
								<div className="p-2 bg-green-50 rounded-lg text-green-600">
									<CheckCircle size={24} />
								</div>
							</div>
							<div className="mt-4">
								<div className="w-full bg-gray-100 rounded-full h-2">
									<div
										className="bg-linear-to-r from-green-400 to-emerald-500 h-2 rounded-full"
										style={{
											width: `${(stats.delivered / stats.total) * 100}%`,
										}}></div>
								</div>
							</div>
						</div>
					</div>

					<div className="card bg-white shadow-xl border border-gray-100">
						<div className="card-body p-5">
							<div className="flex justify-between items-start">
								<div>
									<p className="text-gray-600 text-sm font-medium">Cancelled</p>
									<h3 className="text-2xl font-bold text-rose-600 mt-1">
										{stats.cancelled}
									</h3>
								</div>
								<div className="p-2 bg-rose-50 rounded-lg text-rose-600">
									<XCircle size={24} />
								</div>
							</div>
							<div className="mt-4">
								<div className="w-full bg-gray-100 rounded-full h-2">
									<div
										className="bg-linear-to-r from-rose-400 to-pink-500 h-2 rounded-full"
										style={{
											width: `${(stats.cancelled / stats.total) * 100}%`,
										}}></div>
								</div>
							</div>
						</div>
					</div>

					<div className="card bg-white shadow-xl border border-gray-100">
						<div className="card-body p-5">
							<div className="flex justify-between items-start">
								<div>
									<p className="text-gray-600 text-sm font-medium">Revenue</p>
									<h3 className="text-2xl font-bold text-purple-600 mt-1">
										${stats.revenue}
									</h3>
								</div>
								<div className="p-2 bg-purple-50 rounded-lg text-purple-600">
									<TrendingUp size={24} />
								</div>
							</div>
							<div className="mt-4">
								<div className="text-gray-600 text-sm">
									Active shipments value
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Filters */}
				<div className="card bg-white shadow-xl border border-gray-100 mb-8">
					<div className="card-body p-6">
						<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
							<h2 className="text-xl font-bold text-gray-800">
								Shipment Overview
							</h2>
							<div className="flex items-center gap-3">
								<div className="text-sm text-gray-600">
									Showing{" "}
									<span className="font-bold">{filteredParcels.length}</span> of{" "}
									{parcelList.length} shipments
								</div>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							<div className="relative">
								<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<Search size={18} className="text-gray-400" />
								</div>
								<input
									type="text"
									placeholder="Search orders, customers, or products..."
									className="input input-bordered w-full pl-10 bg-gray-50 border-gray-200"
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
								/>
							</div>

							<div className="flex gap-3">
								<select
									className="select select-bordered flex-1 bg-gray-50 border-gray-200"
									value={filterStatus}
									onChange={(e) => setFilterStatus(e.target.value)}>
									<option value="all">All Status</option>
									<option value="delivered">Delivered</option>
									<option value="in-transit">In Transit</option>
									<option value="processing">Processing</option>
									<option value="cancelled">Cancelled</option>
								</select>

								<select
									className="select select-bordered flex-1 bg-gray-50 border-gray-200"
									value={dateFilter}
									onChange={(e) => setDateFilter(e.target.value)}>
									<option value="all">All Time</option>
									<option value="today">Today</option>
									<option value="week">This Week</option>
									<option value="month">This Month</option>
								</select>
							</div>

							<div className="flex items-center gap-3 justify-end">
								<div className="flex gap-1">
									<button
										className={`btn btn-sm ${
											filterStatus === "all"
												? "bg-linear-to-r from-purple-500 to-pink-500 text-white"
												: "btn-ghost"
										}`}
										onClick={() => setFilterStatus("all")}>
										All
									</button>
									<button
										className={`btn btn-sm ${
											filterStatus === "delivered"
												? "bg-linear-to-r from-green-400 to-emerald-500 text-white"
												: "btn-ghost"
										}`}
										onClick={() => setFilterStatus("delivered")}>
										Delivered
									</button>
									<button
										className={`btn btn-sm ${
											filterStatus === "in-transit"
												? "bg-linear-to-r from-blue-400 to-cyan-500 text-white"
												: "btn-ghost"
										}`}
										onClick={() => setFilterStatus("in-transit")}>
										In Transit
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Orders Grid (Card View) */}
				<div className="mb-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
						{filteredParcels.length > 0 ? (
							filteredParcels.map((parcel) => (
								<div
									key={parcel._id}
									className="card bg-white shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
									<div className="card-body p-6">
										{/* HEADER */}
										<div className="flex justify-between items-start mb-4">
											<div>
												<div className="flex items-center gap-2 mb-1">
													<Package size={18} className="text-gray-400" />
													<span className="font-mono font-bold text-gray-800">
														{parcel._id}
													</span>
												</div>

												<h3 className="text-lg font-semibold text-gray-900">
													{parcel.parcelName}
												</h3>

												<p className="text-gray-600 text-sm">
													Receiver: {parcel.receiverName}
												</p>
											</div>

											<StatusBadge status={parcel.deliveryStatus} />
										</div>

										{/* COST + DATE */}
										<div className="grid grid-cols-3 gap-4 mb-4">
											<div>
												<p className="text-gray-500 text-sm">Total Cost</p>
												<p className="text-xl font-bold text-gray-900">
													${parcel.totalCost}
												</p>
											</div>
											<div>
												<p className="text-gray-500 text-sm">Weight</p>
												<p className="text-sm font-bold text-gray-900">
													${parcel.weight}
												</p>
											</div>
											<div>
												<p className="text-gray-500 text-sm">Type</p>
												<p className="text-sm font-bold text-gray-900">
													{parcel.type}
												</p>
											</div>

											<div>
												<p className="text-gray-500 text-sm">Order Date</p>
												<div className="flex items-center gap-2">
													<Calendar size={14} className="text-gray-400" />
													<span className="font-medium">
														{new Date(parcel.creationDate).toLocaleDateString()}
													</span>
												</div>
											</div>
										</div>

										{/* TRACKING */}
										<div className="mb-4">
											<div className="flex items-center justify-between mb-2">
												<p className="text-gray-500 text-sm">Tracking</p>
												<span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">
													{parcel.trackingId}
												</span>
											</div>

											<div className="flex items-center gap-4 text-sm">
												<div className="flex items-center gap-1">
													<Truck size={14} className="text-gray-400" />
													<span className="text-gray-600">
														{parcel.senderRegion} Center
													</span>
												</div>

												<div className="flex items-center gap-1">
													<MapPin size={14} className="text-gray-400" />
													<span className="text-gray-600">
														{parcel.receiverRegion}
													</span>
												</div>
											</div>
										</div>

										{/* DELIVERY PROGRESS */}
										{parcel.deliveryStatus !== "cancelled" && (
											<div className="mb-4">
												<div className="flex justify-between text-sm mb-1">
													<span className="text-gray-500">
														Estimated Delivery
													</span>
													<span className="font-medium">3–5 days</span>
												</div>

												<StatusPill
													status={parcel.deliveryStatus}
													showProgress={true}
												/>
											</div>
										)}

										{/* FOOTER */}
										<div className="card-actions justify-between items-center mt-4 pt-4 border-t border-gray-100">
											<div className="text-sm text-gray-500">
												Last updated:{" "}
												{new Date(parcel.creationDate).toLocaleDateString()}
												{" • "}
												{parcel.senderRegion}
											</div>

											<div className="flex gap-2">
												<Link to={`parcelDetails/${parcel._id}`}>
													<button
														className="btn btn-sm btn-ghost hover:bg-gray-100"
														onClick={() => setSelectedOrder(parcel)}>
														<Eye size={16} />
														Details
													</button>
												</Link>

												<button className="btn btn-sm bg-linear-to-r from-blue-400 to-cyan-500 text-white hover:from-blue-500 hover:to-cyan-600">
													<MapPin size={16} />
													Track
												</button>

												<div
													className="relative"
													ref={(el) => (menuRefs.current[parcel._id] = el)}>
													<button
														onClick={() => toggleOpen(parcel._id)}
														className="btn btn-sm btn-square btn-ghost">
														<MoreVertical size={16} />
													</button>
													{openId === parcel._id && (
														<div className="absolute right-0 mt-2 w-36 bg-white shadow-md border border-orange-600/20 rounded-md p-2 z-50">
															<button
																onClick={() => {
																	setOpenId(null);
																}}
																className="flex items-center gap-2 cursor-pointer w-full text-left px-3 py-1 hover:bg-gray-100 rounded">
																<Pencil size={16} />
																<span>Edit</span>
															</button>

															<button
																onClick={() => {
																	setOpenId(null);
																	handleDelete(parcel._id);
																}}
																className="flex items-cente gap-2 cursor-pointer w-full text-left px-3 py-1 hover:bg-red-100 text-red-600 rounded">
																<Trash2 size={16} />
																<span>Delete</span>
															</button>
														</div>
													)}
												</div>
											</div>
										</div>
									</div>
								</div>
							))
						) : (
							<div className="col-span-2">
								<div className="card bg-white shadow-xl border border-gray-100">
									<div className="card-body p-12">
										<div className="flex flex-col items-center justify-center gap-4 text-gray-400">
											<Package size={64} />
											<div className="text-center">
												<p className="text-xl font-medium text-gray-600">
													No shipments found
												</p>
												<p className="text-gray-500 mt-1">
													Try adjusting your search or filter criteria
												</p>
											</div>
											<button
												className="btn btn-ghost mt-4"
												onClick={() => {
													setSearchTerm("");
													setFilterStatus("all");
													setDateFilter("all");
												}}>
												Clear all filters
											</button>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>

				{/* Status Summary */}
				<div className="card bg-white shadow-xl border border-gray-100">
					<div className="card-body p-6">
						<h2 className="text-xl font-bold text-gray-800 mb-4">
							Shipment Status Summary
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
							<div className="flex items-center justify-between p-4 bg-linear-to-r from-green-50 to-emerald-50 border border-green-100 rounded-xl">
								<div className="flex items-center gap-3">
									<div className="p-2 bg-green-100 rounded-lg">
										<CheckCircle size={24} className="text-green-600" />
									</div>
									<div>
										<p className="text-sm text-gray-600">Delivered</p>
										<p className="text-2xl font-bold text-green-700">
											{getStatusCount("delivered")}
										</p>
									</div>
								</div>
								<ChevronRight size={20} className="text-green-400" />
							</div>

							<div className="flex items-center justify-between p-4 bg-linear-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-xl">
								<div className="flex items-center gap-3">
									<div className="p-2 bg-blue-100 rounded-lg">
										<Truck size={24} className="text-blue-600" />
									</div>
									<div>
										<p className="text-sm text-gray-600">In Transit</p>
										<p className="text-2xl font-bold text-blue-700">
											{getStatusCount("in-transit")}
										</p>
									</div>
								</div>
								<ChevronRight size={20} className="text-blue-400" />
							</div>

							<div className="flex items-center justify-between p-4 bg-linear-to-r from-amber-50 to-orange-50 border border-amber-100 rounded-xl">
								<div className="flex items-center gap-3">
									<div className="p-2 bg-amber-100 rounded-lg">
										<Clock size={24} className="text-amber-600" />
									</div>
									<div>
										<p className="text-sm text-gray-600">Processing</p>
										<p className="text-2xl font-bold text-amber-700">
											{getStatusCount("processing")}
										</p>
									</div>
								</div>
								<ChevronRight size={20} className="text-amber-400" />
							</div>

							<div className="flex items-center justify-between p-4 bg-linear-to-r from-rose-50 to-pink-50 border border-rose-100 rounded-xl">
								<div className="flex items-center gap-3">
									<div className="p-2 bg-rose-100 rounded-lg">
										<XCircle size={24} className="text-rose-600" />
									</div>
									<div>
										<p className="text-sm text-gray-600">Cancelled</p>
										<p className="text-2xl font-bold text-rose-700">
											{getStatusCount("cancelled")}
										</p>
									</div>
								</div>
								<ChevronRight size={20} className="text-rose-400" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
