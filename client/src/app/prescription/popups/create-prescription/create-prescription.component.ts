import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { combineLatest, merge, Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { DaySession } from 'src/app/shared/constants/day-session.constant';
import { Medicine } from 'src/app/shared/models/medicine.model';
import { Patient } from 'src/app/shared/models/patient.model';
import { Prescription } from 'src/app/shared/models/prescription.model';
import { VndCurrencyPipe } from 'src/app/shared/pipes/vnd-currency-pipe/vnd-currency.pipe';
import { MedicinesService } from 'src/app/shared/services/states/medicines.service';
import { StringUltility } from 'src/app/shared/ultilites/string.ultitity';
import { PrescriptionService } from '../../prescription.service';
import { CalculateMedicineResponse } from '../../responses/calculate-medicine.response';

const ADD_MEDICINE_FORM = {
  med_id: [null, [Validators.required]],
  med_name: [null],

  amount: DaySession.listEn.length,
  days: [1, [Validators.required, Validators.min(1)]],
  is_c_u_price: false,
  u_price: 0,
  is_c_s_price: false,
  s_price: 0
};

const DEFAULT_ADD_MEDICINE_FORM = {
  med_id: null,
  med_name: null,
  amount: DaySession.listEn.length,
  days: 1,
  u_price: 0,
  is_c_u_price: false,
  s_price: 0,
  is_c_s_price: false
}

DaySession.listEn.forEach(t => {
  ADD_MEDICINE_FORM[`c_${t}`] = [true];
  ADD_MEDICINE_FORM[`a_${t}`] = [1];
  ADD_MEDICINE_FORM[`n_${t}`] = [""];

  DEFAULT_ADD_MEDICINE_FORM[`c_${t}`] = true;
  DEFAULT_ADD_MEDICINE_FORM[`a_${t}`] = 1;
  DEFAULT_ADD_MEDICINE_FORM[`n_${t}`] = "";
});

@Component({
  selector: 'app-create-prescription',
  templateUrl: './create-prescription.component.html',
  styleUrls: ['./create-prescription.component.scss'],
  host: {
    "class": "container"
  }
})
export class CreatePrescriptionComponent implements OnInit {
  @Input() patient: Partial<Patient>
  @Input() fromPrescription: Partial<Prescription>

  createPrescriptionForm: FormGroup;
  addMedicineForm: FormGroup;

  isFormMedicineCollapsed = true;

  medKeyword = "";

  medDaySessions = DaySession.listEn;

  oldValue = {
    u_price: 0,
    s_price: 0,
    pres_price: 0,
    amount: 0
  };

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
    private presService: PrescriptionService,
    private vndCurrencyPipe: VndCurrencyPipe
  ) { }

  daySessionVi(enKey: string): string {
    return StringUltility.upperFirstLetter(DaySession.transToVi(enKey));
  }

  get medicines$(): Observable<Medicine[]> {
    return this.medicinesService.medicines$.pipe(
      map(l => l.filter(i => i.name.toLocaleLowerCase().includes(this.medKeyword.toLocaleLowerCase())))
    );
  }

  get predMedTotal(): number {
    return this.presMedList.reduce((t, c) => t + c.med_s_price, 0)
  }

  get ageStr$(): Observable<string> {
    return this.presService.sendCalculateAge(this.createPrescriptionForm.value.patient.dob);
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
      reExamTo: [null],

      is_c_pres_price: [false]
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

    // Watching and keep s_price on updated
    combineLatest(
      this.addMedicineForm.controls['u_price'].valueChanges,
      this.addMedicineForm.controls['amount'].valueChanges,
    ).subscribe((res) => {
      this.addMedicineForm.patchValue({
        s_price: (res[0] * res[1]) || 0
      })
    })

    // Watching and keep amount on updated
    merge(
      ...DaySession.listEn.map(t => this.addMedicineForm.controls[`c_${t}`].valueChanges),
      ...DaySession.listEn.map(t => this.addMedicineForm.controls[`a_${t}`].valueChanges),
      this.addMedicineForm.controls["days"].valueChanges
    )
      .pipe(
        debounceTime(100)
      )
      .subscribe(() => {
        const amountPerDay = DaySession.listEn.filter(t => this.addMedicineForm.controls[`c_${t}`].value)
          .reduce((t, c) => t + +this.addMedicineForm.controls[`a_${c}`].value, 0);

        // Must ceil if amount is decimal
        const amount = Math.ceil(amountPerDay * this.addMedicineForm.controls["days"].value);
        this.addMedicineForm.controls[`amount`].setValue(amount);
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

        // Reset Add Medicine Form
        this.addMedicineForm.reset(DEFAULT_ADD_MEDICINE_FORM);
        this.addMedicineForm.disable();
        this.medKeyword = "";
      }
    )
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
    this.addMedicineForm.patchValue(DEFAULT_ADD_MEDICINE_FORM)

    this.medKeyword = "";

    this.addMedicineForm.disable();
  }

  // Edit Unit Price & Amount
  onEditUnitPriceAndAmount() {
    const { is_c_u_price, u_price, amount } = this.addMedicineForm.value;
    this.addMedicineForm.patchValue({ is_c_u_price: !is_c_u_price });
    this.oldValue = { ...this.oldValue, u_price, amount };
  }

  onChangeUnitPriceAndAmount() {
    const { is_c_u_price } = this.addMedicineForm.value;

    this.addMedicineForm.patchValue({
      is_c_u_price: !is_c_u_price
    });
  }

  onCancelEditUnitPriceAndAmount() {
    const { is_c_u_price } = this.addMedicineForm.value;

    this.addMedicineForm.patchValue({
      is_c_u_price: !is_c_u_price,
      u_price: this.oldValue.u_price,
      amount: this.oldValue.amount
    });
  }

  // Edit Sell Price
  onEditSellPrice() {
    const { is_c_s_price, s_price } = this.addMedicineForm.value;
    this.oldValue = {...this.oldValue, s_price};
    this.addMedicineForm.patchValue({ is_c_s_price: !is_c_s_price })
  }

  onChangeSellPrice() {
    const { is_c_s_price } = this.addMedicineForm.value;

    this.addMedicineForm.patchValue({
      is_c_s_price: !is_c_s_price
    });
  }

  onCancelEditSellPrice() {
    const { is_c_s_price } = this.addMedicineForm.value;

    this.addMedicineForm.patchValue({
      is_c_s_price: !is_c_s_price,
      s_price: this.oldValue.s_price
    });
  }

  // Edit Pres Price
  onEditPresPrice() {
    const { is_c_pres_price, pres_price } = this.createPrescriptionForm.value;
    this.oldValue.pres_price = pres_price;
    this.createPrescriptionForm.patchValue({
      is_c_pres_price: !is_c_pres_price
    });
  }

  onChangePresPrice() {
    const { is_c_pres_price } = this.createPrescriptionForm.value;

    this.createPrescriptionForm.patchValue({
      is_c_pres_price: !is_c_pres_price
    });
  }

  onCancelChangePresPrice() {
    const { is_c_pres_price } = this.createPrescriptionForm.value;

    this.createPrescriptionForm.patchValue({
      is_c_pres_price: !is_c_pres_price,
      pres_price: this.oldValue.pres_price
    });
  }



  // Formatter
  formatterVnd = (value: string) => this.vndCurrencyPipe.transform(value);
  parserVnd = (value: string) => value.replace(/\D/g, '');
}

const medAnyTimeValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null =>
  DaySession.listEn.every(t => !control.get(`c_${t}`).value) ? { medAnyTime: true } : null;
