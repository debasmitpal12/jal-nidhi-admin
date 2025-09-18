// src/components/AIVerification.jsx
import React, { useState, useEffect } from "react";
import {
  FaBrain,
  FaCheckCircle,
  FaExclamationTriangle,
  FaChartPie,
} from "react-icons/fa";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { seedProjects } from "../utils/seedProjects";

const COLORS = {
  High: "#22c55e",
  Medium: "#eab308",
  Low: "#ef4444",
  Unknown: "#64748b",
};

export default function AIVerification() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    seedProjects();
    const saved = JSON.parse(localStorage.getItem("myProjects")) || [];
    setProjects(saved);
  }, []);

  // Categorize AI scores
  const categorize = () => {
    const counts = { High: 0, Medium: 0, Low: 0, Unknown: 0 };
    projects.forEach((p) => {
      const s = p?.aiScore;
      if (typeof s !== "number") counts.Unknown++;
      else if (s >= 90) counts.High++;
      else if (s >= 75) counts.Medium++;
      else counts.Low++;
    });
    return counts;
  };

  const counts = categorize();
  const totalAll = projects.length;

  const pieData = [
    { name: "High", value: counts.High },
    { name: "Medium", value: counts.Medium },
    { name: "Low", value: counts.Low },
    { name: "Unknown", value: counts.Unknown },
  ];

  const lineData = projects.map((p, i) => ({
    name: `P${i + 1}`,
    score: p.aiScore || 0,
  }));

  const getAIScoreLabel = (score) => {
    if (typeof score !== "number")
      return { label: "N/A", color: COLORS.Unknown };
    if (score >= 90) return { label: "High", color: COLORS.High };
    if (score >= 75) return { label: "Medium", color: COLORS.Medium };
    return { label: "Low", color: COLORS.Low };
  };

  return (
    <div className="p-4 md:p-8 lg:p-10 space-y-10">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent mb-4">
        🧠 AI Verification Dashboard
      </h2>
      <p className="text-gray-400 mb-6 md:mb-10 max-w-3xl text-sm md:text-base">
        Confidence distribution, score trends, and AI verification insights
        (image, docs, anomalies, geolocation).
      </p>

      {/* 🌍 Global Map View */}
      {projects.length > 0 && (
        <div className="bg-slate-800/70 backdrop-blur-lg rounded-xl shadow-lg border border-slate-700 p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-semibold text-gray-100 mb-3">
            🌍 Global Project Map
          </h3>
          <div className="h-56 md:h-80 lg:h-96 w-full rounded-lg overflow-hidden">
            <MapContainer
              center={[20.5937, 78.9629]} // Center on India by default
              zoom={4}
              style={{ height: "100%", width: "100%" }}
              whenCreated={(map) => {
                setTimeout(() => map.invalidateSize(), 200);
              }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              {projects.map((proj, idx) =>
                proj.lat && proj.lon ? (
                  <Marker key={idx} position={[proj.lat, proj.lon]}>
                    <Popup>
                      <strong>{proj.name}</strong>
                      <br />
                      {proj.location}
                      <br />
                      AI Score: {proj.aiScore || "N/A"}%
                    </Popup>
                  </Marker>
                ) : null
              )}
            </MapContainer>
          </div>
        </div>
      )}

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {/* Pie */}
        <div className="bg-slate-800/60 backdrop-blur-lg rounded-xl shadow-lg p-4 md:p-6 border border-slate-700">
          <h3 className="text-lg md:text-xl font-semibold text-gray-100 mb-3 flex items-center gap-2">
            <FaChartPie /> Confidence Distribution
          </h3>
          {totalAll === 0 ? (
            <div className="text-gray-400">No projects yet.</div>
          ) : (
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius="80%"
                  innerRadius="45%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    percent > 0 ? `${name} ${(percent * 100).toFixed(0)}%` : ""
                  }
                >
                  {pieData.map((entry) => (
                    <Cell
                      key={entry.name}
                      fill={COLORS[entry.name] || COLORS.Unknown}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* Line */}
        <div className="bg-slate-800/60 backdrop-blur-lg rounded-xl shadow-lg p-4 md:p-6 border border-slate-700">
          <h3 className="text-lg md:text-xl font-semibold text-gray-100 mb-3">
            📈 AI Score Trend
          </h3>
          {projects.length === 0 ? (
            <div className="text-gray-400">No project scores to display.</div>
          ) : (
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis domain={[0, 100]} stroke="#94a3b8" />
                <Tooltip formatter={(v) => `${v}%`} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#38bdf8"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      {/* Project Cards */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-gray-100 mb-4 md:mb-6">
          Project Insights
        </h3>
        {projects.length === 0 ? (
          <div className="bg-slate-800/70 rounded-xl p-6 text-gray-400 border border-slate-700">
            No projects available for AI verification.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj, i) => {
              const ai = getAIScoreLabel(proj.aiScore);
              return (
                <div
                  key={i}
                  className="bg-slate-800/60 backdrop-blur-lg rounded-xl shadow-lg p-4 md:p-6 border border-slate-700"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base md:text-lg font-semibold text-gray-100">
                      {proj.name}
                    </h3>
                    <span
                      style={{ color: ai.color }}
                      className="text-xs md:text-sm font-semibold"
                    >
                      {ai.label}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs md:text-sm mb-1">
                    Location: {proj.location}
                  </p>
                  <p className="text-gray-400 text-xs md:text-sm mb-3">
                    Area: {proj.area} ha
                  </p>

                  <div className="flex items-center gap-2 mb-2">
                    <FaBrain style={{ color: ai.color }} />
                    <span
                      style={{ color: ai.color }}
                      className="text-sm md:text-lg font-semibold"
                    >
                      {proj.aiScore ? `${proj.aiScore}%` : "N/A"}
                    </span>
                  </div>

                  {proj.verification && (
                    <ul className="text-xs md:text-sm text-gray-400 mt-3 space-y-1">
                      <li>📷 Image Check: {proj.verification.imageCheck}</li>
                      <li>📑 Docs Check: {proj.verification.docsCheck}</li>
                      <li>⚠️ Anomaly: {proj.verification.anomalyCheck}</li>
                      <li>📍 Geolocation: {proj.verification.locationCheck}</li>
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
