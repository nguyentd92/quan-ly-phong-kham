import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzDrawerService } from "ng-zorro-antd/drawer";
import { NzModalService } from "ng-zorro-antd/modal";
import { Observable } from "rxjs";
import { Patient } from '../shared/models/patient.model';
import { CreatePrescriptionComponent } from "./popups/create-prescription/create-prescription.component";
import { SearchPrescriptionComponent } from "./popups/search-prescription/search-prescription.component";
import { ViewPrescriptionComponent } from './popups/view-prescription/view-prescription.component';

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
        nzOnOk: () => { }
      }
    );

    return modal.afterClose;
  }

  openCreatePrescriptionDrawer(patient: Partial<Patient> = null): Observable<any> {
    const drawerRef = this.nzDrawerService.create<CreatePrescriptionComponent, { value: string }, string>({
      nzTitle: `
        <div class="container">
          Tạo phiếu khám bệnh: ${patient?.full_name} - Tel: ${patient?.phone} - Đc: ${patient?.address}
        </div>
      `,
      nzContent: CreatePrescriptionComponent,
      nzPlacement: 'bottom',
      nzHeight: '98vh',
      nzContentParams: {
        patient
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
