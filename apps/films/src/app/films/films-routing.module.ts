import { inject, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { FilmsService } from 'libs/swapi/src/lib/films/films.service';
import { FilmComponent } from './film/film.component';
import { FilmsComponent } from './films/films.component';

const routes: Routes = [
  {
    path: '',
    component: FilmsComponent
  },
  {
    path: 'film/:id',
    component: FilmComponent,
    resolve: {
      movie: (route: ActivatedRouteSnapshot) => inject(FilmsService).getById(route.paramMap.get('id'))
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule {
}
