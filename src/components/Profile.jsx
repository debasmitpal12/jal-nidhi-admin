import React, { useEffect, useState } from "react";
import { FaUserCircle, FaEnvelope, FaCrown } from "react-icons/fa";

export default function Profile() {
  const [admin, setAdmin] = useState({ email: "", role: "Admin" });

  useEffect(() => {
    // Load from localStorage or use defaults
    const storedEmail = localStorage.getItem("adminEmail") || "admin@jalnidhi.com";
    setAdmin({ email: storedEmail, role: "Admin" });
  }, []);

  return (
    <div className="p-6 md:p-10">
      <h2 className="text-3xl font-extrabold bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent mb-8">
        👤 My Profile
      </h2>

      <div className="bg-slate-800/70 backdrop-blur-lg rounded-2xl shadow-lg p-8 border border-slate-700 max-w-2xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Avatar */}
          <FaUserCircle className="text-8xl text-sky-400" />

          {/* Info */}
          <div className="space-y-4 w-full">
            <div>
              <h3 className="text-xl font-semibold text-gray-100">Admin Account</h3>
              <p className="text-gray-400 text-sm">Manage your details securely</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-slate-900/60 p-3 rounded-lg">
                <FaEnvelope className="text-sky-400 text-lg" />
                <span className="text-gray-200">{admin.email}</span>
              </div>

              <div className="flex items-center gap-3 bg-slate-900/60 p-3 rounded-lg">
                <FaCrown className="text-yellow-400 text-lg" />
                <span className="text-gray-200">{admin.role}</span>
              </div>
            </div>

            <button
              className="mt-4 w-full py-3 bg-gradient-to-r from-sky-500 to-purple-500 
                         text-white rounded-lg font-semibold hover:opacity-90 transition"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
