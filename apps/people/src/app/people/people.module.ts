import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people/people.component';
import { PersonComponent } from './person/person.component';


@NgModule({
  declarations: [
    PeopleComponent,
    PersonComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule
  ]
})
export class PeopleModule { }
