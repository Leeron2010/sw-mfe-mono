import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeciesRoutingModule } from './species-routing.module';
import { SpeciesComponent } from './species/species.component';
import { SpeciesListComponent } from './species-list/species-list.component';


@NgModule({
  declarations: [
    SpeciesComponent,
    SpeciesListComponent
  ],
  imports: [
    CommonModule,
    SpeciesRoutingModule
  ]
})
export class SpeciesModule { }
