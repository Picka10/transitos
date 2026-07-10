"use client";

import { useEffect } from "react";

import { getRoutes } from "../services/routeService";
import { useRouteStore } from "../store/routeStore";

export function useRoutes() {
  const setRoutes = useRouteStore((state) => state.setRoutes);

  useEffect(() => {
    async function load() {
      const routes = await getRoutes();
      setRoutes(routes);
    }

    load();
  }, [setRoutes]);
}