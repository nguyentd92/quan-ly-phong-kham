import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-prescription',
  templateUrl: './view-prescription.component.html',
  styleUrls: ['./view-prescription.component.scss'],
  host: {
    "class": "container"
  }
})
export class ViewPrescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
