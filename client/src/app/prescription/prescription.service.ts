import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, pluck } from 'rxjs/operators';
import { DaySession } from '../shared/constants/day-session.constant';
import { StringUltility } from '../shared/ultilites/string.ultitity';
import { CalculateMedicineRequest } from './requests/calculate-medicine.request';
import { CalculateMedicineResponse } from './responses/calculate-medicine.response';
import { differenceInDays, differenceInMonths, differenceInYears, addMonths, addYears } from 'date-fns';
import { Patient } from '../shared/models/patient.model';
import { GetPrescriptionsRequest } from './requests/get-prescriptions.request';
import { GetPrescriptionsResponse } from './responses/get-prescriptions.response';
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

  getPatientDetails(patientId: number | string): Observable<Patient> {
    // Mock Patient
    let patient = new Patient();
    patient.id = +patientId;
    patient.full_name = "Nguyễn Văn A";
    patient.dob = new Date(2017,10,10);
    patient.phone = "0935.222.xxx";
    patient.address = "70A Hùng Vương, phường 5, TP Cà Mau";
    patient.age_str = "8 tuổi 2 tháng 3 ngày";
    patient.guardian = "Nguyễn B";

    return of(patient);
  }

  getPatients(request: GetPrescriptionsRequest): Observable<Patient[]> {
    const response: GetPrescriptionsResponse = {
      pageIndex: request.pageIndex,
      pageSize: request.pageSize,
      queryParams: request.queryParams,
      data: [
        {
          id: 1,
          full_name: "Nguyễn Văn A",
          last_exam_at: new Date(2020,12,15),
          age_int: 1,
          phone: "0932.223.223",
          address: "28 Nguyen Tri Phuong, TP Huế",
        },
        {
          id: 2,
          full_name: "Nguyễn Văn B",
          last_exam_at: new Date(2020,9,12),
          age_int: 1,
          phone: "0932.777.223",
          address: "25 Nguyen Tri Phuong, TP Huế",
        },
        {
          id: 3,
          full_name: "Nguyễn Văn C",
          last_exam_at: new Date(2020,12,21),
          age_int: 1,
          phone: "0932.223.222",
          address: "28 Nguyen Tri Phuong, TP Cà Mau",
        },
        {
          id: 4,
          full_name: "Nguyễn Văn D",
          last_exam_at: new Date(2020,10,12),
          age_int: 1,
          phone: "0932.223.444",
          address: "28 Nguyen Hue, TP Huế",
        },
        {
          id: 5,
          full_name: "Nguyễn Văn E",
          last_exam_at: new Date(2019,12,12),
          age_int: 1,
          phone: "0932.223.111",
          address: "28 Nguyen Cong Tru, TP Huế",
        }
      ]
    }

    return of(response.data as Patient[])
      // .pipe(delay(2));
  }
}
