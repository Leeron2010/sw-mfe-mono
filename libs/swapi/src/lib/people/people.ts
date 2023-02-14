import { PeopleDTO } from "./people-dto";

export interface People extends PeopleDTO {
    id: string;
    homeworldId: string;
    filmIds: string[];
    specieIds: string[];
    starshipIds: string[];
    vehicleIds: string[];
}