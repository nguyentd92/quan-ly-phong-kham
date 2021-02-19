import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPrescriptionComponent } from './search-prescription.component';

describe('SearchPrescriptionComponent', () => {
  let component: SearchPrescriptionComponent;
  let fixture: ComponentFixture<SearchPrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPrescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
