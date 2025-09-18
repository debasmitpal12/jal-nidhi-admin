// src/components/AuthForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUserShield } from "react-icons/fa";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("user");
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (role === "admin") {
      if (
        formData.email === "admin@jalnidhi.com" &&
        formData.password === "admin123"
      ) {
        localStorage.setItem("role", "admin");
        navigate("/dashboard");
      } else {
        alert("❌ Invalid admin credentials!");
      }
    } else {
      alert(
        "🚫 This portal is for admins only.\n📲 Please download the Rakshak app to continue as a user."
      );
    }
  };

  return (
    <div className="w-full max-w-md bg-slate-900/90 backdrop-blur-xl shadow-2xl rounded-2xl p-8 border border-slate-700">
      <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent mb-2">
        {isLogin ? "Welcome Back 👋" : "Create Account 🚀"}
      </h2>
      <p className="text-center text-gray-400 mb-6 text-sm">
        Admin portal access only
      </p>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* Role Selector */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Login as
          </label>
          <div className="relative">
            <FaUserShield className="absolute left-3 top-3 text-gray-400" />
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-lg bg-slate-800 border border-slate-700 text-gray-200 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-300">Email</label>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="mt-1 w-full rounded-lg bg-slate-800 border border-slate-700 text-gray-200 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Password
          </label>
          <div className="relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="mt-1 w-full rounded-lg bg-slate-800 border border-slate-700 text-gray-200 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-sky-500 to-cyan-400 text-white rounded-lg font-semibold hover:from-sky-600 hover:to-cyan-500 transition shadow-md"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-400">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-sky-400 hover:underline font-medium"
        >
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </p>

      {/* Dev credentials
      <p className="mt-6 text-center text-xs text-gray-500">
        Dev admin creds:{" "}
        <span className="text-sky-400">admin@jalnidhi.com / admin123</span>
      </p> */}
    </div>
  );
}
