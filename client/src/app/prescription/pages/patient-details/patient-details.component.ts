import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/shared/models/patient.model';
import { Prescription } from 'src/app/shared/models/prescription.model';
import { PrescriptionUIService } from '../../prescription-ui.service';
import { PrescriptionService } from '../../prescription.service';
import { ExamHistoryResponse } from '../../responses/exam-history.response';

const EXAM_HISTORY: Partial<Prescription>[] = [
  {
    id: 1,
    created_at: new Date(2020,10,20),
    diagnosis: "Sốt siêu vi",
    pres_price: 150000
  },
  {
    id: 2,
    created_at: new Date(2020,6,12),
    diagnosis: "Tiêu chảy cấp",
    pres_price: 150000
  },
  {
    id: 3,
    created_at: new Date(2020,5,14),
    diagnosis: "Sốt phát ban",
    pres_price: 200000
  },
  {
    id: 4,
    created_at: new Date(2020,1,15),
    diagnosis: "Cảm thông thường",
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

  examHistory: Partial<Prescription>[] = EXAM_HISTORY;

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

  openRePrescriptionDrawer(fromPrescription: Prescription) {
    const prescription: Partial<Prescription> = fromPrescription;
    this.presUIService.openCreatePrescriptionDrawer(this.patient, prescription)
  }

  openViewPrescriptionDrawer(prescription: Prescription) {
    this.presUIService.openViewPrescriptionDrawer(prescription.id);
  }

  back() {
    this.location.back();
  }
}
