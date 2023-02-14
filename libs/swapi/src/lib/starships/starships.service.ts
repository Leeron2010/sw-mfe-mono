import { Injectable } from '@angular/core';
import { BaseApiService } from '../base-api.service';
import { getId, getIds } from '../utils';
import { Starship } from './starship';
import { StarshipDTO } from './starship-dto';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService extends BaseApiService<StarshipDTO, Starship> {
  readonly url = 'https://swapi.dev/api/starships/';

  transform(dto: StarshipDTO): Starship {
    return {
      ...dto,
      id: getId(dto.url),
      filmIds: getIds(dto.films),
      pilotIds: getIds(dto.pilots)
    };
  }
}
