import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: [
    '../../../assets/fonts/icomoon/style.css',
    '../../bootstrap.css',
    '../../form-style.css',
    './forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }
}
