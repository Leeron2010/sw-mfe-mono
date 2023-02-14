import { StarshipDTO } from "./starship-dto";

export interface Starship extends StarshipDTO {
    id: string;
    filmIds: string[];
    pilotIds: string[];
}