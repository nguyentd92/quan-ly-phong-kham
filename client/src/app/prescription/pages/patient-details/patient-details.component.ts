import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/shared/models/patient.model';
import { PrescriptionUIService } from '../../prescription-ui.service';
import { PrescriptionService } from '../../prescription.service';
import { ExamHistoryResponse } from '../../responses/exam-history.response';

const EXAM_HISTORY: ExamHistoryResponse = [
  {
    exam_id: 1,
    exam_at: new Date(2020,10,20),
    pathology: "Sốt siêu vi",
    pres_price: 150000
  },
  {
    exam_id: 2,
    exam_at: new Date(2020,6,12),
    pathology: "Tiêu chảy cấp",
    pres_price: 150000
  },
  {
    exam_id: 3,
    exam_at: new Date(2020,5,14),
    pathology: "Sốt phát ban",
    pres_price: 200000
  },
  {
    exam_id: 4,
    exam_at: new Date(2020,1,15),
    pathology: "Cảm thông thường",
    pres_price: 150000
  }
]

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss'],
  host: {
    "class": "container"
  }
})
export class PatientDetailsComponent implements OnInit {
  patient: Patient = null;

  examHistory: ExamHistoryResponse = EXAM_HISTORY;

  constructor(
    private presUIService: PrescriptionUIService,
    private presService: PrescriptionService,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.fetchPatientDetails();
  }

  private fetchPatientDetails() {
    const patientId = this.activatedRoute.snapshot.paramMap.get('id');
    this.presService.getPatientDetails(patientId).subscribe(res => this.patient = res)
  }

  openCreatePrescriptionDrawer() {
    this.presUIService.openCreatePrescriptionDrawer(this.patient);
  }

  back() {
    this.location.back();
  }
}
