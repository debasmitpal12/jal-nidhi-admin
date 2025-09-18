import React, { useState, useEffect } from "react";
import {
  FaEye,
  FaCheckCircle,
  FaTimesCircle,
  FaBrain,
  FaUserShield,
} from "react-icons/fa";

export default function MRVReview() {
  const [projects, setProjects] = useState([]);
  const adminName = "Admin_01"; // ✅ later make dynamic if you add login

  // Load projects from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("myProjects")) || [];
    setProjects(saved);
  }, []);

  // Save changes back to localStorage + state
  const updateProjects = (updated) => {
    setProjects(updated);
    localStorage.setItem("myProjects", JSON.stringify(updated));
  };

  // AI Verification Level
  const getAIScoreLabel = (score) => {
    if (!score) return { label: "N/A", color: "text-gray-400" };
    if (score >= 90) return { label: "High", color: "text-green-400" };
    if (score >= 75) return { label: "Medium", color: "text-yellow-400" };
    return { label: "Low", color: "text-red-400" };
  };

  // Handle approve/reject
  const handleStatusChange = (id, status) => {
    const updated = projects.map((proj, i) =>
      i === id
        ? {
            ...proj,
            status,
            reviewedBy: adminName,
            reviewedAt: new Date().toLocaleString(),
          }
        : proj
    );
    updateProjects(updated);
  };

  return (
    <div className="p-6 md:p-10">
      <h2 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
        📊 MRV Review Panel
      </h2>
      <p className="text-gray-400 mb-10 max-w-3xl">
        Review submitted projects, verify AI confidence, and approve or reject
        them for carbon credit validation.
      </p>

      {projects.length === 0 ? (
        <div className="bg-slate-800/70 backdrop-blur-lg rounded-xl shadow-md p-8 text-center text-gray-400 border border-slate-700">
          No projects submitted yet.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-slate-800/60 backdrop-blur-lg rounded-xl shadow-xl overflow-hidden border border-slate-700">
            <thead className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Project</th>
                <th className="py-3 px-4 text-left">Deed ID</th>
                <th className="py-3 px-4 text-left">AI Verification</th>
                <th className="py-3 px-4">Area</th>
                <th className="py-3 px-4">Documents</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Reviewed By</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((proj, i) => {
                const ai = getAIScoreLabel(proj.aiScore);
                return (
                  <tr
                    key={i}
                    className="border-t border-slate-700 hover:bg-slate-700/40 transition"
                  >
                    <td className="py-3 px-4 font-medium text-gray-100">
                      {proj.name}
                    </td>
                    <td className="py-3 px-4 font-mono text-sky-400">
                      {proj.deedId || "N/A"}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`flex items-center gap-2 px-2 py-1 rounded-md bg-slate-900/50 border border-slate-600 ${ai.color}`}
                      >
                        <FaBrain /> {proj.aiScore ? `${proj.aiScore}%` : "N/A"} (
                        {ai.label})
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-300">{proj.area} ha</td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2 flex-wrap">
                        {proj.documents && proj.documents.length > 0 ? (
                          proj.documents.map((doc, idx) => (
                            <button
                              key={idx}
                              className="flex items-center gap-1 text-sky-400 hover:text-sky-300 text-sm font-medium underline"
                            >
                              <FaEye /> {doc}
                            </button>
                          ))
                        ) : (
                          <span className="text-gray-400 text-sm">
                            No documents
                          </span>
                        )}
                      </div>
                    </td>
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
                        {proj.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-400 text-sm">
                      {proj.reviewedBy ? (
                        <div className="flex flex-col">
                          <span className="flex items-center gap-1">
                            <FaUserShield className="text-sky-400" />{" "}
                            {proj.reviewedBy}
                          </span>
                          <span className="text-xs text-gray-500">
                            {proj.reviewedAt}
                          </span>
                        </div>
                      ) : (
                        "Not Reviewed"
                      )}
                    </td>
                    <td className="py-3 px-4 flex gap-3">
                      <button
                        onClick={() => handleStatusChange(i, "Approved")}
                        className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-semibold flex items-center gap-1"
                      >
                        <FaCheckCircle /> Approve
                      </button>
                      <button
                        onClick={() => handleStatusChange(i, "Rejected")}
                        className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-semibold flex items-center gap-1"
                      >
                        <FaTimesCircle /> Reject
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
