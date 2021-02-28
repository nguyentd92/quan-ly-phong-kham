/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MedicinesService } from './medicines.service';

describe('Service: Medicines', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedicinesService]
    });
  });

  it('should ...', inject([MedicinesService], (service: MedicinesService) => {
    expect(service).toBeTruthy();
  }));
});
