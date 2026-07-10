"use client";

import { MapContainer, TileLayer } from "react-leaflet";

import { DEFAULT_MAP } from "@/lib/config";

import RouteLayer from "./RouteLayer";
import VehicleLayer from "./VehicleLayer";
import StopLayer from "./StopLayer";

export default function TransitMap() {
  return (
    <MapContainer
      center={DEFAULT_MAP.center as [number, number]}
      zoom={DEFAULT_MAP.zoom}
      style={{
        height: "100vh",
        width: "100%",
      }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <RouteLayer />
      <StopLayer />
      <VehicleLayer />
    </MapContainer>
  );
}