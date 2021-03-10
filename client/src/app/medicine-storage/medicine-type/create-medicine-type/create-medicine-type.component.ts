import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedicineTypeService } from '../medicine-type.service';

@Component({
  selector: 'app-create-medicine-type',
  templateUrl: './create-medicine-type.component.html',
  styleUrls: ['./create-medicine-type.component.scss']
})
export class CreateMedicineTypeComponent implements OnInit {
  form: FormGroup
  isRequesting = false;

  constructor(
    private medicationService: MedicineTypeService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      description: []
    })
  }

  onSubmitCreate() {
    for (const key in this.form.controls) {
      this.form.controls[key].markAsDirty();
      this.form.controls[key].updateValueAndValidity();
    }

    if(this.form.invalid) return;

    this.startRequest();

    this.medicationService.createMedicineType(this.form.value).subscribe(_ => (this.form.reset(), this.endRequest()));
  }

  protected startRequest() {
    this.isRequesting = true;
  }

  protected endRequest() {
    this.isRequesting = false;
  }
}
