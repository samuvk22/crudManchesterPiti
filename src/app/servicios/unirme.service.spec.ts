import { TestBed } from '@angular/core/testing';

import { UnirmeService } from './unirme.service';

describe('UnirmeService', () => {
  let service: UnirmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnirmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
