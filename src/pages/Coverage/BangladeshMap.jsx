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
		<div className="w-full h-[600px] rounded-xl overflow-hidden shadow-lg">
			<div className=" p-5">
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
			</div>
			{/* map container  */}
			<MapContainer
				center={[23.685, 90.3563]}
				zoom={7}
				scrollWheelZoom={true}
				className="h-full w-full">
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
	);
}
