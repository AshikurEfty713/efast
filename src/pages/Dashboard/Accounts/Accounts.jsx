import {
	CreditCard,
	TrendingUp,
	TrendingDown,
	Eye,
	EyeOff,
} from "lucide-react";
import { useState } from "react";

export default function Accounts() {
	const [showBalance, setShowBalance] = useState(true);

	const accounts = [
		{
			id: 1,
			name: "Checking Account",
			iban: "•••• 8808 8452",
			balance: 12450.5,
			type: "active",
			change: +2.5,
		},
		{
			id: 2,
			name: "Savings Account",
			iban: "•••• 7723 9901",
			balance: 45890.25,
			type: "active",
			change: +5.8,
		},
		{
			id: 3,
			name: "Business Account",
			iban: "•••• 5512 4487",
			balance: 8920.0,
			type: "blocked",
			change: -1.2,
		},
	];

	return (
		<div>
			<div className="mb-6">
				<h1 className="text-3xl mb-2">Accounts Overview</h1>
				<p className="text-gray-600">Manage all your financial accounts</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
				<div className="card bg-linear-to-br from-purple-500 to-pink-500 text-white shadow-xl">
					<div className="card-body">
						<h3 className="card-title text-sm opacity-90">Total Balance</h3>
						<p className="text-3xl">${showBalance ? "67,260.75" : "••••••"}</p>
						<button
							onClick={() => setShowBalance(!showBalance)}
							className="btn btn-sm btn-ghost mt-2">
							{showBalance ? <EyeOff size={16} /> : <Eye size={16} />}
						</button>
					</div>
				</div>

				<div className="card bg-linear-to-br from-green-500 to-emerald-500 text-white shadow-xl">
					<div className="card-body">
						<h3 className="card-title text-sm opacity-90">Active Accounts</h3>
						<p className="text-3xl">2</p>
						<div className="flex items-center gap-1 mt-2">
							<TrendingUp size={16} />
							<span className="text-sm">All operational</span>
						</div>
					</div>
				</div>

				<div className="card bg-linear-to-br from-orange-500 to-red-500 text-white shadow-xl">
					<div className="card-body">
						<h3 className="card-title text-sm opacity-90">Blocked Accounts</h3>
						<p className="text-3xl">1</p>
						<div className="flex items-center gap-1 mt-2">
							<TrendingDown size={16} />
							<span className="text-sm">Action required</span>
						</div>
					</div>
				</div>
			</div>

			<div className="card bg-white shadow-xl">
				<div className="card-body">
					<h2 className="card-title mb-4">All Accounts</h2>
					<div className="space-y-4">
						{accounts.map((account) => (
							<div
								key={account.id}
								className="p-6 bg-linear-to-r from-gray-50 to-white rounded-xl border border-gray-200 hover:shadow-lg transition-all">
								<div className="flex justify-between items-start">
									<div className="flex gap-4">
										<div
											className={`w-14 h-14 rounded-xl flex items-center justify-center ${
												account.type === "active"
													? "bg-linear-to-br from-purple-500 to-pink-500"
													: "bg-linear-to-br from-gray-400 to-gray-500"
											}`}>
											<CreditCard className="text-white" size={24} />
										</div>
										<div>
											<h3 className="text-lg mb-1">{account.name}</h3>
											<p className="text-sm text-gray-500">
												IBAN {account.iban}
											</p>
											<div
												className={`badge badge-sm mt-2 ${
													account.type === "active"
														? "badge-success"
														: "badge-error"
												}`}>
												{account.type === "active" ? "Active" : "Blocked"}
											</div>
										</div>
									</div>
									<div className="text-right">
										<p className="text-2xl mb-1">
											$
											{showBalance
												? account.balance.toLocaleString()
												: "••••••"}
										</p>
										<div
											className={`flex items-center gap-1 justify-end ${
												account.change > 0 ? "text-green-600" : "text-red-600"
											}`}>
											{account.change > 0 ? (
												<TrendingUp size={16} />
											) : (
												<TrendingDown size={16} />
											)}
											<span className="text-sm">
												{Math.abs(account.change)}%
											</span>
										</div>
									</div>
								</div>
								<div className="flex gap-2 mt-4">
									<button className="btn btn-sm bg-linear-to-r from-purple-500 to-pink-500 text-white border-0 hover:from-purple-600 hover:to-pink-600">
										View Details
									</button>
									{account.type === "active" ? (
										<button className="btn btn-sm btn-outline btn-error">
											Block Account
										</button>
									) : (
										<button className="btn btn-sm btn-outline btn-success">
											Unblock Account
										</button>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
