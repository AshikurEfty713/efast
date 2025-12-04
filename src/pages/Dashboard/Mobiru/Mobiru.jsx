import { Smartphone, Zap, Signal, WifiOff } from "lucide-react";

export default function Mobiru() {
	const mobileServices = [
		{
			id: 1,
			name: "Mobile Recharge",
			icon: Smartphone,
			color: "from-blue-500 to-cyan-500",
			status: "active",
		},
		{
			id: 2,
			name: "Quick Pay",
			icon: Zap,
			color: "from-yellow-500 to-orange-500",
			status: "active",
		},
		{
			id: 3,
			name: "Data Plans",
			icon: Signal,
			color: "from-green-500 to-emerald-500",
			status: "active",
		},
		{
			id: 4,
			name: "Offline Services",
			icon: WifiOff,
			color: "from-purple-500 to-pink-500",
			status: "inactive",
		},
	];

	return (
		<div>
			<div className="mb-6">
				<h1 className="text-3xl mb-2">Mobiru Services</h1>
				<p className="text-gray-600">Mobile payment and recharge services</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
				{mobileServices.map((service) => {
					const Icon = service.icon;
					return (
						<div
							key={service.id}
							className="card bg-white shadow-xl hover:shadow-2xl transition-all cursor-pointer">
							<div className="card-body items-center text-center">
								<div
									className={`w-16 h-16 rounded-2xl bg-linear-to-br ${service.color} flex items-center justify-center mb-4`}>
									<Icon className="text-white" size={32} />
								</div>
								<h3 className="card-title text-lg">{service.name}</h3>
								<div
									className={`badge ${
										service.status === "active"
											? "badge-success"
											: "badge-error"
									}`}>
									{service.status}
								</div>
							</div>
						</div>
					);
				})}
			</div>

			<div className="card bg-white shadow-xl">
				<div className="card-body">
					<h2 className="card-title mb-4">Recent Transactions</h2>
					<div className="overflow-x-auto">
						<table className="table">
							<thead>
								<tr>
									<th>Service</th>
									<th>Number</th>
									<th>Amount</th>
									<th>Date</th>
									<th>Status</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Mobile Recharge</td>
									<td>+1-856-969-909-1212</td>
									<td>$50.00</td>
									<td>Dec 3, 2025</td>
									<td>
										<span className="badge badge-success">Completed</span>
									</td>
								</tr>
								<tr>
									<td>Data Plan</td>
									<td>+1-856-969-909-1212</td>
									<td>$25.00</td>
									<td>Nov 28, 2025</td>
									<td>
										<span className="badge badge-success">Completed</span>
									</td>
								</tr>
								<tr>
									<td>Quick Pay</td>
									<td>+1-856-969-909-1212</td>
									<td>$100.00</td>
									<td>Nov 25, 2025</td>
									<td>
										<span className="badge badge-warning">Pending</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
