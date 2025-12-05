import { Outlet } from "react-router";
import { Sidebar } from "../components/Sidebar";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";

export default function DashboardLayout() {
	return (
		<div className="min-h-screen roboto-slab bg-linear-to-br from-purple-50 via-pink-50 to-orange-50">
			<Navbar />
			<div className="max-w-7xl mx-auto required">
				<div className="lg:flex">
					<Sidebar />
					<div className="flex-1">
						<div className="p-6">
							<Outlet />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
