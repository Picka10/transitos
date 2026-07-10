"use client";

import { useEffect } from "react";
import { getStops } from "@/services/stopService";
import { useStopStore } from "@/store/stopStore";

export function useStops() {
  const setStops = useStopStore((state) => state.setStops);

  useEffect(() => {
    async function load() {
      const data = await getStops();
      setStops(data);
    }

    load();
  }, [setStops]);
}
