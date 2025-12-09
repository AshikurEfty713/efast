import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
	ArrowRight,
	Calendar,
	ChevronLeft,
	ChevronRight,
	User,
} from "lucide-react";

const blogs = [
	{
		id: 1,
		image:
			"https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2NTE3NTUxMXww&ixlib=rb-4.1.0&q=80&w=1080",
		title: "How should business adapt to support your world?",
		description:
			"Nowadays, we live in an increasingly mobile world, where people, products and services moving around the globe faster",
		tags: ["Mobile", "Tax"],
	},
	{
		id: 2,
		image:
			"https://images.unsplash.com/photo-1565688527174-775059ac429c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBhZHZpc29ycyUyMGRpc2N1c3Npb258ZW58MXx8fHwxNzY1MjYwOTI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
		title: "A catalyst to unlock potential in tax pricing and beyond",
		description:
			"The value and benefits offers the broader finance function and C-Suite, scalability to accommodate small to large scale",
		tags: ["Pricing", "Tax"],
	},
	{
		id: 3,
		image:
			"https://images.unsplash.com/photo-1762341118954-d0ce391674d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMG9mZmljZXxlbnwxfHx8fDE3NjUyMjEwNDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
		title: "Strategies for attracting and retaining prominent talents",
		description:
			"Trusted Advisors discuss how the search for CEOs has changed and steps private businesses can take in order to",
		tags: ["Strategies", "Tips"],
	},
	{
		id: 4,
		image:
			"https://images.unsplash.com/photo-1762341118954-d0ce391674d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMG9mZmljZXxlbnwxfHx8fDE3NjUyMjEwNDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
		title: "Strategies for attracting and retaining prominent talents",
		description:
			"Trusted Advisors discuss how the search for CEOs has changed and steps private businesses can take in order to",
		tags: ["Strategies", "Tips"],
	},
];

export default function BlogsSlider() {
	// useRef must receive a single initial value; TS-style generics break in JSX
	const sliderRef = useRef(null);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
			{/* Header Section */}
			<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12">
				<div className="max-w-2xl">
					<h3 className="text-4xl text-orange-500 mb-4 ">
						New ways to engage & empower clients
					</h3>
					<h1 className="mb-6">
						Resources that will guide and empower financial decision!
					</h1>
					<p className="text-gray-600">
						Find out about the ways to deal with debts if you are falling behind
						with daily bills, loan and credit card repayments or other
						commitments & get some free advice by speaking to one of our
						financial advisers!
					</p>
				</div>

				<button
					className="group relative cursor-pointer overflow-hidden rounded-full px-6 py-3 flex items-center gap-3 
                                    bg-gray-900 text-white transition-all duration-300">
					<span className="relative z-10">Explore All Case Studies</span>

					<div className="relative z-10 bg-orange-500 rounded-full p-2 group-hover:bg-white group-hover:text-orange-500 transition-all duration-300">
						<ArrowRight className="w-5 h-5" />
					</div>

					{/* ORANGE FILL BACKGROUND */}
					<span
						className="absolute inset-0 bg-orange-500 rounded-full
                        translate-x-full -translate-y-full 
                        group-hover:translate-x-0 group-hover:translate-y-0
                        transition-transform duration-500 ease-out"></span>
				</button>
			</div>

			{/* Slider Section */}
			<div className="relative mb-12">
				<Slider ref={sliderRef} {...settings}>
					{blogs.map((blog) => (
						<div key={blog.id} className="px-3">
							<div className="bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 h-full group overflow-hidden">
								<div className="h-48 overflow-hidden">
									<img
										src={blog.image}
										alt={blog.title}
										className="w-full h-full object-cover group-hover:scale-105 duration-200"
									/>
								</div>
								<div className="p-6">
									<h2 className="mb-3">{blog.title}</h2>
									<p className="text-gray-600 mb-4">{blog.description}</p>
									<div className="flex gap-0.5 items-center justify-between">
										<div className="flex items-center w-full p-2 bg-orange-500 text-white rounded-md rounded-tr-none rounded-bl-none ">
											{/* Left Section */}
											<div className="flex items-center justify-between w-full gap-2">
												<div className="flex justify-between gap-1 leading-tight w-full">
													<div className="flex gap-1">
														<span className="flex items-center justify-center w-5 h-5 p-1  bg-white text-orange-500 rounded-full">
															<User className="w-5 h-5" />
														</span>
														<span className="font-normal">Ashikur Efty</span>
													</div>

													<div className="flex items-center gap-1 text-sm opacity-90">
														<Calendar className="w-4 h-4" />
														<span>10-05-2025</span>
													</div>
												</div>
											</div>
										</div>

										<div className="relative">
											<div className="w-10 h-10 rounded-tl-xl group-hover:rounded-tl-2xl border border-orange-500 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300">
												<ArrowRight className="w-5 h-5 text-gray-700 group-hover:text-white  transition-colors duration-300" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</Slider>
			</div>

			{/* Navigation and Footer */}
			<div className="flex flex-col md:flex-row items-center justify-between gap-6">
				<p className="text-center md:text-left text-gray-600">
					Get free advice by speaking to one of our financial advisers over the
					phone or just submit your details and we'll be in touch shortly!{" "}
					<a
						href="#"
						className="text-orange-500 hover:underline inline-flex items-center gap-1">
						Get in Touch
						<ArrowRight className="w-4 h-4" />
					</a>
				</p>
				<div className="flex gap-3">
					<button
						onClick={() => sliderRef.current?.slickPrev()}
						className="w-12 h-12 rounded-full border border-gray-300 hover:bg-gray-100 hover:border-gray-400 flex items-center justify-center transition-all">
						<ChevronLeft className="w-5 h-5" />
					</button>
					<button
						onClick={() => sliderRef.current?.slickNext()}
						className="w-12 h-12 rounded-full border border-gray-300 hover:bg-gray-100 hover:border-gray-400 flex items-center justify-center transition-all">
						<ChevronRight className="w-5 h-5" />
					</button>
				</div>
			</div>
		</div>
	);
}
