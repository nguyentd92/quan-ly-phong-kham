import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicineUnitComponent } from './medicine-unit.component';
import { RouterModule, Routes } from '@angular/router';
import { UnitSmallComponent } from './unit-small/unit-small.component';
import { UnitLargeComponent } from './unit-large/unit-large.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';

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
    path: "",
    redirectTo: "don-vi-nho",
    pathMatch: "full"
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    NzTableModule,
    NzDividerModule
  ],
  declarations: [MedicineUnitComponent, UnitSmallComponent]
})
export class MedicineUnitModule { }
