"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  return (
    <MapContainer
      center={[35.5951, -82.5515]}
      zoom={15}
      style={{ height: "600px", width: "100%", borderRadius: "12px" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[35.5951, -82.5515]}>
        <Popup>
          🚂 Train 1
        </Popup>
      </Marker>
    </MapContainer>
  );
}