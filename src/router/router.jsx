import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/rootLayout";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Coverage from "../pages/Coverage/Coverage";
import AboutUs from "../pages/AboutUs/AboutUs";
import Services from "../pages/Services/Services";
import PrivateRoute from "../routes/PrivateRoute";
import SendParcel from "../pages/SendParcel/SendParcel";
import DashboardLayout from "../layouts/DashboardLayout";
import MyParcel from "../pages/Dashboard/MyParcel/MyParcel";
import Accounts from "../pages/Dashboard/Accounts/Accounts";
import Payments from "../pages/Dashboard/Payments/Payments";
import Complaints from "../pages/Dashboard/Complaints/Complaints";
import Supports from "../pages/Dashboard/Supports/Supports";
import Track from "../pages/Dashboard/Track/Track";
import Profile from "../pages/Dashboard/Profile/Profile";
import ParcelDetails from "../pages/Dashboard/MyParcel/ParcelDetails";
import Payment from "../pages/Dashboard/Payment/Payment";
import Checkout from "../pages/Dashboard/Checkout/Checkout";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: "about",
				Component: AboutUs,
			},
			{
				path: "services",
				Component: Services,
			},
			{
				path: "coverage",
				Component: Coverage,
			},
			{
				path: "sendParcel",
				element: (
					<PrivateRoute>
						<SendParcel></SendParcel>
					</PrivateRoute>
				),
			},
		],
	},
	{
		path: "/",
		Component: AuthLayout,
		children: [
			{
				path: "login",
				Component: Login,
			},
			{
				path: "register",
				Component: Register,
			},
		],
	},
	{
		path: "/dashboard",
		element: (
			<PrivateRoute>
				<DashboardLayout></DashboardLayout>
			</PrivateRoute>
		),
		children: [
			{
				path: "",
				Component: Profile,
			},
			{
				path: "myParcel",
				Component: MyParcel,
				children: [
					{
						path: "parcelDetails/:id",
						Component: ParcelDetails,
					},
				],
			},

			{
				path: "track",
				Component: Track,
			},
			{
				path: "accounts",
				Component: Accounts,
			},
			{
				path: "checkout",
				Component: Checkout,
			},
			{
				path: "payment/:id",
				Component: Payment,
			},
			{
				path: "payments",
				Component: Payments,
			},

			{
				path: "complaints",
				Component: Complaints,
			},
			{
				path: "supports",
				Component: Supports,
			},
		],
	},
]);
