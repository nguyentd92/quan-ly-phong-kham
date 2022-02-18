import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedicineUnitService } from '../medicine-unit.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-medicine-unit',
  templateUrl: './update-medicine-unit.component.html',
  styleUrls: ['./update-medicine-unit.component.scss'],
})
export class UpdateMedicineUnitComponent implements OnInit {
  form: FormGroup;
  isRequesting = false;

  constructor(
    private medicationService: MedicineUnitService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
      this.form = this.fb.group({
        name: ["", [Validators.required, Validators.minLength(3)]],
        sign: [],
        is_small: [],
        id: []
      });
      this.medicationService.getMedicineUnit(routeParams.get('id')).subscribe((res) => {
        this.form.setValue({
          name: res.name,
          sign: res.sign,
          is_small: res.is_small.toString(),
          id: res.id,
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

    this.medicationService
      .updateMedicineUnit(this.form.value)
      .subscribe((_) => (this.form.reset(), this.endRequest()));
  }

  protected startRequest() {
    this.isRequesting = true;
  }

  protected endRequest() {
    this.isRequesting = false;
  }
}
