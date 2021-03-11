import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { isDependToBackEnd } from 'src/app/shared/functions/is-depend-to-backend';
import { MedicineUnitSmall } from 'src/app/shared/models/medicine-unit-small.model';

@Injectable({
  providedIn: 'root'
})
export class MedicineUnitService {

  constructor(
    private http: HttpClient
  ) { }

  public getMedicalUnitSmalls(): Observable<MedicineUnitSmall[]> {
    if (!isDependToBackEnd()) {
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

    return this.http.get("units").pipe(map(res => res as MedicineUnitSmall[]));
  }
}
