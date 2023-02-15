import { Component } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { People } from 'libs/swapi/src/lib/people/people';
import { map } from 'rxjs';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {

  public person$ = this.activatedRoute.data.pipe(map((data: Data) => data['person'] as People))

  constructor(public activatedRoute: ActivatedRoute) {
  }
}
