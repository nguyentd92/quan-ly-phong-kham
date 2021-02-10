import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './pages/login/login.component';
import {ForgotPasswordComponent} from './pages/forgot-password/forgot-password.component';
import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from './auth.component';

const AUTH_ROUTES: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "forgot-password",
        component: ForgotPasswordComponent
      }
    ]
  }
];

@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent, AuthComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AUTH_ROUTES)
  ]
})
export class AuthModule {
}
