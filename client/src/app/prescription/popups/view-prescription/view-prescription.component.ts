import {Component, Input, OnInit} from '@angular/core';
import {PrescriptionService} from "../../prescription.service";
import {BillPrescriptionResponse} from "../../responses/bill-prescription.response";
import {Prescription} from "../../../shared/models/prescription.model";

@Component({
  selector: 'app-view-prescription',
  templateUrl: './view-prescription.component.html',
  styleUrls: ['./view-prescription.component.scss'],
  host: {
    class: 'container'
  }
})
export class ViewPrescriptionComponent implements OnInit {
  @Input() billId: number;

  details!: BillPrescriptionResponse;

  constructor(private prescriptionService: PrescriptionService) {
  }

  get patient(): any {
    return this.details?.patient;
  }

  get prescription(): Prescription {
    return this.details?.prescription;
  }

  get medicines(): Array<any> {
    return this.details?.medicines;
  }

  ngOnInit(): void {
    this.prescriptionService.getBillDetails(this.billId).subscribe(res => this.details = res);
  }

}
