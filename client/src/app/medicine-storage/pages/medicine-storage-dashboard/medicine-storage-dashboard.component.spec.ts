import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineStorageDashboardComponent } from './medicine-storage-dashboard.component';

describe('MedicineStorageDashboardComponent', () => {
  let component: MedicineStorageDashboardComponent;
  let fixture: ComponentFixture<MedicineStorageDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineStorageDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineStorageDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
