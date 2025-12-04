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
} from "lucide-react";
import { useState } from "react";

export default function MyParcel() {
	const [searchTerm, setSearchTerm] = useState("");
	const [filterStatus, setFilterStatus] = useState("all");
	const [dateFilter, setDateFilter] = useState("all");
	const [selectedOrder, setSelectedOrder] = useState(null);

	const orders = [
		{
			id: "ORD-2025-001",
			customer: "John Doe",
			product: "Wireless Headphones",
			amount: 129.99,
			date: "2025-12-03",
			status: "delivered",
			trackingId: "TRK-789456",
			carrier: "FedEx",
			estimatedDelivery: "2025-12-05",
			location: "New York, NY",
		},
		{
			id: "ORD-2025-002",
			customer: "Jane Smith",
			product: "Smart Watch",
			amount: 299.99,
			date: "2025-12-03",
			status: "in-transit",
			trackingId: "TRK-123456",
			carrier: "UPS",
			estimatedDelivery: "2025-12-07",
			location: "Chicago, IL",
		},
		{
			id: "ORD-2025-003",
			customer: "Mike Johnson",
			product: "Laptop Stand",
			amount: 49.99,
			date: "2025-12-02",
			status: "processing",
			trackingId: "TRK-654321",
			carrier: "USPS",
			estimatedDelivery: "2025-12-10",
			location: "Austin, TX",
		},
		{
			id: "ORD-2025-004",
			customer: "Sarah Williams",
			product: "Mechanical Keyboard",
			amount: 159.99,
			date: "2025-12-02",
			status: "delivered",
			trackingId: "TRK-987654",
			carrier: "DHL",
			estimatedDelivery: "2025-12-04",
			location: "Seattle, WA",
		},
		{
			id: "ORD-2025-005",
			customer: "David Brown",
			product: "USB-C Hub",
			amount: 79.99,
			date: "2025-12-01",
			status: "cancelled",
			trackingId: "TRK-321654",
			carrier: "FedEx",
			estimatedDelivery: "2025-12-06",
			location: "Boston, MA",
		},
		{
			id: "ORD-2025-006",
			customer: "Emily Davis",
			product: "Webcam HD",
			amount: 89.99,
			date: "2025-12-01",
			status: "in-transit",
			trackingId: "TRK-456123",
			carrier: "UPS",
			estimatedDelivery: "2025-12-08",
			location: "Miami, FL",
		},
		{
			id: "ORD-2025-007",
			customer: "Robert Wilson",
			product: "Desk Lamp",
			amount: 39.99,
			date: "2025-11-30",
			status: "delivered",
			trackingId: "TRK-159357",
			carrier: "USPS",
			estimatedDelivery: "2025-12-03",
			location: "Denver, CO",
		},
		{
			id: "ORD-2025-008",
			customer: "Lisa Anderson",
			product: "Phone Case",
			amount: 24.99,
			date: "2025-11-30",
			status: "processing",
			trackingId: "TRK-753159",
			carrier: "DHL",
			estimatedDelivery: "2025-12-09",
			location: "Phoenix, AZ",
		},
	];

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

	const filteredOrders = orders.filter((order) => {
		const matchesSearch =
			order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
			order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
			order.product.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesStatus =
			filterStatus === "all" || order.status === filterStatus;

		let matchesDate = true;
		if (dateFilter !== "all") {
			const orderDate = new Date(order.date);
			const today = new Date();
			const daysDiff = Math.floor(
				(today.getTime() - orderDate.getTime()) / (1000 * 60 * 60 * 24)
			);

			if (dateFilter === "today") matchesDate = daysDiff === 0;
			else if (dateFilter === "week") matchesDate = daysDiff <= 7;
			else if (dateFilter === "month") matchesDate = daysDiff <= 30;
		}

		return matchesSearch && matchesStatus && matchesDate;
	});

	const stats = {
		total: orders.length,
		delivered: orders.filter((o) => o.status === "delivered").length,
		inTransit: orders.filter((o) => o.status === "in-transit").length,
		processing: orders.filter((o) => o.status === "processing").length,
		cancelled: orders.filter((o) => o.status === "cancelled").length,
		revenue: orders
			.filter((o) => o.status !== "cancelled")
			.reduce((sum, o) => sum + o.amount, 0)
			.toFixed(2),
	};

	const getStatusCount = (status) => {
		return orders.filter((o) => o.status === status).length;
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
										Total Orders
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
									<span className="font-bold">{filteredOrders.length}</span> of{" "}
									{orders.length} shipments
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
						{filteredOrders.length > 0 ? (
							filteredOrders.map((order) => (
								<div
									key={order.id}
									className="card bg-white shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
									<div className="card-body p-6">
										<div className="flex justify-between items-start mb-4">
											<div>
												<div className="flex items-center gap-2 mb-1">
													<Package size={18} className="text-gray-400" />
													<span className="font-mono font-bold text-gray-800">
														{order.id}
													</span>
												</div>
												<h3 className="text-lg font-semibold text-gray-900">
													{order.product}
												</h3>
												<p className="text-gray-600 text-sm">
													Ordered by {order.customer}
												</p>
											</div>
											<StatusBadge status={order.status} />
										</div>

										<div className="grid grid-cols-2 gap-4 mb-4">
											<div>
												<p className="text-gray-500 text-sm">Amount</p>
												<p className="text-xl font-bold text-gray-900">
													${order.amount.toFixed(2)}
												</p>
											</div>
											<div>
												<p className="text-gray-500 text-sm">Order Date</p>
												<div className="flex items-center gap-2">
													<Calendar size={14} className="text-gray-400" />
													<span className="font-medium">{order.date}</span>
												</div>
											</div>
										</div>

										<div className="mb-4">
											<div className="flex items-center justify-between mb-2">
												<p className="text-gray-500 text-sm">Tracking</p>
												<span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">
													{order.trackingId}
												</span>
											</div>
											<div className="flex items-center gap-4 text-sm">
												<div className="flex items-center gap-1">
													<Truck size={14} className="text-gray-400" />
													<span className="text-gray-600">{order.carrier}</span>
												</div>
												<div className="flex items-center gap-1">
													<MapPin size={14} className="text-gray-400" />
													<span className="text-gray-600">
														{order.location}
													</span>
												</div>
											</div>
										</div>

										{order.status !== "cancelled" && (
											<div className="mb-4">
												<div className="flex justify-between text-sm mb-1">
													<span className="text-gray-500">
														Estimated Delivery
													</span>
													<span className="font-medium">
														{order.estimatedDelivery}
													</span>
												</div>
												<StatusPill status={order.status} showProgress={true} />
											</div>
										)}

										<div className="card-actions justify-between items-center mt-4 pt-4 border-t border-gray-100">
											<div className="text-sm text-gray-500">
												Last updated: {order.date} • {order.carrier}
											</div>
											<div className="flex gap-2">
												<button
													className="btn btn-sm btn-ghost hover:bg-gray-100"
													onClick={() => setSelectedOrder(order)}>
													<Eye size={16} />
													Details
												</button>
												<button className="btn btn-sm bg-linear-to-r from-blue-400 to-cyan-500 text-white hover:from-blue-500 hover:to-cyan-600">
													<MapPin size={16} />
													Track
												</button>
												<button className="btn btn-sm btn-square btn-ghost">
													<MoreVertical size={16} />
												</button>
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
