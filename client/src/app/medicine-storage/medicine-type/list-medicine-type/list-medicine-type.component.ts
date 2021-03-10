import { Component, OnInit } from '@angular/core';
import { Medication } from 'src/app/shared/models/medication.model';

@Component({
  selector: 'app-list-medicine-type',
  templateUrl: './list-medicine-type.component.html',
  styleUrls: ['./list-medicine-type.component.scss']
})
export class ListMedicineTypeComponent implements OnInit {

  listOfData: Medication[] = [
    {
      id: 1,
      name: 'Medicine 1',
      description: "Des 1"
    },
    {
      id: 2,
      name: 'Medicine 2',
      description: "Des 2"
    },
    {
      id: 3,
      name: 'Medicine 3',
      description: ""
    },
  ];

  expandSet = new Set<number>();

  constructor() { }

  ngOnInit() {
  }

  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }

}
