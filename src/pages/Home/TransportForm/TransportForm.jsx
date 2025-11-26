import { useState } from 'react';
import { Phone, Send, CheckCircle } from 'lucide-react';
import { BubbleAnimation } from '../BubbleAnimation/BubbleAnimation';
import truckImg2 from '../../../assets/couriers/truckimg2.jpg'

export default function TransportForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div id="home" className="relative bg-gradient-to-br from-orange-50 via-white to-orange-50 pt-8 pb-20 px-4 overflow-hidden">

            <div className="absolute top-20 right-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>
            <BubbleAnimation></BubbleAnimation>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1" data-aos="fade-right">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

                            <div className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-3xl shadow-2xl p-8 transform hover:scale-[1.02] transition-all duration-500">

                                <div className="flex items-center gap-4 mb-8">
                                    <div className="bg-white p-4 rounded-2xl shadow-lg transform hover:rotate-12 transition-transform duration-300">
                                        <Phone className="w-8 h-8 text-orange-500" />
                                    </div>
                                    <div className="text-white">
                                        <p className="text-sm uppercase tracking-wider opacity-90">Get a Free Quote!</p>
                                        <h3 className="text-3xl">920-858-8525</h3>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="input w-full bg-white/95 backdrop-blur-sm border-0 focus:outline-none focus:ring-4 focus:ring-orange-300/50 transition-all duration-300 shadow-lg"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            className="input bg-white/95 backdrop-blur-sm border-0 focus:outline-none focus:ring-4 focus:ring-orange-300/50 transition-all duration-300 shadow-lg"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                        <input
                                            type="tel"
                                            placeholder="Phone Number"
                                            className="input bg-white/95 backdrop-blur-sm border-0 focus:outline-none focus:ring-4 focus:ring-orange-300/50 transition-all duration-300 shadow-lg"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                    </div>

                                    <textarea
                                        placeholder="Tell us about your shipping needs..."
                                        className="textarea w-full bg-white/95 backdrop-blur-sm border-0 focus:outline-none focus:ring-4 focus:ring-orange-300/50 transition-all duration-300 shadow-lg"
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    />

                                    <button
                                        type="submit"
                                        className="btn bg-black text-white border-0 w-full hover:bg-gray-900 transition-all duration-300 hover:shadow-2xl group shadow-xl"
                                    >
                                        <span>FIND THE BEST SOLUTION</span>
                                        <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>

                                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/20">
                                    <div className="text-center text-white">
                                        <CheckCircle className="w-6 h-6 mx-auto mb-1" />
                                        <p className="text-xs">Fast Delivery</p>
                                    </div>
                                    <div className="text-center text-white">
                                        <CheckCircle className="w-6 h-6 mx-auto mb-1" />
                                        <p className="text-xs">Secure Transit</p>
                                    </div>
                                    <div className="text-center text-white">
                                        <CheckCircle className="w-6 h-6 mx-auto mb-1" />
                                        <p className="text-xs">24/7 Support</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 space-y-6" data-aos="fade-left">
                        <div className="inline-block">
                            <span className="bg-gradient-to-r from-orange-100 to-orange-50 text-orange-600 px-6 py-2 rounded-full text-sm uppercase tracking-wider shadow-lg">
                                Premium Logistics Services
                            </span>
                        </div>

                        <h1 className="text-3xl lg:text-4xl">
                            <span className="block mb-2">Reliable</span>
                            <span className=" bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">
                                Transport &
                            </span>
                            <span className=" bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">
                                Logistics
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
                            Experience world-class shipping solutions with our advanced logistics network.
                            We deliver excellence, speed, and reliability in every shipment.
                        </p>
                        <div className="relative mt-8">
                            <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
                            <img
                                src={truckImg2}
                                alt="Delivery Truck"
                                className="relative rounded-3xl shadow-2xl w-full h-fit transform hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
