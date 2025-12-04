import {
	Headphones,
	Phone,
	Mail,
	MessageCircle,
	Clock,
	Users,
} from "lucide-react";

export default function Supports() {
	const supportChannels = [
		{
			id: 1,
			name: "Live Chat",
			icon: MessageCircle,
			color: "from-green-500 to-emerald-500",
			available: true,
		},
		{
			id: 2,
			name: "Phone Support",
			icon: Phone,
			color: "from-blue-500 to-cyan-500",
			available: true,
		},
		{
			id: 3,
			name: "Email Support",
			icon: Mail,
			color: "from-purple-500 to-pink-500",
			available: true,
		},
		{
			id: 4,
			name: "Video Call",
			icon: Headphones,
			color: "from-orange-500 to-red-500",
			available: false,
		},
	];

	const faqs = [
		{ question: "How do I reset my password?", category: "Account" },
		{ question: "What are the transaction limits?", category: "Payments" },
		{ question: "How to link a new bank account?", category: "Banking" },
		{ question: "When will my complaint be resolved?", category: "Support" },
	];

	return (
		<div>
			<div className="mb-6">
				<h1 className="text-3xl mb-2">Support Center</h1>
				<p className="text-gray-600">We're here to help you 24/7</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
				<div className="card bg-linear-to-br  from-purple-500 to-pink-500 text-white shadow-xl">
					<div className="card-body">
						<div className="flex items-center gap-3 mb-2">
							<Clock size={24} />
							<h3 className="card-title">Support Hours</h3>
						</div>
						<p>24/7 Available</p>
						<p className="text-sm opacity-75">We're always here for you</p>
					</div>
				</div>

				<div className="card bg-linear-to-br from-blue-500 to-cyan-500 text-white shadow-xl">
					<div className="card-body">
						<div className="flex items-center gap-3 mb-2">
							<Users size={24} />
							<h3 className="card-title">Active Agents</h3>
						</div>
						<p>15 Agents Online</p>
						<p className="text-sm opacity-75">Average response: 2 minutes</p>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
				{supportChannels.map((channel) => {
					const Icon = channel.icon;
					return (
						<div
							key={channel.id}
							className="card bg-white shadow-xl hover:shadow-2xl transition-all cursor-pointer">
							<div className="card-body items-center text-center">
								<div
									className={`w-16 h-16 rounded-2xl bg-linear-to-br ${channel.color} flex items-center justify-center mb-4`}>
									<Icon className="text-white" size={32} />
								</div>
								<h3 className="card-title text-lg mb-2">{channel.name}</h3>
								<div
									className={`badge ${
										channel.available ? "badge-success" : "badge-error"
									}`}>
									{channel.available ? "Available" : "Offline"}
								</div>
								{channel.available && (
									<button className="btn btn-sm btn-outline mt-2">
										Connect Now
									</button>
								)}
							</div>
						</div>
					);
				})}
			</div>

			<div className="card bg-white shadow-xl mb-6">
				<div className="card-body">
					<h2 className="card-title mb-4">Contact Support</h2>
					<form className="space-y-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Name</span>
								</label>
								<input
									type="text"
									placeholder="Your name"
									className="input input-bordered"
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="email"
									placeholder="your@email.com"
									className="input input-bordered"
								/>
							</div>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Subject</span>
							</label>
							<input
								type="text"
								placeholder="How can we help?"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Message</span>
							</label>
							<textarea
								className="textarea textarea-bordered h-24"
								placeholder="Describe your issue"></textarea>
						</div>
						<button
							type="submit"
							className="btn bg-linear-to-r from-purple-500 to-pink-500 text-white border-0 hover:from-purple-600 hover:to-pink-600">
							Send Message
						</button>
					</form>
				</div>
			</div>

			<div className="card bg-white shadow-xl">
				<div className="card-body">
					<h2 className="card-title mb-4">Frequently Asked Questions</h2>
					<div className="space-y-2">
						{faqs.map((faq, index) => (
							<div key={index} className="collapse collapse-plus bg-gray-50">
								<input type="checkbox" className="peer" />
								<div className="collapse-title">
									<div className="flex justify-between items-center">
										<span>{faq.question}</span>
										<span className="badge badge-sm mr-8">{faq.category}</span>
									</div>
								</div>
								<div className="collapse-content">
									<p className="text-gray-600">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua.
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
