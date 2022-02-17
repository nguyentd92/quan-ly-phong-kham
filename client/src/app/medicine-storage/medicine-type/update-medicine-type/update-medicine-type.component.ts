import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedicineTypeService } from '../medicine-type.service';

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
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    console.log("123");
    this.medicationService.getMedicineType(4).subscribe((res) => {
      console.log(res);
      this.form = this.fb.group({
        name: [res.name, [Validators.required, Validators.minLength(3)]],
        description: [res.description],
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
