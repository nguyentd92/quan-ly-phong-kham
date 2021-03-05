import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './pages/demo/demo.component';
import {AppLayoutComponent} from "./shared/components/app-layout/app-layout.component";

const ROUTES: Routes = [
  {
    path: "_auth",
    loadChildren: () => import('../_auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "",
    component: AppLayoutComponent,
    children: [
      {
        path: "",
        component: DemoComponent
      },
      {
        path: "kham-benh",
        loadChildren: () => import('./prescription/prescription.module').then(m => m.PrescriptionModule)
      },
      {
        path: "kho-thuoc",
        loadChildren: () => import('./medicine-storage/medicine-storage.module').then(m => m.MedicineStorageModule)
      },
      {
        path: "thong-ke",
        loadChildren: () => import('./statistic/statistic.module').then(m => m.StatisticModule)
      },
      {
        path: "cai-dat",
        loadChildren: () => import('./config/config.module').then(m => m.ConfigModule)
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
