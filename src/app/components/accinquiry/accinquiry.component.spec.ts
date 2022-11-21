import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccinquiryComponent } from './accinquiry.component';

describe('AccinquiryComponent', () => {
  let component: AccinquiryComponent;
  let fixture: ComponentFixture<AccinquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccinquiryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccinquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
