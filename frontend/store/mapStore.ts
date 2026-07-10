import { create } from "zustand";

interface MapState {
  selectedRouteId: string | null;
  setSelectedRouteId: (routeId: string | null) => void;
}

export const useMapStore = create<MapState>((set) => ({
  selectedRouteId: null,

  setSelectedRouteId: (routeId) =>
    set({
      selectedRouteId: routeId,
    }),
}));
