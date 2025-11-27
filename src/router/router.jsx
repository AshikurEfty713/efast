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
]);
