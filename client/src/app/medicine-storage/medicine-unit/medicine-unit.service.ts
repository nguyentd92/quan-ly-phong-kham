import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { isDependToBackEnd } from 'src/app/shared/functions/is-depend-to-backend';
import { MedicineUnitSmall } from 'src/app/shared/models/medicine-unit-small.model';
import { MedicineUnitLarge } from 'src/app/shared/models/medicine-unit-large.model';
import { UpdateMedicineUnitRequest } from './requests/update-medicine-unit.request';
import { UIMessageService } from 'src/app/shared/services/user-interfaces/ui-message.service';

@Injectable({
  providedIn: 'root'
})
export class MedicineUnitService {

  constructor(
    private uiMessageService: UIMessageService,
    private http: HttpClient
  ) { }

  public getMedicalUnitSmalls(): Observable<MedicineUnitSmall[]> {
    return this.http.get("units/byclass/1").pipe(map(res => res as MedicineUnitSmall[]));
  }

  public getMedicalUnitLarges(): Observable<MedicineUnitLarge[]> {
    return this.http.get("units/byclass/0").pipe(map(res => res as MedicineUnitLarge[]));
  }

  public getMedicineUnit(id: string): Observable<MedicineUnitSmall> {
    return this.http.get(`units/${id}`).pipe(map(res => res as MedicineUnitSmall));
  }

  public updateMedicineUnit(req: UpdateMedicineUnitRequest): Observable<MedicineUnitSmall> {
    return this.http.put(`units/${req.id}`, req).pipe(
      tap(_ => this.uiMessageService.success("Sửa đơn vị thuốc thành công")),
      map(res => res as MedicineUnitSmall)
    );
  }
}
