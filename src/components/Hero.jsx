import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative py-32 md:py-40 text-center text-white bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_70%)]"></div>

      {/* Content */}
      <div className="relative z-10 px-6 lg:px-20">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Empowering{" "}
          <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
            Blue Carbon Projects 🌊
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-400 drop-shadow"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Track, manage, and verify your carbon offset initiatives with full
          transparency, trust, and cutting-edge AI verification.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <button
            onClick={() => (window.location.href = "/auth?mode=signup")}
            className="px-8 py-3 bg-gradient-to-r from-sky-500 to-cyan-400 text-white rounded-full font-semibold shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition"
          >
            🚀 Get Started
          </button>
          <a
            href="#features"
            className="px-8 py-3 rounded-full border border-sky-400 text-sky-400 font-semibold hover:bg-sky-500/10 hover:scale-105 transition"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
}
