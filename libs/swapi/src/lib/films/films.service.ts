import { Injectable } from '@angular/core';
import { FilmDTO } from './film-dto';
import { Film } from './film';
import { getId, getIds } from '../utils';
import { BaseApiService } from '../base-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FilmsService extends BaseApiService<FilmDTO, Film> {
  readonly url = 'https://swapi.dev/api/films/';
  constructor( httpClient: HttpClient ) {
    super(httpClient);
  }

  public transform(value: FilmDTO): Film {
    return {
      ...value,
      id: getId(value.url),
      characterIds: getIds(value.characters),
      planetIds: getIds(value.planets),
      specieIds: getIds(value.species),
      vehicleIds: getIds(value.vehicles),
    };
  }
}
