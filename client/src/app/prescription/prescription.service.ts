import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { DaySession } from '../shared/constants/day-session.constant';
import { StringUltility } from '../shared/ultilites/string.ultitity';
import { CalculateMedicineRequest } from './requests/calculate-medicine.request';
import { CalculateMedicineResponse } from './responses/calculate-medicine.response';
import { differenceInDays, differenceInMonths, differenceInYears, addMonths, addYears } from 'date-fns';
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

        if (data[checkKey]) {
          if(cur) {
            cur = `${cur}, `;
          }
          let daySessionVi = DaySession.transToVi(t);

          cur += `${StringUltility.upperFirstLetter(daySessionVi)} ${data[`a_${t}`]}v ${data[`n_${t}`]}`;
        }

        return cur;
      }, "")
    });
  }

  sendCalculateAge(dob: Date): Observable<string> {
    const result = [];
    const now = Date.now();
    let age = dob;

    const years = differenceInYears(now, age);
    if (years > 0) {
      result.push(`${years} tuổi`);
      age = addYears(age, years);
    }

    const months = differenceInMonths(now, age);
    if (months > 0) {
      result.push(`${months} tháng`);
      age = addMonths(age, months);
    }

    const days = differenceInDays(now, age);
    if (days > 0) {
      result.push(`${days} ngày`);
    }

    return of(result.join(' '));
  }
}
