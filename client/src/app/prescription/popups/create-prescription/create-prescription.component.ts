import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-prescription',
  templateUrl: './create-prescription.component.html',
  styleUrls: ['./create-prescription.component.scss']
})
export class CreatePrescriptionComponent implements OnInit {
  createPrescriptionForm: FormGroup;
  isFormMedicineCollapsed = true;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    // Init Form
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
  }

  onChange($event: Event): void {

  }
}
