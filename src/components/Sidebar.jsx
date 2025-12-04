import {
	CreditCard,
	Headphones,
	LayoutDashboard,
	MessageSquare,
	Package,
	ShoppingCart,
	Smartphone,
	Wallet,
	Menu,
	X,
	Truck,
	Box,
} from "lucide-react";
import { Link, useLocation } from "react-router";
import { useState } from "react";

export function Sidebar() {
	const location = useLocation();
	const [open, setOpen] = useState(false);

	const menuItems = [
		{ path: "", label: "Profile", icon: LayoutDashboard },
		{ path: "myParcel", label: "My Parcel", icon: Box },
		{ path: "track", label: "Track", icon: Truck },
		{ path: "accounts", label: "Accounts", icon: Wallet },
		{ path: "mobiru", label: "Mobiru", icon: Smartphone },
		{ path: "payments", label: "Payments", icon: CreditCard },
		{ path: "complaints", label: "Complaints", icon: MessageSquare },
		{ path: "supports", label: "Supports", icon: Headphones },
	];

	// ⭐ Active Route Checker
	const isActive = (path) => {
		if (path === "") return location.pathname === "/dashboard";
		return (
			location.pathname === `/dashboard/${path}` ||
			location.pathname.startsWith(`/dashboard/${path}/`)
		);
	};

	return (
		<>
			{/* Mobile top bar */}
			<div className="lg:hidden p-4 bg-white shadow flex items-center justify-between">
				<h1 className="text-lg font-semibold">Dashboard</h1>
				<button onClick={() => setOpen(true)}>
					<Menu size={28} />
				</button>
			</div>

			{/* Overlay */}
			{open && (
				<div
					className="fixed inset-0 bg-black/40 z-40 lg:hidden"
					onClick={() => setOpen(false)}></div>
			)}

			{/* Sidebar */}
			<aside
				className={`fixed left-0 top-0 h-screen w-64 bg-white shadow-xl z-50
					transform transition-transform duration-300
					${open ? "translate-x-0" : "-translate-x-full"}
					lg:translate-x-0
				`}>
				{/* Close button for mobile */}
				<div className="lg:hidden p-4 flex justify-end">
					<button onClick={() => setOpen(false)}>
						<X size={26} />
					</button>
				</div>

				<div className="p-6">
					{/* Logo */}
					<div className="flex items-center gap-3 mb-10">
						<div className="w-10 h-10 bg-linear-to-br from-pink-500 to-orange-500 rounded-xl flex items-center justify-center">
							<div className="border-4 border-white rounded-lg">
								<h5 className="px-2 py-1 text-white font-bold">T</h5>
							</div>
						</div>
						<div>
							<h1 className="text-lg font-semibold">Profile dashboard</h1>
							<p className="text-xs text-gray-500">Welcome to Trackfast</p>
						</div>
					</div>

					{/* Menu */}
					<nav className="space-y-2">
						{menuItems.map((item) => {
							const Icon = item.icon;
							const active = isActive(item.path);

							return (
								<Link
									key={item.path}
									to={item.path}
									onClick={() => setOpen(false)}
									className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
										active
											? "text-orange-500 font-semibold bg-orange-50"
											: "text-gray-600 hover:bg-gray-100"
									}`}>
									<Icon
										size={20}
										className={`${active ? "text-orange-500" : ""}`}
									/>
									<span>{item.label}</span>
								</Link>
							);
						})}
					</nav>
				</div>
			</aside>
		</>
	);
}
