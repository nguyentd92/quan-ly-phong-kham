import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { DaySession } from '../shared/constants/day-session.constant';
import { StringUltility } from '../shared/ultilites/string.ultitity';
import { CalculateMedicineRequest } from './requests/calculate-medicine.request';
import { CalculateMedicineResponse } from './responses/calculate-medicine.response';
interface PrescriptionConfig {
  pres_wage: number;
}
@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  constructor() { }

  private configSj = new BehaviorSubject<PrescriptionConfig>({
    pres_wage: 100000
  });

  get presWage$() {
    return this.configSj.pipe(pluck('pres_wage'));
  }

  // HTTP
  sendCalculateMedicine(data: CalculateMedicineRequest): Observable<CalculateMedicineResponse> {


    console.log(data);

    return of({
      med_id: data.med_id,
      med_title: "Medicine " + data.med_id,

      amount_str: `${data.amount} v / ${data.days} ngày`,
      u_price: data.u_price,
      s_price: data.amount * data.u_price,

      note_str: DaySession.listEn.reduce((cur, t, idx) => {
        const checkKey = `c_${t}`;
        console.log(checkKey);
        if(data[checkKey]) {
          let str = idx > 0 ? `${cur}, ` : cur;
          let daySessionVi = DaySession.transToVi(t);
          str += `${StringUltility.upperFirstLetter(daySessionVi)} ${data[`a_${t}`]}v ${data[`n_${t}`]}`
          console.log(cur);
          return str;
        }

        return t;
      }, "")
    });
  }
}
