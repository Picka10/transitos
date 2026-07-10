"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import { DEFAULT_MAP } from "@/lib/config";
import { Vehicle } from "../../types/vehicle";

import { useVehicles } from "@/hooks/useVehicles";
import { useVehicleStore } from "@/store/vehicleStore";

export default function TransitMap() {

  useVehicles();

  const vehicles = useVehicleStore(
    (state) => state.vehicles
  );
  
  const center = DEFAULT_MAP.center as [number, number];

  return (
    <MapContainer
      center={center}
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
          ] as [number, number]}
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