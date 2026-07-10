import { create } from "zustand";
import { Vehicle } from "@/types/vehicle";

interface VehicleState {
  vehicles: Vehicle[];
  setVehicles: (vehicles: Vehicle[]) => void;
  updateVehicle: (vehicle: Vehicle) => void;
}

export const useVehicleStore = create<VehicleState>((set) => ({
  vehicles: [],

  setVehicles: (vehicles) =>
    set({
      vehicles,
    }),

  updateVehicle: (vehicle) =>
    set((state) => ({
      vehicles: state.vehicles.map((v) =>
        v.id === vehicle.id
          ? vehicle
          : v
      ),
    })),
}));