import React, { useState } from "react";
import {
  FaLeaf,
  FaMapMarkerAlt,
  FaCloudUploadAlt,
  FaFileAlt,
  FaGlobe,
} from "react-icons/fa";

// Helper: generate random deed ID
const generateDeedId = () => {
  return "DEED-" + Math.random().toString(36).substr(2, 6).toUpperCase();
};

// Helper: random AI verification score (70–99%)
const generateAiScore = () => {
  return Math.floor(Math.random() * 30) + 70;
};

export default function ProjectSubmission() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    area: "",
    species: "",
    description: "",
  });
  const [fileName, setFileName] = useState("");
  const [coords, setCoords] = useState({ lat: "", lng: "" });

  // Handle form inputs
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Handle file uploads (store only name for now)
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  // Get user location
  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setCoords({
          lat: pos.coords.latitude.toFixed(5),
          lng: pos.coords.longitude.toFixed(5),
        });
      });
    } else {
      alert("❌ Geolocation not supported in this browser");
    }
  };

  // Submit project
  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      ...formData,
      file: fileName || "No file uploaded",
      date: new Date().toLocaleDateString(),
      status: "Pending",
      deedId: generateDeedId(),
      aiScore: generateAiScore(),
      locationCoords: coords,
    };

    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem("myProjects")) || [];
    existing.push(newProject);
    localStorage.setItem("myProjects", JSON.stringify(existing));

    alert(`✅ Project submitted successfully!\nDeed ID: ${newProject.deedId}`);

    // Reset form
    setFormData({ name: "", location: "", area: "", species: "", description: "" });
    setFileName("");
    setCoords({ lat: "", lng: "" });
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-4xl bg-slate-800/70 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-600 to-cyan-700 text-white px-8 py-6">
          <h2 className="text-2xl font-bold">🌱 Submit a New Project</h2>
          <p className="text-sm text-sky-100 mt-1">
            Fill in the details below to onboard your carbon project.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Project Name */}
          <div className="col-span-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
              <FaLeaf className="text-sky-400" /> Project Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Mangrove Restoration – Sundarbans"
              required
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 text-white"
            />
          </div>

          {/* Location */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
              <FaMapMarkerAlt className="text-sky-400" /> Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="West Bengal, India"
              required
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 text-white"
            />
          </div>

          {/* Area */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
              <FaLeaf className="text-sky-400" /> Area Restored (ha)
            </label>
            <input
              type="number"
              name="area"
              value={formData.area}
              onChange={handleChange}
              placeholder="24"
              required
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 text-white"
            />
          </div>

          {/* Species */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
              <FaLeaf className="text-green-400" /> Species Planted
            </label>
            <input
              type="text"
              name="species"
              value={formData.species}
              onChange={handleChange}
              placeholder="Mangroves, Coral, Wetland grass..."
              required
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
            />
          </div>

          {/* Location Tracker */}
          <div className="col-span-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
              <FaGlobe className="text-sky-400" /> Exact Coordinates
            </label>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={handleGetLocation}
                className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
              >
                Get Current Location
              </button>
              {coords.lat && coords.lng && (
                <span className="text-sm text-sky-300">
                  📍 {coords.lat}, {coords.lng}
                </span>
              )}
            </div>
          </div>

          {/* File Upload */}
          <div className="col-span-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
              <FaFileAlt className="text-sky-400" /> Project Documents
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-lg cursor-pointer bg-slate-900 hover:bg-slate-800 border-slate-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <FaCloudUploadAlt className="text-4xl text-sky-500 mb-2" />
                  <p className="text-sm text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag & drop
                  </p>
                  <p className="text-xs text-gray-500">PDF, DOCX, max 10MB</p>
                  {fileName && <p className="mt-2 text-sm text-sky-400">📂 {fileName}</p>}
                </div>
                <input type="file" onChange={handleFileChange} className="hidden" />
              </label>
            </div>
          </div>

          {/* Description */}
          <div className="col-span-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
              <FaFileAlt className="text-sky-400" /> Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="5"
              placeholder="Provide a detailed description of the project..."
              required
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 text-white"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="col-span-2 flex justify-end">
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-sky-500 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              🚀 Submit Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
