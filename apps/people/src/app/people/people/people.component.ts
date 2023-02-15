import { Component } from '@angular/core';
import { PeopleService } from 'libs/swapi/src/lib/people/people.service';
import { BehaviorSubject, switchMap } from 'rxjs';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {
  private paginationSubject = new BehaviorSubject(1);

  response$ = this.paginationSubject.pipe(switchMap((page) => this.peopleService.getList(page)));

  constructor(private peopleService: PeopleService) {
  }
}
