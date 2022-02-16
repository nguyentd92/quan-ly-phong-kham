import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/shared/components/app-layout/base-component';
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
export class CreateMedicineComponent extends BaseComponent implements OnInit {
  form: FormGroup

  unitSmalls!: MedicineUnitSmall[];
  medications!: Medication[];

  constructor(
    private medicineService: MedicineService,
    private medicineUnitService: MedicineUnitService,
    private medicationService: MedicineTypeService,
    private fb: FormBuilder
  ) {
    super();
  }

  get currentUnit() {
    return (this.unitSmalls || []).find(e => e.id == this.form.value.unit_sm_id);
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      unit_sell_price: [0, [Validators.required]],

      unit_sm_id: [null, [Validators.required]],
      unit_lg_id: [1],

      unit_sm_vol: [0],
      unit_lg_vol: [0],

      medication_id: [null, [Validators.required]]
    })


    this.fetchSuggestions();
  }

  onSubmitCreate() {
    for (const key in this.form.controls) {
      this.form.controls[key].markAsDirty();
      this.form.controls[key].updateValueAndValidity();
    }

    // Check if unit price is 0, show confirm
    if(!this.form.value.unit_sell_price && !confirm("Giá bán là 0đ, Có chắc chắn tiếp tục lưu?")) {
      return;
    }

    if (this.form.invalid) return;

    const body = this.form.value;

    this.startRequest();
    this.medicineService.createMedicine(body).subscribe(
      _ => this.form.reset(),
      _ => this.endRequest(),
      () => this.endRequest()
    );

  }

  protected fetchSuggestions() {
    this.medicineUnitService.getMedicalUnitSmalls().subscribe(res => this.unitSmalls = res)
    this.medicationService.getMedicineTypes().subscribe(
      res => this.medications = res,
      _ => this.endRequest(),
      () => this.endRequest()
    )
  }
}
