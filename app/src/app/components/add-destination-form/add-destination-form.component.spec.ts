import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDestinationFormComponent } from './add-destination-form.component';

describe('AddDestinationFormComponent', () => {
  let component: AddDestinationFormComponent;
  let fixture: ComponentFixture<AddDestinationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDestinationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDestinationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
