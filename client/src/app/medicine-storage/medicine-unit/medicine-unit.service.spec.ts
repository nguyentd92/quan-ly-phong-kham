/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MedicineUnitService } from './medicine-unit.service';

describe('Service: MedicineUnitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedicineUnitService]
    });
  });

  it('should ...', inject([MedicineUnitService], (service: MedicineUnitService) => {
    expect(service).toBeTruthy();
  }));
});
