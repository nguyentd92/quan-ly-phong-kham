import { Component, OnInit } from '@angular/core';
import { MedicineUnitSmall } from 'src/app/shared/models/medicine-unit-small.model';
import { MedicineUnitService } from '../medicine-unit.service';

@Component({
  selector: 'app-unit-small',
  templateUrl: './unit-small.component.html',
  styleUrls: ['./unit-small.component.scss']
})
export class UnitSmallComponent implements OnInit {

  listOfData!: MedicineUnitSmall[];

  isLoading = false;

  constructor(private medicineUnitService: MedicineUnitService) {

  }

  ngOnInit(): void {
    this.fetchList();
  }

  fetchList() {
    this.isLoading = true;
    this.medicineUnitService.getMedicalUnitSmalls().subscribe(res => {
      this.listOfData = res
      this.isLoading = false
    })
  }
}
