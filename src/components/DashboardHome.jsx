import React from "react";
import {
  FaLeaf,
  FaCloud,
  FaUsers,
  FaFolder,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaCertificate,
  FaBrain,
} from "react-icons/fa";

export default function DashboardHome() {
  const stats = [
    {
      title: "Active Projects",
      value: "12",
      color: "from-green-400 to-green-600",
      icon: <FaLeaf />,
    },
    {
      title: "Carbon Credits",
      value: "45,230",
      color: "from-sky-400 to-sky-600",
      icon: <FaCloud />,
    },
    {
      title: "Biodiversity Credits",
      value: "12,480",
      color: "from-purple-400 to-purple-600",
      icon: <FaCertificate />,
    },
    {
      title: "Pending Reviews",
      value: "3",
      color: "from-orange-400 to-orange-600",
      icon: <FaFolder />,
    },
  ];

  const recentProjects = [
    {
      name: "Mangrove Restoration – Sundarbans",
      status: "Approved",
      credits: "12K",
      deedId: "DEED-A92F4C",
      aiScore: 94,
    },
    {
      name: "Coral Reef Revival – Andamans",
      status: "Pending",
      credits: "8.4K",
      deedId: "DEED-8BC21X",
      aiScore: 87,
    },
    {
      name: "Wetland Conservation – Assam",
      status: "Rejected",
      credits: "–",
      deedId: "DEED-7XQ3B1",
      aiScore: 72,
    },
  ];

  const activities = [
    {
      text: "New project submitted: Coral Reef Revival",
      time: "2h ago",
      type: "pending",
    },
    {
      text: "Mangrove Restoration approved 🎉",
      time: "1d ago",
      type: "approved",
    },
    {
      text: "User John Doe joined as partner",
      time: "3d ago",
      type: "info",
    },
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`bg-gradient-to-r ${s.color} text-white rounded-2xl shadow-xl p-6 flex flex-col gap-4 hover:scale-105 transition-transform`}
          >
            <div className="flex items-center justify-between">
              <div className="text-4xl">{s.icon}</div>
              <div className="text-3xl font-bold">{s.value}</div>
            </div>
            <h3 className="text-lg font-medium">{s.title}</h3>
          </div>
        ))}
      </div>

      {/* Recent Projects */}
      <div className="bg-slate-800/70 backdrop-blur-lg shadow-xl rounded-2xl overflow-hidden border border-slate-700">
        <div className="bg-gradient-to-r from-sky-600 to-sky-800 text-white px-6 py-3 text-lg font-semibold">
          Recent Projects
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-300 bg-slate-800/90">
              <th className="px-6 py-3">Project</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Deed ID</th>
              <th className="px-6 py-3">AI Score</th>
              <th className="px-6 py-3">Credits</th>
            </tr>
          </thead>
          <tbody>
            {recentProjects.map((p, i) => (
              <tr
                key={i}
                className="border-t border-slate-700 hover:bg-slate-800/60 transition"
              >
                <td className="px-6 py-4 font-medium text-gray-100">{p.name}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 w-fit
                      ${
                        p.status === "Approved"
                          ? "bg-green-900/40 text-green-300 border border-green-500/30"
                          : p.status === "Pending"
                          ? "bg-yellow-900/40 text-yellow-300 border border-yellow-500/30"
                          : "bg-red-900/40 text-red-300 border border-red-500/30"
                      }`}
                  >
                    {p.status === "Approved" && <FaCheckCircle />}
                    {p.status === "Pending" && <FaClock />}
                    {p.status === "Rejected" && <FaTimesCircle />}
                    {p.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sky-400 font-mono">{p.deedId}</td>
                <td className="px-6 py-4 flex items-center gap-2">
                  <FaBrain className="text-purple-400" />
                  <span className="text-gray-200 font-semibold">{p.aiScore}%</span>
                </td>
                <td className="px-6 py-4 text-gray-200">{p.credits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Activity Feed */}
      <div className="bg-slate-800/70 backdrop-blur-lg shadow-xl rounded-2xl overflow-hidden border border-slate-700">
        <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-6 py-3 text-lg font-semibold">
          Recent Activity
        </div>
        <ul className="divide-y divide-slate-700">
          {activities.map((a, i) => (
            <li
              key={i}
              className="flex items-center gap-4 px-6 py-4 hover:bg-slate-800/60 transition"
            >
              {/* Timeline dot */}
              <span
                className={`w-3 h-3 rounded-full shadow-lg
                  ${
                    a.type === "approved"
                      ? "bg-green-400 shadow-green-500/40"
                      : a.type === "pending"
                      ? "bg-yellow-400 shadow-yellow-500/40"
                      : "bg-sky-400 shadow-sky-500/40"
                  }`}
              ></span>
              {/* Text + Time */}
              <div className="flex-1">
                <p className="text-gray-200">{a.text}</p>
                <p className="text-sm text-gray-400">{a.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
