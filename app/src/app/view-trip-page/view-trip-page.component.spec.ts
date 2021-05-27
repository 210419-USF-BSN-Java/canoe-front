import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTripPageComponent } from './view-trip-page.component';

describe('ViewTripPageComponent', () => {
  let component: ViewTripPageComponent;
  let fixture: ComponentFixture<ViewTripPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTripPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTripPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
