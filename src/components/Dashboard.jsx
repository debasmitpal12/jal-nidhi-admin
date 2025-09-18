import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "admin") {
      navigate("/"); // 🚫 redirect non-admins to homepage
    }
  }, [navigate]);

  const role = localStorage.getItem("role");
  if (role !== "admin") return null; // 🔒 prevent flash of UI

  return (
    <div className="flex min-h-screen bg-slate-900 text-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-6">
          {/* Nested routes render here */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}
