/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UpdateMedicineUnitComponent } from './update-medicine-unit.component';

describe('UpdateMedicineUnitComponent', () => {
  let component: UpdateMedicineUnitComponent;
  let fixture: ComponentFixture<UpdateMedicineUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMedicineUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMedicineUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should update', () => {
    expect(component).toBeTruthy();
  });
});
