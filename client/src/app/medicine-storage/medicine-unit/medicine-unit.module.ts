import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineUnitComponent } from './medicine-unit.component';
import { RouterModule, Routes } from '@angular/router';
import { UnitSmallComponent } from './unit-small/unit-small.component';
import { UnitLargeComponent } from './unit-large/unit-large.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { UpdateMedicineUnitComponent } from './update-medicine-unit/update-medicine-unit.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { ReactiveFormsModule } from '@angular/forms';

const ROUTES: Routes = [
  {
    path: "don-vi-nho",
    component: UnitSmallComponent
  },
  {
    path: "don-vi-lon",
    component: UnitLargeComponent
  },
  {
    path: "sua-don-vi/:id",
    component: UpdateMedicineUnitComponent
  },
  {
    path: "",
    redirectTo: "don-vi-nho",
    pathMatch: "full"
  }
]

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
    ReactiveFormsModule,
    NzRadioModule
  ],
  declarations: [MedicineUnitComponent, UnitSmallComponent, UnitLargeComponent, UpdateMedicineUnitComponent]
})
export class MedicineUnitModule { }
