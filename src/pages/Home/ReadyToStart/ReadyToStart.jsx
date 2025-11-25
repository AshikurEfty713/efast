import React from 'react';
const ReadyToStart = () => {
    return (
        <section className="relative overflow-hidden py-20 max-w-7xl mx-auto">
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px',
                    }}
                ></div>
            </div>
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 h-72 w-72 animate-pulse rounded-full bg-lime-200 opacity-30 mix-blend-multiply blur-xl filter"></div>
                <div className="animation-delay-2000 absolute top-40 right-10 h-72 w-72 animate-pulse rounded-full bg-yellow-200 opacity-30 mix-blend-multiply blur-xl filter"></div>
                <div className="animation-delay-4000 absolute bottom-20 left-1/2 h-72 w-72 animate-pulse rounded-full bg-pink-200 opacity-30 mix-blend-multiply blur-xl filter"></div>
            </div>
            <div className="relative z-10 container mx-auto px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="mb-6 text-3xl font-bold text-gray-700 md:text-4xl">Ready to Deliver—Anywhere, Anytime.</h2>
                    <p className="mb-10 text-xl leading-relaxed text-gray-600">
                        Let us handle the complexities of visa processing while you focus on planning your adventure. Our expert team is ready to
                        assist you every step of the way.
                    </p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <a
                            href="#search-country"
                            className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            Get Started Now
                        </a>
                        <a
                            href="#contact"
                            className="rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-gray-700 shadow-2xl backdrop-blur-md transition-all duration-300 hover:bg-white/20"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReadyToStart;
