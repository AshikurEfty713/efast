import {
	ArrowUpRight,
	ArrowDownLeft,
	DollarSign,
	Calendar,
} from "lucide-react";

export default function Payments() {
	const recentPayments = [
		{
			id: 1,
			type: "sent",
			recipient: "Netflix Subscription",
			amount: 15.99,
			date: "2025-12-03",
			status: "completed",
		},
		{
			id: 2,
			type: "received",
			recipient: "Salary Deposit",
			amount: 4500.0,
			date: "2025-12-01",
			status: "completed",
		},
		{
			id: 3,
			type: "sent",
			recipient: "Electric Bill",
			amount: 89.5,
			date: "2025-11-30",
			status: "completed",
		},
		{
			id: 4,
			type: "sent",
			recipient: "Amazon Purchase",
			amount: 156.75,
			date: "2025-11-28",
			status: "completed",
		},
		{
			id: 5,
			type: "received",
			recipient: "Freelance Project",
			amount: 850.0,
			date: "2025-11-25",
			status: "completed",
		},
		{
			id: 6,
			type: "sent",
			recipient: "Spotify Premium",
			amount: 9.99,
			date: "2025-11-24",
			status: "pending",
		},
	];

	return (
		<div>
			<div className="mb-6">
				<h1 className="text-3xl mb-2">Payments</h1>
				<p className="text-gray-600">Track all your transactions</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
				<div className="card bg-linear-to-br  from-green-500 to-emerald-600 text-white shadow-xl">
					<div className="card-body">
						<div className="flex items-center gap-3">
							<ArrowDownLeft size={24} />
							<h3 className="card-title text-sm opacity-90">Money Received</h3>
						</div>
						<p className="text-3xl mt-2">$5,350.00</p>
						<p className="text-sm opacity-75 mt-1">This month</p>
					</div>
				</div>

				<div className="card bg-linear-to-br from-red-500 to-pink-600 text-white shadow-xl">
					<div className="card-body">
						<div className="flex items-center gap-3">
							<ArrowUpRight size={24} />
							<h3 className="card-title text-sm opacity-90">Money Sent</h3>
						</div>
						<p className="text-3xl mt-2">$272.23</p>
						<p className="text-sm opacity-75 mt-1">This month</p>
					</div>
				</div>

				<div className="card bg-linear-to-br from-purple-500 to-indigo-600 text-white shadow-xl">
					<div className="card-body">
						<div className="flex items-center gap-3">
							<DollarSign size={24} />
							<h3 className="card-title text-sm opacity-90">Net Balance</h3>
						</div>
						<p className="text-3xl mt-2">$5,077.77</p>
						<p className="text-sm opacity-75 mt-1">This month</p>
					</div>
				</div>
			</div>

			<div className="card bg-white shadow-xl">
				<div className="card-body">
					<div className="flex justify-between items-center mb-4">
						<h2 className="card-title">Recent Payments</h2>
						<button className="btn btn-sm bg-linear-to-r from-purple-500 to-pink-500 text-white border-0 hover:from-purple-600 hover:to-pink-600">
							New Payment
						</button>
					</div>
					<div className="overflow-x-auto">
						<table className="table">
							<thead>
								<tr>
									<th>Type</th>
									<th>Description</th>
									<th>Amount</th>
									<th>Date</th>
									<th>Status</th>
								</tr>
							</thead>
							<tbody>
								{recentPayments.map((payment) => (
									<tr key={payment.id} className="hover">
										<td>
											<div
												className={`flex items-center gap-2 ${
													payment.type === "received"
														? "text-green-600"
														: "text-red-600"
												}`}>
												{payment.type === "received" ? (
													<ArrowDownLeft size={18} />
												) : (
													<ArrowUpRight size={18} />
												)}
												<span className="capitalize">{payment.type}</span>
											</div>
										</td>
										<td>{payment.recipient}</td>
										<td
											className={
												payment.type === "received"
													? "text-green-600"
													: "text-red-600"
											}>
											{payment.type === "received" ? "+" : "-"}$
											{payment.amount.toFixed(2)}
										</td>
										<td>
											<div className="flex items-center gap-2">
												<Calendar size={14} className="text-gray-400" />
												{payment.date}
											</div>
										</td>
										<td>
											<span
												className={`badge ${
													payment.status === "completed"
														? "bg-green-100 text-green-600"
														: "bg-yellow-100 text-yellow-600"
												}`}>
												{payment.status}
											</span>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
