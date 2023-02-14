import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getId, getIds } from '../utils';
import { Planet } from './planet';
import { PlanetDTO } from './planet-dto';
import { BaseApiService } from '../base-api.service';

@Injectable({
  providedIn: 'root',
})
export class PlanetsService  extends BaseApiService<PlanetDTO, Planet> {
  readonly url = 'https://swapi.dev/api/planets/';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  transform(dto: PlanetDTO): Planet {
    return {
      ...dto,
      id: getId(dto.url),
      filmIds: getIds(dto.films),
      residentIds: getIds(dto.residents),
    };
  }
}
