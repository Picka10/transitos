import { Vehicle } from "../types/vehicle";

export async function getVehicles(): Promise<Vehicle[]> {
  return [
    {
      id: "TRAIN-001",
      route: "Downtown Loop",
      lat: 35.5951,
      lng: -82.5515,
      speed: 22,
      status: "active",
      lastUpdated: new Date().toISOString(),
    },
  ];
}