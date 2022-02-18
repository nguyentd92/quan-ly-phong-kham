import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineComponent } from './medicine.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { ListMedicineComponent } from './list-medicine/list-medicine.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';

const ROUTES: Routes = [
  {
    path: "them-thuoc",
    component: CreateMedicineComponent
  },
  {
    path: "sua/:id",
    component: UpdateMedicineComponent
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
    NzTableModule,
    NzButtonModule,
    NzDividerModule,
    NzInputNumberModule,
    NzSelectModule,
    ReactiveFormsModule
  ],
  declarations: [MedicineComponent, ListMedicineComponent, CreateMedicineComponent, UpdateMedicineComponent]
})
export class MedicineModule { }
