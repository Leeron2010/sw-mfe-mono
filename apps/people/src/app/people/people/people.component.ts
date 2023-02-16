import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VegaTableColumnConfig, VegaTableCreateElementFunction } from '@heartlandone/vega';
import { VegaModal } from '@heartlandone/vega-angular';
import { People } from 'libs/swapi/src/lib/people/people';
import { PeopleService } from 'libs/swapi/src/lib/people/people.service';
import { BehaviorSubject, filter, map, shareReplay, switchMap, take, tap } from 'rxjs';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {
  @ViewChild('selectedPersonModal', {read: VegaModal}) selectedPersonModal!: VegaModal;
  selectedPerson?: null | People = null;
  private paginationSubject = new BehaviorSubject(1);
  response$ = this.paginationSubject.pipe(switchMap((page) => this.peopleService.getList(page)), shareReplay(1));
  columns: VegaTableColumnConfig[] = [
    {
      label: 'Name',
      prop: 'name',
    },
    {
      label: 'Birth year',
      prop: 'birth_year'
    },
    {
      label: 'Eye color',
      prop: 'eye_color'
    },
    {
      label: 'Actions',
      render: (createElement: VegaTableCreateElementFunction, rowKey) => {
        return createElement('div', {}, [
            createElement('vega-button-circle', {
              variant: 'icon-only',
              icon: 'link',
              onVegaClick: async (event: Event) => {
                await this.router.navigate(['person', rowKey], {relativeTo: this.activatedRoute});
              }
            }),
            createElement('vega-button-circle', {
              variant: 'icon-only',
              icon: 'info-circle-filled',
              onVegaClick: async (event: Event) => {
                this.response$.pipe(
                  take(1),
                  map((response) => response.results.find((p) => p.id === rowKey)),
                  filter(Boolean),
                  tap((person) => {
                    this.selectedPerson = person;
                    this.selectedPersonModal.modal('show');
                  })
                ).subscribe();
              }
            }),
          ]
          ,
        )
      }
    }
  ]

  constructor(
    private peopleService: PeopleService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
  }

  public openDialog(event: Event) {
    if (!(event instanceof CustomEvent<{ index: number, record: People }>)) {
      return;
    }

    this.selectedPerson = event.detail.record
  }

  public selectedPersonClose() {

  }
}
