import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { isDependToBackEnd } from 'src/app/shared/functions/is-depend-to-backend';
import { Medicine } from 'src/app/shared/models/medicine.model';
import { UIMessageService } from 'src/app/shared/services/user-interfaces/ui-message.service';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  constructor(
    private uiMessageService: UIMessageService,
    private readonly http: HttpClient
  ) { }

  public createMedicine(req: Medicine): Observable<Medicine> {
    if(!isDependToBackEnd()) {
      return of(req).pipe(delay(1000), tap(_ => this.uiMessageService.success("Created")))
    }

    return this.http.post("medicines", req).pipe(
      tap(_ => this.uiMessageService.success("Created")),
      map(res => res as Medicine
    ));
  }
}