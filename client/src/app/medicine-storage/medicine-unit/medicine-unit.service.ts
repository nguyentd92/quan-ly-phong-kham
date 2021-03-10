import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { MedicineUnitSmall } from 'src/app/shared/models/medicine-unit-small.model';

@Injectable({
  providedIn: 'root'
})
export class MedicineUnitService {

constructor() { }

  public getMedicalUnitSmalls(): Observable<MedicineUnitSmall[]> {
    return of([
      {
        id: 1,
        name: "viên",
        sign: "v"
      },
      {
        id: 2,
        name: "tuýp",
        sign: "t"
      },
      {
        id: 3,
        name: "chai",
        sign: "c"
      },
    ]).pipe(delay(1000))
  }
}
