import React, { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import HowItWorks from "./HowItWorks";
import Footer from "./Footer";

export default function LandingPage() {
  const [showHowItWorks, setShowHowItWorks] = useState(false);

  const handleToggleHowItWorks = (e) => {
    e.preventDefault();
    setShowHowItWorks((prev) => {
      const next = !prev;
      if (next) {
        // Delay so the section mounts first
        setTimeout(() => {
          document
            .getElementById("how-it-works-section")
            ?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      return next;
    });
  };

  return (
    <div className="font-sans text-gray-200 bg-slate-950">
      <Header onHowItWorksClick={handleToggleHowItWorks} />

      <div>
        <Hero />
        <Features />

        {showHowItWorks && (
          <div id="how-it-works-section" className="animate-fadeIn">
            <HowItWorks onClose={() => setShowHowItWorks(false)} />
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
}
