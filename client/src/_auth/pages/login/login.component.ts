import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../auth.service";
import {Location} from "@angular/common";
import {Observable} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    '../../../assets/fonts/icomoon/style.css',
    '../../bootstrap.css',
    '../../form-style.css',
    './login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isRequesting = false;

  constructor(
    private location: Location,
    private readonly authService: AuthService,
    private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initLoginForm();
  }

  get isAuth$(): Observable<boolean> {
    return this.authService.isAuth$;
  }

  private initLoginForm(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email, Validators.maxLength(254)]],
      password: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
      remember: [false]
    });
  }

  submitLogin(): void {
    this.isRequesting = true;
    this.loginForm.disable();

    const {email, password, remember} = this.loginForm.value;

    this.authService.login(email, password, remember).subscribe(
      res => {
      },
      err => {
        this.isRequesting = false;
        this.loginForm.enable();
      },
      () => {
        this.isRequesting = false;
        this.loginForm.enable();
      }
    );
  }


  goBack(): void {
    this.location.back();
  }

  logout(): void {
    this.isRequesting = true;

    this.authService.logout();

    this.isRequesting = false;
  }
}
