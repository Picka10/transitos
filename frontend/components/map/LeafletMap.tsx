"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function LeafletMap() {
  return (
    <MapContainer
      center={[33.6891, -78.8867]}
      zoom={15}
      style={{
        height: "600px",
        width: "100%",
        borderRadius: "12px",
      }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[33.6891, -78.8867]}>
        <Popup>
          🚂 Demo Train
          <br />
          Myrtle Beach Line
        </Popup>
      </Marker>
    </MapContainer>
  );
}