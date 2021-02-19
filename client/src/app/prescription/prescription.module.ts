import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateExaminationComponent} from './pages/create-examination/create-examination.component';
import {BillExaminationComponent} from './pages/bill-examination/bill-examination.component';
import {ListExaminationComponent} from './pages/list-examination/list-examination.component';
import {RouterModule, Routes} from '@angular/router';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {NzModalModule} from "ng-zorro-antd/modal";
import { SearchPrescriptionComponent } from './popups/search-prescription/search-prescription.component';
import {NzPopoverModule} from "ng-zorro-antd/popover";
import {ReactiveFormsModule} from "@angular/forms";
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzInputModule} from "ng-zorro-antd/input";
import { CreatePrescriptionComponent } from './popups/create-prescription/create-prescription.component';
import {NzRadioModule} from "ng-zorro-antd/radio";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import { AddMedicineComponent } from './popups/add-medicine/add-medicine.component';
import {NzAutocompleteModule} from "ng-zorro-antd/auto-complete";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";

const PRESCRIPTION_ROUTES: Routes = [
  {
    path: '',
    component: ListExaminationComponent
  },
  {
    path: 'tao-phieu-kham',
    component: CreateExaminationComponent
  },
  {
    path: 'toa-kham-benh/:id',
    component: BillExaminationComponent
  }
];

@NgModule({
  declarations: [
    CreateExaminationComponent,
    BillExaminationComponent,
    ListExaminationComponent,
    SearchPrescriptionComponent,
    CreatePrescriptionComponent,
    AddMedicineComponent
  ],
  imports: [
    CommonModule,
    NzTableModule,
    NzButtonModule,
    NzSpaceModule,
    NzModalModule,
    NzPopoverModule,
    NzLayoutModule,
    NzFormModule,
    RouterModule.forChild(PRESCRIPTION_ROUTES),
    ReactiveFormsModule,
    NzIconModule,
    NzDatePickerModule,
    NzInputModule,
    NzRadioModule,
    NzCheckboxModule,
    NzAutocompleteModule,
    NzInputNumberModule
  ]
})
export class PrescriptionModule {
}
