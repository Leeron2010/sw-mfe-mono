import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VegaComponentModule } from '@heartlandone/vega-angular';

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
    PeopleRoutingModule,
    VegaComponentModule,
    HttpClientModule
  ]
})
export class PeopleModule { }
