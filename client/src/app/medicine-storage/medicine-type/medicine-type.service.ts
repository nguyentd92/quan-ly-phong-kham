import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { isDependToBackEnd } from 'src/app/shared/functions/is-depend-to-backend';
import { Medication } from 'src/app/shared/models/medication.model';
import { UIMessageService } from 'src/app/shared/services/user-interfaces/ui-message.service';
import { environment } from 'src/environments/environment';
import { CreateMedicineTypeRequest } from './requests/create-medicine-type.request';
import { UpdateMedicineTypeRequest } from './requests/update-medicine-type.request';

@Injectable({
  providedIn: 'root'
})
export class MedicineTypeService {

  constructor(
    private uiMessageService: UIMessageService,
    private http: HttpClient
  ) { }

  public createMedicineType(req: CreateMedicineTypeRequest): Observable<Medication> {
    if(!isDependToBackEnd()) {
      return of({
        id: 10,
        ...req
      }).pipe(delay(1000), tap(e => this.uiMessageService.success("Thêm nhóm thuốc thành công")));
    }
   
    return this.http.post("medications", req).pipe(
      tap(_ => this.uiMessageService.success("Thêm nhóm thuốc thành công")),
      map(res => res as Medication)
    );
  }

  public updateMedicineType(req: UpdateMedicineTypeRequest): Observable<Medication> {
    return this.http.put(`medications/${req.id}`, req).pipe(
      tap(_ => this.uiMessageService.success("Sửa nhóm thuốc thành công")),
      map(res => res as Medication)
    );
  }

  public deleteMedicineType(id: number): Observable<unknown> {
    return this.http.delete(`medications/${id}`).pipe(
      tap(_ => this.uiMessageService.success("Xóa nhóm thuốc thành công"))
    );
  }

  public getMedicineType(id: string): Observable<Medication> {
    return this.http.get(`medications/${id}`).pipe(map(res => res as Medication));
  }

  public getMedicineTypes(): Observable<Medication[]> {
    if(!isDependToBackEnd()) {
      return of([
        {
          id: 1,
          name: "Medicine 1"
        },
        {
          id: 2,
          name: "Medicine 2",
          description: "Description"
        },
        {
          id: 3,
          name: "Medicine 3",
          description: "Description"
        },
        {
          id: 4,
          name: "Medicine 4"
        },
      ]).pipe(delay(1000))
    }
    
    return this.http.get("medications").pipe(map(res => res as Medication[]));
  }
}
