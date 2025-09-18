import React from "react";
import { FaClipboardCheck, FaLeaf, FaChartLine, FaCheckCircle, FaTimes } from "react-icons/fa";

export default function HowItWorks({ onClose }) {
  const steps = [
    {
      icon: <FaClipboardCheck className="text-sky-400 text-4xl" />,
      title: "1. Submit Your Project",
      desc: "Fill in project details like location, area restored, and upload documents. Our platform makes it simple to get started.",
    },
    {
      icon: <FaLeaf className="text-emerald-400 text-4xl" />,
      title: "2. Verification & Validation",
      desc: "Projects go through a blockchain-backed verification process to ensure transparency and authenticity of carbon credits.",
    },
    {
      icon: <FaChartLine className="text-violet-400 text-4xl" />,
      title: "3. Track & Analyze",
      desc: "Monitor carbon credits generated, project impact, and partner engagement with real-time analytics and dashboards.",
    },
    {
      icon: <FaCheckCircle className="text-amber-400 text-4xl" />,
      title: "4. Earn & Showcase Impact",
      desc: "Approved projects generate verified carbon credits, which can be showcased to stakeholders and sold to partners.",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition"
        aria-label="Close How It Works"
      >
        <FaTimes className="text-sky-400 text-xl" />
      </button>

      <div className="w-full px-8 lg:px-20 text-center">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg mb-4">
          🚀 How JalNidhi Works
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          A simple 4-step journey to bring your blue carbon projects to life —
          from submission to verified carbon credits.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div
              key={i}
              className="bg-slate-800/70 backdrop-blur-xl rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-sky-500/20"
            >
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-gray-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
