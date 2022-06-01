import { TestBed } from '@angular/core/testing';

import { CamposServiceService } from './campos-service.service';

describe('CamposServiceService', () => {
  let service: CamposServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CamposServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
