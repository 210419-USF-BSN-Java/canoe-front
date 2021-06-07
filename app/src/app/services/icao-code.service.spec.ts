import { TestBed } from '@angular/core/testing';

import { IcaoCodeService } from './icao-code.service';

describe('IcaoCodeService', () => {
  let service: IcaoCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IcaoCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
