import { SpecieDTO } from "./specie-dto";

export interface Specie extends SpecieDTO {
    id: string;
    homeworldId: string;
    peopleIds: string[];
    filmIds: string[];
}