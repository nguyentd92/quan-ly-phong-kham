import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedicineService } from '../medicine.service';
import { ActivatedRoute } from '@angular/router';
import { MedicineUnitSmall } from 'src/app/shared/models/medicine-unit-small.model';
import { MedicineUnitService } from '../../medicine-unit/medicine-unit.service';
import { Medication } from 'src/app/shared/models/medication.model';
import { MedicineTypeService } from '../../medicine-type/medicine-type.service';

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.scss'],
})
export class UpdateMedicineComponent implements OnInit {
  form: FormGroup;
  isRequesting = false;
  listOfMedicineUnitSmall!: MedicineUnitSmall[];
  listOfMedicineType!: Medication[];
  currentUnit: MedicineUnitSmall;

  constructor(
    private medicineTypeService: MedicineTypeService,
    private medicineUnitService: MedicineUnitService,
    private medicineService: MedicineService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      unit_sell_price: [],
      unit_sm_vol: [],
      unit_sm_id: [],
      medication_id: [],
      id: []
    });
    const routeParams = this.route.snapshot.paramMap;
      this.medicineUnitService.getMedicalUnitSmalls().subscribe((medicalUnitSmalls) => {
        this.listOfMedicineUnitSmall = medicalUnitSmalls;
        this.medicineTypeService.getMedicineTypes().subscribe((medicineTypes) => {
          this.listOfMedicineType = medicineTypes;
          this.medicineService.getMedicine(routeParams.get('id')).subscribe((res) => {
            this.setCurrentUnit(res.unit_sm_id);
            this.form.setValue({
              name: res.name,
              unit_sell_price: res.unit_sell_price,
              unit_sm_vol: res.unit_sm_vol,
              unit_sm_id: res.unit_sm_id.toString(),
              medication_id: res.medication_id.toString(),
              id: res.id,
            });
          });
        });
      });
  }

  onSubmitUpdate() {
    for (const key in this.form.controls) {
      this.form.controls[key].markAsDirty();
      this.form.controls[key].updateValueAndValidity();
    }

    if (this.form.invalid) return;

    this.startRequest();

    this.medicineService
      .updateMedicine(this.form.value)
      .subscribe((_) => (this.form.reset(), this.endRequest()));
  }

  onChangeUnit() {
    this.setCurrentUnit(this.form.value.unit_sm_id);
  }

  setCurrentUnit(unit_sm_id: number) {
    this.currentUnit = this.listOfMedicineUnitSmall.find((value, index) => value.id == unit_sm_id);
  }

  protected startRequest() {
    this.isRequesting = true;
  }

  protected endRequest() {
    this.isRequesting = false;
  }
}
