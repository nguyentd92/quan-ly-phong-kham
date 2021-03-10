import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { MedicineStorageComponent } from './medicine-storage.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';

const MEDICINE_STORAGE_ROUTES: Routes = [
  {
    path: '',
    component: MedicineStorageComponent,
    children: [
      {
        path: 'nhom-thuoc',
        loadChildren: () => import('./medicine-type/medicine-type.module').then(m => m.MedicineTypeModule)
      }
    ]
  }
];

@NgModule({
  declarations: [MedicineStorageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(MEDICINE_STORAGE_ROUTES),
    NzMenuModule,
    NzGridModule
  ]
})
export class MedicineStorageModule { }
