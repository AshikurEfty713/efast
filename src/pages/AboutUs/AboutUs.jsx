import react from "react";
import {
	Facebook,
	Twitter,
	Youtube,
	Award,
	Users,
	TrendingUp,
} from "lucide-react";

export default function AboutUs() {
	const features = [
		{ icon: Award, label: "Award Winning", value: "360+" },
		{ icon: Users, label: "Happy Clients", value: "12K+" },
		{ icon: TrendingUp, label: "Growth Rate", value: "95%" },
	];

	return (
		<div id="about" className="relative py-24 px-4 bg-white overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-5">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage:
							"radial-gradient(circle at 2px 2px, #f97316 1px, transparent 0)",
						backgroundSize: "40px 40px",
					}}></div>
			</div>

			<div className="container mx-auto max-w-7xl relative z-10">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					{/* Left Side - Content */}
					<div className="space-y-6" data-aos="fade-right">
						<div className="inline-block">
							<span className="bg-linear-to-r from-orange-100 to-orange-50 text-orange-600 px-6 py-2 rounded-full text-sm uppercase tracking-wider">
								About Us
							</span>
						</div>

						<h2 className="text-5xl lg:text-6xl">
							<span className="block bg-linear-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
								TRANSPORT &
							</span>
							<span className="block bg-linear-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
								LOGISTICS
							</span>
						</h2>

						<div className="space-y-4 text-gray-700 text-lg leading-relaxed">
							<p>
								Proin gravida nibh vel velit auctor aliquet. Aenean
								sollicitudin, lorem quis bibendum auctor, nisi elit consequat
								ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
								nibh vulputate cursus a sit amet mauris.
							</p>

							<p>
								Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
								auctor a ornare odio. Build your ideas at scale, Incididunt
								auctor sit nibh amet odio sed Duis.
							</p>
						</div>

						{/* Features Grid */}
						<div className="grid grid-cols-3 gap-4 py-6">
							{features.map((feature, index) => (
								<div
									key={index}
									className="text-center p-4 rounded-2xl bg-linear-to-br from-orange-50 to-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
									<feature.icon className="w-8 h-8 text-orange-500 mx-auto mb-2" />
									<div className="text-2xl bg-linear-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-1">
										{feature.value}
									</div>
									<div className="text-xs text-gray-600">{feature.label}</div>
								</div>
							))}
						</div>

						{/* Social Media */}
						<div className="flex gap-4 pt-4">
							<a
								href="#"
								className="btn btn-circle bg-linear-to-br from-gray-900 to-black text-white border-0 hover:from-orange-500 hover:to-orange-600 transition-all duration-300 hover:scale-110 shadow-lg">
								<Facebook className="w-5 h-5" />
							</a>
							<a
								href="#"
								className="btn btn-circle bg-linear-to-br from-gray-900 to-black text-white border-0 hover:from-orange-500 hover:to-orange-600 transition-all duration-300 hover:scale-110 shadow-lg">
								<Twitter className="w-5 h-5" />
							</a>
							<a
								href="#"
								className="btn btn-circle bg-linear-to-br from-orange-500 to-orange-600 text-white border-0 hover:scale-110 transition-all duration-300 shadow-lg">
								<Youtube className="w-5 h-5" />
							</a>
						</div>
					</div>

					{/* Right Side - Image Collage */}
					<div className="relative" data-aos="fade-left">
						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-4">
								<div className="relative group overflow-hidden rounded-2xl shadow-xl">
									<img
										src="https://images.unsplash.com/photo-1553413077-190dd305871c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBzdG9yYWdlfGVufDF8fHx8MTc2NDA0MjQ0NHww&ixlib=rb-4.1.0&q=80&w=1080"
										alt="Warehouse"
										className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
									/>
									<div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
								</div>
								<div className="relative group overflow-hidden rounded-2xl shadow-xl">
									<img
										src="https://images.unsplash.com/photo-1686632979221-62fab48a9028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkYm9hcmQlMjBwYWNrYWdlc3xlbnwxfHx8fDE3NjQxMzU1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
										alt="Packages"
										className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
									/>
									<div className="absolute inset-0 bg-linear-to-t  from-black/50 to-transparent"></div>
								</div>
							</div>
							<div className="space-y-4 pt-12">
								<div className="relative group overflow-hidden rounded-2xl shadow-xl">
									<img
										src="https://images.unsplash.com/photo-1691732619327-db1c189eb923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXAlMjBjb250YWluZXJ8ZW58MXx8fHwxNzY0MDQwMzAzfDA&ixlib=rb-4.1.0&q=80&w=1080"
										alt="Cargo"
										className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
									/>
									<div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
								</div>
								<div className="relative group overflow-hidden rounded-2xl shadow-xl">
									<img
										src="https://images.unsplash.com/photo-1754765542024-c1320f23b75a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMHdvcmtlcnMlMjBib3hlc3xlbnwxfHx8fDE3NjQxMzU1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
										alt="Workers"
										className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
									/>
									<div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
								</div>
							</div>
						</div>

						{/* Floating Badge */}
						<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
							<div className="text-4xl bg-linear-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-1">
								25+
							</div>
							<div className="text-sm text-gray-600">Years Experience</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
