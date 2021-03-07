import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccountListComponent } from './pages/account-list/account-list.component';
import { RoleListComponent } from './pages/role-list/role-list.component';

const ACCOUNTS_MANAGEMENT_ROUTES: Routes = [
  {
    path: "danh-sach-tai-khoan",
    component: AccountListComponent
  },
  {
    path: "danh-sach-vai-tro",
    component: RoleListComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ACCOUNTS_MANAGEMENT_ROUTES)
  ],
  declarations: []
})
export class AccountsManagementModule { }
