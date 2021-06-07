import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromFormComponent } from './from-form.component';

describe('FromFormComponent', () => {
  let component: FromFormComponent;
  let fixture: ComponentFixture<FromFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
