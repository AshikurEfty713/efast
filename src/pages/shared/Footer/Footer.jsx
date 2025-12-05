import React from "react";
import {
	Mail,
	Phone,
	MapPin,
	Facebook,
	Twitter,
	Linkedin,
	Instagram,
} from "lucide-react";
import { Link } from "react-router";
import truckImg from "../../../assets/couriers/truckfooter.jpg";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const footerColumns = [
		{
			title: "Company",
			links: [
				{ label: "About Us", href: "#about" },
				{ label: "Our Mission", href: "#mission" },
				{ label: "Careers", href: "#careers" },
				{ label: "Blog", href: "#blog" },
				{ label: "Press", href: "#press" },
			],
		},
		{
			title: "Services",
			links: [
				{ label: "Product", href: "#product" },
				{ label: "Features", href: "#features" },
				{ label: "Pricing", href: "#pricing" },
				{ label: "Security", href: "#security" },
				{ label: "API Docs", href: "#api" },
			],
		},
		{
			title: "Support",
			links: [
				{ label: "Help Center", href: "#help" },
				{ label: "Contact Us", href: "#contact" },
				{ label: "Privacy Policy", href: "#privacy" },
				{ label: "Terms of Service", href: "#terms" },
				{ label: "Sitemap", href: "#sitemap" },
			],
		},
	];

	const socialLinks = [
		{ icon: Facebook, href: "#facebook", label: "Facebook" },
		{ icon: Twitter, href: "#twitter", label: "Twitter" },
		{ icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
		{ icon: Instagram, href: "#instagram", label: "Instagram" },
	];

	return (
		<footer className="relative w-full overflow-hidden z-0">
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `url(${truckImg})`,
				}}
			/>

			<div className="absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-800/90 to-slate-900/95" />

			<div className="relative z-10">
				{/* Main footer content */}
				<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12 mb-12">
						{/* Column 1: Company Info */}
						<div className="flex flex-col gap-4">
							<div className="flex items-center gap-2 mb-2">
								<div className="w-10 h-10 bg-linear-to-br  from-orange-400 to-orange-700 rounded-lg flex items-center justify-center">
									<span className="text-white font-bold text-lg">E</span>
								</div>
								<h3 className="text-xl font-bold text-white">Efast</h3>
							</div>
							<p className="text-gray-300 text-sm leading-relaxed">
								Providing reliable tech solutions since 1992. We're committed to
								delivering excellence and innovation.
							</p>
							<div className="flex gap-4 mt-4">
								{socialLinks.map((social, index) => {
									const Icon = social.icon;
									return (
										<a
											key={index}
											href={social.href}
											aria-label={social.label}
											className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:scale-110 transform">
											<Icon size={20} />
										</a>
									);
								})}
							</div>
						</div>

						{/* Column 2: Quick Links */}
						<div className="grid grid-cols-2 gap-8">
							{footerColumns.slice(0, 2).map((column, index) => (
								<div key={index} className="flex flex-col gap-4">
									<h4 className="text-base font-semibold text-white">
										{column.title}
									</h4>
									<ul className="space-y-2">
										{column.links.map((link, linkIndex) => (
											<li key={linkIndex}>
												<Link
													href={link.href}
													className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
													{link.label}
												</Link>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>

						{/* Column 3: Support & Contact */}
						<div className="flex flex-col gap-4">
							<h4 className="text-base font-semibold text-white">
								{footerColumns[2].title}
							</h4>
							<ul className="space-y-3">
								{footerColumns[2].links.map((link, linkIndex) => (
									<li key={linkIndex}>
										<Link
											href={link.href}
											className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm">
											{link.label}
										</Link>
									</li>
								))}
							</ul>

							<div className="flex flex-col gap-3 mt-6 pt-6 border-t border-gray-700">
								<a
									href="tel:+18005551234"
									className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors text-sm">
									<Phone size={16} />
									+1 (800) 555-1234
								</a>
								<a
									href="mailto:support@efast.com"
									className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors text-sm">
									<Mail size={16} />
									support@efast.com
								</a>
								<p className="flex items-start gap-2 text-gray-300 text-sm">
									<MapPin size={16} className="mt-0.5 flex-shrink-0 " />
									<span>123 Tech Street, Silicon Valley, CA 94025</span>
								</p>
							</div>
						</div>
					</div>

					<div className="border-t border-gray-700 my-8" />

					{/* Footer bottom */}
					<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
						<p className="text-gray-400 text-sm">
							© {currentYear} EFast Ltd. All rights reserved.
						</p>
						<div className="flex gap-6">
							<Link
								href="#privacy"
								className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
								Privacy Policy
							</Link>
							<Link
								href="#terms"
								className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
								Terms of Service
							</Link>
							<Link
								href="#cookies"
								className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
								Cookie Settings
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
