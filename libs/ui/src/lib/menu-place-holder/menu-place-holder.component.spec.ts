import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPlaceHolderComponent } from './menu-place-holder.component';

describe('MenuPlaceHolderComponent', () => {
  let component: MenuPlaceHolderComponent;
  let fixture: ComponentFixture<MenuPlaceHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPlaceHolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPlaceHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
