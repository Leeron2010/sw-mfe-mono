import { VehicleDTO } from "./vehicle-dto";

export interface Vehicle extends VehicleDTO {
    id: string;
    pilotIds: string[];
    filmIds: string[];
}