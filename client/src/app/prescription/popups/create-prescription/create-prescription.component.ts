import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DaySession } from 'src/app/shared/constants/day-session.constant';
import { Medicine } from 'src/app/shared/models/medicine.model';
import { MedicinesService } from 'src/app/shared/services/states/medicines.service';
import { PrescriptionService } from '../../prescription.service';
import { CalculateMedicineRequest } from '../../requests/calculate-medicine.request';
import { CalculateMedicineResponse } from '../../responses/calculate-medicine.response';

const ADD_MEDICINE_FORM = {
  med_id: null,
  med_name: null,

  amount: DaySession.listEn.length,
  days: [1, [Validators.required, Validators.min(1)]],
  is_c_u_price: false,
  u_price: 0,
  is_s_u_price: false,
  s_price: 0
};

DaySession.listEn.forEach(t => {
  ADD_MEDICINE_FORM[`c_${t}`] = [true];
  ADD_MEDICINE_FORM[`a_${t}`] = [1];
  ADD_MEDICINE_FORM[`n_${t}`] = [""];
});

@Component({
  selector: 'app-create-prescription',
  templateUrl: './create-prescription.component.html',
  styleUrls: ['./create-prescription.component.scss']
})
export class CreatePrescriptionComponent implements OnInit {
  createPrescriptionForm: FormGroup;
  addMedicineForm: FormGroup;

  isFormMedicineCollapsed = true;

  medKeyword = "";

  medDaySessions = DaySession.listEn

  presMedList: {
    med_id: number;
    med_title: string;
    med_amount_str: string;
    med_u_price: number;
    med_s_price: number;
    med_note: string;
  }[] = []


  constructor(
    private fb: FormBuilder,
    private medicinesService: MedicinesService,
    private presService: PrescriptionService
  ) { }

  daySessionVi(enKey: string) {
    return DaySession.transToVi(enKey);
  }

  get medicines$(): Observable<Medicine[]> {
    return this.medicinesService.medicines$.pipe(
      map(l => l.filter(i => i.name.toLocaleLowerCase().includes(this.medKeyword.toLocaleLowerCase())))
    );
  }

  ngOnInit(): void {
    // Init Form
    this.addMedicineForm = this.fb.group(ADD_MEDICINE_FORM, { validators: medAnyTimeValidator });
    this.createPrescriptionForm = this.fb.group({
      patient: this.fb.group({
        name: [],
        dob: [],
        gender: [true],
        phone: [],
        address: [],
        guardian: []
      }),

      symptomList: [[]],
      symptomNote: [null],
      diagnosis: [null],
      medicineList: this.fb.array([]),
      prescriptionNote: [null],
      pres_price: [0],
      medicationPrice: [0],
      billPrice: [0],
      reExamTo: [null]
    });

    // Cancel select medicine in form medicine
    this.onCancelMedicine();

    DaySession.listEn.forEach((time) => {
      this.addMedicineForm.controls[`c_${time}`].valueChanges.subscribe(
        e => {
          if (e) {
            this.addMedicineForm.controls[`n_${time}`].enable();
            this.addMedicineForm.controls[`a_${time}`].enable();
          } else {
            this.addMedicineForm.controls[`n_${time}`].disable();
            this.addMedicineForm.controls[`a_${time}`].disable();
          }
        }
      )
    })

    //
    merge(
      this.addMedicineForm.controls['u_price'].valueChanges,
      this.addMedicineForm.controls['amount'].valueChanges,
    ).subscribe(() => {
      const { u_price, amount } = this.addMedicineForm.value;
      this.addMedicineForm.patchValue({
        s_price: u_price * amount
      })
    })

    // Patch Default Pres Wage
    this.presService.presWage$.subscribe(res => this.createPrescriptionForm.patchValue({ pres_price: res })).unsubscribe();
  }

  onChange($event: Event): void {
    console.log($event)
  }

  onAddMedicine() {
    const {
      med_id,
      med_name,
      amount,
      days,
      is_c_u_price,
      u_price,
      is_s_u_price,
      s_price
    } = this.addMedicineForm.value;

    const data: any = {
      med_id,

      amount,
      days,

      u_price,
      is_cus_u_price: is_c_u_price,
      s_price,
      is_cus_s_price: is_s_u_price
    }

    DaySession.listEn.forEach(t => {
      const checkKey = `c_${t}`;
      const amountKey = `a_${t}`;
      const noteKey = `n_${t}`;
      data[checkKey] = this.addMedicineForm.value[checkKey];
      data[amountKey] = this.addMedicineForm.value[amountKey];
      data[noteKey] = this.addMedicineForm.value[noteKey];
    })

    this.presService.sendCalculateMedicine(data).subscribe(
      (res: CalculateMedicineResponse) => {
        const { med_id, med_title, amount_str, u_price, note_str } = res;
        this.presMedList.push({
          med_id,
          med_title,
          med_amount_str: amount_str,
          med_u_price: u_price,
          med_s_price: s_price,
          med_note: note_str
        })
      }
    )

    this.addMedicineForm.enable();
  }

  onRemoveMedicine(idx: number) {
    this.presMedList.splice(idx, 1);
  }

  onSelectMedicine(med: Medicine) {
    this.addMedicineForm.enable();

    const amount = DaySession.listEn.length
    const { unit_sell_price } = med;
    this.addMedicineForm.patchValue({
      med_id: med.id,
      med_name: med.name,
      amount: amount,
      u_price: unit_sell_price,
      s_price: amount * unit_sell_price
    });
  }

  onCancelMedicine() {
    this.addMedicineForm.patchValue({
      med_id: null,
      med_name: null
    })

    this.medKeyword = "";

    this.addMedicineForm.disable();
  }
}

const medAnyTimeValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null =>
  DaySession.listEn.every(t => !control.get(`c_${t}`).value) ? { medAnyTime: true } : null
  ;
