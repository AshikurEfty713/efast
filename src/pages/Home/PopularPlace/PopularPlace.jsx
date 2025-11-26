import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const places = [
	{
		name: "Jashore",
		hotels: "Rajarhat, Chasra, Monihar, Kachua, Jhikargacha",
		image:
			"https://pathao.com/wp-content/uploads/2018/12/courier-merchant.jpeg",
	},
	{
		name: "Chennai",
		hotels: "1,497 Hotels Available",
		image:
			"https://pathao.com/bn/wp-content/uploads/sites/6/2018/12/courier-merchant.jpeg",
	},
	{
		name: "Kathmandu",
		hotels: "1,152 Hotels Available",
		image:
			"https://pathao.com/wp-content/uploads/2024/07/Product-Packaging-Tips-1024x536.jpeg",
	},
	{
		name: "Bangkok",
		hotels: "4,551 Hotels Available",
		image:
			"https://cdn.dribbble.com/userupload/10939780/file/original-f73e777a3856b8c5a528c4a857780f84.png",
	},
	{
		name: "Singapore",
		hotels: "813 Hotels Available",
		image:
			"https://pathao.com/bn/wp-content/uploads/sites/6/2024/07/%E0%A6%AA%E0%A6%BE%E0%A6%A0%E0%A6%BE%E0%A6%93-%E0%A6%95%E0%A7%81%E0%A6%B0%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%B0-%E0%A6%A1%E0%A7%87%E0%A6%B2%E0%A6%BF%E0%A6%AD%E0%A6%BE%E0%A6%B0%E0%A6%BF-%E0%A6%B8%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%AD%E0%A6%BF%E0%A6%B8-%E0%A6%A6%E0%A6%BF%E0%A6%9A%E0%A7%8D%E0%A6%9B%E0%A7%87-%E0%A7%AC%E0%A7%AA-%E0%A6%9C%E0%A7%87%E0%A6%B2%E0%A6%BE%E0%A6%AF%E0%A6%BC.jpg",
	},
];

export function PopularPlace() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isTransitioning, setIsTransitioning] = useState(false);

	const nextSlide = () => {
		if (isTransitioning) return;
		setIsTransitioning(true);
		setCurrentSlide((prev) => (prev + 1) % places.length);
		setTimeout(() => setIsTransitioning(false), 500);
	};

	const prevSlide = () => {
		if (isTransitioning) return;
		setIsTransitioning(true);
		setCurrentSlide((prev) => (prev - 1 + places.length) % places.length);
		setTimeout(() => setIsTransitioning(false), 500);
	};

	const goToSlide = (index) => {
		if (isTransitioning) return;
		setIsTransitioning(true);
		setCurrentSlide(index);
		setTimeout(() => setIsTransitioning(false), 500);
	};

	const getSlidePosition = (index) => {
		const diff = (index - currentSlide + places.length) % places.length;

		if (diff === 0) return "center";
		if (diff === 1 || diff === -(places.length - 1)) return "right";
		if (diff === places.length - 1 || diff === -1) return "left";
		return "hidden";
	};

	return (
		<div className=" mb-10 max-w-7xl mx-auto">
			{/* Header */}
			<div className="mb-8 px-4 text-center md:mb-12">
				<h1 className="mb-4 text-4xl font-bold">Most Popular places</h1>
				<p className="mx-auto max-w-3xl text-gray-600">
					Expand your travel horizons with new facets! Explore the world by
					choosing your ideal travel places in Asia, Europe, America, Australia
					and more with ShareTrip.
				</p>
			</div>

			{/* Slider */}
			<div className="relative px-2 sm:px-4 md:px-16">
				<div className="mx-auto flex h-72 items-center justify-center sm:h-80 md:h-96">
					{places.map((destination, index) => {
						const position = getSlidePosition(index);

						let transformClass = "";
						let zIndexClass = "";
						let opacityClass = "";

						if (position === "center") {
							transformClass = "translate-x-0 scale-100 rotate-y-0";
							zIndexClass = "z-30";
							opacityClass = "opacity-100";
						} else if (position === "right") {
							transformClass =
								"translate-x-[60%] sm:translate-x-[70%] md:translate-x-[85%] scale-75 sm:scale-85 md:scale-90";
							zIndexClass = "z-20";
							opacityClass = "opacity-40 sm:opacity-50 md:opacity-60";
						} else if (position === "left") {
							transformClass =
								"-translate-x-[60%] sm:-translate-x-[70%] md:-translate-x-[85%] scale-75 sm:scale-85 md:scale-90";
							zIndexClass = "z-20";
							opacityClass = "opacity-40 sm:opacity-50 md:opacity-60";
						} else {
							transformClass = "translate-x-0 scale-75";
							zIndexClass = "z-10";
							opacityClass = "opacity-0";
						}

						return (
							<div
								key={index}
								className={`absolute left-[100] w-full max-w-[280px] -translate-x-1/2 transition-all duration-500 ease-in-out sm:max-w-xs md:max-w-sm ${transformClass} ${zIndexClass} ${opacityClass}`}
								style={{
									perspective: "1000px",
								}}>
								<div
									className="relative h-72 cursor-pointer overflow-hidden rounded-2xl shadow-2xl sm:h-80"
									onClick={() => position !== "center" && goToSlide(index)}
									style={{
										transform:
											position === "right"
												? "rotateY(-10deg)"
												: position === "left"
												? "rotateY(10deg)"
												: "rotateY(0deg)",
										transformStyle: "preserve-3d",
									}}>
									<img
										src={destination.image}
										alt={destination.name}
										className="h-full w-full object-cover"
									/>
									<div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
									<div className="absolute bottom-4 left-4 text-white sm:bottom-6 sm:left-6">
										<h3 className="mb-1">{destination.name}</h3>
										<p className="opacity-90">{destination.hotels}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				{/* Navigation Arrows */}
				<button
					onClick={prevSlide}
					disabled={isTransitioning}
					className="absolute top-1/2 left-0 z-40 -translate-y-1/2 cursor-pointer rounded-full bg-white p-1.5 shadow-lg transition-colors hover:bg-gray-50 disabled:opacity-50 sm:left-0 sm:p-2"
					aria-label="Previous slide">
					<ChevronLeft className="h-4 w-4 text-gray-800 sm:h-6 sm:w-6" />
				</button>
				<button
					onClick={nextSlide}
					disabled={isTransitioning}
					className="absolute top-1/2 right-0 z-40 -translate-y-1/2 cursor-pointer rounded-full bg-white p-1.5 shadow-lg transition-colors hover:bg-gray-50 disabled:opacity-50 sm:right-0 sm:p-2"
					aria-label="Next slide">
					<ChevronRight className="h-4 w-4 text-gray-800 sm:h-6 sm:w-6" />
				</button>
			</div>

			{/* Custom Pagination Dots */}
			<div className="mt-8 flex justify-center gap-2 sm:mt-12">
				{places.map((_, index) => (
					<button
						key={index}
						onClick={() => goToSlide(index)}
						disabled={isTransitioning}
						className={`h-2 rounded-full transition-all duration-300 disabled:opacity-50 ${
							currentSlide === index
								? "w-8 bg-blue-500"
								: "w-2 bg-gray-300 hover:bg-gray-400"
						}`}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
}
