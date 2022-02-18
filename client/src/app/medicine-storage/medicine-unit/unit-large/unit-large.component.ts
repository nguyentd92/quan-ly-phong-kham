import { Component, OnInit } from '@angular/core';
import { MedicineUnitLarge } from 'src/app/shared/models/medicine-unit-large.model';
import { MedicineUnitService } from '../medicine-unit.service';

@Component({
  selector: 'app-unit-large',
  templateUrl: './unit-large.component.html',
  styleUrls: ['./unit-large.component.scss']
})
export class UnitLargeComponent implements OnInit {

  listOfData!: MedicineUnitLarge[];

  isLoading = false;

  constructor(private medicineUnitService: MedicineUnitService) {

  }

  ngOnInit(): void {
    this.fetchList();
  }

  fetchList() {
    this.isLoading = true;
    this.medicineUnitService.getMedicalUnitLarges().subscribe(res => {
      this.listOfData = res
      this.isLoading = false
    })
  }
}
