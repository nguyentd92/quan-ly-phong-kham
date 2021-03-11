/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SymptomsService } from './symptoms.service';

describe('Service: Symptoms', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SymptomsService]
    });
  });

  it('should ...', inject([SymptomsService], (service: SymptomsService) => {
    expect(service).toBeTruthy();
  }));
});
