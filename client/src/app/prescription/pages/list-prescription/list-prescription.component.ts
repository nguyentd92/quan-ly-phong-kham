import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patients } from 'src/app/shared/models/patient.model';
import { ObjectUltility } from 'src/app/shared/ultilites/object.ultility';
import { PrescriptionUIService } from "../../prescription-ui.service";
import { PrescriptionService } from '../../prescription.service';
import { GetPrescriptionsRequest } from '../../requests/get-prescriptions.request';

@Component({
  selector: 'app-list-prescription',
  templateUrl: './list-prescription.component.html',
  styleUrls: ['./list-prescription.component.scss'],
  host: {
    "class": "container"
  }
})
export class ListPrescriptionComponent implements OnInit {
  patients!: Patients;
  indeterminate: any;
  isRequesting = false;

  queryPrescriptionsParams!: GetPrescriptionsRequest;

  constructor(
    private prescriptionUIService: PrescriptionUIService,
    private prescriptionService: PrescriptionService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initQueryPrescriptionParams();
    this.subscribeParamsFromUrl();
  }

  onTableQueryParamsChange($event: any): void {
    const fullQueryParams = { ...this.queryPrescriptionsParams, ...$event };

    const queryParams = ObjectUltility.filterPropsNull(fullQueryParams);

    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams
      });
  }

  openViewPrescription(id: number): void {
    this.prescriptionUIService.openViewPrescriptionDrawer(id);
  }

  onOpenSearchPrescriptionModal(): void {
    this.prescriptionUIService.openSearchPrescriptionsModal();
  }

  openCreatePrescriptionDrawer(): void {
    this.prescriptionUIService.openCreatePrescriptionDrawer();
  }

  protected subscribeParamsFromUrl(): void {
    // Subscribe Query Params Change
    const { pageIndex, pageSize } = this.queryPrescriptionsParams;
    const { name, dob, phone, address } = this.queryPrescriptionsParams.queryParams;
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params)
      this.queryPrescriptionsParams = {
        pageIndex: params.pageIndex || pageIndex,
        pageSize: params.pageSize || pageSize,
        queryParams: {
          name: params.name || name,
          dob: params.dob || dob,
          phone: params.phone || phone,
          address: params.address || address
        }
      }

      this.fetchPatients();
    })
  }

  protected fetchPatients(): void {
    this.startingRequest();

    this.prescriptionService.getPatients(this.queryPrescriptionsParams)
      .subscribe(res => (this.patients = res, this.endingRequest()), _ => this.endingRequest, () => this.endingRequest()).unsubscribe()
  }

  protected endingRequest() {
    this.isRequesting = false;
  }

  protected startingRequest() {
    this.isRequesting = true;
  }

  protected initQueryPrescriptionParams() {
    // Fetch Api Query Params from URL
    const { pageIndex, pageSize, name, dob, phone, address } = this.activatedRoute.snapshot.queryParams;

    const defaultParams = new GetPrescriptionsRequest();
    const defaultQueryParams = defaultParams.queryParams;

    this.queryPrescriptionsParams = {
      pageIndex: pageIndex || defaultParams.pageIndex,
      pageSize: pageSize || defaultParams.pageSize,
      queryParams: {
        name: name || defaultQueryParams.name,
        phone: phone || defaultQueryParams.phone,
        address: address || defaultQueryParams.address,
        dob: dob || defaultQueryParams.dob,
      }
    };
  }
}
