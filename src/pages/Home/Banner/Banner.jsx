import { motion } from 'framer-motion';
import airplane from '../../../assets/others/bike1.png';
import worldMap from '../../../assets/banner/banner1.jpg';

export default function Banner() {
	const planeVariants = {
		animate: {
			offsetDistance: ['100%', '0%'],
			transition: {
				duration: 18,
				ease: 'linear',
				repeat: Infinity,
			},
		},
	};

	const markerVariants = {
		animate: {
			scale: [1, 1.2, 1],
			opacity: [0.8, 1, 0.8],
			transition: {
				duration: 2,
				repeat: Infinity,
				ease: 'easeInOut',
			},
		},
	};

	return (
		<div className="relative h-[750px] max-w-full overflow-hidden bg-gradient-to-br from-cyan-400 via-sky-300 to-blue-400 ">
			<div
				className="max-w-full absolute inset-0 flex items-center justify-center"
			// initial={{ scale: 1.1, opacity: 0 }}
			// animate={{ scale: 1, opacity: 1 }}
			// transition={{ duration: 1.5, ease: 'easeOut' }}
			>
				<img src={worldMap} alt="World Map" className="h-full w-full object-cover" />
			</div>
			{/* <div className="absolute inset-0 bg-blue-700/20" /> */}

			<svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
				<motion.use
					href="#flight-path"
					stroke="#ffffff"
					strokeWidth="4"
					strokeDasharray="15,20"
					fill="none"
					filter="url(#glow)"
					initial={{ pathLength: 0, opacity: 0 }}
					animate={{ pathLength: 1, opacity: 0.9 }}
					transition={{ duration: 2, ease: 'easeInOut' }}
				/>

				<motion.circle
					r="6"
					fill="#60a5fa"
					filter="url(#glow)"
					animate={{ offsetDistance: ['0%', '100%'] }}
					transition={{ duration: 4, ease: 'linear', repeat: Infinity }}
					style={{
						offsetPath: "path('M 500,350 Q 650,420 800,320 Q 900,260 1020,300')",
					}}
				/>

				<g>
					<motion.circle
						cx="300"
						cy="250"
						r="6"
						fill="#3b82f6"
						stroke="white"
						strokeWidth="3"
						variants={markerVariants}
						animate="animate"
					/>
					<motion.circle
						cx="430"
						cy="460"
						r="8"
						fill="#3b82f6"
						stroke="white"
						strokeWidth="3"
						variants={markerVariants}
						animate="animate"
					/>
					<motion.circle
						cx="800"
						cy="320"
						r="6"
						fill="#3b82f6"
						stroke="white"
						strokeWidth="3"
						variants={markerVariants}
						animate="animate"
						transition={{ delay: 0.5 }}
					/>
					<motion.circle
						cx="920"
						cy="200"
						r="5"
						fill="#3b82f6"
						stroke="white"
						strokeWidth="3"
						variants={markerVariants}
						animate="animate"
						transition={{ delay: 1 }}
					/>
					<motion.circle
						cx="1000"
						cy="520"
						r="5"
						fill="#3b82f6"
						stroke="white"
						strokeWidth="3"
						variants={markerVariants}
						animate="animate"
						transition={{ delay: 1 }}
					/>
				</g>
			</svg>

			<motion.div
				className="absolute z-20 h-[250px] w-[250px]"
				style={{
					offsetPath: "path('M -100,650  Q 1200,650 2100,650')",
					offsetRotate: 'auto',
					offsetAnchor: 'center',
				}}
				variants={planeVariants}
				animate="animate"
				initial={{ opacity: 1 }}
			>
				<motion.img
					src={airplane}
					alt="Airplane"
					className="h-full w-full object-contain drop-shadow-2xl"
					animate={{ y: [0, 0, 0] }}
					transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
				/>
			</motion.div>

			<motion.div
				className="absolute top-12 left-1/2 z-10 -translate-x-1/2 text-center"
				initial={{ y: -50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 1, delay: 0.5 }}
			>
				<h1 className="text-shadow-md mb-2 text-6xl font-semibold tracking-wider text-white">Global Dreams Await</h1>
				<p className="text-shadow-md text-xl text-white/90">Connecting the world, one flight at a time</p>
			</motion.div>

			<motion.div
				className="absolute bottom-12 left-1/2 flex -translate-x-1/2 gap-6"
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 1, delay: 1 }}
			>
				<div className="rounded-2xl bg-gray-100/10 px-8 py-4 shadow-xl backdrop-blur-sm">
					<div className="mb-1 text-4xl font-semibold text-white">350+</div>
					<div className="text-sm text-white">Daily Flights</div>
				</div>
				<div className="rounded-2xl bg-gray-100/10 px-8 py-4 shadow-xl backdrop-blur-sm">
					<div className="mb-1 text-4xl font-semibold text-white">180+</div>
					<div className="text-sm text-white">Countries</div>
				</div>
				<div className="rounded-2xl bg-gray-100/10 px-8 py-4 shadow-xl backdrop-blur-sm">
					<div className="mb-1 text-4xl font-semibold text-white">500+</div>
					<div className="text-sm text-white">Destinations</div>
				</div>
			</motion.div>

			<motion.div
				className="absolute top-1/4 left-[10%] h-12 w-24 rounded-full bg-white/40 blur-xl"
				animate={{ x: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
				transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
			/>
			<motion.div
				className="absolute top-1/3 right-[15%] h-16 w-32 rounded-full bg-white/30 blur-xl"
				animate={{ x: [0, -40, 0], opacity: [0.2, 0.4, 0.2] }}
				transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
			/>
		</div>
	);
}
