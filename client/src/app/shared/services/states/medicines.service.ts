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
        (res: ListMedicineResponse) => this.medicinesSubject.next(
          res.map(e => medicineFromListMedicineResponseItem(e))
        )
      )
  }
}

function medicineFromListMedicineResponseItem(item: MedicineItem): Medicine {
  const t = new Medicine();
  t.id = item.med_id;
  t.name = item.med_name;
  t.unit_sell_price = item.unit_sell_price;
  t.in_stocks = item.med_in_stocks;
  t.unit_vol = item.unit_vol;
  t.images = item.images;

  return t;
}

type ListMedicineResponse = MedicineItem[];

interface MedicineItem {
  med_id: number,
  med_name: string,
  unit_sell_price: number,
  med_in_stocks: number,
  unit_vol: string,
  med_unit_id: number,
  images: string[],
  medication_id: number,
  created_at: Date,
  updated_at: Date,
  deleted_at: Date
}
