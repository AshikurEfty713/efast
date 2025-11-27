"use client";

import { useState, useRef } from "react";

const ServiceCard = ({ service }) => {
	const { title, description, icon: Icon } = service;
	const [bubbles, setBubbles] = useState([]);
	const cardRef = useRef(null);

	const handleMouseEnter = (e) => {
		const rect = cardRef.current?.getBoundingClientRect();
		if (!rect) return;
		const newBubbles = Array.from({ length: 8 }, (_, i) => ({
			id: Date.now() + i,
			left: Math.random() * 100,
			delay: Math.random() * 0.2,
			duration: 2 + Math.random() * 0.8,
			size: 8 + Math.random() * 12,
		}));

		setBubbles(newBubbles);
		setTimeout(() => setBubbles([]), 2000);
	};

	return (
		<div
			ref={cardRef}
			onMouseEnter={handleMouseEnter}
			className="bg-card cursor-pointer text-card-foreground rounded-lg shadow-lg hover:shadow-xl transition duration-300 border border-input relative overflow-hidden p-6">
			<div className="absolute inset-0 pointer-events-none overflow-hidden">
				{bubbles.map((bubble) => (
					<div
						key={bubble.id}
						className="absolute bottom-0 rounded-full bg-orange-500/30 animate-bubble"
						style={{
							width: bubble.size,
							height: bubble.size,
							left: `${bubble.left}%`,
							animation: `floatUp ${bubble.duration}s ease-in forwards`,
							animationDelay: `${bubble.delay}s`,
						}}
					/>
				))}
			</div>

			<div className="flex flex-col items-center text-center relative z-10">
				<div className="text-orange-500 text-5xl mb-3">
					<Icon />
				</div>
				<h3 className="text-lg font-semibold mb-2">{title}</h3>
				<p className="text-sm text-muted-foreground">{description}</p>
			</div>
		</div>
	);
};

export default ServiceCard;
