import { MessageSquare, AlertCircle, CheckCircle, Clock } from "lucide-react";

export default function Complaints() {
	const complaints = [
		{
			id: "CMP-001",
			title: "Transaction Failed",
			status: "resolved",
			date: "2025-12-01",
			priority: "high",
		},
		{
			id: "CMP-002",
			title: "Account Access Issue",
			status: "in-progress",
			date: "2025-12-02",
			priority: "medium",
		},
		{
			id: "CMP-003",
			title: "Wrong Amount Deducted",
			status: "pending",
			date: "2025-12-03",
			priority: "high",
		},
		{
			id: "CMP-004",
			title: "Card Not Working",
			status: "in-progress",
			date: "2025-12-03",
			priority: "low",
		},
	];

	const getStatusBadge = (status) => {
		switch (status) {
			case "resolved":
				return (
					<span className="badge badge-success gap-1">
						<CheckCircle size={12} /> Resolved
					</span>
				);
			case "in-progress":
				return (
					<span className="badge badge-warning gap-1">
						<Clock size={12} /> In Progress
					</span>
				);
			case "pending":
				return (
					<span className="badge badge-error gap-1">
						<AlertCircle size={12} /> Pending
					</span>
				);
			default:
				return <span className="badge">{status}</span>;
		}
	};

	return (
		<div>
			<div className="mb-6">
				<h1 className="text-3xl mb-2">Complaints</h1>
				<p className="text-gray-600">Track and manage your complaints</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
				<div className="stats shadow-xl bg-white">
					<div className="stat">
						<div className="stat-figure text-error">
							<AlertCircle size={32} />
						</div>
						<div className="stat-title">Pending</div>
						<div className="stat-value text-error">1</div>
					</div>
				</div>

				<div className="stats shadow-xl bg-white">
					<div className="stat">
						<div className="stat-figure text-warning">
							<Clock size={32} />
						</div>
						<div className="stat-title">In Progress</div>
						<div className="stat-value text-warning">2</div>
					</div>
				</div>

				<div className="stats shadow-xl bg-white">
					<div className="stat">
						<div className="stat-figure text-success">
							<CheckCircle size={32} />
						</div>
						<div className="stat-title">Resolved</div>
						<div className="stat-value text-success">1</div>
					</div>
				</div>
			</div>

			<div className="card bg-white shadow-xl mb-6">
				<div className="card-body">
					<div className="flex justify-between items-center mb-4">
						<h2 className="card-title">File New Complaint</h2>
					</div>
					<form className="space-y-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Subject</span>
								</label>
								<input
									type="text"
									placeholder="Enter complaint subject"
									className="input input-bordered ml-2"
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Priority</span>
								</label>
								<select className="select select-bordered ml-2">
									<option>Low</option>
									<option>Medium</option>
									<option>High</option>
								</select>
							</div>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Description</span>
							</label>
							<textarea
								className="textarea textarea-bordered h-24 ml-2"
								placeholder="Describe your issue"></textarea>
						</div>
						<button
							type="submit"
							className="btn bg-linear-to-r from-purple-500 to-pink-500 text-white border-0 hover:from-purple-600 hover:to-pink-600">
							Submit Complaint
						</button>
					</form>
				</div>
			</div>

			<div className="card bg-white shadow-xl">
				<div className="card-body">
					<h2 className="card-title mb-4">My Complaints</h2>
					<div className="overflow-x-auto">
						<table className="table">
							<thead>
								<tr>
									<th>ID</th>
									<th>Title</th>
									<th>Date</th>
									<th>Priority</th>
									<th>Status</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{complaints.map((complaint) => (
									<tr key={complaint.id} className="hover">
										<td>{complaint.id}</td>
										<td>
											<div className="flex items-center gap-2">
												<MessageSquare size={16} className="text-gray-400" />
												{complaint.title}
											</div>
										</td>
										<td>{complaint.date}</td>
										<td>
											<span
												className={`badge ${
													complaint.priority === "high"
														? "badge-error"
														: complaint.priority === "medium"
														? "badge-warning"
														: "badge-info"
												}`}>
												{complaint.priority}
											</span>
										</td>
										<td>{getStatusBadge(complaint.status)}</td>
										<td>
											<button className="btn btn-ghost btn-sm">View</button>
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
