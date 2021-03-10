import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Medicine } from 'src/app/shared/models/medicine.model';
import { UIMessageService } from 'src/app/shared/services/user-interfaces/ui-message.service';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private uiMessageService: UIMessageService) { }

  public createMedicine(req: Medicine): Observable<Medicine> {
    return of(req).pipe(delay(1000), tap(_ => this.uiMessageService.success("Created")))
  }
}
