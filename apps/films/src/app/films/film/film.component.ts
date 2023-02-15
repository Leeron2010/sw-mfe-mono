import { Component } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Film } from 'libs/swapi/src/lib/films/film';
import { PeopleService } from 'libs/swapi/src/lib/people/people.service';
import { PlanetsService } from 'libs/swapi/src/lib/planets/planets.service';
import { SpeciesService } from 'libs/swapi/src/lib/species/species.service';
import { VehiclesService } from 'libs/swapi/src/lib/vehicles/vehicles.service';
import { first, map, skip, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent {
  movie$ = this.activatedRoute.data.pipe(map((data: Data) => data['movie'] as Film));

  showCharactersSubject = new Subject<void>();
  showPlanetsSubject = new Subject<void>();
  showVehiclesSubject = new Subject<void>();
  showSpeciesSubject = new Subject<void>();

  characters$$ = this.showCharactersSubject.pipe(
    skip(1),
    first(),
    switchMap(() => this.movie$),
    map((movie) => movie.characterIds),
    map((ids) => ids.map((id) => this.peopleService.getById(id)))
  )

  planets$$ = this.showPlanetsSubject.pipe(
    skip(1),
    first(),
    switchMap(() => this.movie$),
    map((movie) => movie.planetIds),
    map(ids => ids.map((id) => this.planetsService.getById(id)))
  )

  vehicles$$ = this.showVehiclesSubject.pipe(
    skip(1),
    first(),
    switchMap(() => this.movie$),
    map((movie) => movie.vehicleIds),
    map(ids => ids.map((id) => this.vehiclesService.getById(id)))
  )

  species$$ = this.showSpeciesSubject.pipe(
    skip(1),
    first(),
    switchMap(() => this.movie$),
    map((movie) => movie.specieIds),
    map(ids => ids.map((id) => this.speciesService.getById(id)))
  )

  constructor(
    public activatedRoute: ActivatedRoute,
    private peopleService: PeopleService,
    private planetsService: PlanetsService,
    private speciesService: SpeciesService,
    private vehiclesService: VehiclesService
  ) {
  }

  public expandHandler(event: Event, subject: Subject<void>) {
    if (!(event instanceof CustomEvent<boolean>)) {
      return
    }
    subject.next();
  }
}
