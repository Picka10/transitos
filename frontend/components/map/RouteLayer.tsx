"use client";

import { GeoJSON } from "react-leaflet";

import { useRoutes } from "@/hooks/useRoutes";
import { useRouteStore } from "@/store/routeStore";

export default function RouteLayer() {
  useRoutes();

  const routes = useRouteStore((state) => state.routes);
  const selectedRoute = useRouteStore(
    (state) => state.selectedRoute
  );
  const selectRoute = useRouteStore(
    (state) => state.selectRoute
  );

  return (
    <>
      {routes.map((route) => (
        <GeoJSON
          key={route.id}
          data={route.geoJson}
          style={{
            color:
              selectedRoute === route.id
                ? "#f97316"
                : route.color,
            weight: selectedRoute === route.id ? 7 : 5,
            opacity: 0.9,
          }}
          eventHandlers={{
            click: () => selectRoute(route.id),
          }}
        />
      ))}
    </>
  );
}