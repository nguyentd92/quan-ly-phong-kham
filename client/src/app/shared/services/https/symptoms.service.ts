import { HttpClient } from '@angular/common/http';
import { Host, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { isDependToBackEnd } from '../../functions/is-depend-to-backend';
import { Symptom } from '../../models/symptom.model';

@Injectable({
  providedIn: 'root'
})
export class SymptomsService {

  constructor(private http: HttpClient) { }

  fetchSymptoms(): Observable<Symptom[]> {
    if(!isDependToBackEnd()) {
      let symptoms: Symptom[] = [
        {
          id: 1,
          name: "Ho"
        },
        {
          id: 2,
          name: "Sốt"
        },
        {
          id: 3,
          name: "Tiêu chảy"
        },
        {
          id: 4,
          name: "Buồn nôn"
        }
      ];

      return of(symptoms).pipe(delay(1000));
    }

    return this.http.get("symptoms").pipe(map(e => e as Symptom[]))
  }
}
