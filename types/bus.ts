export interface Bus {
  id: string;
  plateNumber: string;
  model: string;
  capacity: number;
  status: "active" | "maintenance" | "inactive";
}

export interface Route {
  id: string;
  name: string;
  origin: string;
  destination: string;
  distance: number; // km
}

export interface Schedule {
  id: string;
  busId: string;
  routeId: string;
  departureTime: string;
  arrivalTime: string;
  frequency: "daily" | "weekdays" | "weekends";
}
