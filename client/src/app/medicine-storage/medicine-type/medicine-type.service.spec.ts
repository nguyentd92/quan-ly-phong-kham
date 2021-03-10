/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MedicineTypeService } from './medicine-type.service';

describe('Service: MedicineType', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MedicineTypeService]
    });
  });

  it('should ...', inject([MedicineTypeService], (service: MedicineTypeService) => {
    expect(service).toBeTruthy();
  }));
});
