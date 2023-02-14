import { FilmDTO } from "./film-dto";

export interface Film extends FilmDTO {
    id: string;
    characterIds: string[];
    planetIds: string[];
    specieIds: string[];
    vehicleIds: string[];
}