import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineStorageDashboardComponent } from './pages/medicine-storage-dashboard/medicine-storage-dashboard.component';
import {RouterModule, Routes} from "@angular/router";

const MEDICINE_STORAGE_ROUTES: Routes = [
  {
    path: '',
    component: MedicineStorageDashboardComponent
  }
];

@NgModule({
  declarations: [MedicineStorageDashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(MEDICINE_STORAGE_ROUTES)
  ]
})
export class MedicineStorageModule { }
