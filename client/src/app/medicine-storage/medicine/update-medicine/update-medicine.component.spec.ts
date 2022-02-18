/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UpdateMedicineComponent } from './update-medicine.component';

describe('UpdateMedicineComponent', () => {
  let component: UpdateMedicineComponent;
  let fixture: ComponentFixture<UpdateMedicineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMedicineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should update', () => {
    expect(component).toBeTruthy();
  });
});
