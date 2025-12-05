import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

const customIcon = new Icon({
	iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
	iconSize: [35, 35],
});

function FlyToDistrict({ coords }) {
	const map = useMap();
	if (coords) {
		map.flyTo(coords, 12, { duration: 1.5 });
	}
	return null;
}

export default function BangladeshMap({ branches }) {
	const [searchText, setSearchText] = useState("");
	const [activeCoords, setActiveCoords] = useState(null);
	const [activeDistrict, setActiveDistrict] = useState(null);

	const handleSearch = (e) => {
		e.preventDefault();
		const branch = branches.find((d) =>
			d.district.toLowerCase().includes(searchText.toLowerCase())
		);
		if (branch) {
			setActiveCoords([branch.latitude, branch.longitude]);
			setActiveDistrict(branch.district);
		}
	};
	return (
		<div className="w-full h-full-screen rounded-xl overflow-hidden lg:flex gap-5">
			<div className="bg-linear-to-br from-orange-400 to-orange-600 rounded-3xl px-8 py-12 md:py-16">
				<div className="flex flex-col items-center text-center">
					<h1 className="text-white mb-4 text-3xl md:text-4xl font-bold">
						We are available in{" "}
						<span className="text-transparent bg-clip-text bg-linear-to-r from-lime-100 via-lime-300 to-yellow-300">
							{branches.length} districts
						</span>
					</h1>

					<p className="text-blue-100 max-w-2xl mb-8 text-base md:text-lg">
						Explore our extensive network across Bangladesh. Search for your
						district to find the nearest branch.
					</p>

					{/* Search Bar */}
					<form onSubmit={handleSearch} className="w-full max-w-xl">
						<div className="relative">
							<input
								type="search"
								required
								placeholder="Search for your district..."
								value={searchText}
								onChange={(e) => setSearchText(e.target.value)}
								className="w-full px-6 py-4 text-base rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/100 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
							/>
							<button
								type="submit"
								className="absolute right-2 top-1/2 -translate-y-1/2 bg-linear-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white px-6 py-2.5 rounded-xl transition-all duration-300 text-sm font-medium shadow-sm cursor-pointer">
								Search
							</button>
						</div>
					</form>
				</div>
			</div>
			{/* <div className=" p-5">
				<form onSubmit={handleSearch}>
					<label className="input">
						<svg
							className="h-[1em] opacity-50"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24">
							<g
								strokeLinejoin="round"
								strokeLinecap="round"
								strokeWidth="2.5"
								fill="none"
								stroke="currentColor">
								<circle cx="11" cy="11" r="8"></circle>
								<path d="m21 21-4.3-4.3"></path>
							</g>
						</svg>
						<input
							type="search"
							required
							placeholder="Search"
							value={searchText}
							onChange={(e) => setSearchText(e.target.value)}
						/>
					</label>
				</form>
			</div> */}
			{/* map container  */}
			<div className="h-[650px] mt-5 w-full">
				<MapContainer
					center={[23.685, 90.3563]}
					zoom={7}
					scrollWheelZoom={true}
					className="h-full w-full rounded-3xl">
					<TileLayer
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						attribution="© OpenStreetMap contributors"
					/>

					<FlyToDistrict coords={activeCoords}></FlyToDistrict>

					{branches.map((branch, index) => (
						<Marker
							key={index}
							position={[branch.latitude, branch.longitude]}
							icon={customIcon}>
							<Popup autoOpen={branch.district === activeDistrict}>
								<strong>{branch.city}</strong> — Coverage Available <br />
								Area: {branch.covered_area.join(",")}
							</Popup>
						</Marker>
					))}
				</MapContainer>
			</div>
		</div>
	);
}
