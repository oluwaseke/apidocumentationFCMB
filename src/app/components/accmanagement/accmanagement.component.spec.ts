import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccmanagementComponent } from './accmanagement.component';

describe('AccmanagementComponent', () => {
  let component: AccmanagementComponent;
  let fixture: ComponentFixture<AccmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccmanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
