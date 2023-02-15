import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiService } from '../base-api.service';
import { getId, getIds } from '../utils';
import { Specie } from './specie';
import { SpecieDTO } from './specie-dto';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService extends BaseApiService<SpecieDTO, Specie> {
  readonly url = 'https://swapi.dev/api/species/';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  transform(dto: SpecieDTO): Specie {
    return {
      ...dto,
      id: getId(dto.url),
      homeworldId: getId(dto.homeworld),
      filmIds: getIds(dto.films),
      peopleIds: getIds(dto.people)
    };
  }
}
