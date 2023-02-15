import { Component } from '@angular/core';
import { FilmsService } from 'libs/swapi/src/lib/films/films.service';
import { BehaviorSubject, switchMap } from 'rxjs';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {

  pagination = new BehaviorSubject(1);


  films$ = this.pagination.pipe(switchMap((page) => this.filmsService.getList(page)));

  constructor(private filmsService: FilmsService) {
  }
}
