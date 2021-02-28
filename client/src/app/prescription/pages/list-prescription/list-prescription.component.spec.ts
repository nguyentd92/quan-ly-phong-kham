import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExaminationComponent } from './list-prescription.component';

describe('ListExaminationComponent', () => {
  let component: ListExaminationComponent;
  let fixture: ComponentFixture<ListExaminationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListExaminationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
