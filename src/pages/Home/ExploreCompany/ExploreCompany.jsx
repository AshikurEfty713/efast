import react from "react";
import airPlaneImg from "../../../assets/couriers/bike1.png";

export default function ExploreCompany() {
	const exploreData = [
		{
			id: 1,
			name: "Express Parcel Delivery",
			title: "Fast and secure parcel delivery to any destination",
			type: "Courier",
			status: "active",
			cover_image:
				"https://www.lalamove.com/hubfs/Sub%20banner_driver_dhaka%201.jpg",
		},
		{
			id: 2,
			name: "International Shipping Service",
			title: "Ship your packages worldwide with complete tracking",
			type: "Courier",
			status: "active",
			cover_image:
				"https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&w=800&q=80",
		},
		{
			id: 3,
			name: "Corporate Logistics Support",
			title: "Reliable logistics and document delivery for businesses",
			type: "Courier",
			status: "active",
			cover_image:
				"https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&w=800&q=80",
		},
		{
			id: 4,
			name: "Door-to-Door Package Pickup",
			title: "Convenient pickup service directly from your doorstep",
			type: "Courier",
			status: "active",
			cover_image:
				"https://png.pngtree.com/thumb_back/fh260/background/20230702/pngtree-swift-delivery-a-scooter-motorcycle-carrying-a-cardboard-parcel-box-for-image_3738919.jpg",
		},
		{
			id: 5,
			name: "E-Commerce Fulfillment",
			title: "Smart delivery solutions for online shop orders",
			type: "Courier",
			status: "active",
			cover_image:
				"https://i.shgcdn.com/d4a11c47-531a-4569-b1ef-653ed1c798b8/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
		},
		{
			id: 6,
			name: "Same-Day Delivery Service",
			title: "Ultra-fast delivery for urgent packages",
			type: "Courier",
			status: "active",
			cover_image:
				"https://jetcourier.ca/wp-content/uploads/2022/11/Why-You-Should-Use-Personal-Delivery-Services.jpg",
		},
		{
			id: 7,
			name: "Warehouse & Storage Solutions",
			title: "Secure storage and warehouse handling services",
			type: "Courier",
			status: "active",
			cover_image:
				"https://swyftcourier.ca/wp-content/uploads/2023/12/reliable-personal-delivery-in-vancouver.webp",
		},
		{
			id: 8,
			name: "Global Freight Forwarding",
			title: "Efficient air, sea, and land freight forwarding services",
			type: "Courier",
			status: "active",
			cover_image:
				"https://img.freepik.com/premium-photo/courier-service-delivery-man-giving-parcel-box-customer_8087-1974.jpg",
		},
		{
			id: 9,
			name: "Secure Document Delivery",
			title: "Confidential document and passport delivery service",
			type: "Courier",
			status: "active",
			cover_image:
				"https://img.freepik.com/free-photo/happy-delivery-man-carrying-packages-while-walking-down-street_637285-1276.jpg",
		},
		{
			id: 10,
			name: "Cash-on-Delivery Service",
			title: "COD delivery for online sellers and businesses",
			type: "Courier",
			status: "active",
			cover_image:
				"https://5.imimg.com/data5/SELLER/Default/2024/7/435334571/MG/PM/CX/225731654/door-to-door-courier-service-500x500.jpg",
		},
		{
			id: 11,
			name: "Bike Messenger Service",
			title: "Quick intra-city deliveries by professional riders",
			type: "Courier",
			status: "active",
			cover_image:
				"https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&w=800&q=80",
		},
		{
			id: 12,
			name: "Heavy Cargo Delivery",
			title: "Safe handling and delivery for large and heavy shipments",
			type: "Courier",
			status: "active",
			cover_image:
				"https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&w=800&q=80",
		},
	];

	return (
		<div className="relative container px-4 py-10 sm:px-6 lg:px-8 lg:py-28 max-w-7xl mx-auto">
			{/* Blurred background shapes */}
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				<div className="absolute top-20 left-10 h-72 w-72 animate-pulse rounded-full bg-purple-200 opacity-30 mix-blend-multiply blur-xl filter"></div>
				<div className="animation-delay-2000 absolute top-40 right-10 h-72 w-72 animate-pulse rounded-full bg-cyan-200 opacity-30 mix-blend-multiply blur-xl filter"></div>
				<div className="animation-delay-4000 absolute bottom-20 left-1/2 h-72 w-72 animate-pulse rounded-full bg-pink-200 opacity-30 mix-blend-multiply blur-xl filter"></div>
			</div>

			{/* Heading */}
			<div className="mb-12 text-center">
				<h2 className="mb-4 text-2xl font-bold text-gray-900 lg:text-4xl">
					Delivery Moments Gallery
				</h2>
				<h3 className="mb-6 text-2xl font-bold text-orange-500 lg:text-4xl">
					Real Deliveries. Real Stories
				</h3>
				<p className="mx-auto max-w-4xl text-lg text-gray-600">
					Take a look at snapshots showcasing our courier operations and
					customer experiences.
				</p>
			</div>

			{/* imageItem Grid */}
			<div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
				{exploreData.map((imageItem) => (
					<a
						href={"/blog-details"}
						key={imageItem.id}
						rel="noopener noreferrer"
						className="group relative cursor-pointer overflow-hidden rounded-2xl">
						<div
							className="h-[380px] w-full bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
							style={{
								backgroundImage: `url(${imageItem.cover_image})`,
							}}></div>

						<div className="absolute inset-0 bg-linear-to-t from-black/70 opacity-50 transition-colors duration-400 group-hover:from-black/50"></div>

						<div className="absolute bottom-0 -right-100 rounded-md px-2 py-1 text-sm font-semibold duration-500 group-hover:bottom-0 group-hover:right-5 group-hover:block">
							<img src={airPlaneImg} alt="" className="w-20" />
						</div>

						<div className="absolute bottom-5 left-5 flex flex-col items-start text-white">
							<h4 className="mb-2 text-2xl font-bold">{imageItem.name}</h4>
							<p className="text-sm">{imageItem.title}</p>
						</div>
					</a>
				))}
			</div>
		</div>
	);
}
