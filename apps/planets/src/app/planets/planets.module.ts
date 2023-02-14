import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetComponent } from './planet/planet.component';


@NgModule({
  declarations: [
    PlanetsComponent,
    PlanetComponent
  ],
  imports: [
    CommonModule,
    PlanetsRoutingModule
  ]
})
export class PlanetsModule { }
