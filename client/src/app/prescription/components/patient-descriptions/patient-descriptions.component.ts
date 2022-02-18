import { Component, Input, OnInit } from '@angular/core';
import { Patient } from 'src/app/shared/models/patient.model';

@Component({
  selector: 'app-patient-descriptions',
  templateUrl: './patient-descriptions.component.html',
  styleUrls: ['./patient-descriptions.component.scss']
})
export class PatientDescriptionsComponent implements OnInit {
  @Input() patient: Patient;

  constructor() { }

  ngOnInit() {
  }
}
