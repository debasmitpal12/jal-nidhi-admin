import React from "react";
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400 mt-12">
      <div className="w-full px-12 lg:px-20 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-3xl font-extrabold bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent drop-shadow">
            JalNidhi
          </h3>
          <p className="mt-4 text-sm text-gray-400 max-w-[260px]">
            Accurate carbon tracking for coastal ecosystems with clear provenance and trust.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#features" className="hover:text-sky-400">Features</a></li>
            <li><a href="#how-it-works" className="hover:text-sky-400">How It Works</a></li>
            <li><a href="#" className="hover:text-sky-400">Contact</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
          <div className="flex gap-5 text-xl">
            <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
            <a href="#" className="hover:text-sky-400"><FaGithub /></a>
            <a href="#" className="hover:text-sky-400"><FaLinkedin /></a>
            <a href="#" className="hover:text-sky-400"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800 text-sm text-gray-500 text-center py-6">
        © {new Date().getFullYear()} JalNidhi — All rights reserved.
      </div>
    </footer>
  );
}
