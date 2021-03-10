import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Medication } from 'src/app/shared/models/medication.model';
import { MedicineUnitSmall } from 'src/app/shared/models/medicine-unit-small.model';
import { Medicine } from 'src/app/shared/models/medicine.model';
import { MedicineTypeService } from '../../medicine-type/medicine-type.service';
import { MedicineUnitService } from '../../medicine-unit/medicine-unit.service';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrls: ['./create-medicine.component.scss']
})
export class CreateMedicineComponent implements OnInit {
  form: FormGroup

  unitSmalls!: MedicineUnitSmall[];
  medications!: Medication[];

  isRequesting = false;

  constructor(
    private medicineService: MedicineService,
    private medicineUnitService: MedicineUnitService,
    private medicationService: MedicineTypeService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      unit_sell_price: [0, [Validators.required]],

      unit_small_id: [1],
      unit_large_id: [1],

      unit_vol_small: [0],
      unit_vol_large: [0],

      medication_id: [null, [Validators.required]]
    })


    this.fetchSuggestions();
  }

  onSubmitCreate() {
    for (const key in this.form.controls) {
      this.form.controls[key].markAsDirty();
      this.form.controls[key].updateValueAndValidity();
    }

    if(this.form.invalid) return;

    const body = this.form.value;

    this.isRequesting = true;
    this.medicineService.createMedicine(body).subscribe(
      _ => this.isRequesting = false
    );

  }

  protected fetchSuggestions() {
    this.medicineUnitService.getMedicalUnitSmalls().subscribe(res => this.unitSmalls = res)
    this.medicationService.getMedicineTypes().subscribe(res => this.medications = res)
  }
}
