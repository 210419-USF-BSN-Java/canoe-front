import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodgingTabComponent } from './lodging-tab.component';

describe('LodgingTabComponent', () => {
  let component: LodgingTabComponent;
  let fixture: ComponentFixture<LodgingTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LodgingTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LodgingTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
