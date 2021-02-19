import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-search-prescription',
  templateUrl: './search-prescription.component.html',
  styleUrls: ['./search-prescription.component.scss']
})
export class SearchPrescriptionComponent implements OnInit {
  validateForm: any;
  isCollapse: any;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      dob: [null, [Validators.required]],
      phone: [null],
      address: [null]
    });
  }

  resetForm(): void {

  }

  toggleCollapse(): void {

  }
}
