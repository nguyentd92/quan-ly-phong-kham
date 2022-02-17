import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedicineTypeService } from '../medicine-type.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-medicine-type',
  templateUrl: './update-medicine-type.component.html',
  styleUrls: ['./update-medicine-type.component.scss'],
})
export class UpdateMedicineTypeComponent implements OnInit {
  form: FormGroup;
  isRequesting = false;

  constructor(
    private medicationService: MedicineTypeService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
      this.form = this.fb.group({
        name: ["", [Validators.required, Validators.minLength(3)]],
        description: [],
        id: []
      });
      this.medicationService.getMedicineType(routeParams.get('id')).subscribe((res) => {
        this.form.setValue({
          name: res.name,
          description: res.description,
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
      .updateMedicineType(this.form.value)
      .subscribe((_) => (this.form.reset(), this.endRequest()));
  }

  protected startRequest() {
    this.isRequesting = true;
  }

  protected endRequest() {
    this.isRequesting = false;
  }
}
