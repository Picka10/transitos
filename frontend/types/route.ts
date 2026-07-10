export interface Stop {
  id: string;
  name: string;
  lat: number;
  lng: number;
  sequence: number;
}

export interface Route {
  id: string;
  name: string;
  color: string;
  active: boolean;
  vehicleType: "train" | "tram" | "bus";
  defaultZoom: number;
  bounds: [[number, number], [number, number]];
  shape: GeoJSON.Feature;
  stops: Stop[];
}