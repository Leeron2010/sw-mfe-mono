import { PlanetDTO } from "./planet-dto";

export interface Planet extends PlanetDTO {
    id: string;
    filmIds: string[];
    residentIds: string[];
}