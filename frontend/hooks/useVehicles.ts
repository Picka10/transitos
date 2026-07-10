"use client";

import { useEffect } from "react";
import { getVehicles } from "@/services/vehicleService";
import { useVehicleStore } from "@/store/vehicleStore";

export function useVehicles() {
  const setVehicles = useVehicleStore(
    (state) => state.setVehicles
  );

  useEffect(() => {
    async function load() {
      const data = await getVehicles();
      setVehicles(data);
    }

    load();
  }, [setVehicles]);
}