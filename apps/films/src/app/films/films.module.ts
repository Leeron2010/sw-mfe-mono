import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VegaComponentModule } from '@heartlandone/vega-angular';
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
    VegaComponentModule,
    HttpClientModule,
    FilmsRoutingModule,
    UiModule
  ]
})
export class FilmsModule { }
