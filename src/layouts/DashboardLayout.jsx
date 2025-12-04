import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function DashboardLayout() {
	return (
		<div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-orange-50">
			<div className="flex">
				<Sidebar />
				<div className="flex-1 lg:ml-64">
					<Header />
					<div className="p-6">
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
}
