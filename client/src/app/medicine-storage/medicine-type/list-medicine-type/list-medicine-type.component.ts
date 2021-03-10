import { Component, OnInit } from '@angular/core';
import { Medication } from 'src/app/shared/models/medication.model';
import { MedicineTypeService } from '../medicine-type.service';

@Component({
  selector: 'app-list-medicine-type',
  templateUrl: './list-medicine-type.component.html',
  styleUrls: ['./list-medicine-type.component.scss']
})
export class ListMedicineTypeComponent implements OnInit {

  listOfData: Medication[] = [
  ];

  isLoading = false;

  expandSet = new Set<number>();

  constructor(private medicineTypeService: MedicineTypeService) { }

  ngOnInit() {
    this.fetchMedicineTypes();
  }

  protected async fetchMedicineTypes() {
    this.isLoading = true;
    this.medicineTypeService.getMedicineTypes().subscribe(res => {
      this.listOfData = res;
      this.isLoading = false;
    })
  }

  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }
}
