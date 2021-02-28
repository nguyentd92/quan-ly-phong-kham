import { Component, OnInit } from '@angular/core';
import { faChartPie, faStethoscope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {
  faStethoscope = faStethoscope;
  faChartPie = faChartPie;

  constructor() { }

  ngOnInit(): void {
  }

}
