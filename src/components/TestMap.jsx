// src/components/TestMap.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function TestMap() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-4">
        🗺️ Test Map (Goa)
      </h2>

      {/* Container with fixed height */}
      <div className="h-80 w-full rounded-lg overflow-hidden border border-slate-700">
        <MapContainer
          center={[15.4909, 73.8278]} // Goa coordinates
          zoom={10}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
          />
          <Marker position={[15.4909, 73.8278]}>
            <Popup>🌱 Mangrove Restoration – Goa</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
