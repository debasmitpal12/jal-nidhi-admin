import React, { useState } from "react";
import { FaBell, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("role"); // clear admin session
    navigate("/"); // redirect to homepage
  };

  return (
    <div className="w-full bg-slate-800/80 backdrop-blur-lg border-b border-slate-700 
                    px-8 py-5 flex justify-between items-center sticky top-0 z-40">
      {/* Dashboard title */}
      <h1
        className="text-2xl font-bold text-white cursor-pointer hover:text-sky-400 transition"
        onClick={() => navigate("/dashboard")}
      >
        Dashboard
      </h1>

      <div className="flex items-center gap-6 relative">
        {/* Notifications */}
        <div className="relative">
          <FaBell className="text-gray-300 text-xl cursor-pointer hover:text-sky-400 transition" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
            3
          </span>
        </div>

        {/* Profile dropdown trigger */}
        <img
          src="https://i.pravatar.cc/40"
          alt="user"
          className="w-10 h-10 rounded-full border-2 border-sky-500 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        />

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute right-0 top-14 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-lg">
            <button
              onClick={() => {
                setMenuOpen(false);
                navigate("/dashboard/profile"); // ✅ navigate to profile
              }}
              className="w-full text-left px-4 py-2 text-gray-200 hover:bg-slate-700 flex items-center gap-2"
            >
              <FaUser /> Profile
            </button>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-red-400 hover:bg-red-600 hover:text-white flex items-center gap-2"
            >
              <FaSignOutAlt /> Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
