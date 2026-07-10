export interface Vehicle {
  id: string;
  route: string;
  lat: number;
  lng: number;
  speed: number;
  status: "active" | "stopped" | "offline";
  lastUpdated: string;
}