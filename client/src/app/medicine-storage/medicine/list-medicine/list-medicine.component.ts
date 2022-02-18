import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Medicine } from 'src/app/shared/models/medicine.model';

@Component({
  selector: 'app-list-medicine',
  templateUrl: './list-medicine.component.html',
  styleUrls: ['./list-medicine.component.scss']
})
export class ListMedicineComponent implements OnInit {

  listOfData!: Medicine[];

  isLoading = false;

  constructor(private medicineService: MedicineService) {

  }

  ngOnInit(): void {
    this.fetchList();
  }

  fetchList() {
    this.isLoading = true;
    this.medicineService.getMedicines().subscribe(res => {
      this.listOfData = res
      this.isLoading = false
    })
  }

  onDelete(id: number): void {
    console.log(id);
    this.medicineService.deleteMedicine(id).subscribe(() => this.fetchList());
  }
}
