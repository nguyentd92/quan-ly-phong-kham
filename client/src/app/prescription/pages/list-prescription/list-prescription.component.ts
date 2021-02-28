import { Component, OnInit } from '@angular/core';
import {PrescriptionService} from "../../prescription.service";

@Component({
  selector: 'app-list-prescription',
  templateUrl: './list-prescription.component.html',
  styleUrls: ['./list-prescription.component.scss']
})
export class ListPrescriptionComponent implements OnInit {
  listOfData!: any[];
  indeterminate: any;
  isRequesting = false;

  constructor(
    private prescriptionService: PrescriptionService
  ) { }

  ngOnInit(): void {
    this.listOfData = new Array(100).fill(0).map((_, index) => {
      return {
        id: index,
        name: `Edward King ${index}`,
        age: 32,
        address: `London, Park Lane no. ${index}`,
        disabled: index % 2 === 0
      };
    });
  }

  onCurrentPageDataChange($event: any): void {

  }

  onAllChecked($event: any): void {

  }

  openViewPrescription(id: number): void {
    this.prescriptionService.openViewPrescriptionDrawer(id);
  }

  onOpenSearchPrescriptionModal(): void {
    this.prescriptionService.openSearchPrescriptionsModal();
  }

  openCreatePrescriptionDrawer(): void {
    this.prescriptionService.openCreatePrescriptionDrawer();
  }
}
