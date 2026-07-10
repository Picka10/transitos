import { create } from "zustand";
import { Route } from "../types/route";

interface RouteStore {
  routes: Route[];
  selectedRoute: string | null;

  setRoutes: (routes: Route[]) => void;
  selectRoute: (id: string | null) => void;
}

export const useRouteStore = create<RouteStore>((set) => ({
  routes: [],
  selectedRoute: null,

  setRoutes: (routes) => set({ routes }),

  selectRoute: (id) =>
    set({
      selectedRoute: id,
    }),
}));
