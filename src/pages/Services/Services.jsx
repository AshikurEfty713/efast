import { Package, Truck, Warehouse, MapPin, Ship, Plane } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

export default function Services() {
    const services = [
        {
            icon: <Truck className="w-12 h-12 text-orange-500" />,
            title: 'Road Transportation',
            description:
                'Efficient ground shipping with real-time tracking. Our fleet ensures safe and timely delivery across all destinations.',
        },
        {
            icon: <Package className="w-12 h-12 text-orange-500" />,
            title: 'Packaging Services',
            description:
                'Professional packaging solutions tailored to your needs. We ensure your goods are protected throughout transit.',
        },
        {
            icon: <Warehouse className="w-12 h-12 text-orange-500" />,
            title: 'Storage & Warehousing',
            description:
                'Secure storage facilities with advanced inventory management. Climate-controlled options available.',
        },
        {
            icon: <Ship className="w-12 h-12 text-orange-500" />,
            title: 'Sea Freight',
            description:
                'Cost-effective ocean shipping for large cargo. Global network of ports and reliable scheduling.',
        },
        {
            icon: <Plane className="w-12 h-12 text-orange-500" />,
            title: 'Air Cargo',
            description:
                'Express air freight services for time-sensitive deliveries. Fastest shipping option available.',
        },
        {
            icon: <MapPin className="w-12 h-12 text-orange-500" />,
            title: 'Global Logistics',
            description:
                'End-to-end supply chain solutions. Strategic planning and optimization for your business.',
        },
    ];

    return (
        <div id="services" className="relative py-24 px-4 bg-gradient-to-br from-gray-50 via-white to-orange-50 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-20 left-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-0 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Header */}
                <div className="max-w-3xl mb-16" data-aos="fade-up">
                    <div className="inline-block mb-4">
                        <span className="bg-gradient-to-r from-orange-100 to-orange-50 text-orange-600 px-6 py-2 rounded-full text-sm uppercase tracking-wider">
                            Our Services
                        </span>
                    </div>

                    <h2 className="text-5xl lg:text-6xl mb-4">
                        <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                            SERVICES
                        </span>
                    </h2>
                    <p className="text-2xl text-gray-800 mb-6">PRECISE AND HARD WORKING</p>

                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        Nam libero justo, lacerate a, ultrices ac, mattis nox, bibendum vel, justo, sed ultrices purus
                        nibh sed lectus. Praesent nec nisl a purus blandit viverra. Proin gravida nibh vel velit auctor
                        aliquet bibendum auctor mauris.
                    </p>

                    <button className="btn btn-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                        Book Services Now
                    </button>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            delay={index * 200}
                        />
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-20 text-center" data-aos="fade-up">
                    <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl blur-2xl opacity-30"></div>
                        <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white p-12 rounded-3xl shadow-2xl">
                            <h3 className="text-3xl mb-4">Need a Custom Solution?</h3>
                            <p className="text-lg mb-6 opacity-90">
                                Our team is ready to create a tailored logistics plan for your unique requirements.
                            </p>
                            <button className="btn btn-lg bg-white text-orange-600 border-0 hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                                Contact Our Experts
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
