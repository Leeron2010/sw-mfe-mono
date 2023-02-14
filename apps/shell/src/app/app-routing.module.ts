import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'films',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'films',
        exposedModule: './Module'
      })
        .then(m => m.FilmsModule)
  },
  {
    path: 'people',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'people',
        exposedModule: './Module'
      })
        .then(m => m.PeopleModule)
  },
  {
    path: 'planets',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'planets',
        exposedModule: './Module'
      })
        .then(m => m.PlanetsModule)
  },
  {
    path: 'species',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'species',
        exposedModule: './Module'
      })
        .then(m => m.SpeciesModule)
  },
  {
    path: 'starships',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'starships',
        exposedModule: './Module'
      })
        .then(m => m.StarshipsModule)
  },
  {
    path: 'vehicles',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'vehicles',
        exposedModule: './Module'
      })
        .then(m => m.VehiclesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
