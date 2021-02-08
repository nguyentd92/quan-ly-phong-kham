import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsertAccountComponent } from './upsert-account.component';

describe('CreateAccountComponent', () => {
  let component: UpsertAccountComponent;
  let fixture: ComponentFixture<UpsertAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpsertAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpsertAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
