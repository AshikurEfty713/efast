import { Search, Edit, Check, X } from "lucide-react";

export default function Profile() {
	const profileImg =
		"https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=500&q=80"; // Free avatar

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
			{/* Profile Card */}
			<div className="card bg-white shadow-2xl rounded-2xl p-6">
				<div className="flex flex-col items-center">
					<div className="avatar mb-4">
						<div className="w-48 h-48 rounded-full overflow-hidden border-4 border-linear-to-r from-orange-400 to-pink-500">
							<img
								src={profileImg}
								alt="Profile"
								className="object-cover w-full h-full"
							/>
						</div>
					</div>

					<h2 className="text-2xl font-semibold mb-1">Sam Rohnson</h2>
					<p className="text-sm text-gray-500 text-center mb-4">
						Last login: 17 Aug 2021, 14:42
						<br />
						Brooklyn Av 1st floor, New York, USA
					</p>

					<div className="space-y-4 w-full">
						<div>
							<label className="text-sm text-gray-600">Phone</label>
							<p className="text-gray-800">+1 - 856 - 969 - 909 - 1212</p>
						</div>

						<div>
							<label className="text-sm text-gray-600">Email</label>
							<p className="text-gray-800">Sam.rohnson002@gmail.com</p>
						</div>

						<div className="flex items-center gap-2">
							<span className="text-sm">SMS alerts activated</span>
							<div className="badge badge-success badge-sm gap-1">
								<Check size={12} />
							</div>
						</div>

						<button className="btn w-full bg-linear-to-r from-orange-400 to-pink-500 text-white hover:from-pink-500 hover:to-orange-400 border-0">
							Save Changes
						</button>
					</div>
				</div>
			</div>

			{/* Right Column */}
			<div className="space-y-6">
				{/* xPay Accounts */}
				<div className="card bg-white shadow-2xl rounded-2xl p-6">
					<div className="flex justify-between items-center mb-4">
						<h2 className="text-xl font-semibold">My xPay Accounts</h2>
						<div className="flex gap-2">
							<button className="btn btn-ghost btn-sm btn-circle">
								<Search size={16} />
							</button>
							<button className="btn btn-ghost btn-sm btn-circle">
								<Edit size={16} />
							</button>
						</div>
					</div>

					<div className="space-y-4">
						<div className="flex justify-between items-center">
							<div>
								<p className="text-sm font-medium">Active account</p>
								<p className="text-xs text-gray-500">IBAN ••••• 8808 8452</p>
							</div>
							<button className="btn btn-sm bg-linear-to-r from-orange-400 to-pink-500 text-white border-0 hover:from-pink-500 hover:to-orange-400">
								Block Account
							</button>
						</div>

						<div className="divider my-2"></div>

						<div className="flex justify-between items-center">
							<div>
								<p className="text-sm font-medium">Blocked account</p>
								<p className="text-xs text-gray-500">IBAN ••••• 8808 8452</p>
							</div>
							<button className="btn btn-sm bg-linear-to-r from-green-400 to-emerald-500 text-white border-0 hover:from-emerald-500 hover:to-green-400">
								Unblock Account
							</button>
						</div>
					</div>
				</div>

				{/* Bills */}
				<div className="card bg-white shadow-2xl rounded-2xl p-6">
					<div className="flex justify-between items-center mb-4">
						<h2 className="text-xl font-semibold">My Bills</h2>
						<button className="text-sm text-gray-500 hover:text-gray-700">
							Filter
						</button>
					</div>

					<div className="space-y-3">
						{[
							{ name: "Phone bill", status: "paid", color: "green" },
							{ name: "Internet bill", status: "not paid", color: "pink" },
							{ name: "House rent", status: "paid", color: "green" },
							{ name: "Income tax", status: "paid", color: "green" },
						].map((bill, i) => (
							<div key={i} className="flex justify-between items-center">
								<div className="flex items-center gap-3">
									<div
										className={`w-2 h-2 rounded-full bg-${bill.color}-500`}></div>
									<span className="text-sm">{bill.name}</span>
								</div>
								<button
									className={`btn btn-sm bg-linear-to-r ${
										bill.color === "green"
											? "from-green-400 to-emerald-500 hover:from-emerald-500 hover:to-green-400"
											: "from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-400"
									} text-white border-0`}>
									{bill.status === "paid" ? "Bill paid" : "Not paid"}
								</button>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
