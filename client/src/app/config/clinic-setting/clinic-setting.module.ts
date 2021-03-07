import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClinicInfoComponent } from './pages/clinic-info/clinic-info.component';
import { PrescriptionSettingComponent } from './pages/prescription-setting/prescription-setting.component';
import { MedicineStorageSettingComponent } from './pages/medicine-storage-setting/medicine-storage-setting.component';

const CLINIC_SETTING_ROUTES: Routes = [
  {
    path: "thong-tin",
    component: ClinicInfoComponent
  },
  {
    path: "kham-benh",
    component: PrescriptionSettingComponent
  },
  {
    path: "kho-thuoc",
    component: MedicineStorageSettingComponent
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CLINIC_SETTING_ROUTES)
  ],
  declarations: []
})
export class ClinicSettingModule { }
