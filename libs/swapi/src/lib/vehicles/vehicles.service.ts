import { Injectable } from '@angular/core';
import { BaseApiService } from '../base-api.service';
import { getId, getIds } from '../utils';
import { Vehicle } from './vehicle';
import { VehicleDTO } from './vehicle-dto';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService extends BaseApiService<VehicleDTO, Vehicle> {
  readonly url = 'https://swapi.dev/api/vehicles/';

  transform(dto: VehicleDTO): Vehicle {
    return {
      ...dto,
      id: getId(dto.url),
      filmIds: getIds(dto.films),
      pilotIds: getIds(dto.pilots)
    }
  }
}
