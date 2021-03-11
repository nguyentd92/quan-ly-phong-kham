import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Medicine } from '../../models/medicine.model';

@Injectable({
  providedIn: 'root'
})
export class MedicinesService {
  private medicinesSubject = new BehaviorSubject<Medicine[]>([]);

  constructor(private http: HttpClient) {
    this.reloadMedicines();
  }

  public get medicines$(): Observable<Medicine[]> {
    // reload medicines data from server
    // this.reloadMedicines();
    return this.medicinesSubject.asObservable();
  }


  private reloadMedicines(): void {
    this.http.get("medicines").pipe(retry(environment.requestRetry))
      .subscribe(
        (res: Medicine[]) => this.medicinesSubject.next(
          res
        )
      )
  }
}