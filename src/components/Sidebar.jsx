import React from "react";
import {
  FaHome,
  FaLeaf,
  FaClipboardList,
  FaStore,
  FaBrain,
  FaCoins,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition text-lg font-medium
    ${
      isActive
        ? "bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg shadow-sky-500/30"
        : "text-gray-400 hover:bg-slate-800 hover:text-white"
    }`;

  return (
    <div className="w-72 bg-gradient-to-b from-slate-800 to-slate-900 text-gray-200 min-h-screen flex flex-col shadow-xl">
      {/* Brand (click → Landing Page) */}
      <NavLink
        to="/"
        className="px-6 py-8 text-3xl font-extrabold tracking-wide block"
      >
        <span className="bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent drop-shadow">
          🌊 JalNidhi
        </span>
      </NavLink>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-3">
        <NavLink to="/dashboard" end className={linkClass}>
          <FaHome /> Dashboard
        </NavLink>

        <NavLink to="/dashboard/projects" className={linkClass}>
          <FaLeaf /> Ongoing Projects
        </NavLink>

        <NavLink to="/dashboard/mrv-review" className={linkClass}>
          <FaClipboardList /> MRV Review
        </NavLink>

        <NavLink to="/dashboard/credit-management" className={linkClass}>
          <FaCoins /> Credit Management
        </NavLink>

        <NavLink to="/dashboard/ai-verification" className={linkClass}>
          <FaBrain /> AI Verification
        </NavLink>

        <NavLink to="/dashboard/marketplace" className={linkClass}>
          <FaStore /> Marketplace
        </NavLink>
      </nav>
    </div>
  );
}
