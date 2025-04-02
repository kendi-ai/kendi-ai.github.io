import React from "react";

export default function App() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 font-sans text-gray-900">
            {/* Navbar */}
            <header className="sticky top-0 bg-white z-50 border-b shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <img src="/kendi-ai-logo.svg" alt="kendi.ai logo" className="h-8" />
                        <div className="text-2xl tracking-tight" style={{ fontFamily: "'Changa', sans-serif" }}>
                            kendi.ai
                        </div>
                    </div>

                    <nav className="hidden md:flex space-x-8 text-sm font-medium">
                        <a href="#technology" className="hover:text-gray-700 transition">Technology</a>
                        <a href="#applications" className="hover:text-gray-700 transition">Applications</a>
                        <a href="#team" className="hover:text-gray-700 transition">Team</a>
                        <a href="#contact" className="hover:text-gray-700 transition">Contact</a>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                        Understanding the Road.
                        <br /> Powering Autonomy.
                    </h1>
                    <p className="text-lg text-gray-600 mt-6 max-w-xl">
                        kendi.ai builds intelligent perception systems for autonomous vehicles using cutting-edge AI and sensor fusion — from camera to language.
                    </p>
                    <div className="mt-8 space-x-4">
                        <button className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition">
                            Explore the Tech
                        </button>
                        <button className="px-6 py-3 border border-gray-300 text-gray-800 rounded-full font-medium hover:bg-gray-100 transition">
                            Get in Touch
                        </button>
                    </div>
                </div>
                <div className="hidden md:flex justify-center">
                    <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-gray-800 via-black to-gray-700 blur-2xl opacity-20"></div>
                </div>
            </section>

            {/* What We Do */}
            <section id="technology" className="max-w-7xl mx-auto px-6 py-24">
                <h2 className="text-3xl font-semibold mb-6">What We Do</h2>
                <p className="text-gray-600 max-w-2xl mb-8">
                    We turn raw sensor streams into deep, structured scene understanding. Our models describe everything from lanes and signs to road users, intent, and environmental conditions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Feature text="Object detection: vehicles, pedestrians, VRUs" />
                    <Feature text="Obstacle and surface anomaly detection" />
                    <Feature text="Drivable area, road type, lane estimation" />
                    <Feature text="Traffic light/sign recognition and localization" />
                    <Feature text="Weather and ambient sound scene understanding" />
                    <Feature text="Future trajectory forecasting for dynamic agents" />
                </div>
            </section>

            {/* Technology Highlights */}
            <section className="bg-white py-24" id="applications">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-semibold mb-6">Built for Scalable Autonomy</h2>
                    <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                        <Feature text="Multi-modal sensor fusion: camera, LiDAR, IMU, SD maps" />
                        <Feature text="Vision-language models for rich, explainable perception" />
                        <Feature text="Real-time deployment on NVIDIA Thor automotive-grade ECUs" />
                        <Feature text="Modular API for downstream planning and ADAS integration" />
                        <Feature text="Scene graphs, behavioral intent modeling, and prediction" />
                        <Feature text="Semantic logs and natural-language driving summaries" />
                    </div>
                </div>
            </section>

            {/* Applications */}
            <section className="bg-gray-50 py-24" id="team">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-semibold mb-6">Where It Works</h2>
                    <div className="grid sm:grid-cols-2 gap-6 text-gray-700">
                        <Feature text="Autonomous delivery fleets" />
                        <Feature text="ADAS for passenger vehicles and commercial trucks" />
                        <Feature text="Autonomous shuttles and last-mile transport" />
                        <Feature text="Robots, drones, and infrastructure perception" />
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-semibold mb-6">Who We Are</h2>
                <p className="text-gray-600 max-w-2xl">
                    We’re a small, focused team of engineers and researchers building the foundation of safe autonomy. We believe deep semantic understanding — not just more sensors — is the key to unlocking trust, explainability, and generalization in autonomous driving.
                </p>
                <div className="mt-8 space-x-4">
                    <button className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition">
                        Join the Team
                    </button>
                    <button className="px-6 py-3 border border-gray-300 text-gray-800 rounded-full font-medium hover:bg-gray-100 transition">
                        Partner With Us
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center text-sm text-gray-500 py-12 border-t" id="contact">
                <p>
                    Get in touch: <a href="mailto:hello@kendi.ai" className="text-gray-700 underline">hello@kendi.ai</a>
                </p>
                <p className="mt-2">&copy; {new Date().getFullYear()} kendi.ai — All rights reserved</p>
            </footer>
        </main>
    );
}

function Feature({ text }) {
    return (
        <div className="p-5 bg-white rounded-xl shadow hover:shadow-md transition border border-gray-200">
            <p className="text-sm font-medium text-gray-800">{text}</p>
        </div>
    );
}
