import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { MyPermissionsComponent } from './pages/my-permissions/my-permissions.component';

const MY_ACCOUNT_ROUTES: Routes = [
  {
    path: "thong-tin-ca-nhan",
    component: MyProfileComponent
  },
  {
    path: "doi-mat-khau",
    component: ChangePasswordComponent
  },
  {
    path: "quyen-han",
    component: MyPermissionsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MY_ACCOUNT_ROUTES)
  ],
  declarations: []
})
export class MyAccountModule { }
