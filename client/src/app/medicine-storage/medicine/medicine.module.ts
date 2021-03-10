import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineComponent } from './medicine.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { ListMedicineComponent } from './list-medicine/list-medicine.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';

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
    RouterModule.forChild(ROUTES),
    NzFormModule,
    NzLayoutModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule
  ],
  declarations: [MedicineComponent, ListMedicineComponent, CreateMedicineComponent]
})
export class MedicineModule { }
