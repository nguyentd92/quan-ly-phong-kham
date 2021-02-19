import { Component, OnInit } from '@angular/core';
import {PrescriptionService} from "../../prescription.service";

@Component({
  selector: 'app-list-examination',
  templateUrl: './list-examination.component.html',
  styleUrls: ['./list-examination.component.scss']
})
export class ListExaminationComponent implements OnInit {
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

  onOpenSearchPrescriptionModal(): void {
    this.prescriptionService.openSearchPrescriptionsModal();
  }

  openCreatePrescriptionDrawer(): void {
    this.prescriptionService.openCreatePrescriptionDrawer();
  }
}
