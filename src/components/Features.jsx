import React from "react";
import { FaLeaf, FaChartLine, FaShieldAlt, FaCloud } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaLeaf className="text-emerald-400 text-4xl" />,
      title: "Eco-friendly Tracking",
      desc: "Accurately track carbon reduction from mangroves, wetlands, and coral reefs with transparent data.",
    },
    {
      icon: <FaChartLine className="text-sky-400 text-4xl" />,
      title: "Analytics Dashboard",
      desc: "Visualize carbon credits, project growth, and partner contributions with rich charts and insights.",
    },
    {
      icon: <FaShieldAlt className="text-violet-400 text-4xl" />,
      title: "Secure & Verified",
      desc: "Blockchain-backed verification ensures every credit is authentic, traceable, and tamper-proof.",
    },
    {
      icon: <FaCloud className="text-amber-400 text-4xl" />,
      title: "Cloud Integration",
      desc: "Easily connect with cloud platforms to upload project data, images, and supporting documents.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="w-full px-8 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-lg">
            🌟 Powerful Features
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            JalNidhi provides a complete ecosystem for managing carbon projects —
            from submission to verification, credits, and analytics.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-slate-800/70 backdrop-blur-xl rounded-2xl shadow-xl p-6 text-center flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-cyan-500/20"
            >
              <div className="mb-5">{f.icon}</div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="text-sm text-gray-400 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
