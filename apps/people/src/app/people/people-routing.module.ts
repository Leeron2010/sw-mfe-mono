import { inject, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { PeopleService } from 'libs/swapi/src/lib/people/people.service';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  {
    path: '',
    component: PeopleComponent
  },
  {
    path: 'person/:id',
    component: PersonComponent,
    resolve: {
      person: (route: ActivatedRouteSnapshot) => inject(PeopleService).getById(route.paramMap.get('id'))
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
