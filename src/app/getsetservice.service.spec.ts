import { TestBed } from '@angular/core/testing';

import { GetsetserviceService } from './getsetservice.service';

describe('GetsetserviceService', () => {
  let service: GetsetserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetsetserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
