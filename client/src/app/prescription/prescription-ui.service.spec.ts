import { TestBed } from '@angular/core/testing';

import { PrescriptionUIService } from './prescription-ui.service';

describe('PrescriptionUIService', () => {
  let service: PrescriptionUIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrescriptionUIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
