import { ArrowRight } from "lucide-react";

export function ServiceCard({ icon, title, description, delay }) {
	return (
		<div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden transform hover:-translate-y-2 hover:transition-all">
			{/* Gradient Border on Hover */}
			<div className="absolute inset-0 bg-linear-to-br from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
			<div className="absolute inset-[2px] bg-white rounded-2xl"></div>

			<div className="relative p-8">
				{/* Icon */}
				<div className="relative mb-6 inline-block">
					<div className="absolute inset-0 bg-linear-to-br from-orange-100 to-orange-50 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
					<div className="relative bg-linear-to-br from-orange-100 to-orange-50 p-6 rounded-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
						{icon}
					</div>
				</div>

				{/* Content */}
				<h3 className="text-2xl mb-3 group-hover:text-orange-600 transition-colors duration-300">
					{title}
				</h3>
				<p className="text-gray-600 leading-relaxed mb-6">{description}</p>

				{/* Learn More Link */}
				<a
					href="#"
					className="inline-flex items-center gap-2 text-orange-600 group-hover:gap-4 transition-all duration-300">
					<span>Learn More</span>
					<ArrowRight className="w-5 h-5" />
				</a>
			</div>

			{/* Corner Accent */}
			<div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-orange-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
		</div>
	);
}
