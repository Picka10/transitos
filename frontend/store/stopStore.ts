import { create } from "zustand";
import { Stop } from "@/types/stop";

interface StopState {
  stops: Stop[];
  setStops: (stops: Stop[]) => void;
}

export const useStopStore = create<StopState>((set) => ({
  stops: [],

  setStops: (stops) =>
    set({
      stops,
    }),
}));
