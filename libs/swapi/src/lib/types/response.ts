import { ResponseDTO } from "./response-dto";

export interface Response<D, T extends D> extends ResponseDTO<D> {
    results: T[];
}