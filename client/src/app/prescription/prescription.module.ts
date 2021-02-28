import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListPrescriptionComponent} from './pages/list-prescription/list-prescription.component';
import {RouterModule, Routes} from '@angular/router';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {NzModalModule} from "ng-zorro-antd/modal";
import { SearchPrescriptionComponent } from './popups/search-prescription/search-prescription.component';
import {NzPopoverModule} from "ng-zorro-antd/popover";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import { ViewPrescriptionComponent } from './popups/view-prescription/view-prescription.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VndCurrencyPipeModule } from '../shared/pipes/vnd-currency-pipe/vnd-currency-pipe.module';

const PRESCRIPTION_ROUTES: Routes = [
  {
    path: '',
    component: ListPrescriptionComponent
  }
];

@NgModule({
  declarations: [
    ListPrescriptionComponent,
    SearchPrescriptionComponent,
    CreatePrescriptionComponent,
    AddMedicineComponent,
    ViewPrescriptionComponent
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
    NzInputNumberModule,
    FontAwesomeModule,
    FormsModule,
    VndCurrencyPipeModule
  ]
})
export class PrescriptionModule {
}
