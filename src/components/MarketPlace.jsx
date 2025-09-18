import React, { useState } from "react";
import { FaLeaf, FaShoppingCart, FaTag, FaSeedling } from "react-icons/fa";

export default function Marketplace() {
  const [credits] = useState([
    {
      id: 1,
      project: "Mangrove Restoration – Goa",
      price: 12.5,
      available: 500,
      type: "Blue Carbon",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80", // ocean/mangrove
    },
    {
      id: 2,
      project: "Wetland Revival – Sundarbans",
      price: 15.0,
      available: 320,
      type: "Wetland Carbon",
      image:
        "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=1000&q=80", // wetland greenery
    },
    {
      id: 3,
      project: "Coral Reef Recovery – Andaman",
      price: 18.0,
      available: 200,
      type: "Marine Carbon",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80", // underwater coral reef
    },
  ]);

  const handleBuy = (id) => {
    alert(`✅ You initiated purchase for credits from project ID: ${id}`);
  };

  return (
    <div className="p-6 md:p-10">
      {/* Header */}
      <h2 className="text-3xl font-extrabold bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent mb-6">
        🌍 Carbon Credit Marketplace
      </h2>
      <p className="text-gray-400 mb-10 max-w-3xl">
        Browse verified <span className="font-semibold">blue carbon</span> and{" "}
        <span className="font-semibold">biodiversity credits</span> from ongoing projects. 
        Support sustainability by offsetting your carbon footprint.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {credits.map((credit) => (
          <div
            key={credit.id}
            className="relative group rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition transform hover:scale-105"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${credit.image})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-slate-900/90"></div>

            {/* Content */}
            <div className="relative p-6 z-10 text-gray-100 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <FaLeaf className="text-green-400 text-2xl" />
                  <h3 className="text-xl font-bold">{credit.project}</h3>
                </div>
                <p className="text-sm text-gray-300 mb-4">{credit.type}</p>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-semibold text-sky-300 flex items-center gap-2">
                    <FaTag /> ${credit.price.toFixed(2)} / credit
                  </span>
                  <span className="text-sm text-gray-300">
                    {credit.available} available
                  </span>
                </div>
              </div>

              {/* Buy button */}
              <button
                onClick={() => handleBuy(credit.id)}
                className="mt-4 w-full px-5 py-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-green-500 text-white font-semibold hover:from-sky-600 hover:to-green-600 transition"
              >
                <FaShoppingCart /> Buy Credits
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bonus Section */}
      <div className="mt-16 bg-slate-800/70 rounded-2xl p-8 shadow-lg border border-slate-700 text-center">
        <h3 className="text-2xl font-bold text-gray-100 flex items-center justify-center gap-2 mb-4">
          <FaSeedling className="text-green-400" /> Why Buy Credits?
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto">
          By purchasing credits, you are directly funding{" "}
          <span className="text-green-400 font-semibold">ecosystem restoration</span>,{" "}
          <span className="text-sky-400 font-semibold">biodiversity protection</span>, 
          and <span className="text-purple-400 font-semibold">climate resilience</span>. 
          Each purchase leaves a lasting impact 🌱.
        </p>
      </div>
    </div>
  );
}
