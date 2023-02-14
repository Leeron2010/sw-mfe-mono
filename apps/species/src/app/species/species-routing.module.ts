import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeciesListComponent } from './species-list/species-list.component';
import { SpeciesComponent } from './species/species.component';

const routes: Routes = [
  {
    path: '',
    component: SpeciesListComponent
  },
  {
    path: ':id',
    component: SpeciesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeciesRoutingModule { }
