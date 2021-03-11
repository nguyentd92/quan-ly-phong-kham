import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { Medication } from 'src/app/shared/models/medication.model';
import { UIMessageService } from 'src/app/shared/services/user-interfaces/ui-message.service';
import { environment } from 'src/environments/environment';
import { CreateMedicineTypeRequest } from './requests/create-medicine-type.request';

@Injectable({
  providedIn: 'root'
})
export class MedicineTypeService {

  constructor(
    private uiMessageService: UIMessageService,
    private http: HttpClient
  ) { }

  public createMedicineType(req: CreateMedicineTypeRequest): Observable<Medication> {
    return of({
      id: 10,
      ...req
    }).pipe(delay(1000), tap(e => this.uiMessageService.success("Thêm nhóm thuốc thành công")));
  }

  public getMedicineTypes(): Observable<Medication[]> {
    if(!environment.devfs && !environment.production) {
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
