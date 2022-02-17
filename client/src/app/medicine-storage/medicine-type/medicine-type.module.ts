import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineTypeComponent } from './medicine-type.component';
import { RouterModule, Routes } from '@angular/router';
import { ListMedicineTypeComponent } from './list-medicine-type/list-medicine-type.component';
import { CreateMedicineTypeComponent } from './create-medicine-type/create-medicine-type.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { ReactiveFormsModule } from '@angular/forms';

const ROUTES: Routes = [
  {
    path: "danh-sach",
    component: ListMedicineTypeComponent
  },
  {
    path: "tao-nhom-thuoc",
    component: CreateMedicineTypeComponent,
  },
  {
    path: "sua-nhom-thuoc/:id",
    component: CreateMedicineTypeComponent,
  },
  {
    path: "",
    redirectTo: "danh-sach",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    NzFormModule,
    NzInputModule,
    NzLayoutModule,
    NzButtonModule,
    NzTableModule,
    NzDividerModule,
    ReactiveFormsModule
  ],
  declarations: [MedicineTypeComponent, ListMedicineTypeComponent, CreateMedicineTypeComponent]
})
export class MedicineTypeModule { }
