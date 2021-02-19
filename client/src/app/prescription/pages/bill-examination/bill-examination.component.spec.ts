import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillExaminationComponent } from './bill-examination.component';

describe('BillExaminationComponent', () => {
  let component: BillExaminationComponent;
  let fixture: ComponentFixture<BillExaminationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillExaminationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillExaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
