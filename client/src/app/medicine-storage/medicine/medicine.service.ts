import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { isDependToBackEnd } from 'src/app/shared/functions/is-depend-to-backend';
import { Medicine } from 'src/app/shared/models/medicine.model';
import { UIMessageService } from 'src/app/shared/services/user-interfaces/ui-message.service';
import { UpdateMedicineRequest } from './requests/update-medicine.request';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  constructor(
    private uiMessageService: UIMessageService,
    private readonly http: HttpClient
  ) { }

  public createMedicine(req: Medicine): Observable<Medicine> {
    return this.http.post("medicines", req).pipe(
      tap(_ => this.uiMessageService.success("Thêm thuốc thành công")),
      map(res => res as Medicine
    ));
  }

  public getMedicines(): Observable<Medicine[]> {
    return this.http.get("medicines").pipe(map(res => res as Medicine[]));
  }

  public getMedicine(id: string): Observable<Medicine> {
    return this.http.get(`medicines/${id}`).pipe(map(res => res as Medicine));
  }

  public updateMedicine(req: UpdateMedicineRequest): Observable<Medicine> {
    return this.http.put(`medicines/${req.id}`, req).pipe(
      tap(_ => this.uiMessageService.success("Sửa thuốc thành công")),
      map(res => res as Medicine)
    );
  }

  public deleteMedicine(id: number): Observable<unknown> {
    return this.http.delete(`medicines/${id}`).pipe(
      tap(_ => this.uiMessageService.success("Xóa thuốc thành công"))
    );
  }
}