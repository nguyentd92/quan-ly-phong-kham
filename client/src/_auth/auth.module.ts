import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './pages/login/login.component';
import {ForgotPasswordComponent} from './pages/forgot-password/forgot-password.component';
import {RouterModule, Routes} from "@angular/router";
import {AuthComponent} from './auth.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CookieService} from "ngx-cookie-service";

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
    ReactiveFormsModule,
    RouterModule.forChild(AUTH_ROUTES)
  ],
  providers: [
    CookieService
  ]
})
export class AuthModule {
}
