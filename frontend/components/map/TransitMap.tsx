"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import { DEFAULT_MAP } from "@/lib/config";
import { Vehicle } from "@/types/vehicle";

const vehicles: Vehicle[] = [
  {
    id: "TRAIN-001",
    route: "Downtown Loop",
    lat: 35.5951,
    lng: -82.5515,
    speed: 22,
    status: "active",
    lastUpdated: "Just now",
  },
];

export default function TransitMap() {
  return (
    <MapContainer
      center={DEFAULT_MAP.center}
      zoom={DEFAULT_MAP.zoom}
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

      {vehicles.map((vehicle) => (
        <Marker
          key={vehicle.id}
          position={[
            vehicle.lat,
            vehicle.lng,
          ]}
        >
          <Popup>
            <strong>{vehicle.id}</strong>
            <br />
            Route: {vehicle.route}
            <br />
            Speed: {vehicle.speed} mph
            <br />
            Status: {vehicle.status}
            <br />
            Updated: {vehicle.lastUpdated}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}