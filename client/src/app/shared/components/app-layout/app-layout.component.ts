import { Component, OnInit } from '@angular/core';
import { faChartPie, faStethoscope, faSignOutAlt, faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {
  faStethoscope = faStethoscope;
  faChartPie = faChartPie;
  faSignOut = faSignOutAlt;
  faCog = faCog;

  constructor() { }

  ngOnInit(): void {
  }

}
