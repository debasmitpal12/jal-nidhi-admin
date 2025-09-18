import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header({ onHowItWorksClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-lg border-b border-slate-800 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-8 lg:px-20 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent tracking-wide"
        >
          🌊 JalNidhi
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 text-lg font-medium text-gray-300">
          <a
            href="#features"
            className="hover:text-sky-400 hover:underline transition"
          >
            Features
          </a>

          <button
            onClick={onHowItWorksClick}
            className="hover:text-sky-400 hover:underline transition cursor-pointer"
          >
            How it Works
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 text-gray-300 px-6 py-4 space-y-4 shadow-lg">
          <a href="#features" className="block hover:text-sky-400">
            Features
          </a>
          <button
            onClick={() => {
              onHowItWorksClick();
              setMenuOpen(false);
            }}
            className="block hover:text-sky-400"
          >
            How it Works
          </button>
        </div>
      )}
    </nav>
  );
}
