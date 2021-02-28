import { Injectable } from '@angular/core';
import {NzModalService} from "ng-zorro-antd/modal";
import {SearchPrescriptionComponent} from "./popups/search-prescription/search-prescription.component";
import {BehaviorSubject, Observable, of} from "rxjs";
import {NzDrawerService} from "ng-zorro-antd/drawer";
import {CreatePrescriptionComponent} from "./popups/create-prescription/create-prescription.component";
import { ViewPrescriptionComponent } from './popups/view-prescription/view-prescription.component';
import { HttpClient } from '@angular/common/http';
import { CalculateMedicineRequest } from './requests/calculate-medicine.request';
import { CalculateMedicineResponse } from './responses/calculate-medicine.response';
import { DaySession } from 'src/app/shared/constants/day-session.constant';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionUIService {
  constructor(
    private nzModalService: NzModalService,
    private nzDrawerService: NzDrawerService,
    private http: HttpClient
  ) { }

  openSearchPrescriptionsModal(): Observable<any> {
    const modal = this.nzModalService.create(
      {
        nzTitle: 'Tìm thông tin khám bệnh',
        nzContent: SearchPrescriptionComponent,
        nzOnOk: () => {}
      }
    );

    return modal.afterClose;
  }

  openCreatePrescriptionDrawer(): Observable<any> {
    const drawerRef = this.nzDrawerService.create<CreatePrescriptionComponent, { value: string }, string>({
      nzTitle: 'Tạo phiếu khám bệnh',
      nzContent: CreatePrescriptionComponent,
      nzPlacement: 'bottom',
      nzHeight: '98vh',
      nzContentParams: {
        value: 'Hello'
      }
    });

    return drawerRef.afterClose;
  }

  openViewPrescriptionDrawer(id: number): Observable<any> {
    const drawerRef = this.nzDrawerService.create<ViewPrescriptionComponent, { value: string }, string>({
      nzTitle: 'Phiếu khám bệnh',
      nzContent: ViewPrescriptionComponent,
      nzPlacement: 'bottom',
      nzHeight: '100vn',
      nzContentParams: {
        value: 'Hello'
      }
    });

    return drawerRef.afterClose;
  }
}
