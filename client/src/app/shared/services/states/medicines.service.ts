import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Medicine } from '../../models/medicine.model';

@Injectable({
  providedIn: 'root'
})
export class MedicinesService {
  private medicinesSubject = new BehaviorSubject<Medicine[]>([]);

  constructor(private http: HttpClient) { }

  public get medicines$(): Observable<Medicine[]> {
    // reload medicines data from server
    this.reloadMedicines();
    return this.medicinesSubject.asObservable();
  }


  private reloadMedicines() {
    this.http.get("medicines")
  }
}
