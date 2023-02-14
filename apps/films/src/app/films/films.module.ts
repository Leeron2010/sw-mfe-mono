import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from 'libs/ui/src/lib/ui.module';
import { FilmsRoutingModule } from './films-routing.module';
import { FilmsComponent } from './films/films.component';
import { FilmComponent } from './film/film.component';


@NgModule({
  declarations: [
    FilmsComponent,
    FilmComponent
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    UiModule
  ]
})
export class FilmsModule { }
