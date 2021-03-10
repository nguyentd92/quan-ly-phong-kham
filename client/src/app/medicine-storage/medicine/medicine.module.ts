import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineComponent } from './medicine.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { ListMedicineComponent } from './list-medicine/list-medicine.component';

const ROUTES: Routes = [
  {
    path: "them-thuoc",
    component: CreateMedicineComponent
  },
  {
    path: "danh-sach",
    component: ListMedicineComponent
  },
  {
    path: "",
    redirectTo: "danh-sach",
    pathMatch: "full"
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [MedicineComponent]
})
export class MedicineModule { }
