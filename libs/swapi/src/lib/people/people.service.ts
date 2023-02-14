import { Injectable } from '@angular/core';
import { People } from './people';
import { PeopleDTO } from './people-dto';
import { getId, getIds } from '../utils';
import { BaseApiService } from '../base-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PeopleService extends BaseApiService<PeopleDTO, People> {
  readonly url = 'https://swapi.dev/api/people/';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  transform(dto: PeopleDTO): People {
      return {
        ...dto,
        id: getId(dto.url),
        homeworldId: getId(dto.homeworld),
        filmIds: getIds(dto.films),
        specieIds: getIds(dto.species),
        vehicleIds: getIds(dto.vehicles),
        starshipIds: getIds(dto.starships)
      };
  }
}
