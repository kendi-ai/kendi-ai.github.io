import React from "react";

function App() {
    return (
        <main className="min-h-screen bg-white text-gray-900 p-6 space-y-20">
            {/* Hero Section */}
            <section className="text-center space-y-6 pt-10">
                <h1 className="text-5xl font-bold">
                    Intelligent Autonomy Starts With Understanding
                </h1>
                <p className="text-xl max-w-2xl mx-auto">
                    Kendi.ai is building the next-generation scene understanding engine for
                    autonomous vehicles—powered by multi-sensor fusion, deep learning, and
                    vision-language models.
                </p>
                <div className="space-x-4">
                    <button className="rounded-2xl shadow py-2 px-4 font-semibold border border-transparent bg-gray-900 text-white hover:bg-gray-700">
                        Learn More
                    </button>
                    <button className="rounded-2xl shadow py-2 px-4 font-semibold border bg-white text-gray-900 hover:bg-gray-50">
                        Contact Us
                    </button>
                </div>
            </section>

            {/* What We Do */}
            <section className="max-w-5xl mx-auto space-y-4">
                <h2 className="text-3xl font-semibold">
                    Driving Autonomy with World-Class Scene Understanding
                </h2>
                <p>
                    We use sensor data—cameras, LiDAR, IMUs, and SD maps with navigation info—to
                    generate a comprehensive, real-time description of the driving scene.
                </p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Other road users (vehicles, pedestrians, cyclists)</li>
                    <li>Obstacles, potholes, speedbumps</li>
                    <li>Lanes, drivable areas, road types</li>
                    <li>Traffic lights, signs, road signals</li>
                    <li>Weather and sound understanding</li>
                    <li>Future trajectory prediction for all agents</li>
                </ul>
            </section>

            {/* Why It Matters */}
            <section className="bg-gray-100 p-10 rounded-2xl max-w-5xl mx-auto">
                <h2 className="text-3xl font-semibold mb-4">
                    Autonomy Begins With Perception
                </h2>
                <p>
                    We focus on the most critical component of autonomy—scene understanding.
                    With limited resources, full-stack autonomy is inefficient. Our system
                    leverages widely available SD maps and real-time sensor data to enable
                    scalable deployment.
                </p>
            </section>

            {/* Technology */}
            <section className="max-w-5xl mx-auto space-y-4">
                <h2 className="text-3xl font-semibold">Our Technology</h2>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Multi-sensor fusion: camera, LiDAR, IMU, SD maps</li>
                    <li>End-to-end deep learning on NVIDIA Thor ECU</li>
                    <li>Joint perception &amp; prediction of agent behaviors</li>
                    <li>Vision-language models for rich scene descriptions</li>
                    <li>Scene graphs, semantic tagging, anomaly detection</li>
                    <li>Natural language explainability for logs &amp; compliance</li>
                </ul>
            </section>

            {/* Use Cases */}
            <section className="bg-gray-100 p-10 rounded-2xl max-w-5xl mx-auto space-y-4">
                <h2 className="text-3xl font-semibold">Applications</h2>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Autonomous delivery fleets</li>
                    <li>ADAS for urban and highway driving</li>
                    <li>Autonomous shuttles and last-mile mobility</li>
                    <li>Robotics, drones, and smart city infrastructure</li>
                </ul>
            </section>

            {/* Team Section */}
            <section className="max-w-5xl mx-auto space-y-4">
                <h2 className="text-3xl font-semibold">Who We Are</h2>
                <p>
                    We&apos;re a small, driven team of engineers and researchers focused on
                    enabling safe autonomy through smarter perception. We believe deep
                    understanding, not more sensors or compute, is the key to reliable
                    autonomy.
                </p>
                <div className="space-x-4">
                    <button className="rounded-2xl shadow py-2 px-4 font-semibold border border-transparent bg-gray-900 text-white hover:bg-gray-700">
                        Join Us
                    </button>
                    <button className="rounded-2xl shadow py-2 px-4 font-semibold border bg-white text-gray-900 hover:bg-gray-50">
                        Partner With Us
                    </button>
                </div>
            </section>

            {/* Contact */}
            <section className="text-center space-y-2 pt-10">
                <h2 className="text-2xl font-semibold">Let’s Connect</h2>
                <p>
                    Reach out at{" "}
                    <a href="mailto:hello@kendi.ai" className="text-blue-600 underline">
                        hello@kendi.ai
                    </a>
                </p>
                <div className="space-x-4">
                    <a href="#" className="text-blue-600 underline">
                        LinkedIn
                    </a>
                    <a href="#" className="text-blue-600 underline">
                        GitHub
                    </a>
                </div>
            </section>
        </main>
    );
}

export default App;
