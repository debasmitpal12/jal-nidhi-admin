import React, { useState, useEffect } from "react";
import {
  FaLeaf,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaBrain,
  FaProjectDiagram,
} from "react-icons/fa";

export default function OngoingProjects() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");

  // Load saved projects (simulating persistence from localStorage)
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("myProjects")) || [];
    setProjects(saved);
  }, []);

  // Stats for summary cards
  const total = projects.length;
  const approved = projects.filter((p) => p.status === "Approved").length;
  const pending = projects.filter((p) => p.status === "Pending").length;
  const rejected = projects.filter((p) => p.status === "Rejected").length;

  // Filter projects based on selected tab
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.status === filter);

  return (
    <div className="p-6 md:p-10 space-y-10">
      {/* Heading */}
      <div>
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent mb-2">
          📂 Ongoing Projects
        </h2>
        <p className="text-gray-400">
          Monitor all submitted projects under review with AI scores,
          verification status, and deed tracking.
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "Total Projects",
            value: total,
            color: "from-sky-400 to-sky-600",
            icon: <FaProjectDiagram />,
          },
          {
            title: "Approved",
            value: approved,
            color: "from-green-400 to-green-600",
            icon: <FaCheckCircle />,
          },
          {
            title: "Pending",
            value: pending,
            color: "from-yellow-400 to-yellow-600",
            icon: <FaClock />,
          },
          {
            title: "Rejected",
            value: rejected,
            color: "from-red-400 to-red-600",
            icon: <FaTimesCircle />,
          },
        ].map((stat, i) => (
          <div
            key={i}
            className={`bg-gradient-to-r ${stat.color} text-white rounded-2xl shadow-lg p-6 flex items-center justify-between hover:scale-105 transition-transform`}
          >
            <div className="text-4xl">{stat.icon}</div>
            <div className="text-right">
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm font-medium">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex gap-4 flex-wrap">
        {["All", "Approved", "Pending", "Rejected"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition 
              ${
                filter === status
                  ? "bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg"
                  : "bg-slate-800 text-gray-300 hover:bg-slate-700"
              }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Table */}
      {filteredProjects.length === 0 ? (
        <div className="bg-slate-800/70 backdrop-blur-lg rounded-xl shadow-md p-8 text-center text-gray-400 border border-slate-700">
          No {filter === "All" ? "" : filter} projects found.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-slate-800/60 backdrop-blur-xl rounded-xl shadow-xl overflow-hidden border border-slate-700">
            <thead className="bg-gradient-to-r from-sky-600 to-cyan-700 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Project</th>
                <th className="py-3 px-4 text-left">Location</th>
                <th className="py-3 px-4 text-left">Deed ID</th>
                <th className="py-3 px-4 text-left">AI Score</th>
                <th className="py-3 px-4 text-left">Area</th>
                <th className="py-3 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map((proj, i) => (
                <tr
                  key={i}
                  className="border-t border-slate-700 hover:bg-slate-700/40 transition"
                >
                  <td className="py-3 px-4 font-medium text-gray-100">{proj.name}</td>
                  <td className="py-3 px-4 text-gray-300">{proj.location}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 rounded-md bg-sky-900/40 text-sky-400 font-mono text-xs border border-sky-500/30">
                      {proj.deedId || "N/A"}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="flex items-center gap-2 px-2 py-1 rounded-md bg-purple-900/30 text-purple-300 border border-purple-500/30 w-fit">
                      <FaBrain /> {proj.aiScore ? `${proj.aiScore}%` : "N/A"}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-300">{proj.area} ha</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 w-fit
                      ${
                        proj.status === "Approved"
                          ? "bg-green-900/40 text-green-300 border border-green-500/30"
                          : proj.status === "Rejected"
                          ? "bg-red-900/40 text-red-300 border border-red-500/30"
                          : "bg-yellow-900/40 text-yellow-300 border border-yellow-500/30"
                      }`}
                    >
                      {proj.status === "Approved" && <FaCheckCircle />}
                      {proj.status === "Rejected" && <FaTimesCircle />}
                      {proj.status === "Pending" && <FaClock />}
                      {proj.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
