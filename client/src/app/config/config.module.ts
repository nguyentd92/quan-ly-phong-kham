import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigComponent } from './config.component';
import { RouterModule, Routes } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzMenuModule } from 'ng-zorro-antd/menu';

const CONFIG_ROUTES: Routes = [
  {
    path: "",
    component: ConfigComponent,
    children: [
      {
        path: "ca-nhan",
        loadChildren: () => import('./my-account/my-account.module').then(m => m.MyAccountModule)
      },
      {
        path: "tai-khoan-ung-dung",
        loadChildren: () => import('./accounts-management/accounts-management.module').then(m => m.AccountsManagementModule)
      },
      {
        path: "phong-kham",
        loadChildren: () => import('./clinic-setting/clinic-setting.module').then(m => m.ClinicSettingModule)
      },
      {
        path: "lich-su-he-thong",
        loadChildren: () => import('./system-history/system-history.module').then(m => m.SystemHistoryModule)
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CONFIG_ROUTES),
    NzGridModule,
    NzDividerModule,
    NzMenuModule
  ],
  declarations: [ConfigComponent]
})
export class ConfigModule { }
