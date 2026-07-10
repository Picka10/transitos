import { Route } from "../types/route";

const ROUTE_FILES = [
  "downtown-loop",
];

export async function getRoutes(): Promise<Route[]> {
  const routes: Route[] = [];

  for (const file of ROUTE_FILES) {
    const geoJson = await fetch(`/routes/${file}.geojson`).then((r) =>
      r.json()
    );

    routes.push({
      id: file,
      name: "Downtown Loop",
      color: "#2563eb",
      geoJson,
    });
  }

  return routes;
}